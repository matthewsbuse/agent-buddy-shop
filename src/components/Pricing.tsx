
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for small businesses just getting started with AI.",
    features: [
      "1 AI agent",
      "Up to 1,000 interactions/month",
      "Customer service automation",
      "Email notifications",
      "Basic reporting",
      "Standard support"
    ],
    popular: false,
    buttonText: "Get Started"
  },
  {
    name: "Professional",
    price: "$79",
    description: "Ideal for growing businesses with demanding needs.",
    features: [
      "3 AI agents",
      "Up to 5,000 interactions/month",
      "Customer service automation",
      "Scheduling & appointment booking",
      "Data insights & reporting",
      "Multi-language support",
      "Priority support"
    ],
    popular: true,
    buttonText: "Start Free Trial"
  },
  {
    name: "Enterprise",
    price: "$199",
    description: "Advanced AI solutions tailored for larger operations.",
    features: [
      "10 AI agents",
      "Unlimited interactions",
      "All Professional features",
      "Custom AI training",
      "Advanced analytics",
      "API access & integrations",
      "24/7 dedicated support",
      "Custom compliance features"
    ],
    popular: false,
    buttonText: "Contact Sales"
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600">
            Choose the plan that's right for your business. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl bg-white border ${plan.popular ? 'border-blue-500 shadow-xl' : 'border-gray-200'} overflow-hidden transition-all duration-300 hover:shadow-lg`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-blue-500 text-white text-center text-sm font-medium py-1">
                  Most Popular
                </div>
              )}
              <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                  <span className="ml-1 text-xl font-medium text-gray-500">/month</span>
                </div>
                <p className="mt-5 text-gray-600">{plan.description}</p>
                
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-blue-500 flex-shrink-0 mr-3 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8">
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-800 hover:bg-gray-900'}`}
                    size="lg"
                  >
                    {plan.buttonText}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Need a custom solution? <a href="#contact" className="text-blue-600 hover:underline">Contact our sales team</a> for a tailored plan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
