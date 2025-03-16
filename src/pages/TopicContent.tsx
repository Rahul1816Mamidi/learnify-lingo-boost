import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Book, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { toast } from 'sonner';
import Navbar from '@/components/Navbar';
import { getTopicContent, ContentSection, TopicContent as TopicContentType, updateTopicProgress } from '@/services/contentService';

interface TopicContentProps {
  curriculum: 'llm' | 'prompt';
}

const TopicContent = ({ curriculum }: TopicContentProps) => {
  const { topicId } = useParams<{ topicId: string }>();
  const navigate = useNavigate();
  const [content, setContent] = useState<TopicContentType | null>(null);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number | null>>({});
  const [showAnswer, setShowAnswer] = useState<Record<string, boolean>>({});
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (topicId) {
      const topicContent = getTopicContent(curriculum, topicId);
      
      if (topicContent) {
        setContent(topicContent);
        // Calculate initial progress based on completed quiz sections
        const quizSections = topicContent.sections.filter(s => s.type === 'quiz');
        const quizIds = quizSections.map(s => s.id);
        const answeredQuizzes = Object.keys(selectedAnswers).filter(id => 
          quizIds.includes(id) && selectedAnswers[id] !== null
        );
        
        const initialProgress = quizSections.length > 0 
          ? Math.round((answeredQuizzes.length / quizSections.length) * 100) 
          : 0;
        
        setProgress(initialProgress);
      }
      setLoading(false);
    }
  }, [curriculum, topicId, selectedAnswers]);

  const renderSection = (section: ContentSection) => {
    switch (section.type) {
      case 'text':
        return <div className="prose max-w-none">{section.content}</div>;
      
      case 'example':
        return (
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 my-4">
            <h4 className="text-sm font-medium text-slate-500 mb-2">Example</h4>
            <pre className="whitespace-pre-wrap font-mono text-sm bg-white p-3 rounded border border-slate-200">
              {section.content}
            </pre>
          </div>
        );
      
      case 'code':
        return (
          <div className="bg-slate-800 rounded-lg p-4 my-4">
            <pre className="whitespace-pre-wrap font-mono text-sm text-slate-100 overflow-auto">
              {section.content}
            </pre>
          </div>
        );
      
      case 'table':
        return (
          <div className="my-4">
            <p className="mb-3">{section.content}</p>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-slate-200 rounded-lg">
                <thead className="bg-slate-50">
                  <tr>
                    {section.tableData?.headers.map((header, index) => (
                      <th key={index} className="px-4 py-3 text-left text-sm font-medium text-slate-700 border-b">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.tableData?.rows.map((row, rowIndex) => (
                    <tr 
                      key={rowIndex} 
                      className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-slate-50'}
                    >
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="px-4 py-3 text-sm text-slate-700 border-b border-slate-200">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      
      case 'quiz':
        return (
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 my-6">
            <h4 className="text-lg font-medium mb-4">{section.title}</h4>
            <p className="mb-4">{section.content}</p>
            
            {section.quizOptions?.map((option, index) => (
              <div 
                key={index}
                className={`flex items-start p-3 mb-2 border rounded-lg cursor-pointer transition-colors ${
                  selectedAnswers[section.id] === index 
                    ? 'bg-weteach-purple-50 border-weteach-purple-300' 
                    : 'bg-white border-slate-200 hover:bg-slate-50'
                }`}
                onClick={() => handleAnswer(section.id, index)}
              >
                <div className={`flex items-center justify-center h-5 w-5 mr-3 rounded-full border ${
                  selectedAnswers[section.id] === index 
                    ? 'border-weteach-purple-500 bg-weteach-purple-500 text-white' 
                    : 'border-slate-300'
                }`}>
                  {selectedAnswers[section.id] === index && <div className="h-2 w-2 bg-white rounded-full"></div>}
                </div>
                <span>{option}</span>
              </div>
            ))}
            
            <div className="mt-4 flex justify-between items-center">
              <Button 
                onClick={() => checkAnswer(section.id)}
                disabled={selectedAnswers[section.id] === null || selectedAnswers[section.id] === undefined}
                className="bg-weteach-purple-500 hover:bg-weteach-purple-600"
              >
                Check Answer
              </Button>
              
              {showAnswer[section.id] && section.quizAnswer !== undefined && (
                <div className="flex items-center">
                  {selectedAnswers[section.id] === section.quizAnswer ? (
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-500 mr-2" />
                  )}
                  <span className={selectedAnswers[section.id] === section.quizAnswer ? "text-green-600" : "text-red-600"}>
                    {selectedAnswers[section.id] === section.quizAnswer ? "Correct!" : "Incorrect"}
                  </span>
                </div>
              )}
            </div>
            
            {showAnswer[section.id] && section.quizExplanation && (
              <div className="mt-4 p-4 bg-slate-100 rounded-lg">
                <h5 className="font-medium mb-1">Explanation:</h5>
                <p>{section.quizExplanation}</p>
              </div>
            )}
          </div>
        );
      
      default:
        return <div>{section.content}</div>;
    }
  };

  const handleAnswer = (sectionId: string, answerIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [sectionId]: answerIndex
    }));
  };

  const checkAnswer = (sectionId: string) => {
    const section = content?.sections.find(s => s.id === sectionId);
    
    if (section && section.quizAnswer !== undefined && selectedAnswers[sectionId] !== null) {
      const isCorrect = selectedAnswers[sectionId] === section.quizAnswer;
      
      if (isCorrect) {
        toast.success('Correct answer!');
      } else {
        toast.error('Not quite right. Try again or check the explanation.');
      }
      
      setShowAnswer(prev => ({
        ...prev,
        [sectionId]: true
      }));
      
      // Recalculate progress
      updateProgress();
    }
  };

  const updateProgress = () => {
    if (!content) return;
    
    const quizSections = content.sections.filter(s => s.type === 'quiz');
    const quizIds = quizSections.map(s => s.id);
    const correctAnswers = Object.keys(selectedAnswers).filter(id => {
      const section = content.sections.find(s => s.id === id);
      return quizIds.includes(id) && section?.quizAnswer === selectedAnswers[id];
    });
    
    const newProgress = quizSections.length > 0 
      ? Math.round((correctAnswers.length / quizSections.length) * 100) 
      : 100;
    
    setProgress(newProgress);
    
    if (topicId) {
      updateTopicProgress(curriculum, topicId, newProgress);
    }
  };

  const navigateToNextSection = () => {
    if (content && currentSectionIndex < content.sections.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navigateToPrevSection = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex(currentSectionIndex - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-weteach-purple-500 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center max-w-md px-6">
            <h1 className="text-2xl font-bold mb-4">Topic Not Found</h1>
            <p className="mb-6">Sorry, the requested topic could not be found.</p>
            <Button 
              onClick={() => navigate(`/${curriculum}-curriculum`)}
              className={curriculum === 'llm' ? 'bg-weteach-purple-500' : 'bg-weteach-blue-500'}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Curriculum
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const currentSection = content.sections[currentSectionIndex];
  const baseCurriculumRoute = curriculum === 'llm' ? '/llm-curriculum' : '/prompt-curriculum';
  const primaryColor = curriculum === 'llm' ? 'weteach-purple' : 'weteach-blue';

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center text-sm text-muted-foreground">
            <Link to={baseCurriculumRoute} className="hover:text-weteach-purple-500">
              {curriculum === 'llm' ? 'LLM Curriculum' : 'Prompt Engineering'}
            </Link>
            <span className="mx-2">/</span>
            <span className="font-medium text-foreground">{content.title}</span>
          </div>
          
          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-medium">Progress</h3>
              <span className="text-sm font-medium">{progress}%</span>
            </div>
            <Progress value={progress} className={`h-2 bg-${primaryColor}-100`} />
          </div>
          
          {/* Content header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4 gradient-text">{content.title}</h1>
            <p className="text-lg text-muted-foreground">{content.introduction}</p>
          </div>
          
          {/* Section navigation tabs */}
          <div className="mb-6 flex overflow-x-auto pb-2 scrollbar-hide space-x-2">
            {content.sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => setCurrentSectionIndex(index)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                  currentSectionIndex === index
                    ? `bg-${primaryColor}-500 text-white`
                    : `bg-${primaryColor}-50 text-${primaryColor}-700 hover:bg-${primaryColor}-100`
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
          
          {/* Current section content */}
          <div className="bg-white shadow-sm rounded-xl p-6 mb-8 animate-fade-in">
            <h2 className="text-2xl font-bold mb-4">{currentSection.title}</h2>
            {renderSection(currentSection)}
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-between mb-8">
            <Button
              variant="outline"
              onClick={navigateToPrevSection}
              disabled={currentSectionIndex === 0}
              className="border-weteach-purple-200"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Previous
            </Button>
            
            {currentSectionIndex < content.sections.length - 1 ? (
              <Button
                onClick={navigateToNextSection}
                className={`bg-${primaryColor}-500 hover:bg-${primaryColor}-600`}
              >
                Next <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button
                onClick={() => navigate(baseCurriculumRoute)}
                className={`bg-${primaryColor}-500 hover:bg-${primaryColor}-600`}
              >
                Complete <CheckCircle className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
          
          {/* Summary (shown on last section) */}
          {currentSectionIndex === content.sections.length - 1 && (
            <div className="bg-gradient-to-r from-weteach-purple-50 to-weteach-blue-50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold mb-2">Module Summary</h3>
              <p>{content.summary}</p>
            </div>
          )}
        </div>
      </main>
      
      {/* Footer */}
      <footer className={`bg-${primaryColor}-50 py-8 border-t border-${primaryColor}-100`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center mb-4">
              <Book className={`h-6 w-6 text-${primaryColor}-500`} />
              <span className="ml-2 text-xl font-bold gradient-text">WE-TEACH</span>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              © 2023 WE-TEACH. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TopicContent;
