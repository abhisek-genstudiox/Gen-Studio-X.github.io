import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { useElementOnScreen } from '@/utils/animations';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "GenStudioX has transformed our creative workflow. What used to take days now takes minutes, and the quality is consistently impressive.",
    author: "Sarah Johnson",
    role: "Creative Director, DesignHub",
    avatar: "https://i.pravatar.cc/150?img=1",
    rating: 5
  },
  {
    id: 2,
    content: "The intuitive interface combined with powerful AI capabilities has made this an essential tool for our marketing team. We're creating content faster than ever before.",
    author: "David Chen",
    role: "Marketing Manager, TechGrowth",
    avatar: "https://i.pravatar.cc/150?img=8",
    rating: 5
  },
  {
    id: 3,
    content: "As a freelance designer, GenStudioX has been a game-changer for me. I can take on more projects and deliver higher quality work to my clients.",
    author: "Emma Rodriguez",
    role: "Independent Designer",
    avatar: "https://i.pravatar.cc/150?img=5",
    rating: 5
  },
  {
    id: 4,
    content: "The collaborative features make working with remote teams seamless. It's like having an AI-powered design assistant for the entire team.",
    author: "Michael Taylor",
    role: "Product Lead, RemoteWorks",
    avatar: "https://i.pravatar.cc/150?img=12",
    rating: 4
  },
  {
    id: 5,
    content: "We've cut our content production time in half while maintaining brand consistency across all our materials. Absolutely worth the investment.",
    author: "Jessica Williams",
    role: "Brand Manager, FutureRetail",
    avatar: "https://i.pravatar.cc/150?img=9",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { containerRef, isVisible } = useElementOnScreen({ threshold: 0.1 });
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section id="testimonials" className="section-padding bg-black relative">
      <div className="container mx-auto">
        <div 
          ref={containerRef}
          className={cn(
            "max-w-2xl mx-auto text-center mb-16 transition-all duration-700 ease-out text-white",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-[#E6C88C]">
            What Our Users Say
          </h2>
          <p className="text-lg text-white/70">
            Trusted by creative professionals worldwide
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="min-w-full p-4"
                >
                  <div className="bg-black/50 rounded-2xl p-8 border border-white/10 hover:border-white/20 shadow-soft">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/50">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.author}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg text-white">{testimonial.author}</h4>
                          <p className="text-sm text-white/70">{testimonial.role}</p>
                        </div>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i}
                            size={16}
                            className={cn(
                              "fill-current",
                              i < testimonial.rating ? "text-[#E6C88C]" : "text-gray-600"
                            )}
                          />
                        ))}
                      </div>
                    </div>
                    <blockquote className="text-lg italic text-white/70">"{testimonial.content}"</blockquote>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center items-center mt-8 gap-2">
              <button 
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#E6C88C]/20 transition-colors duration-300 text-white"
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={18} />
              </button>
              
              <div className="flex gap-2 px-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "w-2.5 h-2.5 rounded-full transition-all duration-300",
                      index === activeIndex ? "bg-[#E6C88C] w-5" : "bg-white/20 hover:bg-white/30"
                    )}
                    aria-label={`Go to testimonial ${index + 1}`}
                  ></button>
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-secondary/80 transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
