import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWaitlistJoin = () => {
    toast({
      title: "Coming Soon!",
      description: "We'll notify you when the waitlist opens.",
    });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-black/5 ${
        isScrolled ? "bg-black/20 backdrop-blur-md shadow-sm" : "bg-black/5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <img
              src="/lovable-uploads/84cff9b1-920e-4ce8-9e85-d7c4ad03c319.png"
              alt="ZenStreet.ai Logo"
              className="h-8 w-8"
            />
            <span className="text-xl font-semibold text-primary">
              ZenStreet.ai
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              About Us
            </a>
            <a
              href="#features"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Features
            </a>
            <a
              href="#why"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Why ZenStreet
            </a>
            <Button
              variant="default"
              className="bg-primary hover:bg-primary/90 text-white"
            >
              Join Waitlist
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-white">
            <div className="flex flex-col space-y-4">
              <a
                href="#about"
                className="text-gray-700 hover:text-primary transition-colors px-4"
              >
                About Us
              </a>
              <a
                href="#features"
                className="text-gray-700 hover:text-primary transition-colors px-4"
              >
                Features
              </a>
              <a
                href="#why"
                className="text-gray-700 hover:text-primary transition-colors px-4"
              >
                Why ZenStreet
              </a>
              <div className="px-4">
                <Button
                  variant="default"
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                >
                  Join Waitlist
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;