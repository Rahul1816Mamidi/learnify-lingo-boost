
import { ArrowRight, BookOpen, Brain, Code } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Master <span className="gradient-text">AI</span> and <span className="gradient-text">Prompt Engineering</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            A comprehensive curriculum to understand Large Language Models and become proficient in prompt engineering techniques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/llm-curriculum" 
              className="inline-flex items-center px-6 py-3 font-medium text-white bg-weteach-purple-500 rounded-full shadow-md hover:bg-weteach-purple-600 transition-colors"
            >
              LLM Curriculum
              <Brain className="ml-2 h-4 w-4" />
            </Link>
            <Link 
              to="/prompt-curriculum" 
              className="inline-flex items-center px-6 py-3 font-medium text-gray-700 bg-gray-100 border border-gray-200 rounded-full shadow-sm hover:bg-gray-200 transition-colors"
            >
              Prompt Engineering
              <BookOpen className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-weteach-purple-50 to-weteach-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text">What You'll Learn</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* LLM Track */}
            <div className="topic-card">
              <div className="flex items-center mb-4">
                <Brain className="h-8 w-8 text-weteach-purple-500 mr-3" />
                <h3 className="text-xl font-semibold">LLM Foundations</h3>
              </div>
              <p className="text-gray-600 mb-4">Understand how Large Language Models work, their architecture, and training methods.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-weteach-purple-500 mr-2">•</span> 
                  <span>Transformer architecture basics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-weteach-purple-500 mr-2">•</span> 
                  <span>Training & fine-tuning processes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-weteach-purple-500 mr-2">•</span> 
                  <span>GPT model evolution & capabilities</span>
                </li>
              </ul>
              <Link 
                to="/llm-curriculum" 
                className="text-weteach-purple-600 font-medium hover:text-weteach-purple-800 inline-flex items-center"
              >
                Explore LLM Track
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            {/* Prompt Engineering Track */}
            <div className="topic-card">
              <div className="flex items-center mb-4">
                <BookOpen className="h-8 w-8 text-weteach-blue-500 mr-3" />
                <h3 className="text-xl font-semibold">Prompt Engineering</h3>
              </div>
              <p className="text-gray-600 mb-4">Master the art of crafting effective prompts to get the best results from AI models.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-weteach-blue-500 mr-2">•</span> 
                  <span>Zero-shot & few-shot prompting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-weteach-blue-500 mr-2">•</span> 
                  <span>Chain-of-thought techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-weteach-blue-500 mr-2">•</span> 
                  <span>Advanced prompt templates</span>
                </li>
              </ul>
              <Link 
                to="/prompt-curriculum" 
                className="text-weteach-blue-600 font-medium hover:text-weteach-blue-800 inline-flex items-center"
              >
                Explore Prompt Track
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            {/* Practical Applications */}
            <div className="topic-card">
              <div className="flex items-center mb-4">
                <Code className="h-8 w-8 text-weteach-purple-400 mr-3" />
                <h3 className="text-xl font-semibold">Practical Applications</h3>
              </div>
              <p className="text-gray-600 mb-4">Apply your knowledge with hands-on exercises and real-world examples.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-weteach-purple-400 mr-2">•</span> 
                  <span>API integrations with GPT models</span>
                </li>
                <li className="flex items-start">
                  <span className="text-weteach-purple-400 mr-2">•</span> 
                  <span>Building AI-powered applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-weteach-purple-400 mr-2">•</span> 
                  <span>Fine-tuning for specialized tasks</span>
                </li>
              </ul>
              <Link 
                to="/llm-curriculum" 
                className="text-weteach-purple-500 font-medium hover:text-weteach-purple-700 inline-flex items-center"
              >
                Start Learning
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Chat Mode Feature */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="bg-gradient-to-r from-weteach-blue-50 to-weteach-purple-50 rounded-2xl p-8 shadow-sm border border-weteach-purple-100">
            <h2 className="text-3xl font-bold mb-4 gradient-text">Experimental Chat Mode</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Need quick assistance? Try our experimental chat mode to troubleshoot issues and get real-time guidance.
            </p>
            <button 
              className="inline-flex items-center px-6 py-3 font-medium text-white bg-weteach-blue-500 rounded-full shadow-md hover:bg-weteach-blue-600 transition-colors"
              onClick={() => window.alert("Chat mode is coming soon!")}
            >
              Launch Chat Mode
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="max-w-7xl mx-auto text-center text-gray-500">
          <p>© 2023 WE-TEACH. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
