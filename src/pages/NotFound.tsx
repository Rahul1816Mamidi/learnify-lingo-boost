
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-weteach-purple-50 to-weteach-blue-50">
      <div className="text-center max-w-md px-6 animate-fade-in">
        <h1 className="text-6xl font-bold mb-6 gradient-text">404</h1>
        <p className="text-xl text-gray-600 mb-8">
          Oops! The page you are looking for doesn't exist or has been moved.
        </p>
        <Button 
          className="bg-weteach-purple-500 hover:bg-weteach-purple-600"
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
