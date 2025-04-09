
import { ArrowRight, Bot, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="hero-gradient py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5">
              <span className="text-xs font-medium text-blue-700">AI Chatbots for Customer Service</span>
            </div>
            
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-gray-900">
              Personalized Chatbots That <span className="text-blue-600">Answer Questions</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
              Enhance your website with intelligent chatbots that handle customer inquiries 24/7. Our AI-powered solution learns from your business data to provide accurate, personalized responses.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-base">
                <span>Get Your Chatbot</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="text-blue-600 border-blue-200 hover:bg-blue-50 text-base">
                See Live Demo
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700">Easy website integration</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700">Customizable appearance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700">Free 14-day trial</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg blur opacity-20"></div>
            <div className="relative bg-white rounded-lg shadow-xl overflow-hidden card-glow">
              <div className="bg-gray-50 p-6 flex items-center border-b border-gray-100">
                <Bot className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="font-medium text-gray-900">Genesys Chatbot</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Bot className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="bg-gray-100 rounded-lg rounded-tl-none p-4 max-w-xs">
                    <p className="text-gray-700">Hello! I'm your Genesys chatbot. How can I help you today?</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 justify-end">
                  <div className="bg-blue-600 text-white rounded-lg rounded-tr-none p-4 max-w-xs">
                    <p>Do you offer international shipping for your products?</p>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-medium text-gray-700">You</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Bot className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="bg-gray-100 rounded-lg rounded-tl-none p-4 max-w-xs">
                    <p className="text-gray-700">Yes, we ship to over 50 countries worldwide! Standard shipping takes 7-10 business days. Would you like to know about our expedited options?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
