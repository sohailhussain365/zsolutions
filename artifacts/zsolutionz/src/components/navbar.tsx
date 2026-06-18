import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@assets/1024x1024-transparent_1781795911795.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setIsScrolled(scrollTop > 50);
      setScrollProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/join", label: "Join Us" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <>
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-transparent pointer-events-none">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600"
          style={{ scaleX: scrollProgress, transformOrigin: "0% 50%" }}
          transition={{ type: "spring", stiffness: 400, damping: 40 }}
        />
      </div>

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-[2px] left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-3 bg-[#0A0F1E]/90 backdrop-blur-xl border-b border-white/[0.07] shadow-[0_4px_32px_rgba(0,0,0,0.4)]"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.img
              src={logoImg}
              alt="ZSolutionz Logo"
              className="h-9 w-auto"
              whileHover={{ scale: 1.08, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
            <span className="text-lg font-extrabold text-white tracking-tight group-hover:text-blue-300 transition-colors duration-300">
              ZSolutionz
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="relative py-1 group">
                <span className={`text-sm font-medium transition-colors duration-300 ${
                  location === link.href ? "text-white" : "text-white/55 group-hover:text-white"
                }`}>
                  {link.label}
                </span>
                {/* Active / hover underline */}
                <span className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-300 ${
                  location === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            ))}

            <Link href="/contact"
              className="relative overflow-hidden rounded-full bg-blue-600 text-white text-sm font-semibold h-10 px-6 inline-flex items-center gap-2 hover:bg-blue-500 transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.35)] hover:shadow-[0_0_30px_rgba(37,99,235,0.55)] hover:-translate-y-0.5 group"
            >
              <span className="relative z-10">Contact Us</span>
              <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <motion.button
            className="md:hidden relative h-10 w-10 flex items-center justify-center rounded-xl text-white border border-white/10 hover:border-blue-500/40 hover:bg-blue-600/10 transition-all"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X size={20} />
                </motion.span>
              ) : (
                <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden bg-[#0A0F1E]/97 backdrop-blur-xl border-b border-white/[0.07]"
            >
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
                className="container mx-auto px-6 py-5 flex flex-col gap-1"
              >
                {links.map((link) => (
                  <motion.div
                    key={link.href}
                    variants={{ hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0 } }}
                  >
                    <Link href={link.href}
                      className={`flex items-center gap-3 py-3.5 px-4 rounded-xl text-sm font-medium transition-all duration-200 ${
                        location === link.href
                          ? "bg-blue-600/15 text-blue-300 border border-blue-500/20"
                          : "text-white/60 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {location === link.href && <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />}
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div variants={{ hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0 } }} className="pt-2">
                  <Link href="/contact"
                    className="flex items-center justify-center w-full rounded-xl bg-blue-600 text-white text-sm font-semibold h-12 hover:bg-blue-500 transition-colors"
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
