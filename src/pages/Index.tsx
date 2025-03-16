
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Book, GraduationCap, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-20 pb-16 md:pt-32 md:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-in">
                Learn <span className="gradient-text">AI</span> the Right Way
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-in" style={{animationDelay: '0.1s'}}>
                Master Large Language Models and Prompt Engineering with our interactive, AI-powered learning platform.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
                <Button 
                  className="bg-weteach-purple-500 hover:bg-weteach-purple-600 text-white px-8 py-6 rounded-xl text-lg"
                  onClick={() => navigate('/llm-curriculum')}
                >
                  <Book className="mr-2 h-5 w-5" />
                  LLM Curriculum
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  className="bg-weteach-blue-500 hover:bg-weteach-blue-600 text-white px-8 py-6 rounded-xl text-lg"
                  onClick={() => navigate('/prompt-curriculum')}
                >
                  <GraduationCap className="mr-2 h-5 w-5" />
                  Prompt Engineering
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 gradient-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">What You'll Learn</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="topic-card animate-fade-in" style={{animationDelay: '0.1s'}}>
                <div className="h-12 w-12 bg-weteach-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Book className="h-6 w-6 text-weteach-purple-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI & LLM Fundamentals</h3>
                <p className="text-muted-foreground">Learn the core concepts behind Large Language Models, from transformer architecture to token prediction.</p>
              </div>
              
              <div className="topic-card animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="h-12 w-12 bg-weteach-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-weteach-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Prompt Engineering</h3>
                <p className="text-muted-foreground">Master the art of crafting effective prompts to get the best results from AI models.</p>
              </div>
              
              <div className="topic-card animate-fade-in" style={{animationDelay: '0.3s'}}>
                <div className="h-12 w-12 bg-weteach-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-weteach-purple-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Practical Skills</h3>
                <p className="text-muted-foreground">Apply your knowledge with hands-on projects and quizzes to reinforce learning.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Curricula Preview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="border border-weteach-purple-100 rounded-xl p-8 animate-fade-in">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <Book className="mr-2 h-6 w-6 text-weteach-purple-500" />
                  LLM Curriculum
                </h3>
                
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <span className="difficulty-badge difficulty-badge-easy mr-2">Easy</span>
                    <h4 className="font-medium">Basics of GPT & LLMs</h4>
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="difficulty-badge difficulty-badge-medium mr-2">Medium</span>
                    <h4 className="font-medium">Deep Dive into GPT Models</h4>
                  </div>
                  <div className="flex items-center">
                    <span className="difficulty-badge difficulty-badge-hard mr-2">Hard</span>
                    <h4 className="font-medium">Working with GPT Models</h4>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-weteach-purple-500 hover:bg-weteach-purple-600"
                  onClick={() => navigate('/llm-curriculum')}
                >
                  Start Learning
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="border border-weteach-blue-100 rounded-xl p-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <GraduationCap className="mr-2 h-6 w-6 text-weteach-blue-500" />
                  Prompt Engineering
                </h3>
                
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <span className="difficulty-badge difficulty-badge-basic mr-2">Basic</span>
                    <h4 className="font-medium">Basic Prompt Patterns</h4>
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="difficulty-badge difficulty-badge-basic mr-2">Basic</span>
                    <h4 className="font-medium">Intermediate Prompt Patterns</h4>
                  </div>
                  <div className="flex items-center">
                    <span className="difficulty-badge difficulty-badge-advanced mr-2">Advanced</span>
                    <h4 className="font-medium">Advanced Prompt Patterns</h4>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-weteach-blue-500 hover:bg-weteach-blue-600"
                  onClick={() => navigate('/prompt-curriculum')}
                >
                  Start Learning
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-weteach-purple-50 py-10 border-t border-weteach-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center mb-4">
              <GraduationCap className="h-8 w-8 text-weteach-purple-500" />
              <span className="ml-2 text-xl font-bold gradient-text">WE-TEACH</span>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Learn AI the right way. Master Large Language Models and Prompt Engineering.
            </p>
            <p className="mt-6 text-sm text-muted-foreground text-center">
              © 2023 WE-TEACH. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
