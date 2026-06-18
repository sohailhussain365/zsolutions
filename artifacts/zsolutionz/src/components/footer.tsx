import { Link } from "wouter";
import logoImg from "@assets/1024x1024-transparent_1781795911795.png";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8 relative overflow-hidden">
      {/* Subtle blue glow top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-border/50 pb-12">
          {/* Company */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 mb-4 inline-flex">
              <img src={logoImg} alt="ZSolutionz Logo" className="h-10 w-auto" />
              <span className="text-2xl font-bold text-white tracking-tight">ZSolutionz</span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Connecting Customers With Reliable Internet Solutions
            </p>
            <div className="pt-4">
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="/join" className="text-muted-foreground hover:text-primary transition-colors">Join Us</Link></li>
                <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-3">
              <li className="text-muted-foreground">Internet Solutions</li>
              <li className="text-muted-foreground">Customer Support</li>
              <li className="text-muted-foreground">Technical Assistance</li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li>
                <a href="mailto:info@zsolutionz.com" className="hover:text-primary transition-colors">
                  info@zsolutionz.com
                </a>
              </li>
              <li>
                <a href="tel:+12623992770" className="hover:text-primary transition-colors">
                  +1(262) 399-2770
                </a>
              </li>
              <li className="leading-relaxed">
                1906 Madera St Apt 8,<br />
                Waukesha, WI 53189
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground gap-4">
          <p>Copyright &copy; 2026 ZSolutionz. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <span className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-primary transition-colors cursor-pointer">Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
