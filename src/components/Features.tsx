import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ClipboardList, Users, TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = featuresRef.current?.querySelectorAll('.feature-card');
    
    cards?.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.2,
        ease: "power3.out"
      });
    });
  }, []);

  return (
    <section id="features" className="py-16 bg-gradient-to-b from-white via-[#D3E4FD]/20 to-white">
      <div ref={featuresRef} className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#00698D]">Features</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="feature-card hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-white via-[#D3E4FD]/30 to-[#00698D]/5 shadow-lg">
            <CardHeader>
              <ClipboardList className="w-12 h-12 text-[#00698D] mb-4" />
              <CardTitle className="text-xl">Administrative Automation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Streamline your administrative tasks and notes documentation with our intelligent automation tools.
              </p>
            </CardContent>
          </Card>
          <Card className="feature-card hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-white via-[#D3E4FD]/30 to-[#00698D]/5 shadow-lg">
            <CardHeader>
              <Users className="w-12 h-12 text-[#00698D] mb-4" />
              <CardTitle className="text-xl">Client Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Attract and retain clients with our comprehensive client management system.
              </p>
            </CardContent>
          </Card>
          <Card className="feature-card hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-white via-[#D3E4FD]/30 to-[#00698D]/5 shadow-lg">
            <CardHeader>
              <TrendingUp className="w-12 h-12 text-[#00698D] mb-4" />
              <CardTitle className="text-xl">Personalized Care</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Deliver efficient, personalized care with our AI-driven tools and analytics.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;