
import { 
  MessagesSquare, 
  Calendar, 
  BarChart3, 
  GlobeIcon, 
  ShieldCheck, 
  Zap 
} from "lucide-react";

const features = [
  {
    icon: <MessagesSquare className="h-10 w-10 text-blue-600" />,
    title: "Customer Service",
    description: "24/7 AI-powered customer service that answers questions, resolves issues, and provides personalized support."
  },
  {
    icon: <Calendar className="h-10 w-10 text-blue-600" />,
    title: "Scheduling & Appointments",
    description: "Automatically manage bookings, send reminders, and handle rescheduling without human intervention."
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-blue-600" />,
    title: "Data Analysis",
    description: "Transform raw business data into actionable insights with automated reports and trend analysis."
  },
  {
    icon: <GlobeIcon className="h-10 w-10 text-blue-600" />,
    title: "Multi-Language Support",
    description: "Break language barriers with instant translation and native-quality responses in over 30 languages."
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-blue-600" />,
    title: "Secure & Compliant",
    description: "Enterprise-grade security with data encryption and compliance with GDPR, HIPAA, and other regulations."
  },
  {
    icon: <Zap className="h-10 w-10 text-blue-600" />,
    title: "Easy Integration",
    description: "Seamlessly connect with your existing tools and platforms through our simple API or pre-built connectors."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Powerful AI Solutions for Your Business
          </h2>
          <p className="text-xl text-gray-600">
            Our AI agents automate time-consuming tasks, enhance customer experience, and provide valuable insights for your business.
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
