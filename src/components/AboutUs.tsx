import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll('.about-card');
    
    cards?.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        },
        x: index === 0 ? -50 : 50,
        opacity: 0,
        duration: 1,
        delay: index * 0.2,
        ease: "power3.out"
      });
    });
  }, []);

  return (
    <section id="about" className="py-16 bg-gradient-to-b from-white via-[#D3E4FD]/20 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#00698D]">About Us</h2>
        <div ref={cardsRef} className="grid gap-8 md:grid-cols-2">
          <Card className="about-card hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-white via-[#D3E4FD]/30 to-[#00698D]/5 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-[#00698D]">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Our mission is to catalyze positive change within the well-being ecosystem, ensuring that quality care becomes more accessible and impactful for everyone.
              </p>
            </CardContent>
          </Card>
          <Card className="about-card hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-white via-[#D3E4FD]/30 to-[#00698D]/5 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-[#00698D]">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Our vision is to revolutionize care delivery by enhancing accessibility for all stakeholders, including caregivers. We aim to achieve this by empowering caregivers with innovative tools that optimize care delivery and enhance patient satisfaction.
              </p>
              <p className="text-gray-700 mt-4">
                Our goal is to transform the caregiver-patient interaction experience through a data-driven ecosystem that supports AI-driven Feedback Informed Treatment, enabling individuals to seek truly personalized care through cost-effective and efficient channels.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;