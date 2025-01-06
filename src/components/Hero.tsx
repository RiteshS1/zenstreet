import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.from(heroRef.current?.querySelectorAll(".animate-item"), {
      y: 30,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        toast({
          title: "Success!",
          description: "You've been added to our waitlist.",
        });
        form.reset();
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to join waitlist. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div
      ref={heroRef}
      className="min-h-screen pt-16 flex items-center bg-gradient-to-br from-[#00698D]/10 via-white to-[#D3E4FD]/30"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="animate-item inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Transform Your Practice
            </span>
            <h1 className="animate-item text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Automated AI-Enabled Practice Management Solution
            </h1>
            <p className="animate-item text-xl text-gray-600">
              Transform your practice with ZenStreet! Automate complex admin
              workflows, expand your client base, save 75% of your operating
              expenses and boost your earnings by 6+ lakhs annually.
            </p>
          </div>

          <div className="animate-item">
            <Card className="backdrop-blur-sm bg-[#000000]">
              <CardHeader>
                <CardTitle>Join the Waitlist</CardTitle>
                <CardDescription>
                  Be among the first to experience the future of practice
                  management.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      required
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required
                      className="w-full"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                  >
                    Join Waitlist
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;