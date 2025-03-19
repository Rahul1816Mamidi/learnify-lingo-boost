
import { ArrowRight, Database, Lightbulb, Paintbrush, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const WhatsNext = () => {
  const nextSteps = [
    {
      title: "Refine & Customize",
      description: "Tweak the design, animations, and layouts via prompts or visual edits.",
      icon: <Paintbrush className="h-6 w-6 text-weteach-purple-400" />,
    },
    {
      title: "Master Prompting",
      description: "Use clear, detailed, and iterative prompts for better outcomes.",
      icon: <Sparkles className="h-6 w-6 text-weteach-blue-500" />,
    },
    {
      title: "Expand with Backend",
      description: "Connect Supabase to add login, store data or advanced AI features for user accounts, progress tracking, and project submissions.",
      icon: <Database className="h-6 w-6 text-weteach-purple-500" />,
    },
    {
      title: "Debug with Ease",
      description: "Activate our experimental \"chat mode\" to troubleshoot issues quickly.",
      icon: <Lightbulb className="h-6 w-6 text-weteach-blue-400" />,
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-weteach-purple-50 to-weteach-blue-50 rounded-2xl">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center gradient-text">What's Next?</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Ready to take your learning journey further? Here are some next steps you can take to enhance your experience.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {nextSteps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm border border-weteach-purple-100 hover:shadow-md transition-all"
            >
              <div className="flex items-start space-x-4">
                <div className="mt-1 bg-weteach-purple-50 p-2 rounded-lg">
                  {step.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-weteach-purple-700 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            to="/llm-curriculum" 
            className="inline-flex items-center px-6 py-3 font-medium text-white bg-weteach-purple-500 rounded-full shadow-md hover:bg-weteach-purple-600 transition-colors"
          >
            Start Learning 
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhatsNext;
