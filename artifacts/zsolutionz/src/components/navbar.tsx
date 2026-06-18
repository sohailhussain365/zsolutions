import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}
          className="text-2xl font-bold text-white tracking-tight"
        >
          ZSolutionz
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection("home")} className="text-sm font-medium text-white/80 hover:text-white transition-colors">Home</button>
          <button onClick={() => scrollToSection("about")} className="text-sm font-medium text-white/80 hover:text-white transition-colors">About Us</button>
          <button onClick={() => scrollToSection("join")} className="text-sm font-medium text-white/80 hover:text-white transition-colors">Join Us</button>
          <button onClick={() => scrollToSection("contact")} className="text-sm font-medium text-white/80 hover:text-white transition-colors">Contact Us</button>
          <Button onClick={() => scrollToSection("contact")} className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
            Contact Us
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-4 flex flex-col space-y-4 shadow-lg">
          <button onClick={() => scrollToSection("home")} className="text-left text-sm font-medium text-white/80 hover:text-white py-2">Home</button>
          <button onClick={() => scrollToSection("about")} className="text-left text-sm font-medium text-white/80 hover:text-white py-2">About Us</button>
          <button onClick={() => scrollToSection("join")} className="text-left text-sm font-medium text-white/80 hover:text-white py-2">Join Us</button>
          <button onClick={() => scrollToSection("contact")} className="text-left text-sm font-medium text-white/80 hover:text-white py-2">Contact Us</button>
          <Button onClick={() => scrollToSection("contact")} className="bg-primary hover:bg-primary/90 text-white w-full">
            Contact Us
          </Button>
        </div>
      )}
    </nav>
  );
}
