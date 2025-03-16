
// Types for content data
export interface ContentSection {
  id: string;
  title: string;
  content: string;
  type: 'text' | 'example' | 'code' | 'image' | 'quiz';
  quizOptions?: string[];
  quizAnswer?: number;
  quizExplanation?: string;
}

export interface TopicContent {
  id: string;
  title: string;
  introduction: string;
  sections: ContentSection[];
  summary: string;
}

// Mock AI-generated content (in a real app, this would come from an API)
const llmContent: Record<string, TopicContent> = {
  'basics': {
    id: 'basics',
    title: 'Basics of GPT & LLMs',
    introduction: 'Large Language Models (LLMs) have revolutionized artificial intelligence and natural language processing. In this module, you\'ll learn the fundamental concepts that make these powerful models work.',
    sections: [
      {
        id: 'intro-section',
        title: 'Introduction to Generative AI',
        type: 'text',
        content: 'Generative AI refers to artificial intelligence systems capable of generating new content, including text, images, audio, and code. Unlike traditional AI that focuses on classification or prediction, generative AI creates novel outputs based on patterns learned during training. LLMs like GPT (Generative Pre-trained Transformer) are a subset of generative AI specifically designed for text generation.'
      },
      {
        id: 'llm-fundamentals',
        title: 'LLM Fundamentals',
        type: 'text',
        content: 'LLMs work by predicting the most likely next word or token in a sequence based on previous context. They\'re trained on vast corpora of text from diverse sources, allowing them to learn grammar, facts, reasoning patterns, and even some forms of common sense. The larger the model (measured in parameters), the more nuanced its understanding capabilities become.'
      },
      {
        id: 'example-1',
        title: 'Example: Text Completion',
        type: 'example',
        content: 'Input: "The capital of France is"\nOutput: "Paris."\n\nThis simple example demonstrates how LLMs predict the most probable completion based on learned knowledge.'
      },
      {
        id: 'quiz-1',
        title: 'Quick Check',
        type: 'quiz',
        content: 'What distinguishes generative AI from traditional AI systems?',
        quizOptions: [
          'Generative AI only works with text data',
          'Generative AI creates new content rather than just classifying existing data',
          'Generative AI requires less computing power',
          'Generative AI only works in supervised learning environments'
        ],
        quizAnswer: 1,
        quizExplanation: 'Generative AI's defining characteristic is its ability to create new content (text, images, audio, etc.) rather than simply classifying or predicting based on existing data.'
      }
    ],
    summary: 'In this module, you've learned the basic concepts behind Large Language Models and generative AI. You now understand how these models learn from vast amounts of text data to predict and generate human-like text based on context and patterns.'
  },
  'deep-dive': {
    id: 'deep-dive',
    title: 'Deep Dive into GPT Models',
    introduction: 'GPT (Generative Pre-trained Transformer) models represent some of the most advanced LLMs available today. This module explores their architecture, training methodology, and practical applications.',
    sections: [
      {
        id: 'gpt-architecture',
        title: 'GPT Architecture',
        type: 'text',
        content: 'At the heart of GPT is the Transformer architecture, specifically the decoder portion. This architecture uses a mechanism called "attention" that allows the model to weigh the importance of different words in the input when generating each word of the output. GPT models consist of multiple layers of these attention mechanisms stacked together, allowing for increasingly complex pattern recognition.'
      },
      {
        id: 'training-methodology',
        title: 'Training & Fine-Tuning',
        type: 'text',
        content: 'GPT models are trained in two main phases: pre-training and fine-tuning. During pre-training, the model learns general language understanding from a vast corpus of text. Fine-tuning then adapts this general knowledge to specific tasks using smaller, more specialized datasets. This approach allows for efficient transfer learning across various NLP tasks.'
      },
      {
        id: 'example-2',
        title: 'Example: Few-Shot Learning',
        type: 'example',
        content: 'Input: "Translate English to French:\nSea = Mer\nBook = Livre\nFriend = "\nOutput: "Ami"\n\nThis demonstrates how GPT can quickly adapt to a specific task with just a few examples, without requiring additional training.'
      },
      {
        id: 'quiz-2',
        title: 'Knowledge Check',
        type: 'quiz',
        content: 'What mechanism allows GPT models to determine which words in the input are most relevant for generating each output word?',
        quizOptions: [
          'Recurrent neural networks',
          'Convolutional filters',
          'Attention mechanisms',
          'Reinforcement learning'
        ],
        quizAnswer: 2,
        quizExplanation: 'Attention mechanisms are the key innovation in Transformer models like GPT. They allow the model to dynamically focus on different parts of the input when generating each part of the output.'
      }
    ],
    summary: 'This module has provided a deeper understanding of GPT architecture, training methodology, and capabilities. You now have insights into how these models process and generate text using attention mechanisms, and how they can be adapted for specific tasks through fine-tuning.'
  },
  'working-with-gpt': {
    id: 'working-with-gpt',
    title: 'Working with GPT Models',
    introduction: 'This advanced module covers practical aspects of working with GPT models, including API usage, prompt engineering techniques, and customization through fine-tuning.',
    sections: [
      {
        id: 'using-apis',
        title: 'Using GPT via APIs',
        type: 'text',
        content: 'Most users interact with GPT models through APIs provided by companies like OpenAI. These APIs handle the complex infrastructure requirements of running large models, providing simple interfaces for sending prompts and receiving completions. API calls typically include parameters like temperature (controlling randomness), max tokens (limiting response length), and stop sequences (defining where the model should stop generating).'
      },
      {
        id: 'code-example',
        title: 'Code Example: Basic API Call',
        type: 'code',
        content: `// Example OpenAI API call using JavaScript
const response = await openai.createCompletion({
  model: "gpt-3.5-turbo",
  prompt: "Explain quantum computing in simple terms",
  temperature: 0.7,
  max_tokens: 150
});

console.log(response.data.choices[0].text);`
      },
      {
        id: 'prompt-engineering',
        title: 'Advanced Prompt Engineering',
        type: 'text',
        content: 'Prompt engineering is the art of crafting inputs to get the best outputs from LLMs. Advanced techniques include: (1) Chain-of-thought prompting to guide the model through complex reasoning steps, (2) Few-shot learning with carefully selected examples, (3) System prompts to define the model\'s persona or behavior, and (4) Output formatting instructions to control response structure.'
      },
      {
        id: 'quiz-3',
        title: 'Application Challenge',
        type: 'quiz',
        content: 'Which parameter would you adjust to make a GPT model\'s outputs more diverse and creative versus more deterministic and focused?',
        quizOptions: [
          'max_tokens',
          'temperature',
          'top_p',
          'frequency_penalty'
        ],
        quizAnswer: 1,
        quizExplanation: 'Temperature controls randomness in the model\'s outputs. Higher values (e.g., 0.8-1.0) produce more diverse and creative results, while lower values (e.g., 0.2-0.5) make outputs more focused and deterministic.'
      }
    ],
    summary: 'You\'ve now explored the practical aspects of working with GPT models through APIs, mastered advanced prompt engineering techniques, and learned about fine-tuning for specialized applications. These skills enable you to effectively leverage LLMs in real-world projects and applications.'
  }
};

const promptContent: Record<string, TopicContent> = {
  'basic-prompt-patterns': {
    id: 'basic-prompt-patterns',
    title: 'Basic Prompt Patterns',
    introduction: 'Effective prompting is key to getting the most out of large language models. This module covers foundational prompt patterns that form the building blocks of successful LLM interactions.',
    sections: [
      {
        id: 'single-step-queries',
        title: 'Single-Step Queries',
        type: 'text',
        content: 'Single-step queries are the simplest form of prompts, designed to elicit straightforward information or content from an LLM. These include requests for definitions, summaries, explanations, and comparisons. The key to effective single-step queries is clarity and specificity - being precise about what you\'re asking for.'
      },
      {
        id: 'example-single-step',
        title: 'Example: Effective Single-Step Prompts',
        type: 'example',
        content: 'Weak: "Tell me about planets"\nBetter: "Explain the key differences between terrestrial and gas giant planets in our solar system, with 2-3 examples of each type."\n\nThe improved version specifies the exact information needed and the desired format.'
      },
      {
        id: 'structuring-formatting',
        title: 'Structuring & Formatting Outputs',
        type: 'text',
        content: 'You can control how LLMs format their responses by including explicit instructions about the desired output structure. Common formatting requests include bullet points, numbered lists, tables, headings and subheadings, step-by-step guides, and specific character counts or word limits.'
      },
      {
        id: 'quiz-basic',
        title: 'Practice Quiz',
        type: 'quiz',
        content: 'Which of the following prompts would likely produce the most useful and structured response?',
        quizOptions: [
          'Tell me about climate change',
          'Explain the causes of climate change',
          'Create a bulleted list of the 5 main causes of climate change, with a 1-2 sentence explanation for each',
          'Climate change information'
        ],
        quizAnswer: 2,
        quizExplanation: 'The third option provides clear instructions about both content (5 main causes) and format (bulleted list with brief explanations), which will produce a more useful and structured response than the other more general prompts.'
      }
    ],
    summary: 'You\'ve learned the foundations of effective prompting, including how to craft clear single-step queries and how to control the structure and format of LLM outputs. These basic patterns will serve as building blocks for more advanced prompting techniques.'
  },
  'intermediate-prompt-patterns': {
    id: 'intermediate-prompt-patterns',
    title: 'Intermediate Prompt Patterns',
    introduction: 'Building on the basics, intermediate prompt patterns allow for more sophisticated control over LLM outputs. This module covers techniques for personalization, creative content generation, and practical productivity applications.',
    sections: [
      {
        id: 'customization-personalization',
        title: 'Customization & Personalization',
        type: 'text',
        content: 'Role-based prompting involves asking the LLM to adopt a specific persona or expertise when responding. For example, "As an experienced pediatrician, explain..." This technique helps tailor the tone, terminology, and perspective of responses. You can also explicitly control the tone and style by requesting formal, casual, technical, or simplified language.'
      },
      {
        id: 'example-role',
        title: 'Example: Role-Based Prompting',
        type: 'example',
        content: 'Standard: "Explain quantum computing"\nRole-based: "Explain quantum computing as if you\'re a physics professor speaking to a class of first-year computer science students. Use helpful analogies and avoid overly technical jargon."\n\nThe role-based version will produce an explanation that\'s more appropriate for the specified audience.'
      },
      {
        id: 'creative-structured-content',
        title: 'Creative & Structured Content Generation',
        type: 'text',
        content: 'LLMs excel at generating structured creative content like mindmaps, flashcards, and checklists. To create these, clearly specify the format and provide context about the purpose of the content. For example, "Create a set of 5 flashcards to help medical students memorize the bones in the human hand, with the bone name on one side and its location and function on the other."'
      },
      {
        id: 'quiz-intermediate',
        title: 'Application Challenge',
        type: 'quiz',
        content: 'Which prompt would most effectively generate content for a project planning session?',
        quizOptions: [
          'Create a project plan',
          'List the steps needed for a project',
          'Generate a project timeline with milestones for developing a mobile app, including task owners, deadlines, and dependencies between tasks. Format this as a weekly schedule over a 3-month period.',
          'Tell me how to plan a project'
        ],
        quizAnswer: 2,
        quizExplanation: 'The third option provides specific details about the project type (mobile app), the desired format (weekly schedule), the timeframe (3 months), and the elements to include (task owners, deadlines, dependencies). This level of detail will produce a much more useful project planning document.'
      }
    ],
    summary: 'This module has equipped you with intermediate prompting techniques for personalizing LLM outputs through role-based prompting, controlling tone and style, and generating creative structured content. These skills enable more sophisticated applications of LLMs for both personal and professional use.'
  },
  'advanced-prompt-patterns': {
    id: 'advanced-prompt-patterns',
    title: 'Advanced Prompt Patterns',
    introduction: 'Advanced prompt patterns represent the cutting edge of LLM interaction, enabling complex problem-solving, multi-step reasoning, and dynamic adaptive responses. These techniques are particularly valuable for specialized professional applications and sophisticated content creation.',
    sections: [
      {
        id: 'multi-step-analytical',
        title: 'Multi-Step & Analytical Queries',
        type: 'text',
        content: 'Chain-of-thought prompting guides LLMs through complex reasoning processes by breaking problems into sequential steps. Instead of asking for a direct answer, you prompt the model to "think step by step" or "reason through this problem." This technique dramatically improves performance on tasks requiring logical reasoning, mathematical problem-solving, or complex analysis.'
      },
      {
        id: 'example-chain',
        title: 'Example: Chain-of-Thought Prompting',
        type: 'example',
        content: 'Direct query: "What is 17 × 28?"\n\nChain-of-thought: "Let\'s calculate 17 × 28 step by step:\n1. First, let\'s break down 28 into 20 + 8\n2. 17 × 20 = 340\n3. 17 × 8 = 136\n4. Add the results: 340 + 136 = 476\nSo 17 × 28 = 476"\n\nThe chain-of-thought approach makes the calculation process explicit and reduces errors.'
      },
      {
        id: 'complex-content',
        title: 'Complex Content & Problem-Solving',
        type: 'text',
        content: 'Advanced prompting enables sophisticated content analysis and creation, such as code debugging, research paper analysis, and comprehensive business frameworks. To effectively prompt for these tasks, clearly define both the problem and the desired output format, and consider using a combination of techniques like role-based prompting and chain-of-thought reasoning.'
      },
      {
        id: 'quiz-advanced',
        title: 'Advanced Challenge',
        type: 'quiz',
        content: 'Which prompting technique would be most effective for helping an LLM solve a complex logical puzzle?',
        quizOptions: [
          'Asking the LLM to solve the puzzle directly',
          'Chain-of-thought prompting that breaks the puzzle into logical steps',
          'Requesting the answer in a formatted table',
          'Asking the LLM to adopt the role of a puzzle expert'
        ],
        quizAnswer: 1,
        quizExplanation: 'Chain-of-thought prompting is particularly effective for complex logical puzzles because it guides the LLM through a structured reasoning process. This reduces the likelihood of logical errors that might occur when attempting to solve the puzzle in a single step.'
      }
    ],
    summary: 'You\'ve now mastered advanced prompting techniques that enable sophisticated applications of LLMs. From multi-step reasoning to complex content creation, these skills represent the frontier of human-AI collaboration and problem-solving.'
  }
};

// Service functions to retrieve content
export const getTopicContent = (curriculum: 'llm' | 'prompt', topicId: string): TopicContent | null => {
  const contentMap = curriculum === 'llm' ? llmContent : promptContent;
  return contentMap[topicId] || null;
};

// Function to update progress (in a real app, this would connect to a backend API)
export const updateTopicProgress = (curriculum: 'llm' | 'prompt', topicId: string, progress: number): void => {
  console.log(`Updated ${curriculum} topic ${topicId} progress to ${progress}%`);
  // In a real app, this would save to a backend
};
