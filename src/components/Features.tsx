
import { 
  MessagesSquare, 
  Sparkles,
  BarChart3, 
  GlobeIcon, 
  ShieldCheck, 
  Code 
} from "lucide-react";

const features = [
  {
    icon: <MessagesSquare className="h-10 w-10 text-blue-600" />,
    title: "24/7 Customer Support",
    description: "Your chatbot never sleeps, providing instant responses to customer inquiries at any time of day or night."
  },
  {
    icon: <Sparkles className="h-10 w-10 text-blue-600" />,
    title: "AI-Powered Learning",
    description: "Our chatbots learn from each interaction to provide increasingly accurate and helpful responses over time."
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-blue-600" />,
    title: "Customer Insights",
    description: "Gain valuable insights into your customers' most common questions and pain points through detailed analytics."
  },
  {
    icon: <GlobeIcon className="h-10 w-10 text-blue-600" />,
    title: "Multi-Language Support",
    description: "Communicate with customers in their preferred language with support for over 30 languages."
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-blue-600" />,
    title: "Secure & Compliant",
    description: "Enterprise-grade security with data encryption and compliance with GDPR, CCPA, and other privacy regulations."
  },
  {
    icon: <Code className="h-10 w-10 text-blue-600" />,
    title: "Simple Integration",
    description: "Add the chatbot to your website with just a few lines of code - no developer skills required."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Smart Chatbots for Better Customer Experiences
          </h2>
          <p className="text-xl text-gray-600">
            Our AI-powered chatbots learn from your business data to provide personalized responses, reduce support costs, and improve customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-xl p-8 bg-white hover:shadow-lg transition-shadow duration-300 card-glow"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
