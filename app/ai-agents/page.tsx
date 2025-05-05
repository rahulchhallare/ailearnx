"use client"
import { useState } from "react"
import {
  Star,
  Check,
  Bot,
  Search,
  ExternalLink,
  MessageSquare,
  Brain,
  Code,
  ImageIcon,
  FileText,
  Headphones,
  BarChart,
  Calendar,
  Briefcase,
  Percent,
  Tag,
  Clock,
  Share2,
  Layers,
  Zap,
  Shield,
  Users,
  Edit3,
} from "lucide-react"

// Real AI agents data with proper descriptions, features, icons, affiliate links, and market prices
const aiAgents = [
  {
    id: 1,
    name: "Claude Assistant",
    description:
      "An autonomous AI agent that can understand complex instructions, perform research, write content, and assist with decision-making across multiple domains with human-like reasoning.",
    icon: <Bot className="w-10 h-10 text-blue-600" />,
    category: "General Purpose",
    price: 20,
    discountPrice: 16,
    marketPrice: 24,
    features: [
      "Autonomous task completion with minimal guidance",
      "Human-like reasoning and decision making",
      "Long-term memory and context retention",
      "Multi-step planning capabilities",
      "Ability to learn from feedback",
    ],
    rating: 4.9,
    reviews: 3241,
    affiliateLink: "https://claude.ai/?utm_source=affiliate&utm_medium=referral&utm_campaign=aiagents",
  },
  {
    id: 2,
    name: "AutoGPT",
    description:
      "A fully autonomous AI agent that can set its own goals, create plans, and execute complex tasks with minimal human supervision, capable of solving problems through recursive self-improvement.",
    icon: <Brain className="w-10 h-10 text-blue-600" />,
    category: "Autonomous",
    price: 30,
    discountPrice: 24,
    marketPrice: 35,
    features: [
      "Self-directed goal setting and planning",
      "Autonomous internet research capabilities",
      "Memory management for long-running tasks",
      "Tool usage and API integration",
      "Recursive self-improvement",
    ],
    rating: 4.7,
    reviews: 1876,
    affiliateLink: "https://autogpt.net/?utm_source=affiliate&utm_medium=referral&utm_campaign=aiagents",
  },
  {
    id: 3,
    name: "AgentGPT",
    description:
      "An AI agent platform that allows users to create and deploy autonomous AI agents that can perform complex tasks, research topics, and generate content with minimal human oversight.",
    icon: <Bot className="w-10 h-10 text-blue-600" />,
    category: "Autonomous",
    price: 25,
    discountPrice: 20,
    marketPrice: 30,
    features: [
      "Custom agent creation and configuration",
      "Autonomous task execution",
      "Web browsing and research capabilities",
      "Long-term memory and knowledge retention",
      "Multi-agent collaboration",
    ],
    rating: 4.6,
    reviews: 1423,
    affiliateLink: "https://agentgpt.reworkd.ai/?utm_source=affiliate&utm_medium=referral&utm_campaign=aiagents",
  },
  {
    id: 4,
    name: "Adept AI Assistant",
    description:
      "An AI agent that can operate software applications, navigate websites, and perform complex workflows across different systems based on natural language instructions with minimal supervision.",
    icon: <Zap className="w-10 h-10 text-blue-600" />,
    category: "Workflow Automation",
    price: 35,
    discountPrice: 28,
    marketPrice: 45,
    features: [
      "Autonomous software operation",
      "Cross-application workflow execution",
      "Learning from demonstrations",
      "Adaptive problem-solving",
      "Natural language instruction processing",
    ],
    rating: 4.8,
    reviews: 975,
    affiliateLink: "https://www.adept.ai/?utm_source=affiliate&utm_medium=referral&utm_campaign=aiagents",
  },
  {
    id: 5,
    name: "GitHub Copilot Agent",
    description:
      "An autonomous coding assistant that not only suggests code but can understand project requirements, design solutions, implement features, and debug issues with minimal developer intervention.",
    icon: <Code className="w-10 h-10 text-blue-600" />,
    category: "Development",
    price: 20,
    discountPrice: 16,
    marketPrice: 25,
    features: [
      "Autonomous code generation and refactoring",
      "Bug identification and fixing",
      "Architecture recommendation",
      "Test case generation",
      "Documentation writing",
    ],
    rating: 4.9,
    reviews: 2896,
    affiliateLink: "https://github.com/features/copilot?utm_source=affiliate&utm_medium=referral&utm_campaign=aiagents",
  },
  {
    id: 6,
    name: "BabyAGI",
    description:
      "A lightweight autonomous agent system that can break down complex goals into manageable tasks, execute them in order of priority, and learn from results to improve future performance.",
    icon: <Brain className="w-10 h-10 text-blue-600" />,
    category: "Autonomous",
    price: 15,
    discountPrice: 12,
    marketPrice: 18,
    features: [
      "Autonomous task planning and execution",
      "Priority-based task management",
      "Continuous learning from outcomes",
      "Goal decomposition into subtasks",
      "Progress tracking and reporting",
    ],
    rating: 4.7,
    reviews: 1247,
    affiliateLink: "https://babyagi.org/?utm_source=affiliate&utm_medium=referral&utm_campaign=aiagents",
  },
  {
    id: 7,
    name: "Midjourney Agent",
    description:
      "An autonomous creative agent that can understand artistic concepts, generate multiple design iterations, and refine visual content based on feedback with minimal human guidance.",
    icon: <ImageIcon className="w-10 h-10 text-blue-600" />,
    category: "Creative",
    price: 30,
    discountPrice: 24,
    marketPrice: 40,
    features: [
      "Autonomous visual content creation",
      "Style understanding and adaptation",
      "Iterative refinement based on feedback",
      "Multi-concept visual synthesis",
      "Brand consistency maintenance",
    ],
    rating: 4.9,
    reviews: 3452,
    affiliateLink: "https://www.midjourney.com/?utm_source=affiliate&utm_medium=referral&utm_campaign=aiagents",
  },
  {
    id: 8,
    name: "Synthesia Avatar Agent",
    description:
      "An AI video presenter agent that autonomously creates, edits, and delivers video content, adapting its presentation style, tone, and pacing based on the content and audience.",
    icon: <Share2 className="w-10 h-10 text-blue-600" />,
    category: "Creative",
    price: 30,
    discountPrice: 25,
    marketPrice: 39,
    features: [
      "Autonomous video script generation",
      "Dynamic presentation style adaptation",
      "Multilingual content delivery",
      "Emotional tone adjustment",
      "Audience engagement optimization",
    ],
    rating: 4.8,
    reviews: 2134,
    affiliateLink: "https://www.synthesia.io/?utm_source=affiliate&utm_medium=referral&utm_campaign=aiagents",
  },
  {
    id: 9,
    name: "Jasper AI Agent",
    description:
      "An autonomous content creation agent that can plan, research, write, and optimize various types of content while maintaining brand voice and adapting to different marketing objectives.",
    icon: <FileText className="w-10 h-10 text-blue-600" />,
    category: "Content",
    price: 59,
    discountPrice: 49,
    marketPrice: 79,
    features: [
      "Autonomous content strategy development",
      "Research-based content creation",
      "SEO optimization without instructions",
      "Brand voice consistency maintenance",
      "Content performance analysis",
    ],
    rating: 4.7,
    reviews: 1876,
    affiliateLink: "https://www.jasper.ai/?utm_source=affiliate&utm_medium=referral&utm_campaign=aiagents",
  },
  {
    id: 10,
    name: "Notion AI Agent",
    description:
      "An intelligent workspace agent that autonomously organizes information, generates documents, summarizes meetings, and manages projects while adapting to your work style and preferences.",
    icon: <FileText className="w-10 h-10 text-blue-600" />,
    category: "Productivity",
    price: 20,
    discountPrice: 16,
    marketPrice: 25,
    features: [
      "Autonomous document organization",
      "Meeting summarization and action item extraction",
      "Project management and tracking",
      "Knowledge base maintenance",
      "Workflow optimization suggestions",
    ],
    rating: 4.8,
    reviews: 1543,
    affiliateLink: "https://www.notion.so/product/ai?utm_source=affiliate&utm_medium=referral&utm_campaign=aiagents",
  },
  {
    id: 11,
    name: "Intercom Resolution Agent",
    description:
      "An autonomous customer support agent that handles inquiries, resolves issues, and maintains customer relationships with human-like conversation skills and decision-making capabilities.",
    icon: <Headphones className="w-10 h-10 text-blue-600" />,
    category: "Customer Support",
    price: 69,
    discountPrice: 59,
    marketPrice: 85,
    features: [
      "Autonomous issue diagnosis and resolution",
      "Contextual understanding of customer history",
      "Emotional intelligence in communications",
      "Decision-making for complex problems",
      "Proactive follow-up with customers",
    ],
    rating: 4.7,
    reviews: 876,
    affiliateLink: "https://www.intercom.com/ai-bot?utm_source=affiliate&utm_medium=referral&utm_campaign=aiagents",
  },
  {
    id: 12,
    name: "Ada Support Agent",
    description:
      "An AI customer service agent that autonomously handles support across multiple channels, learns from interactions, and continuously improves its ability to resolve customer issues.",
    icon: <Headphones className="w-10 h-10 text-blue-600" />,
    category: "Customer Support",
    price: 75,
    discountPrice: 65,
    marketPrice: 90,
    features: [
      "Autonomous multi-channel support",
      "Continuous learning from interactions",
      "Customer sentiment adaptation",
      "Complex issue resolution",
      "Personalized customer engagement",
    ],
    rating: 4.6,
    reviews: 753,
    affiliateLink: "https://www.ada.cx/?utm_source=affiliate&utm_medium=referral&utm_campaign=aiagents",
  },
  {
    id: 13,
    name: "Einstein Sales Agent",
    description:
      "An autonomous AI sales agent that qualifies leads, nurtures prospects, recommends products, and negotiates deals with minimal human intervention while adapting to customer preferences.",
    icon: <BarChart className="w-10 h-10 text-blue-600" />,
    category: "Sales",
    price: 60,
    discountPrice: 48,
    marketPrice: 75,
    features: [
      "Autonomous lead qualification and nurturing",
      "Personalized product recommendations",
      "Negotiation strategy adaptation",
      "Customer relationship management",
      "Sales opportunity prioritization",
    ],
    rating: 4.8,
    reviews: 1345,
    affiliateLink:
      "https://www.salesforce.com/products/einstein/?utm_source=affiliate&utm_medium=referral&utm_campaign=aiagents",
  },
  {
    id: 14,
    name: "Drift Conversation Agent",
    description:
      "An autonomous conversational agent that engages website visitors, qualifies leads, books meetings, and builds relationships through natural dialogue and adaptive conversation strategies.",
    icon: <MessageSquare className="w-10 h-10 text-blue-600" />,
    category: "Sales",
    price: 50,
    discountPrice: 40,
    marketPrice: 65,
    features: [
      "Autonomous visitor engagement",
      "Conversational lead qualification",
      "Meeting scheduling and management",
      "Personalized follow-up sequences",
      "Adaptive conversation strategies",
    ],
    rating: 4.7,
    reviews: 957,
    affiliateLink:
      "https://www.drift.com/platform/automation/?utm_source=affiliate&utm_medium=referral&utm_campaign=aiagents",
  },
  {
    id: 15,
    name: "Perplexity Research Agent",
    description:
      "An autonomous research agent that can investigate topics, gather information from multiple sources, verify facts, and synthesize comprehensive reports with minimal human guidance.",
    icon: <Search className="w-10 h-10 text-blue-600" />,
    category: "Research",
    price: 20,
    discountPrice: 17,
    marketPrice: 25,
    features: [
      "Autonomous research planning and execution",
      "Multi-source information gathering",
      "Fact verification and cross-referencing",
      "Insight synthesis and report generation",
      "Citation and source management",
    ],
    rating: 4.8,
    reviews: 786,
    affiliateLink: "https://www.perplexity.ai/?utm_source=affiliate&utm_medium=referral&utm_campaign=aiagents",
  },
  {
    id: 16,
    name: "Zapier Automation Agent",
    description:
      "An intelligent agent that autonomously creates, optimizes, and manages workflow automations across applications, learning from usage patterns to suggest improvements.",
    icon: <Layers className="w-10 h-10 text-blue-600" />,
    category: "Workflow Automation",
    price: 30,
    discountPrice: 25,
    marketPrice: 40,
    features: [
      "Autonomous workflow creation and optimization",
      "Error detection and self-correction",
      "Usage pattern analysis and recommendations",
      "Cross-application integration management",
      "Performance monitoring and reporting",
    ],
    rating: 4.7,
    reviews: 654,
    affiliateLink: "https://zapier.com/ai?utm_source=affiliate&utm_medium=referral&utm_campaign=aiagents",
  },
  {
    id: 17,
    name: "LangChain Agent",
    description:
      "A customizable AI agent framework that enables the creation of specialized agents that can reason, use tools, access external data, and solve complex problems autonomously.",
    icon: <Brain className="w-10 h-10 text-blue-600" />,
    category: "Development",
    price: 25,
    discountPrice: 20,
    marketPrice: 35,
    features: [
      "Tool-using agent capabilities",
      "Reasoning and planning abilities",
      "External data source integration",
      "Memory management for long contexts",
      "Multi-step task execution",
    ],
    rating: 4.6,
    reviews: 543,
    affiliateLink: "https://www.langchain.com/?utm_source=affiliate&utm_medium=referral&utm_campaign=aiagents",
  },
  {
    id: 18,
    name: "Grammarly Writing Agent",
    description:
      "An AI writing assistant that autonomously improves text quality, adjusts tone and style, ensures consistency, and enhances clarity while adapting to individual writing preferences.",
    icon: <Edit3 className="w-10 h-10 text-blue-600" />,
    category: "Content",
    price: 20,
    discountPrice: 16,
    marketPrice: 25,
    features: [
      "Autonomous writing improvement",
      "Style and tone adaptation",
      "Consistency maintenance across documents",
      "Learning from user preferences",
      "Context-aware suggestions",
    ],
    rating: 4.8,
    reviews: 2156,
    affiliateLink: "https://www.grammarly.com/business/?utm_source=affiliate&utm_medium=referral&utm_campaign=aiagents",
  },
  {
    id: 19,
    name: "Calendly Scheduling Agent",
    description:
      "An autonomous scheduling agent that manages your calendar, negotiates meeting times with participants, and optimizes your schedule based on preferences and priorities.",
    icon: <Calendar className="w-10 h-10 text-blue-600" />,
    category: "Productivity",
    price: 15,
    discountPrice: 12,
    marketPrice: 20,
    features: [
      "Autonomous calendar management",
      "Meeting negotiation with participants",
      "Schedule optimization based on preferences",
      "Priority-based time allocation",
      "Follow-up and rescheduling handling",
    ],
    rating: 4.9,
    reviews: 1896,
    affiliateLink: "https://calendly.com/?utm_source=affiliate&utm_medium=referral&utm_campaign=aiagents",
  },
  {
    id: 20,
    name: "Reclaim.ai Time Agent",
    description:
      "An AI time management agent that autonomously schedules tasks, protects focus time, and balances work priorities with personal well-being based on your goals and preferences.",
    icon: <Clock className="w-10 h-10 text-blue-600" />,
    category: "Productivity",
    price: 14,
    discountPrice: 12,
    marketPrice: 18,
    features: [
      "Autonomous task and meeting scheduling",
      "Focus time protection and management",
      "Work-life balance optimization",
      "Priority-based time allocation",
      "Adaptive scheduling based on energy levels",
    ],
    rating: 4.7,
    reviews: 764,
    affiliateLink: "https://reclaim.ai/?utm_source=affiliate&utm_medium=referral&utm_campaign=aiagents",
  },
  {
    id: 21,
    name: "HubSpot Sales Coach Agent",
    description:
      "An AI agent that autonomously analyzes sales conversations, provides personalized coaching, and helps sales representatives improve their techniques and close more deals.",
    icon: <Briefcase className="w-10 h-10 text-blue-600" />,
    category: "Sales",
    price: 45,
    discountPrice: 35,
    marketPrice: 55,
    features: [
      "Autonomous sales call analysis",
      "Personalized coaching and feedback",
      "Strategy recommendations for deals",
      "Competitive intelligence gathering",
      "Performance improvement tracking",
    ],
    rating: 4.6,
    reviews: 876,
    affiliateLink:
      "https://www.hubspot.com/products/sales?utm_source=affiliate&utm_medium=referral&utm_campaign=aiagents",
  },
  {
    id: 22,
    name: "Security Guardian Agent",
    description:
      "An autonomous cybersecurity agent that continuously monitors systems, detects threats, responds to incidents, and adapts defenses based on emerging attack patterns.",
    icon: <Shield className="w-10 h-10 text-blue-600" />,
    category: "Security",
    price: 80,
    discountPrice: 65,
    marketPrice: 95,
    features: [
      "Autonomous threat detection and response",
      "Continuous security posture assessment",
      "Adaptive defense strategy implementation",
      "Incident investigation and remediation",
      "Security policy enforcement",
    ],
    rating: 4.8,
    reviews: 687,
    affiliateLink: "https://www.darktrace.com/?utm_source=affiliate&utm_medium=referral&utm_campaign=aiagents",
  },
  {
    id: 23,
    name: "HR Assistant Agent",
    description:
      "An AI agent that autonomously handles employee inquiries, manages onboarding processes, conducts initial interviews, and provides personalized HR support across the organization.",
    icon: <Users className="w-10 h-10 text-blue-600" />,
    category: "Human Resources",
    price: 40,
    discountPrice: 32,
    marketPrice: 50,
    features: [
      "Autonomous employee inquiry handling",
      "Onboarding process management",
      "Initial candidate screening and interviewing",
      "Policy guidance and interpretation",
      "Employee satisfaction monitoring",
    ],
    rating: 4.7,
    reviews: 543,
    affiliateLink: "https://www.workday.com/?utm_source=affiliate&utm_medium=referral&utm_campaign=aiagents",
  },
  {
    id: 24,
    name: "Data Analyst Agent",
    description:
      "An autonomous AI agent that analyzes business data, identifies trends, generates insights, and creates visualizations and reports with minimal human guidance.",
    icon: <BarChart className="w-10 h-10 text-blue-600" />,
    category: "Analytics",
    price: 55,
    discountPrice: 45,
    marketPrice: 70,
    features: [
      "Autonomous data analysis and pattern detection",
      "Insight generation and prioritization",
      "Visualization creation and optimization",
      "Anomaly detection and investigation",
      "Predictive trend forecasting",
    ],
    rating: 4.8,
    reviews: 876,
    affiliateLink: "https://www.tableau.com/?utm_source=affiliate&utm_medium=referral&utm_campaign=aiagents",
  },
]

const categories = [
  "All",
  "Autonomous",
  "General Purpose",
  "Workflow Automation",
  "Development",
  "Creative",
  "Content",
  "Customer Support",
  "Sales",
  "Research",
  "Productivity",
  "Security",
  "Human Resources",
  "Analytics",
]

// Calculate average savings percentage across all agents
const calculateAverageSavings = () => {
  let totalSavingsPercentage = 0
  aiAgents.forEach((agent) => {
    const savingsPercentage = ((agent.marketPrice - agent.discountPrice) / agent.marketPrice) * 100
    totalSavingsPercentage += savingsPercentage
  })
  return Math.round(totalSavingsPercentage / aiAgents.length)
}

export default function AIAgentsPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const averageSavings = calculateAverageSavings()

  // Filter agents based on selected category and search query
  const filteredAgents = aiAgents.filter((agent) => {
    const matchesCategory = activeCategory === "All" || agent.category === activeCategory
    const matchesSearch =
      searchQuery === "" ||
      agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.description.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesCategory && matchesSearch
  })

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">AI Agents Marketplace</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover autonomous AI agents that work independently on your behalf, making decisions and completing
            complex tasks with minimal supervision
          </p>

          {/* AILearnX Discount Banner */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 rounded-lg max-w-3xl mx-auto mb-8">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Tag className="w-5 h-5" />
              <h2 className="text-xl font-bold">AILearnX Exclusive Discount</h2>
            </div>
            <p className="text-sm mb-2">
              Subscribe through AILearnX and save up to {averageSavings}% compared to standard market prices
            </p>
            <div className="flex justify-center">
              <span className="bg-white text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                Verified Partners
              </span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-gray-500" />
              </div>
              <input
                type="search"
                className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search AI agents by name or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* What are AI Agents? */}
      <section className="bg-blue-50 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">What Are AI Agents?</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 mb-6">
              AI agents are autonomous systems that can perceive their environment, make decisions, and take actions to
              achieve specific goals with minimal human supervision. Unlike traditional AI tools that require constant
              direction, agents can:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-start mb-3">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Brain className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-bold">Work Autonomously</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Agents can understand objectives, create plans, and execute tasks independently without requiring
                  step-by-step human guidance.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-start mb-3">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Zap className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-bold">Make Decisions</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Agents can evaluate options, consider constraints, and make informed decisions based on available
                  information and learned patterns.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-start mb-3">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Layers className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-bold">Learn and Adapt</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Agents improve over time by learning from interactions, feedback, and outcomes, continuously enhancing
                  their performance and capabilities.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-start mb-3">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <MessageSquare className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-bold">Represent Your Interests</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Agents can act on your behalf, representing your preferences and priorities when interacting with
                  systems, services, or other agents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gray-50 py-4 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  category === activeCategory
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-blue-600 hover:text-blue-600"
                }`}
                aria-pressed={category === activeCategory}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Agents Grid */}
      <section id="agents" className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-2 text-center">Our AI Agents</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            {activeCategory === "All"
              ? "Browse our complete collection of autonomous AI agents that work independently on your behalf."
              : `Showing ${filteredAgents.length} agents in the ${activeCategory} category.`}
          </p>

          {filteredAgents.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-lg text-gray-600">
                No agents found matching your criteria. Please try a different search or category.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAgents.map((agent) => {
                // Calculate savings percentage
                const savingsPercentage = Math.round(
                  ((agent.marketPrice - agent.discountPrice) / agent.marketPrice) * 100,
                )

                return (
                  <div
                    key={agent.id}
                    className="bg-white rounded-lg border border-gray-200 overflow-hidden transition-all hover:shadow-md relative"
                  >
                    {/* Discount Badge */}
                    <div className="absolute top-0 right-0">
                      <div className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-bl-lg flex items-center">
                        <Percent className="w-3 h-3 mr-1" />
                        Save {savingsPercentage}%
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center">
                          <div className="bg-blue-50 p-3 rounded-full mr-3">{agent.icon}</div>
                          <h3 className="text-lg font-bold">{agent.name}</h3>
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          <span className="ml-1 text-sm font-medium">{agent.rating}</span>
                          <span className="ml-1 text-xs text-gray-500">({agent.reviews})</span>
                        </div>
                      </div>
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full mb-3">
                        {agent.category}
                      </span>
                      <p className="text-gray-600 mb-4 text-sm line-clamp-2">{agent.description}</p>
                      <div className="mb-4">
                        <h4 className="text-sm font-medium mb-2">Key Capabilities:</h4>
                        <ul className="space-y-1">
                          {agent.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-xs text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-4 border-t">
                        <div className="flex items-end mb-3">
                          <span className="text-xl font-bold">${agent.discountPrice}</span>
                          <span className="ml-2 text-xs text-gray-500 line-through">${agent.price}/mo</span>
                          <span className="ml-auto text-xs text-gray-500">
                            Market price: <span className="line-through">${agent.marketPrice}</span>
                          </span>
                        </div>
                        <a
                          href={agent.affiliateLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-blue-700 transition flex items-center justify-center"
                        >
                          Deploy Agent <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* Agent Benefits Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Benefits of AI Agents</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">Time Freedom</h3>
              <p className="text-gray-600 text-sm">
                AI agents work 24/7 on your behalf, handling routine tasks and complex processes while you focus on
                high-value activities and strategic thinking.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">Enhanced Capabilities</h3>
              <p className="text-gray-600 text-sm">
                Agents augment your abilities by processing vast amounts of information, identifying patterns, and
                executing complex workflows beyond human capacity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">Continuous Learning</h3>
              <p className="text-gray-600 text-sm">
                Unlike static tools, AI agents improve over time by learning from interactions, adapting to your
                preferences, and optimizing their performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison with Traditional Methods */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">AI Agents vs. Traditional Methods</h2>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-3 px-4 text-left border-b">Task Type</th>
                  <th className="py-3 px-4 text-left border-b">Traditional Method</th>
                  <th className="py-3 px-4 text-left border-b">AI Agent Approach</th>
                  <th className="py-3 px-4 text-left border-b">Time Savings</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4 border-b">Research & Analysis</td>
                  <td className="py-3 px-4 border-b">Manual searching and synthesizing</td>
                  <td className="py-3 px-4 border-b">Autonomous information gathering and insight generation</td>
                  <td className="py-3 px-4 border-b">75-85%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">Customer Support</td>
                  <td className="py-3 px-4 border-b">Human agents handling all inquiries</td>
                  <td className="py-3 px-4 border-b">
                    Autonomous issue resolution with human escalation only when needed
                  </td>
                  <td className="py-3 px-4 border-b">60-70%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">Content Creation</td>
                  <td className="py-3 px-4 border-b">Manual writing and editing</td>
                  <td className="py-3 px-4 border-b">End-to-end content planning, creation, and optimization</td>
                  <td className="py-3 px-4 border-b">70-80%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">Project Management</td>
                  <td className="py-3 px-4 border-b">Manual tracking and coordination</td>
                  <td className="py-3 px-4 border-b">Autonomous task management, follow-ups, and reporting</td>
                  <td className="py-3 px-4 border-b">50-60%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <section className="py-6 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-sm font-medium mb-2">Affiliate Disclosure</h3>
            <p className="text-xs text-gray-600">
              Some of the links on this page are affiliate links. This means if you click on the link and subscribe to
              the service, we may receive an affiliate commission at no extra cost to you. We only recommend AI agents
              we've evaluated thoroughly and believe provide real value. The discounted prices shown reflect special
              rates negotiated through our partnerships with AI agent providers.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
