import { Link } from "wouter";
import logoImg from "@assets/1024x1024-transparent_1781795911795.png";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#060B14] border-t border-white/[0.07] relative overflow-hidden">
      {/* Top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 border-b border-white/[0.07]">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <img src={logoImg} alt="ZSolutionz Logo" className="h-11 w-auto" />
              <span className="text-xl font-bold text-white tracking-tight">ZSolutionz</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Connecting Customers With Reliable Internet Solutions. Professional service. Dedicated support. Real results.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-500/70">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
              10+ Years of Experience
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/join", label: "Join Us" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-500 hover:text-blue-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="h-px w-4 bg-blue-500/0 group-hover:bg-blue-500/60 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                "Internet Solutions",
                "Customer Support",
                "Technical Assistance",
                "Digital Acquisition",
                "Feedback Analytics",
              ].map((s) => (
                <li key={s} className="text-slate-500 text-sm flex items-center gap-2">
                  <span className="h-px w-4 bg-blue-500/30" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Contact</h4>
            <ul className="space-y-5">
              <li>
                <a
                  href="mailto:info@zsolutionz.com"
                  className="flex items-start gap-3 text-slate-500 hover:text-blue-400 transition-colors group"
                >
                  <div className="h-8 w-8 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-500 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 mt-0.5">
                    <Mail size={14} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-600 mb-0.5">Email</div>
                    <div className="text-sm font-medium">info@zsolutionz.com</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="tel:+12623992770"
                  className="flex items-start gap-3 text-slate-500 hover:text-blue-400 transition-colors group"
                >
                  <div className="h-8 w-8 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-500 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 mt-0.5">
                    <Phone size={14} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-600 mb-0.5">Phone</div>
                    <div className="text-sm font-medium">+1(262) 399-2770</div>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-500">
                <div className="h-8 w-8 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-500 shrink-0 mt-0.5">
                  <MapPin size={14} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-xs text-slate-600 mb-0.5">Address</div>
                  <div className="text-sm leading-relaxed">
                    1906 Madera St Apt 8<br />
                    Waukesha, WI 53189<br />
                    United States
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-8 text-sm text-slate-600">
          <p>Copyright &copy; 2026 ZSolutionz. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-blue-400 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="h-4 w-px bg-white/10" />
            <span className="hover:text-blue-400 transition-colors cursor-pointer">Terms &amp; Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
