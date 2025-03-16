
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Book, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-weteach-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <GraduationCap className="h-8 w-8 text-weteach-purple-500" />
              <span className="ml-2 text-xl font-bold gradient-text">WE-TEACH</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/llm-curriculum" className="text-weteach-purple-900 hover:text-weteach-purple-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              LLM Curriculum
            </Link>
            <Link to="/prompt-curriculum" className="text-weteach-purple-900 hover:text-weteach-purple-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Prompt Engineering
            </Link>
            <Button variant="outline" className="ml-4 border-weteach-purple-300 text-weteach-purple-500 hover:bg-weteach-purple-50">
              <Book className="mr-2 h-4 w-4" />
              Resources
            </Button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-weteach-purple-500 hover:text-weteach-purple-700 hover:bg-weteach-purple-50 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg animate-fade-in">
            <Link 
              to="/llm-curriculum" 
              className="block px-3 py-2 rounded-md text-base font-medium text-weteach-purple-900 hover:text-weteach-purple-500 hover:bg-weteach-purple-50"
              onClick={() => setIsMenuOpen(false)}
            >
              LLM Curriculum
            </Link>
            <Link 
              to="/prompt-curriculum" 
              className="block px-3 py-2 rounded-md text-base font-medium text-weteach-purple-900 hover:text-weteach-purple-500 hover:bg-weteach-purple-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Prompt Engineering
            </Link>
            <Link 
              to="#" 
              className="block px-3 py-2 rounded-md text-base font-medium text-weteach-purple-900 hover:text-weteach-purple-500 hover:bg-weteach-purple-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
