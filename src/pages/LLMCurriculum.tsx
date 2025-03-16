
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Book, BookOpen, Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Navbar from '@/components/Navbar';

const topics = [
  {
    id: 'basics',
    title: 'Basics of GPT & LLMs',
    difficulty: 'easy',
    description: 'Learn the fundamental concepts behind large language models and understand how they work.',
    subtopics: [
      { 
        id: 'intro-to-generative-ai', 
        title: 'Introduction to Generative AI',
        description: 'Understand what generative AI is and how it differs from traditional AI approaches.'
      },
      { 
        id: 'understanding-llms', 
        title: 'Understanding Large Language Models',
        description: 'Explore the core concepts and principles that make LLMs work.'
      },
      { 
        id: 'transformers-attention', 
        title: 'Basics of Transformers & Attention Mechanism',
        description: 'Learn about the architecture that powers modern language models.'
      }
    ],
    progress: 0,
    icon: Book
  },
  {
    id: 'deep-dive',
    title: 'Deep Dive into GPT Models',
    difficulty: 'medium',
    description: 'Explore the architecture, training methodologies, and applications of GPT models.',
    subtopics: [
      { 
        id: 'gpt-architecture', 
        title: 'GPT Architecture',
        description: 'Understand the components and structure of GPT models.'
      },
      { 
        id: 'training-fine-tuning', 
        title: 'Training & Fine-Tuning GPT',
        description: 'Learn how GPT models are trained and how to fine-tune them for specific tasks.'
      },
      { 
        id: 'prompt-engineering-basics', 
        title: 'Prompt Engineering Basics',
        description: 'Get started with crafting effective prompts for GPT models.'
      }
    ],
    progress: 0,
    icon: BookOpen
  },
  {
    id: 'working-with-gpt',
    title: 'Working with GPT Models',
    difficulty: 'hard',
    description: 'Apply your knowledge by working with GPT models via APIs and advanced techniques.',
    subtopics: [
      { 
        id: 'gpt-apis', 
        title: 'Using GPT via APIs',
        description: 'Learn how to interact with GPT models programmatically using APIs.'
      },
      { 
        id: 'advanced-prompt-engineering', 
        title: 'Advanced Prompt Engineering',
        description: 'Master advanced techniques for crafting prompts that yield precise results.'
      },
      { 
        id: 'fine-tuning-gpt', 
        title: 'Fine-Tuning GPT Models',
        description: 'Explore methods for adapting GPT models to specific domains and tasks.'
      }
    ],
    progress: 0,
    icon: Star
  }
];

const LLMCurriculum = () => {
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
              LLM & GPT <span className="gradient-text">Curriculum</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.1s'}}>
              Explore our structured curriculum to learn about Large Language Models, 
              from the basics to advanced applications.
            </p>
          </div>
          
          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <Button 
              variant={activeTab === 'all' ? 'default' : 'outline'} 
              onClick={() => setActiveTab('all')}
              className={activeTab === 'all' ? 'bg-weteach-purple-500 hover:bg-weteach-purple-600' : 'border-weteach-purple-200 text-weteach-purple-700'}
            >
              All Levels
            </Button>
            <Button 
              variant={activeTab === 'easy' ? 'default' : 'outline'} 
              onClick={() => setActiveTab('easy')}
              className={activeTab === 'easy' ? 'bg-green-500 hover:bg-green-600' : 'border-green-200 text-green-700'}
            >
              Easy
            </Button>
            <Button 
              variant={activeTab === 'medium' ? 'default' : 'outline'} 
              onClick={() => setActiveTab('medium')}
              className={activeTab === 'medium' ? 'bg-yellow-500 hover:bg-yellow-600' : 'border-yellow-200 text-yellow-700'}
            >
              Medium
            </Button>
            <Button 
              variant={activeTab === 'hard' ? 'default' : 'outline'} 
              onClick={() => setActiveTab('hard')}
              className={activeTab === 'hard' ? 'bg-red-500 hover:bg-red-600' : 'border-red-200 text-red-700'}
            >
              Hard
            </Button>
          </div>
          
          {/* Topics grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTopics.map((topic, index) => (
              <div 
                key={topic.id} 
                className="bg-white shadow-md rounded-xl overflow-hidden border border-weteach-purple-100 animate-fade-in" 
                style={{animationDelay: `${0.1 + index * 0.1}s`}}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-weteach-purple-100 p-2 rounded-lg">
                      <topic.icon className="h-6 w-6 text-weteach-purple-500" />
                    </div>
                    <span className={`difficulty-badge ${
                      topic.difficulty === 'easy' ? 'difficulty-badge-easy' :
                      topic.difficulty === 'medium' ? 'difficulty-badge-medium' :
                      'difficulty-badge-hard'
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
                        <div className="mr-2 mt-1 h-5 w-5 flex-shrink-0 rounded-full border border-weteach-purple-200 flex items-center justify-center">
                          {topic.progress > 0 ? <Check className="h-3 w-3 text-weteach-purple-500" /> : null}
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">{subtopic.title}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Link to={`/llm-curriculum/${topic.id}`}>
                    <Button className="w-full bg-weteach-purple-500 hover:bg-weteach-purple-600">
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
      <footer className="bg-weteach-purple-50 py-10 border-t border-weteach-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center mb-4">
              <Book className="h-6 w-6 text-weteach-purple-500" />
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

export default LLMCurriculum;
