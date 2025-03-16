
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LLMCurriculum from "./pages/LLMCurriculum";
import PromptCurriculum from "./pages/PromptCurriculum";
import TopicContent from "./pages/TopicContent";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/llm-curriculum" element={<LLMCurriculum />} />
          <Route path="/prompt-curriculum" element={<PromptCurriculum />} />
          <Route path="/llm-curriculum/:topicId" element={<TopicContent curriculum="llm" />} />
          <Route path="/prompt-curriculum/:topicId" element={<TopicContent curriculum="prompt" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
