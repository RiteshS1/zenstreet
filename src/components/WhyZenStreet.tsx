import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);

const WhyZenStreet = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(cardRef.current, {
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top bottom-=100",
        toggleActions: "play none none reverse"
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
  }, []);

  return (
    <section id="why-zenstreet" className="py-16 bg-gradient-to-b from-white via-[#00698D]/5 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#00698D]">Why ZenStreet</h2>
        <Card ref={cardRef} className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-white via-[#D3E4FD]/30 to-[#00698D]/5">
          <CardHeader>
            <CardTitle className="text-2xl text-[#00698D]">The Core Problem We're Solving</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Therapists are overwhelmed by administrative tasks & Notes documentation struggle to attract and retain clients and lack the tools to deliver personalised, efficient care.
            </p>
            <p className="text-gray-700 mb-4">
              This hinders their ability to reach a wider population seeking mental health services and maximise their earning potential.
            </p>
            <p className="text-gray-700">
              We are ZenStreet.ai, a mental health-tech SaaS platform dedicated to transforming care delivery. At ZenStreet.ai, we believe in revolutionizing the way mental health care is delivered, making it more accessible, effective, and rewarding for both therapists and patients.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WhyZenStreet;