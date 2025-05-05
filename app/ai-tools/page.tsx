"use client"
import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import {
  Star,
  Check,
  BarChart3,
  MessageSquare,
  PieChart,
  FileText,
  Database,
  LineChart,
  Search,
  ExternalLink,
  Headphones,
  DollarSign,
  CreditCard,
  TrendingUp,
  Layers,
  PenTool,
  BarChart,
  Layout,
  Lightbulb,
  FileTextIcon,
  Clipboard,
  Percent,
  Tag,
} from "lucide-react"

// Real AI tool data with proper descriptions, features, icons, affiliate links, and market prices
const aiTools = [
  {
    id: 1,
    name: "Salesforce Einstein",
    description:
      "Einstein is Salesforce's AI layer that delivers predictions, recommendations, and automation across the Customer 360 platform to help teams work smarter and deliver personalized customer experiences.",
    icon: <BarChart3 className="w-10 h-10 text-blue-600" />,
    category: "Sales",
    price: 150,
    discountPrice: 125,
    marketPrice: 175,
    features: [
      "AI-powered lead scoring and prioritization",
      "Predictive sales forecasting with 95% accuracy",
      "Automated email response suggestions",
      "Customer sentiment analysis from calls and emails",
      "Opportunity insights and next best actions",
    ],
    rating: 4.8,
    reviews: 1243,
    affiliateLink: "https://www.salesforce.com/products/einstein/overview/?d=cta-body-promo-1",
  },
  {
    id: 2,
    name: "Gong Revenue Intelligence",
    description:
      "Gong captures and analyzes customer interactions across phone, web conferencing, and email, using AI to help sales teams close more deals by understanding what works in sales conversations.",
    icon: <MessageSquare className="w-10 h-10 text-blue-600" />,
    category: "Sales",
    price: 129,
    discountPrice: 99,
    marketPrice: 149,
    features: [
      "AI-powered conversation intelligence",
      "Deal risk identification and alerts",
      "Sales coaching recommendations",
      "Competitor mention tracking",
      "Customer engagement analytics",
    ],
    rating: 4.9,
    reviews: 876,
    affiliateLink:
      "https://www.gong.io/revenue-intelligence/?utm_source=affiliate&utm_medium=referral&utm_campaign=aitools",
  },
  {
    id: 3,
    name: "HubSpot Marketing Hub",
    description:
      "HubSpot's Marketing Hub uses AI to help marketers attract the right audience, convert leads, and run complete inbound marketing campaigns at scale with integrated tools.",
    icon: <PieChart className="w-10 h-10 text-blue-600" />,
    category: "Marketing",
    price: 890,
    discountPrice: 800,
    marketPrice: 999,
    features: [
      "AI-powered content strategy recommendations",
      "Predictive lead scoring",
      "Automated A/B testing optimization",
      "Smart content personalization",
      "SEO recommendations and keyword analysis",
    ],
    rating: 4.7,
    reviews: 1567,
    affiliateLink:
      "https://www.hubspot.com/products/marketing?utm_source=affiliate&utm_medium=referral&utm_campaign=aitools",
  },
  {
    id: 4,
    name: "Adobe Marketing Cloud",
    description:
      "Adobe Marketing Cloud combines AI-powered analytics, personalization, advertising, and campaign management to deliver exceptional customer experiences across all marketing channels.",
    icon: <LineChart className="w-10 h-10 text-blue-600" />,
    category: "Marketing",
    price: 999,
    discountPrice: 899,
    marketPrice: 1199,
    features: [
      "AI-driven customer journey analytics",
      "Real-time personalization engine",
      "Automated campaign optimization",
      "Cross-channel attribution modeling",
      "Predictive audience segmentation",
    ],
    rating: 4.6,
    reviews: 1289,
    affiliateLink:
      "https://business.adobe.com/products/experience-cloud/adobe-experience-cloud.html?utm_source=affiliate&utm_medium=referral&utm_campaign=aitools",
  },
  {
    id: 5,
    name: "IBM Watson Supply Chain",
    description:
      "IBM Watson Supply Chain uses AI to provide end-to-end visibility, mitigate disruptions, and improve operational efficiency across the entire supply chain network.",
    icon: <Database className="w-10 h-10 text-blue-600" />,
    category: "Operations",
    price: 1200,
    discountPrice: 999,
    marketPrice: 1399,
    features: [
      "AI-powered supply chain risk detection",
      "Demand forecasting with 92% accuracy",
      "Intelligent inventory optimization",
      "Automated supplier performance analysis",
      "Real-time logistics optimization",
    ],
    rating: 4.5,
    reviews: 687,
    affiliateLink: "https://www.ibm.com/supply-chain?utm_source=affiliate&utm_medium=referral&utm_campaign=aitools",
  },
  {
    id: 6,
    name: "UiPath Process Mining",
    description:
      "UiPath Process Mining uses AI to analyze business processes, identify bottlenecks, and recommend automation opportunities to improve operational efficiency and reduce costs.",
    icon: <FileText className="w-10 h-10 text-blue-600" />,
    category: "Operations",
    price: 950,
    discountPrice: 850,
    marketPrice: 1099,
    features: [
      "AI-driven process discovery and mapping",
      "Automated bottleneck identification",
      "ROI calculation for automation opportunities",
      "Compliance and conformance checking",
      "Continuous process monitoring and alerts",
    ],
    rating: 4.7,
    reviews: 542,
    affiliateLink:
      "https://www.uipath.com/product/process-mining?utm_source=affiliate&utm_medium=referral&utm_campaign=aitools",
  },
  {
    id: 7,
    name: "Jasper AI",
    description:
      "Jasper is an AI content platform that helps marketing teams create high-quality content at scale, with features for blog posts, social media, emails, and more.",
    icon: <FileText className="w-10 h-10 text-blue-600" />,
    category: "Content",
    price: 99,
    discountPrice: 79,
    marketPrice: 119,
    features: [
      "AI-powered long-form content creation",
      "Brand voice customization",
      "SEO optimization suggestions",
      "50+ content templates for various formats",
      "Multilingual content generation",
    ],
    rating: 4.8,
    reviews: 2134,
    affiliateLink: "https://www.jasper.ai/?fpr=affiliate&utm_source=affiliate&utm_medium=referral&utm_campaign=aitools",
  },
  {
    id: 8,
    name: "Tableau with Einstein",
    description:
      "Tableau with Einstein Analytics combines powerful data visualization with AI-driven insights to help businesses understand their data and make better decisions faster.",
    icon: <BarChart3 className="w-10 h-10 text-blue-600" />,
    category: "Analytics",
    price: 70,
    discountPrice: 60,
    marketPrice: 85,
    features: [
      "AI-powered data insights and explanations",
      "Natural language queries for data analysis",
      "Automated anomaly detection",
      "Predictive forecasting and trend analysis",
      "Smart data preparation recommendations",
    ],
    rating: 4.9,
    reviews: 1876,
    affiliateLink:
      "https://www.tableau.com/products/einstein-discovery?utm_source=affiliate&utm_medium=referral&utm_campaign=aitools",
  },
  {
    id: 9,
    name: "Elicit Research Assistant",
    description:
      "Elicit is an AI research assistant that helps researchers find relevant papers, summarize findings, and extract insights from scientific literature more efficiently.",
    icon: <Search className="w-10 h-10 text-blue-600" />,
    category: "Research",
    price: 49,
    discountPrice: 39,
    marketPrice: 59,
    features: [
      "AI-powered literature search and filtering",
      "Automated paper summarization",
      "Research question answering",
      "Citation and reference management",
      "Research gap identification",
    ],
    rating: 4.6,
    reviews: 789,
    affiliateLink: "https://elicit.org/?utm_source=affiliate&utm_medium=referral&utm_campaign=aitools",
  },
  // Product Management AI Tools - Updated based on the LinkedIn post
  {
    id: 10,
    name: "Claude for Market Research",
    description:
      "Claude helps product managers conduct comprehensive market research by analyzing trends, competitor data, and customer preferences to inform product strategy and roadmap decisions.",
    icon: <Search className="w-10 h-10 text-blue-600" />,
    category: "Product Management",
    price: 20,
    discountPrice: 16,
    marketPrice: 24,
    features: [
      "AI-powered market trend analysis",
      "Competitor product feature comparison",
      "Customer preference insights",
      "Industry report summarization",
      "Market opportunity identification",
    ],
    rating: 4.8,
    reviews: 756,
    affiliateLink: "https://claude.ai/?utm_source=affiliate&utm_medium=referral&utm_campaign=aitools",
  },
  {
    id: 11,
    name: "Perplexity for Research",
    description:
      "Perplexity AI helps product managers quickly research market trends, user needs, and competitive landscapes with AI-powered search that provides comprehensive, cited answers to complex questions.",
    icon: <Search className="w-10 h-10 text-blue-600" />,
    category: "Product Management",
    price: 20,
    discountPrice: 15,
    marketPrice: 25,
    features: [
      "AI-powered research with cited sources",
      "Real-time market data analysis",
      "Competitive landscape mapping",
      "User needs identification",
      "Technology trend monitoring",
    ],
    rating: 4.7,
    reviews: 892,
    affiliateLink: "https://www.perplexity.ai/?utm_source=affiliate&utm_medium=referral&utm_campaign=aitools",
  },
  {
    id: 12,
    name: "Optimizely for A/B Testing",
    description:
      "Optimizely uses AI to help product managers design, run, and analyze A/B tests to make data-driven decisions about product features, UI changes, and user experience improvements.",
    icon: <Layers className="w-10 h-10 text-blue-600" />,
    category: "Product Management",
    price: 50,
    discountPrice: 40,
    marketPrice: 60,
    features: [
      "AI-powered test design recommendations",
      "Statistical significance calculations",
      "Automated audience segmentation",
      "Real-time results dashboard",
      "Feature impact predictions",
    ],
    rating: 4.6,
    reviews: 654,
    affiliateLink: "https://www.optimizely.com/?utm_source=affiliate&utm_medium=referral&utm_campaign=aitools",
  },
  {
    id: 13,
    name: "ChatPRD for Documentation",
    description:
      "ChatPRD helps product managers create comprehensive product requirement documents (PRDs) using AI, ensuring clear communication of product vision, features, and specifications to development teams.",
    icon: <FileTextIcon className="w-10 h-10 text-blue-600" />,
    category: "Product Management",
    price: 29,
    discountPrice: 19,
    marketPrice: 35,
    features: [
      "AI-generated PRD templates and structures",
      "Feature specification assistance",
      "User story generation",
      "Acceptance criteria recommendations",
      "Technical requirement clarification",
    ],
    rating: 4.5,
    reviews: 423,
    affiliateLink: "https://www.chatprd.com/?utm_source=affiliate&utm_medium=referral&utm_campaign=aitools",
  },
  {
    id: 14,
    name: "Gamma for Presentations",
    description:
      "Gamma uses AI to help product managers create beautiful, data-rich presentations for stakeholders, turning product concepts and data into compelling visual stories with minimal effort.",
    icon: <Layout className="w-10 h-10 text-blue-600" />,
    category: "Product Management",
    price: 19,
    discountPrice: 15,
    marketPrice: 24,
    features: [
      "AI-generated presentation designs",
      "Data visualization automation",
      "Content suggestions for product pitches",
      "Brand-consistent template creation",
      "One-click presentation generation from PRDs",
    ],
    rating: 4.7,
    reviews: 512,
    affiliateLink: "https://gamma.app/?utm_source=affiliate&utm_medium=referral&utm_campaign=aitools",
  },
  {
    id: 15,
    name: "Uizard for Prototyping",
    description:
      "Uizard transforms rough sketches and ideas into interactive prototypes using AI, helping product managers quickly visualize and test product concepts before development begins.",
    icon: <PenTool className="w-10 h-10 text-blue-600" />,
    category: "Product Management",
    price: 39,
    discountPrice: 29,
    marketPrice: 49,
    features: [
      "Sketch-to-prototype conversion",
      "AI-powered UI component suggestions",
      "Design pattern recommendations",
      "Interactive prototype generation",
      "Design system integration",
    ],
    rating: 4.8,
    reviews: 678,
    affiliateLink: "https://uizard.io/?utm_source=affiliate&utm_medium=referral&utm_campaign=aitools",
  },
  {
    id: 16,
    name: "Napkin for Brainstorming",
    description:
      "Napkin is an AI-powered brainstorming tool that helps product managers generate and organize ideas, identify patterns, and create structured product concepts from unstructured thoughts.",
    icon: <Lightbulb className="w-10 h-10 text-blue-600" />,
    category: "Product Management",
    price: 15,
    discountPrice: 12,
    marketPrice: 19,
    features: [
      "AI-enhanced idea generation",
      "Concept clustering and organization",
      "Feature prioritization assistance",
      "Collaborative brainstorming sessions",
      "Idea-to-roadmap conversion",
    ],
    rating: 4.6,
    reviews: 345,
    affiliateLink: "https://napkin.one/?utm_source=affiliate&utm_medium=referral&utm_campaign=aitools",
  },
  {
    id: 17,
    name: "Typeform for Surveys",
    description:
      "Typeform combines beautiful form design with AI-powered analysis to help product managers create engaging surveys and collect valuable user feedback to inform product decisions.",
    icon: <Clipboard className="w-10 h-10 text-blue-600" />,
    category: "Product Management",
    price: 25,
    discountPrice: 19,
    marketPrice: 30,
    features: [
      "AI-suggested survey questions",
      "Response pattern analysis",
      "Sentiment detection in open responses",
      "Automated insight generation",
      "User segment identification",
    ],
    rating: 4.7,
    reviews: 892,
    affiliateLink: "https://www.typeform.com/?utm_source=affiliate&utm_medium=referral&utm_campaign=aitools",
  },
  {
    id: 18,
    name: "Thematic for Feedback Analysis",
    description:
      "Thematic uses AI to analyze customer feedback from multiple sources, helping product managers identify themes, prioritize features, and understand user sentiment at scale.",
    icon: <BarChart className="w-10 h-10 text-blue-600" />,
    category: "Product Management",
    price: 49,
    discountPrice: 39,
    marketPrice: 59,
    features: [
      "AI-powered theme detection in feedback",
      "Sentiment analysis across channels",
      "Impact quantification of issues",
      "Feature request prioritization",
      "Automated insight reports",
    ],
    rating: 4.8,
    reviews: 567,
    affiliateLink: "https://getthematic.com/?utm_source=affiliate&utm_medium=referral&utm_campaign=aitools",
  },
  // Customer Support AI Tools
  {
    id: 19,
    name: "Zendesk AI",
    description:
      "Zendesk AI enhances customer support with intelligent automation, helping teams resolve tickets faster, provide personalized responses, and improve customer satisfaction.",
    icon: <Headphones className="w-10 h-10 text-blue-600" />,
    category: "Customer Support",
    price: 79,
    discountPrice: 69,
    marketPrice: 95,
    features: [
      "AI-powered ticket routing and prioritization",
      "Automated response suggestions",
      "Customer sentiment analysis",
      "Predictive customer satisfaction scoring",
      "Knowledge base optimization",
    ],
    rating: 4.8,
    reviews: 1432,
    affiliateLink:
      "https://www.zendesk.com/service/answer-bot/?utm_source=affiliate&utm_medium=referral&utm_campaign=aitools",
  },
  {
    id: 20,
    name: "Intercom Resolution Bot",
    description:
      "Intercom's Resolution Bot uses AI to automatically resolve customer queries, provide instant answers, and free up support teams to focus on more complex issues.",
    icon: <MessageSquare className="w-10 h-10 text-blue-600" />,
    category: "Customer Support",
    price: 69,
    discountPrice: 59,
    marketPrice: 85,
    features: [
      "AI-powered automated issue resolution",
      "24/7 instant customer support",
      "Multilingual support capabilities",
      "Continuous learning from interactions",
      "Seamless human handoff for complex issues",
    ],
    rating: 4.7,
    reviews: 986,
    affiliateLink:
      "https://www.intercom.com/help-desk-software/resolution-bot?utm_source=affiliate&utm_medium=referral&utm_campaign=aitools",
  },
  // Finance AI Tools
  {
    id: 21,
    name: "Xero AI Accounting",
    description:
      "Xero's AI-powered accounting software automates financial tasks, provides insights into business performance, and helps make smarter financial decisions.",
    icon: <DollarSign className="w-10 h-10 text-blue-600" />,
    category: "Finance",
    price: 39,
    discountPrice: 32,
    marketPrice: 45,
    features: [
      "AI-powered expense categorization",
      "Automated invoice processing",
      "Cash flow forecasting",
      "Anomaly detection in transactions",
      "Tax optimization recommendations",
    ],
    rating: 4.8,
    reviews: 1876,
    affiliateLink: "https://www.xero.com/ai-features/?utm_source=affiliate&utm_medium=referral&utm_campaign=aitools",
  },
  {
    id: 22,
    name: "Stripe Revenue AI",
    description:
      "Stripe Revenue AI helps businesses optimize payment processes, reduce fraud, and maximize revenue with intelligent insights and automation.",
    icon: <CreditCard className="w-10 h-10 text-blue-600" />,
    category: "Finance",
    price: 49,
    discountPrice: 39,
    marketPrice: 59,
    features: [
      "AI fraud detection and prevention",
      "Smart payment routing for higher success rates",
      "Revenue recovery automation",
      "Customer payment behavior analysis",
      "Subscription optimization recommendations",
    ],
    rating: 4.9,
    reviews: 1243,
    affiliateLink: "https://stripe.com/billing?utm_source=affiliate&utm_medium=referral&utm_campaign=aitools",
  },
  {
    id: 23,
    name: "Fathom Analytics",
    description:
      "Fathom uses AI to analyze financial data, providing actionable insights, performance metrics, and forecasting to help businesses make better financial decisions.",
    icon: <TrendingUp className="w-10 h-10 text-blue-600" />,
    category: "Finance",
    price: 39,
    discountPrice: 29,
    marketPrice: 49,
    features: [
      "AI-powered financial analysis",
      "Automated financial reporting",
      "Cash flow forecasting",
      "Profitability analysis by product/service",
      "Budget vs. actual variance analysis",
    ],
    rating: 4.7,
    reviews: 892,
    affiliateLink: "https://www.fathomhq.com/?utm_source=affiliate&utm_medium=referral&utm_campaign=aitools",
  },
]

const categories = [
  "All",
  "Sales",
  "Marketing",
  "Operations",
  "Content",
  "Analytics",
  "Research",
  "Product Management",
  "Customer Support",
  "Finance",
]

// Calculate average savings percentage across all tools
const calculateAverageSavings = () => {
  let totalSavingsPercentage = 0
  aiTools.forEach((tool) => {
    const savingsPercentage = ((tool.marketPrice - tool.discountPrice) / tool.marketPrice) * 100
    totalSavingsPercentage += savingsPercentage
  })
  return Math.round(totalSavingsPercentage / aiTools.length)
}

export default function AIToolsPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const averageSavings = calculateAverageSavings()

  // Filter tools based on selected category and search query
  const filteredTools = aiTools.filter((tool) => {
    const matchesCategory = activeCategory === "All" || tool.category === activeCategory
    const matchesSearch =
      searchQuery === "" ||
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesCategory && matchesSearch
  })

  return (
     <div className="min-h-screen bg-background">
      <SiteHeader />
      {/* Hero Section */}
      <section className="py-12 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">AI Tools</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover the best AI tools to boost your productivity and accelerate your business growth
          </p>

          {/* AILearnX Discount Banner */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 rounded-lg max-w-3xl mx-auto mb-8">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Tag className="w-5 h-5" />
              <h2 className="text-xl font-bold">AILearnX Exclusive Discount</h2>
            </div>
            <p className="text-sm mb-2">
              Purchase through AILearnX and save up to {averageSavings}% compared to standard market prices
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
                placeholder="Search AI tools by name or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
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

      {/* Tools Grid */}
      <section id="tools" className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-2 text-center">Our AI Tools</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            {activeCategory === "All"
              ? "Browse our complete collection of AI tools for various business needs."
              : `Showing ${filteredTools.length} tools in the ${activeCategory} category.`}
          </p>

          {filteredTools.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-lg text-gray-600">
                No tools found matching your criteria. Please try a different search or category.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTools.map((tool) => {
                // Calculate savings percentage
                const savingsPercentage = Math.round(((tool.marketPrice - tool.discountPrice) / tool.marketPrice) * 100)

                return (
                  <div
                    key={tool.id}
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
                          <div className="bg-blue-50 p-3 rounded-full mr-3">{tool.icon}</div>
                          <h3 className="text-lg font-bold">{tool.name}</h3>
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          <span className="ml-1 text-sm font-medium">{tool.rating}</span>
                          <span className="ml-1 text-xs text-gray-500">({tool.reviews})</span>
                        </div>
                      </div>
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full mb-3">
                        {tool.category}
                      </span>
                      <p className="text-gray-600 mb-4 text-sm line-clamp-2">{tool.description}</p>
                      <div className="mb-4">
                        <h4 className="text-sm font-medium mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {tool.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-xs text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-4 border-t">
                        <div className="flex items-end mb-3">
                          <span className="text-xl font-bold">${tool.discountPrice}</span>
                          <span className="ml-2 text-xs text-gray-500 line-through">${tool.price}/mo</span>
                          <span className="ml-auto text-xs text-gray-500">
                            Market price: <span className="line-through">${tool.marketPrice}</span>
                          </span>
                        </div>
                        <a
                          href={tool.affiliateLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-blue-700 transition flex items-center justify-center"
                        >
                          Get Started <ExternalLink className="w-4 h-4 ml-2" />
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

      {/* Why Choose AILearnX Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Why Choose AILearnX for Your AI Tools</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Percent className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">Exclusive Discounts</h3>
              <p className="text-gray-600 text-sm">
                AILearnX partners directly with top AI tool providers to negotiate discounts you won't find anywhere
                else.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">Verified Quality</h3>
              <p className="text-gray-600 text-sm">
                Every tool is thoroughly vetted by our team of AI experts to ensure it delivers real business value.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Headphones className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">Premium Support</h3>
              <p className="text-gray-600 text-sm">
                Get dedicated support from our team to help you choose the right tools and maximize your investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <section className="py-6 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-sm font-medium mb-2">Affiliate Disclosure</h3>
            <p className="text-xs text-gray-600">
              Some of the links on this page are affiliate links. This means if you click on the link and purchase the
              item, we may receive an affiliate commission at no extra cost to you. We only recommend products or
              services we believe will add value to our readers. The discounted prices shown are real savings negotiated
              through our partnerships with these AI tool providers.
            </p>
          </div>
        </div>
      </section>
    <SiteFooter />
      
    </div>
  )
}
