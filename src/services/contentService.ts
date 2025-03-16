
// Types for content data
export interface ContentSection {
  id: string;
  title: string;
  content: string;
  type: 'text' | 'example' | 'code' | 'image' | 'quiz' | 'table';
  quizOptions?: string[];
  quizAnswer?: number;
  quizExplanation?: string;
  tableData?: {
    headers: string[];
    rows: string[][];
  };
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
        content: 'Generative AI (GenAI) is a type of artificial intelligence that creates new content rather than just analyzing existing data. It can generate text, images, music, videos, and even code based on patterns learned from large datasets.\n\nThink of Generative AI as a smart artist that has seen millions of paintings (data) and learned how to create new paintings that look realistic but are completely original.\n\n• Traditional AI = Recognizes and classifies (e.g., identifies a dog in an image).\n• Generative AI = Creates (e.g., generates a realistic image of a dog that doesn\'t exist in real life).'
      },
      {
        id: 'genai-capabilities',
        title: 'Key Capabilities of Generative AI',
        type: 'table',
        content: 'Generative AI has a wide range of capabilities across different content types:',
        tableData: {
          headers: ['Capability', 'Example'],
          rows: [
            ['Text Generation', 'ChatGPT writes a blog post'],
            ['Image Creation', 'DALL·E generates a painting'],
            ['Code Generation', 'GitHub Copilot suggests code snippets'],
            ['Music Composition', 'AI composes a new song'],
            ['Video Generation', 'AI creates deepfake videos']
          ]
        }
      },
      {
        id: 'traditional-vs-genai',
        title: 'Traditional AI vs. Generative AI',
        type: 'table',
        content: 'Let\'s compare traditional AI approaches with Generative AI:',
        tableData: {
          headers: ['Feature', 'Traditional AI', 'Generative AI'],
          rows: [
            ['Task Type', 'Recognizes, classifies, and predicts', 'Creates new content'],
            ['Example', 'Spam email detection', 'AI writes an email for you'],
            ['Input Type', 'Structured Data', 'Unstructured Data (Text, Images)'],
            ['Output Type', 'Labels, Decisions', 'Text, Images, Audio, etc.'],
            ['Learning Approach', 'Supervised Learning (mostly)', 'Self-supervised Learning']
          ]
        }
      },
      {
        id: 'example-comparison',
        title: 'Example Comparison',
        type: 'example',
        content: 'Traditional AI (Rule-Based AI):\n- You tell AI: "Identify if an email is spam or not."\n- AI checks predefined rules (e.g., "Win a lottery" = spam) and classifies it.\n\nGenerative AI:\n- You tell AI: "Write an email inviting a friend for dinner."\n- AI creates a completely new email based on its training data.'
      },
      {
        id: 'applications',
        title: 'Applications of Generative AI',
        type: 'text',
        content: 'Generative AI is used in various fields. Here are some real-world applications:\n\n1. Text Generation (Chatbots, Content Creation)\n• AI like ChatGPT writes blogs, summaries, and emails.\n• Used in customer support chatbots.\n\n2. Image Generation (Art, Design)\n• AI like DALL·E and MidJourney creates realistic or artistic images.\n• Used in graphic design and marketing.\n\n3. Music & Audio Generation\n• AI like Jukebox composes original music.\n• Used in background music creation for videos.\n\n4. Video & Animation Creation\n• AI like Runway generates videos.\n• Used in advertisements and movie effects.\n\n5. Code Generation\n• AI like GitHub Copilot assists programmers.\n• Used in software development to speed up coding.\n\n6. Healthcare (Drug Discovery & Diagnosis)\n• AI assists in drug discovery and medical imaging.\n• Used in predicting protein structures (AlphaFold).\n\n7. Finance & Business (Fraud Detection, Market Analysis)\n• AI detects fraudulent transactions.\n• Used in predicting stock trends.'
      },
      {
        id: 'llm-fundamentals',
        title: 'What is an LLM?',
        type: 'text',
        content: 'A Large Language Model (LLM) is an AI system trained on massive amounts of text data to understand, generate, and manipulate human language.\n\nKey Characteristics of LLMs:\n• Massive Scale: Trained on billions of words.\n• Self-Supervised Learning: Learns patterns in language without explicit labels.\n• Context Understanding: Can process and generate meaningful responses.\n• General-Purpose: Used in chatbots, content creation, programming, research, etc.'
      },
      {
        id: 'llm-examples',
        title: 'Real-World Examples of LLMs',
        type: 'table',
        content: 'Here are some of the most prominent LLMs in use today:',
        tableData: {
          headers: ['Model', 'Developed By', 'Key Use Case'],
          rows: [
            ['GPT-4', 'OpenAI', 'Chatbots, text generation'],
            ['PaLM 2', 'Google', 'Google Bard, document analysis'],
            ['LLaMA 2', 'Meta', 'Open-source research'],
            ['Claude 2', 'Anthropic', 'Ethical AI, summarization']
          ]
        }
      },
      {
        id: 'example-1',
        title: 'Example: Text Completion',
        type: 'example',
        content: 'Input: "The capital of France is"\nOutput: "Paris."\n\nThis simple example demonstrates how LLMs predict the most probable completion based on learned knowledge.'
      },
      {
        id: 'evolution-of-llms',
        title: 'Evolution of Language Models',
        type: 'table',
        content: 'LLMs didn\'t appear overnight. They evolved through multiple stages:',
        tableData: {
          headers: ['Model Type', 'Year', 'Description', 'Strengths', 'Weaknesses'],
          rows: [
            ['N-grams', '1950s-2000s', 'Predicts the next word using previous few words', 'Simple and fast', 'Fixed memory, can\'t handle long sentences'],
            ['RNN (Recurrent Neural Networks)', '1980s-2015', 'Uses loops to process sequences of words', 'Remembers past words, good for small text', 'Struggles with long-term dependencies'],
            ['LSTM/GRU (Improved RNNs)', '1997-2017', 'Advanced RNNs that remember long-term information', 'Better memory than RNNs', 'Still slow and struggles with long texts'],
            ['Transformers (Attention Mechanism)', '2017', 'Uses self-attention to process entire sentences at once', 'Handles long text, parallel processing', 'Requires huge computational power'],
            ['LLMs (GPT-3, GPT-4, etc.)', '2020+', 'Trained on massive datasets, can generate text like humans', 'Understands complex queries, generates high-quality text', 'Needs large amounts of data and expensive hardware']
          ]
        }
      },
      {
        id: 'how-llms-work',
        title: 'How LLMs Work',
        type: 'text',
        content: 'LLMs go through three main stages: Training, Fine-Tuning, and Inference.\n\nStep 1: Training (Pre-training)\nGoal: Teach the model language patterns.\n• LLMs are trained on large datasets (books, articles, websites).\n• Uses self-supervised learning—predicts missing words.\n• Example: "The sky is ___" → AI learns that "blue" is the most likely answer.\n\nTraining Process:\n1. Tokenization - Breaks text into smaller units (tokens).\n2. Embedding - Converts tokens into numerical representations.\n3. Transformer Architecture - Uses self-attention to understand relationships between words.\n4. Backpropagation & Optimization - Adjusts weights to improve accuracy.\n\nStep 2: Fine-Tuning (Custom Training)\nGoal: Make the model useful for specific tasks.\n• After training on general data, the model is fine-tuned for specific applications like:\n  ○ Chatbots (e.g., ChatGPT)\n  ○ Medical Research\n  ○ Legal Document Analysis\n\nStep 3: Inference (Generating Output)\nGoal: The model responds to user input.\n• The trained model takes a prompt and predicts the next words based on its knowledge.\n• Uses probabilities to choose the best response.'
      },
      {
        id: 'llm-stages-example',
        title: 'Example: GPT-4 Response Generation',
        type: 'example',
        content: 'User: "What is the capital of France?"\n\nLLM Process:\n1. Converts "What is the capital of France?" into tokens.\n2. Searches for related knowledge in its trained data.\n3. Generates the most likely response: "Paris."'
      },
      {
        id: 'what-is-transformer',
        title: 'What is a Transformer?',
        type: 'text',
        content: 'A Transformer is a deep learning model that uses the attention mechanism to process and understand text efficiently. It does not process words one by one (like RNNs) but instead looks at all words at once, making it faster and more accurate.\n\nWhy are Transformers Powerful?\n• Parallel Processing: Unlike RNNs, transformers process the entire text at once, making them much faster.\n• Handles Long Contexts: Can understand relationships between words even if they are far apart.\n• State-of-the-Art Performance: Used in GPT-4, BERT, and other cutting-edge AI models.'
      },
      {
        id: 'transformer-example',
        title: 'Example: Why RNNs Struggle Compared to Transformers',
        type: 'example',
        content: 'Sentence: "The cat, which was black, jumped over the fence."\n\n• RNN reads one word at a time → Hard to connect "cat" with "jumped."\n• Transformer reads the whole sentence at once → Easily links "cat" to "jumped."'
      },
      {
        id: 'self-attention',
        title: 'Self-Attention and Multi-Head Attention',
        type: 'text',
        content: 'Self-Attention is a mechanism that helps the model focus on the most important words in a sentence when processing text.\n\nHow Self-Attention Works (Step-by-Step):\n1. Each word is compared to every other word in the sentence.\n2. It assigns a weight (importance) to each word.\n3. Words with higher weights influence the model\'s prediction more.\n\nMulti-Head Attention allows the model to focus on multiple word relationships at once.\n• One attention head: Focuses on "unlocked" and "key."\n• Another attention head: Focuses on "door" and "key."\n• Multi-Head Attention: Understands all relationships at the same time.'
      },
      {
        id: 'attention-example',
        title: 'Example: Sentence Translation with Self-Attention',
        type: 'example',
        content: 'Sentence: "The cat drank milk."\nTask: Translate to French.\n\nWhat words should AI focus on?\n• "The" is less important than "cat" and "drank."\n• Self-Attention assigns higher weight to important words.\n\nWord Attention Scores:\n- The: 0.1\n- Cat: 0.8\n- Drank: 0.9\n- Milk: 0.7\n\nResult: AI gives higher importance to "cat" and "drank" when predicting the translation.'
      },
      {
        id: 'transformer-architecture',
        title: 'Transformer Architecture Overview',
        type: 'text',
        content: 'A Transformer consists of two main parts:\n1️⃣ Encoder - Reads and understands the input (used in BERT).\n2️⃣ Decoder - Generates the output (used in GPT models).\n\nTransformer Architecture (High-Level):\nInput → Encoder → Decoder → Output'
      },
      {
        id: 'transformer-components',
        title: 'Transformer Components',
        type: 'table',
        content: 'Detailed Transformer Flow:',
        tableData: {
          headers: ['Component', 'Function'],
          rows: [
            ['Embedding Layer', 'Converts words into numerical vectors'],
            ['Positional Encoding', 'Adds word position info (since order matters)'],
            ['Self-Attention', 'Determines word importance'],
            ['Multi-Head Attention', 'Captures multiple relationships at once'],
            ['Feed-Forward Layers', 'Processes information for deeper understanding'],
            ['Layer Normalization', 'Stabilizes training by normalizing inputs'],
            ['Output Layer', 'Generates predictions (next word, translation, etc.)']
          ]
        }
      },
      {
        id: 'quiz-1',
        title: 'Quiz: Generative AI Fundamentals',
        type: 'quiz',
        content: 'What distinguishes generative AI from traditional AI systems?',
        quizOptions: [
          'Generative AI only works with text data',
          'Generative AI creates new content rather than just classifying existing data',
          'Generative AI requires less computing power',
          'Generative AI only works in supervised learning environments'
        ],
        quizAnswer: 1,
        quizExplanation: "Generative AI's defining characteristic is its ability to create new content (text, images, audio, etc.) rather than simply classifying or predicting based on existing data."
      },
      {
        id: 'quiz-2',
        title: 'Quiz: LLM Evolution',
        type: 'quiz',
        content: 'Which innovation enabled the development of modern LLMs by allowing parallel processing of text?',
        quizOptions: [
          'Recurrent Neural Networks (RNNs)',
          'Convolutional Neural Networks (CNNs)',
          'Transformer Architecture',
          'Decision Trees'
        ],
        quizAnswer: 2,
        quizExplanation: "The Transformer architecture, introduced in 2017, revolutionized language models by enabling parallel processing of text through its attention mechanism, rather than processing text sequentially like RNNs."
      },
      {
        id: 'quiz-3',
        title: 'Quiz: LLM Training Process',
        type: 'quiz',
        content: 'What is the purpose of the fine-tuning stage in LLM development?',
        quizOptions: [
          'To make the model bigger and more powerful',
          'To adapt the pre-trained model for specific tasks or domains',
          'To create visual outputs instead of text',
          'To reduce the size of the model for mobile deployment'
        ],
        quizAnswer: 1,
        quizExplanation: "Fine-tuning comes after pre-training and adapts the general knowledge of the model to specific tasks or domains (like medical, legal, or customer service) using smaller, specialized datasets."
      },
      {
        id: 'quiz-4',
        title: 'Quiz: Self-Attention Mechanism',
        type: 'quiz',
        content: 'What is the primary function of the self-attention mechanism in transformers?',
        quizOptions: [
          'To compress the size of the input data',
          'To translate between different languages',
          'To determine which words in a sequence are most important for understanding other words',
          'To generate images from text descriptions'
        ],
        quizAnswer: 2,
        quizExplanation: "Self-attention allows the model to weigh the importance of different words when processing each word in a sequence, helping it understand context and relationships between words regardless of their distance from each other."
      }
    ],
    summary: "In this module, you've learned the basic concepts behind Large Language Models and generative AI. You now understand how these models learn from vast amounts of text data to predict and generate human-like text based on context and patterns. You've explored the evolution from basic language models to modern transformers, the architecture that powers today's most advanced AI systems, and the key mechanisms like self-attention that make these models so powerful."
  },
  'deep-dive': {
    id: 'deep-dive',
    title: 'Deep Dive into GPT Models',
    introduction: 'GPT (Generative Pre-trained Transformer) models represent some of the most advanced LLMs available today. This module explores their architecture, training methodology, and practical applications.',
    sections: [
      {
        id: 'gpt-architecture-overview',
        title: 'Overview of GPT Architecture',
        type: 'text',
        content: 'GPT (Generative Pre-trained Transformer) is a deep learning model based on the Transformer architecture. It is designed to process and generate human-like text using self-attention mechanisms and neural network layers.\n\nKey Characteristics of GPT:\n• Autoregressive Model: GPT predicts the next word in a sequence given the previous words.\n• Transformer-based: Uses multi-head self-attention instead of RNNs or CNNs.\n• Pre-trained & Fine-tuned: First trained on massive text data, then fine-tuned for specific tasks.\n• Scalability: More layers and parameters improve performance across versions (GPT-1 → GPT-4).'
      },
      {
        id: 'gpt-components',
        title: 'Components of GPT',
        type: 'text',
        content: 'To understand GPT, we need to break down its core components:\n\n(A) Tokenization\nTokenization is the process of converting raw text into smaller units (tokens) that a model can understand. GPT uses Byte Pair Encoding (BPE), which breaks words into frequently occurring subword units, allowing it to handle unknown words effectively.\n\n(B) Embeddings\nEmbeddings convert tokens into numerical representations (vectors) so the model can process them. For example:\n• "King" → [0.21, -0.37, 0.88, ...]\n• "Queen" → [0.19, -0.35, 0.85, ...]\n\nEmbeddings capture relationships between words and allow models to understand contextual meaning.\n\n(C) Attention Layers\nAttention helps the model focus on relevant words while generating text. For a sentence like "The cat sat on the mat because it was tired," attention helps the model understand that "it" refers to "the cat". GPT uses Multi-Head Self-Attention, where each word attends to all other words in the input, and multiple attention "heads" allow the model to understand different relationships.'
      },
      {
        id: 'tokenization-types',
        title: 'Types of Tokenization',
        type: 'table',
        content: 'Different tokenization approaches break text down in different ways:',
        tableData: {
          headers: ['Type', 'Example for "I love AI"'],
          rows: [
            ['Word-based', '["I", "love", "AI"]'],
            ['Character-based', '["I", " ", "l", "o", "v", "e", " ", "A", "I"]'],
            ['Subword-based (used in GPT)', '["I", " love", " AI"]']
          ]
        }
      },
      {
        id: 'gpt-processing',
        title: 'How GPT Processes Input & Generates Output',
        type: 'text',
        content: 'GPT processes input and generates output in several steps:\n\n1️⃣ Tokenization: Input text is split into tokens. Example: "AI is powerful" → ["AI", " is", " powerful"]\n\n2️⃣ Embedding Layer: Tokens are converted into numerical vectors.\n\n3️⃣ Positional Encoding: Since transformers don\'t process sequentially, positional encodings are added to retain word order.\n\n4️⃣ Transformer Block (Multi-Head Self-Attention + Feedforward Layers): Each word interacts with all other words in context using self-attention, and a feedforward network refines the output.\n\n5️⃣ Decoder Generates Output Step by Step (Autoregressive Generation): Given a sequence, the model predicts the next token iteratively. For example:\n   • Input: "The sky is"\n   • Model predicts → "blue"\n   • Output: "The sky is blue"'
      },
      {
        id: 'gpt-versions',
        title: 'Differences Between GPT Versions',
        type: 'table',
        content: 'GPT models have evolved significantly over different versions:',
        tableData: {
          headers: ['Feature', 'GPT-1', 'GPT-2', 'GPT-3', 'GPT-4'],
          rows: [
            ['Year Released', '2018', '2019', '2020', '2023'],
            ['Parameters', '117M', '1.5B', '175B', 'Over 1 Trillion'],
            ['Training Data', 'BooksCorpus', 'WebText', 'Massive Internet Data', 'Internet + Reinforcement Learning'],
            ['Key Improvement', 'First GPT Model', 'Larger + Better Text Generation', 'More Coherent, Fewer Mistakes', 'More Accurate, Multimodal (text + image)'],
            ['Limitations', 'Limited Fluency', 'Prone to Repetition', 'Costly, Bias Issues', 'Not Fully Disclosed']
          ]
        }
      },
      {
        id: 'pretraining-finetuning',
        title: 'Pre-training vs. Fine-tuning',
        type: 'table',
        content: 'GPT models learn in two major phases:',
        tableData: {
          headers: ['Feature', 'Pre-training', 'Fine-tuning'],
          rows: [
            ['Purpose', 'Learn general language patterns', 'Specialize for specific tasks'],
            ['Data Used', 'Large-scale text data (Wikipedia, books, web pages)', 'Domain-specific data (legal docs, medical texts, code, etc.)'],
            ['Training Type', 'Unsupervised Learning', 'Supervised Learning'],
            ['Example Task', 'Predict next word in a sentence', 'Improve customer support chatbot'],
            ['Duration', 'Takes weeks or months', 'Takes hours to days'],
            ['Output', 'A general-purpose language model', 'A task-specific model']
          ]
        }
      },
      {
        id: 'transfer-learning',
        title: 'Transfer Learning in GPT',
        type: 'text',
        content: 'GPT uses Transfer Learning, which means it first learns general knowledge and then transfers that knowledge to specialized tasks.\n\nHow Transfer Learning Works in GPT:\n1️⃣ General Learning (Pre-training)\n• The model reads vast amounts of text.\n• It learns sentence structures, grammar, facts, and context.\n\n2️⃣ Specialized Learning (Fine-tuning)\n• The model is trained on specific datasets (e.g., medical conversations).\n• It adjusts its responses to fit the domain.\n\nExample: Training GPT for Customer Support\n• Pre-training: The model learns general conversation patterns from the internet.\n• Fine-tuning: It is trained on actual customer service chats to respond professionally and accurately.\n\nKey Benefit of Transfer Learning:\nInstead of training a model from scratch (which is expensive), we leverage an existing GPT model and fine-tune it for our needs.'
      },
      {
        id: 'training-data',
        title: 'Data Requirements for Training LLMs',
        type: 'text',
        content: 'Training a Large Language Model (LLM) like GPT requires massive and high-quality data.\n\nData Types Used in Training:\n• Books: Project Gutenberg, OpenBooks\n• Websites: Wikipedia, news sites, forums\n• Code: GitHub repositories\n• Conversations: Chat logs, customer support interactions\n\nData Volume:\n• GPT-3 was trained on 45 terabytes of text data (~570GB cleaned text).\n• GPT-4 likely used trillions of tokens from text, images, and code.\n\nData Quality Challenges:\n• Bias in Data → Can lead to biased AI outputs.\n• Noisy Data → Incomplete or incorrect information.\n• Legal & Ethical Concerns → Data privacy and copyright issues.\n\nData Cleaning & Processing Steps:\n1️⃣ Tokenization: Convert text into tokens.\n2️⃣ Deduplication: Remove duplicate text to avoid overfitting.\n3️⃣ Filtering: Remove low-quality, irrelevant, or harmful content.\n4️⃣ Balancing: Ensure diverse representation across languages and topics.'
      },
      {
        id: 'prompt-engineering-intro',
        title: 'What is Prompt Engineering?',
        type: 'text',
        content: 'Prompt engineering is the practice of crafting inputs (prompts) to get the best possible output from a language model like GPT. Think of it as giving clear instructions to a smart assistant to get the exact response you need.\n\nExample Analogy:\n• Imagine you\'re ordering food at a restaurant.\n  ○ If you say: "Give me food." (vague) → You might get anything.\n  ○ If you say: "I\'d like a spicy chicken sandwich with extra cheese and no onions." (specific) → You get exactly what you want.\n\nSimilarly, a well-designed prompt guides the AI to generate better, more accurate responses.'
      },
      {
        id: 'prompt-types',
        title: 'Types of Prompts',
        type: 'text',
        content: 'There are three main types of prompts used in GPT-based models:\n\n1️⃣ Zero-Shot Prompting\nDefinition: Asking the model a question without providing any examples.\nBest for: Simple tasks like definitions, translations, or factual queries.\nExample:\nPrompt: "What is the capital of France?"\nGPT Output: "The capital of France is Paris."\nLimitation: If the task is complex, the model might struggle without examples.\n\n2️⃣ Few-Shot Prompting\nDefinition: Providing a few examples in the prompt before asking the model to generate an answer.\nBest for: Tasks that need context, such as text classification, sentiment analysis, or writing in a specific style.\nExample:\nPrompt:\n"Classify the following reviews as Positive or Negative.\n1. \'I love this product, it works perfectly!\' → Positive\n2. \'The quality is terrible, I hate it.\' → Negative\n3. \'The item arrived late and was damaged.\' →"\nGPT Output: "Negative"\n\n3️⃣ Chain-of-Thought (CoT) Prompting\nDefinition: Encouraging the model to think step by step before giving the final answer.\nBest for: Complex reasoning, math problems, coding tasks, and logical deductions.'
      },
      {
        id: 'cot-example',
        title: 'Chain-of-Thought Example',
        type: 'example',
        content: 'Prompt:\n"A bakery sells 3 types of cookies. If a customer buys 2 of each type, how many cookies do they buy in total? Think step by step before answering."\n\nGPT Output:\n"The bakery sells 3 types of cookies. The customer buys 2 of each type.\nSo, the total number of cookies is 3 × 2 = 6.\nFinal answer: 6 cookies."'
      },
      {
        id: 'effective-prompts',
        title: 'Designing Effective Prompts',
        type: 'text',
        content: 'To get better responses, follow these prompt design techniques:\n\n(A) Be Clear and Specific\nInstead of: "Tell me about Python."\nUse: "Explain Python in two sentences for a beginner."\n\n(B) Set a Role for GPT\nInstead of: "Write a marketing copy for a product."\nUse: "You are a professional copywriter. Write a persuasive product description for a new smartphone."\n\n(C) Use Constraints (Word Limits, Formats, Styles)\nInstead of: "Summarize this article."\nUse: "Summarize this article in 3 bullet points."\n\n(D) Use Step-by-Step Reasoning (CoT Prompting)\nInstead of: "Solve this math problem: 124 × 56."\nUse: "Solve step by step: 124 × 56."'
      },
      {
        id: 'quiz-gpt-architecture',
        title: 'Quiz: GPT Architecture',
        type: 'quiz',
        content: 'Which component allows GPT models to understand the relationships between words in a sentence regardless of their distance from each other?',
        quizOptions: [
          'Tokenization',
          'Embedding Layer',
          'Self-Attention Mechanism',
          'Feed-Forward Network'
        ],
        quizAnswer: 2,
        quizExplanation: 'The Self-Attention Mechanism is what allows GPT models to understand relationships between words regardless of their position in a sentence. This is one of the key innovations of transformer models that gives them an advantage over previous architectures like RNNs.'
      },
      {
        id: 'quiz-training',
        title: 'Quiz: Training & Fine-Tuning',
        type: 'quiz',
        content: 'What is the main advantage of transfer learning in the context of GPT models?',
        quizOptions: [
          'It allows GPT to learn human languages faster',
          'It reduces the cost and time needed for specialized applications by leveraging pre-trained models',
          'It completely eliminates biases in the training data',
          'It allows GPT to access the internet during inference'
        ],
        quizAnswer: 1,
        quizExplanation: 'Transfer learning allows developers to take an existing pre-trained GPT model and fine-tune it for specific applications without training from scratch. This significantly reduces the computational resources, time, and data needed to develop specialized AI solutions.'
      },
      {
        id: 'quiz-prompting',
        title: 'Quiz: Prompt Engineering',
        type: 'quiz',
        content: 'Which prompting technique would be most effective for solving a complex mathematical problem?',
        quizOptions: [
          'Zero-shot prompting with a simple question',
          'Few-shot prompting with multiple math examples',
          'Chain-of-Thought prompting to encourage step-by-step reasoning',
          'Using vague prompts to encourage creativity'
        ],
        quizAnswer: 2,
        quizExplanation: 'Chain-of-Thought (CoT) prompting is most effective for complex mathematical problems because it encourages the model to break down the problem into logical steps before providing a final answer. This approach significantly reduces errors in computational and reasoning tasks.'
      }
    ],
    summary: 'This module has provided a deeper understanding of GPT architecture, training methodology, and capabilities. You now have insights into how these models process and generate text using attention mechanisms, how they are trained and fine-tuned, and how to effectively engineer prompts to get the best results. These concepts form the foundation for working with and getting the most out of GPT models in practical applications.'
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
        id: 'openai-api-intro',
        title: 'Introduction to OpenAI API',
        type: 'text',
        content: 'The OpenAI API allows developers to interact with GPT models programmatically. You can use this API to send text-based inputs (prompts) and receive AI-generated responses.\n\nHow does it work?\n1. You send a request (prompt) to the API.\n2. The GPT model processes the input.\n3. The API returns a generated response.\n\nCommon Use Cases:\n• Chatbots\n• Text summarization\n• Code generation\n• Sentiment analysis\n• Automated customer support\n\nHow to Access the API:\n1. Sign up on OpenAI\'s website.\n2. Get an API key (used for authentication).\n3. Use Python or other programming languages to call the API.'
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
        id: 'python-api-call',
        title: 'Calling GPT Models Using Python',
        type: 'text',
        content: 'We can use libraries like OpenAI\'s official Python library and LangChain (a framework for working with LLMs) to interact with GPT models.\n\nMethod 1: Using OpenAI API in Python\nFirst, install the OpenAI Python package:\n```bash\npip install openai\n```\n\nThen, use this basic code to call the API:\n```python\nimport openai\nopenai.api_key = "your_api_key_here"\nresponse = openai.ChatCompletion.create(\n  model="gpt-4",\n  messages=[\n    {"role": "system", "content": "You are a helpful assistant."},\n    {"role": "user", "content": "What is machine learning?"}\n  ]\n)\nprint(response["choices"][0]["message"]["content"])\n```\n\nMethod 2: Using LangChain\nLangChain is a framework that simplifies working with LLMs.\n\nFirst, install LangChain:\n```bash\npip install langchain openai\n```\n\nThen, use this code:\n```python\nfrom langchain.chat_models import ChatOpenAI\nchat_model = ChatOpenAI(model_name="gpt-4", openai_api_key="your_api_key_here")\nresponse = chat_model.predict("Explain Neural Networks in simple terms.")\nprint(response)\n```'
      },
      {
        id: 'api-parameters',
        title: 'Parameters: Controlling GPT Output',
        type: 'table',
        content: 'When calling the API, you can fine-tune the output using different parameters:',
        tableData: {
          headers: ['Parameter', 'Purpose', 'Typical Range'],
          rows: [
            ['Temperature', 'Controls randomness', '0.0 to 1.0 (Higher = more creative)'],
            ['Max Tokens', 'Limits response length', '1 to 4096+ (depends on model)'],
            ['Top-p (Nucleus Sampling)', 'Controls diversity', '0.0 to 1.0 (Lower = focused output)']
          ]
        }
      },
      {
        id: 'temperature-example',
        title: 'Example: Using Temperature',
        type: 'example',
        content: 'Temperature:\n• Low (0.1 - 0.3) → More deterministic, good for factual answers.\n• High (0.7 - 1.0) → More creative, good for storytelling.\n\n```python\nresponse = openai.ChatCompletion.create(\n  model="gpt-4",\n  messages=[{"role": "user", "content": "Write a creative story about a robot."}],\n  temperature=0.9\n)\n```'
      },
      {
        id: 'max-tokens-example',
        title: 'Example: Using Max Tokens',
        type: 'example',
        content: 'Max Tokens:\n• Limits how long the response can be.\n• Example: If you set max_tokens=50, GPT will return a short response.\n\n```python\nresponse = openai.ChatCompletion.create(\n  model="gpt-4",\n  messages=[{"role": "user", "content": "Summarize AI in one paragraph."}],\n  max_tokens=50\n)\n```'
      },
      {
        id: 'prompt-engineering',
        title: 'Advanced Prompt Engineering',
        type: 'text',
        content: 'Prompt engineering is the art of crafting inputs to get the best outputs from LLMs. Advanced techniques include: (1) Chain-of-thought prompting to guide the model through complex reasoning steps, (2) Few-shot learning with carefully selected examples, (3) System prompts to define the model\'s persona or behavior, and (4) Output formatting instructions to control response structure.'
      },
      {
        id: 'structured-prompts',
        title: 'Structured Prompts & Templates',
        type: 'text',
        content: 'A structured prompt is designed in a logical and clear way to guide the model toward a desired response. It provides context, instructions, constraints, and examples.\n\nElements of a Good Prompt:\n• Context → Provide background information.\n• Instruction → Clearly specify the task.\n• Constraints → Limit response length, style, format, etc.\n• Examples (Few-Shot Learning) → Show desired output format.\n\nBasic Template:\n```\nYou are a [Role]. Your task is to [Objective]. Provide the response in [Format] using [Constraints].\n```\n\nExample:\n```\nYou are an AI tutor. Explain "Neural Networks" to a beginner in simple terms with an example.\n```'
      },
      {
        id: 'system-vs-user',
        title: 'System Prompts vs. User Prompts',
        type: 'table',
        content: 'GPT models support different types of prompts:',
        tableData: {
          headers: ['Prompt Type', 'Purpose', 'Example'],
          rows: [
            ['System Prompt', 'Defines AI\'s role, tone, and behavior.', '"You are an expert assistant specializing in cybersecurity. Provide detailed technical explanations."'],
            ['User Prompt', 'The actual input given by the user.', '"Explain how encryption works in simple terms."']
          ]
        }
      },
      {
        id: 'avoiding-bias',
        title: 'Avoiding Bias & Hallucination in Responses',
        type: 'text',
        content: 'Bias in AI occurs when the model generates unbalanced, misleading, or unfair responses due to skewed training data.\n\nExample of Biased Prompt:\n```\nWhy is Python better than Java?\n```\n(This assumes Python is better, leading to a biased response.)\n\nFix:\n```\nCompare the advantages and disadvantages of Python and Java.\n```\n(This keeps it neutral.)\n\nHallucination happens when GPT generates false or misleading information.\n\nBetter Prompt:\n```\nIf you don\'t know the answer, say \'I don\'t know\' or suggest checking a reliable source.\n```'
      },
      {
        id: 'fine-tuning-intro',
        title: 'Fine-Tuning GPT Models',
        type: 'text',
        content: 'Fine-tuning allows you to adapt a pre-trained model to a specific task or dataset, improving its relevance and performance for specialized use cases. While pre-trained models are excellent for general-purpose tasks, fine-tuning is beneficial for domain-specific knowledge, custom tone and style, and consistent response patterns.\n\nKey Rule: If prompt engineering alone can solve the problem, fine-tuning is unnecessary! Fine-tuning is best when GPT struggles with domain-specific tasks, terminology, or response consistency.'
      },
      {
        id: 'finetune-vs-pretrained',
        title: 'When to Fine-Tune vs. Use Pre-trained Models',
        type: 'table',
        content: 'Comparing when to use pre-trained models vs. fine-tuned models:',
        tableData: {
          headers: ['Scenario', 'Use Pre-trained GPT', 'Fine-Tune GPT'],
          rows: [
            ['General-purpose tasks (Q&A, summarization, translation, code generation)', '✓', ''],
            ['Highly specialized knowledge (medical, legal, finance-specific language)', '', '✓'],
            ['Custom tone & style (e.g., brand-specific customer support)', '', '✓'],
            ['Better response consistency', '', '✓'],
            ['Long contextual memory requirement', '', '✓'],
            ['Small-scale customization (e.g., adjusting response style via prompt engineering)', '✓', '']
          ]
        }
      },
      {
        id: 'fine-tuning-steps',
        title: 'Steps to Fine-Tune GPT on Custom Data',
        type: 'text',
        content: 'Fine-tuning GPT involves training the model on task-specific or domain-specific data.\n\nStep 1: Collect & Prepare the Data\nFine-tuning requires a dataset in a structured format, usually JSONL (JSON Lines).\n\nExample Dataset (Customer Support Bot):\n```json\n{"messages": [{"role": "system", "content": "You are a friendly AI assistant for an e-commerce store."}, {"role": "user", "content": "What is your return policy?"}, {"role": "assistant", "content": "Our return policy allows returns within 30 days with a receipt."}]}\n{"messages": [{"role": "user", "content": "How do I track my order?"}, {"role": "assistant", "content": "You can track your order using the tracking link sent to your email after purchase."}]}\n```\n\nStep 2: Train the Model (Fine-Tuning Process)\nTo fine-tune a GPT model, we use OpenAI\'s API:\n\n1. Convert Data to JSONL Format\n2. Upload Data to OpenAI:\n```bash\nopenai tools fine_tunes.prepare_data -f dataset.jsonl\n```\n3. Start Fine-Tuning:\n```bash\nopenai api fine_tunes.create -t "dataset.jsonl" -m "gpt-3.5-turbo"\n```\n4. Monitor Training Progress\n5. Deploy and Use the Fine-Tuned Model'
      },
      {
        id: 'fine-tuning-tools',
        title: 'Tools for Fine-Tuning',
        type: 'table',
        content: 'Several tools can be used for fine-tuning GPT models:',
        tableData: {
          headers: ['Tool', 'Purpose', 'Best For'],
          rows: [
            ['OpenAI Fine-Tuning API', 'Fine-tune GPT-3.5/4 on your dataset', 'Simple fine-tuning without deep ML knowledge'],
            ['Hugging Face (Transformers)', 'Train and fine-tune open-source LLMs', 'Full customization & open-source models'],
            ['LoRA (Low-Rank Adaptation)', 'Efficient fine-tuning with fewer parameters', 'Memory-efficient fine-tuning'],
            ['QLoRA (Quantized LoRA)', 'Fine-tuning large models with limited GPU', 'Cost-effective fine-tuning']
          ]
        }
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
      },
      {
        id: 'quiz-finetune',
        title: 'Fine-tuning Quiz',
        type: 'quiz',
        content: 'When would fine-tuning a GPT model be most appropriate?',
        quizOptions: [
          'When you need it to answer general knowledge questions',
          'When you need to create a chatbot for a pizza restaurant with specific menu items',
          'When you need it to write creative stories',
          'When you need it to perform basic text summarization'
        ],
        quizAnswer: 1,
        quizExplanation: 'Fine-tuning is most appropriate when you need the model to have specific knowledge (like a pizza restaurant menu) that isn\'t typically found in the general training data. General knowledge, creative writing, and summarization can usually be handled well by pre-trained models with good prompting.'
      },
      {
        id: 'quiz-prompt-eng',
        title: 'Prompt Engineering Quiz',
        type: 'quiz',
        content: 'Which of the following prompt structures would likely lead to the most consistent and structured output?',
        quizOptions: [
          'Tell me about quantum computing',
          'You are a quantum physics professor. Explain quantum computing to a computer science student.',
          'You are a quantum physics professor. Explain quantum computing to a computer science student. Structure your response with an introduction, 3 key concepts, and a conclusion. Include a real-world application.',
          'What is quantum computing?'
        ],
        quizAnswer: 2,
        quizExplanation: 'The third option provides a role (quantum physics professor), audience (computer science student), specific structure (intro, 3 key concepts, conclusion), and content requirements (real-world application). This level of detail guides the model to produce a well-structured, consistent response.'
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
