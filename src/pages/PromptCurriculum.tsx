
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Book, BookOpen, Check, GraduationCap, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Navbar from '@/components/Navbar';

const topics = [
  {
    id: 'basic-prompt-patterns',
    title: 'Basic Prompt Patterns',
    difficulty: 'basic',
    description: 'Learn the foundational prompt patterns to effectively communicate with AI models.',
    subtopics: [
      { 
        id: 'single-step-queries', 
        title: 'Single-Step Queries',
        description: 'Create effective prompts for definitions, summaries, and comparisons.'
      },
      { 
        id: 'structuring-formatting', 
        title: 'Structuring & Formatting Outputs',
        description: 'Control how AI generates content with formatting instructions.'
      }
    ],
    progress: 0,
    icon: Book
  },
  {
    id: 'intermediate-prompt-patterns',
    title: 'Intermediate Prompt Patterns',
    difficulty: 'basic',
    description: 'Explore more complex prompt techniques to enhance AI-generated content.',
    subtopics: [
      { 
        id: 'customization-personalization', 
        title: 'Customization & Personalization',
        description: 'Learn role-based prompting and tone/style control techniques.'
      },
      { 
        id: 'creative-structured-content', 
        title: 'Creative & Structured Content Generation',
        description: 'Create mindmaps, flashcards, and structured content with AI.'
      },
      { 
        id: 'productivity-workflow', 
        title: 'Productivity & Workflow Assistance',
        description: 'Use AI for project planning, meeting agendas, and email writing.'
      }
    ],
    progress: 0,
    icon: BookOpen
  },
  {
    id: 'advanced-prompt-patterns',
    title: 'Advanced Prompt Patterns',
    difficulty: 'advanced',
    description: 'Master sophisticated prompt engineering techniques for complex AI tasks.',
    subtopics: [
      { 
        id: 'multi-step-analytical', 
        title: 'Multi-Step & Analytical Queries',
        description: 'Implement recursive prompting and complex analytical tasks.'
      },
      { 
        id: 'complex-content-problem-solving', 
        title: 'Complex Content & Problem-Solving',
        description: 'Learn techniques for code debugging and research paper analysis.'
      },
      { 
        id: 'dynamic-context-aware', 
        title: 'Dynamic & Context-Aware Prompts',
        description: 'Create persona-based simulations and self-correcting prompt chains.'
      }
    ],
    progress: 0,
    icon: Star
  }
];

const PromptCurriculum = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  // Filter topics based on the active tab
  const filteredTopics = activeTab === 'all' 
    ? topics 
    : topics.filter(topic => topic.difficulty === activeTab);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20 pb-16">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
              Prompt Engineering <span className="gradient-text">Curriculum</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.1s'}}>
              Master the art of crafting effective prompts with our structured curriculum on prompt engineering patterns.
            </p>
          </div>
          
          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <Button 
              variant={activeTab === 'all' ? 'default' : 'outline'} 
              onClick={() => setActiveTab('all')}
              className={activeTab === 'all' ? 'bg-weteach-blue-500 hover:bg-weteach-blue-600' : 'border-weteach-blue-200 text-weteach-blue-700'}
            >
              All Levels
            </Button>
            <Button 
              variant={activeTab === 'basic' ? 'default' : 'outline'} 
              onClick={() => setActiveTab('basic')}
              className={activeTab === 'basic' ? 'bg-blue-500 hover:bg-blue-600' : 'border-blue-200 text-blue-700'}
            >
              Basic
            </Button>
            <Button 
              variant={activeTab === 'advanced' ? 'default' : 'outline'} 
              onClick={() => setActiveTab('advanced')}
              className={activeTab === 'advanced' ? 'bg-purple-500 hover:bg-purple-600' : 'border-purple-200 text-purple-700'}
            >
              Advanced
            </Button>
          </div>
          
          {/* Topics grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTopics.map((topic, index) => (
              <div 
                key={topic.id} 
                className="bg-white shadow-md rounded-xl overflow-hidden border border-weteach-blue-100 animate-fade-in" 
                style={{animationDelay: `${0.1 + index * 0.1}s`}}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-weteach-blue-100 p-2 rounded-lg">
                      <topic.icon className="h-6 w-6 text-weteach-blue-500" />
                    </div>
                    <span className={`difficulty-badge ${
                      topic.difficulty === 'basic' ? 'difficulty-badge-basic' : 'difficulty-badge-advanced'
                    }`}>
                      {topic.difficulty.charAt(0).toUpperCase() + topic.difficulty.slice(1)}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{topic.title}</h3>
                  <p className="text-muted-foreground mb-4">{topic.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">Progress</span>
                      <span className="text-sm font-medium">{topic.progress}%</span>
                    </div>
                    <Progress value={topic.progress} className="h-2" />
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    {topic.subtopics.map((subtopic) => (
                      <div key={subtopic.id} className="flex items-start">
                        <div className="mr-2 mt-1 h-5 w-5 flex-shrink-0 rounded-full border border-weteach-blue-200 flex items-center justify-center">
                          {topic.progress > 0 ? <Check className="h-3 w-3 text-weteach-blue-500" /> : null}
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">{subtopic.title}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Link to={`/prompt-curriculum/${topic.id}`}>
                    <Button className="w-full bg-weteach-blue-500 hover:bg-weteach-blue-600">
                      {topic.progress > 0 ? 'Continue Learning' : 'Start Learning'}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-weteach-blue-50 py-10 border-t border-weteach-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center mb-4">
              <GraduationCap className="h-6 w-6 text-weteach-blue-500" />
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

export default PromptCurriculum;
