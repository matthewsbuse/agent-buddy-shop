
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Owner, Bright Coffee Shop",
    content: "The customer service AI has been a game-changer for our small coffee shop. It handles all our online orders and inquiries, even during peak hours when we're too busy to answer the phone.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    stars: 5
  },
  {
    name: "Michael Rodriguez",
    role: "Director, Rodriguez Consulting",
    content: "We've saved over 30 hours per week by letting the AI handle our appointment scheduling and follow-ups. The ROI was evident within the first month, and our clients love the quick responses.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&auto=format&fit=crop",
    stars: 5
  },
  {
    name: "Karen Lee",
    role: "Founder, Eastside Boutique",
    content: "As a retail business owner, I was skeptical about AI handling customer inquiries. But AgentBuddy has surprised me with how accurately it answers product questions and even helps with sizing recommendations.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop",
    stars: 4
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Trusted by Small Businesses
          </h2>
          <p className="text-xl text-gray-600">
            See how our AI agents are transforming small enterprises just like yours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-50 border border-gray-100 rounded-xl p-8 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
                {[...Array(5 - testimonial.stars)].map((_, i) => (
                  <Star key={i + testimonial.stars} className="h-5 w-5 text-gray-300" />
                ))}
              </div>
              
              <blockquote className="text-gray-700 mb-6">
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex items-center gap-3">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
