import { motion } from "framer-motion";
import { Link } from "wouter";
import { Headphones, Globe, BarChart3, Shield, Users, Clock, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

import heroBg from "@/assets/hero-bg.png";
import missionBg from "@/assets/mission-bg.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Hero Background" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-background/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        </div>

        {/* Animated grid lines */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
             style={{
               backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
               backgroundSize: '4rem 4rem',
               animation: 'moveGrid 20s linear infinite'
             }}
        />
        <style>{`
          @keyframes moveGrid {
            from { background-position: 0 0; }
            to { background-position: 4rem 4rem; }
          }
        `}</style>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full border border-white/[0.07] bg-white/[0.03] px-4 py-1.5 text-sm font-medium text-white/90 mb-8 backdrop-blur-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-primary mr-3 animate-pulse"></span>
              A Connected Lifecycle · 10+ Years of Experience
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
            >
              Connecting Customers<br />
              With <span className="text-primary">Reliable Solutions</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
            >
              ZSolutionz helps customers find reliable home internet and connectivity solutions with a simple and hassle-free process.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full text-base font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                Get In Touch
              </Link>
              <Link href="/join" className="inline-flex items-center justify-center rounded-full text-base font-medium transition-colors border border-white/20 text-white hover:bg-white/10 h-14 px-8 backdrop-blur-sm">
                Join Our Team
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TRUST MARQUEE */}
      <section className="bg-card border-y border-border py-6 overflow-hidden flex relative">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
        <div className="animate-marquee whitespace-nowrap flex items-center space-x-8">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-sm font-semibold text-primary uppercase tracking-[0.2em] inline-block px-4">
              Reliable Service · Professional Team · Fast Response · Customer Focused · 10+ Years · Trusted Partner · 24/7 Support ·
            </span>
          ))}
        </div>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
        `}</style>
      </section>

      {/* SECTION 3: CONNECTED LIFECYCLE */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">Our Services</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">A Connected Lifecycle Empowering the End-to-End Customer Experience</h2>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: Headphones, title: "Service & Support", desc: "Delivering exceptional service and ongoing customer support" },
              { icon: Globe, title: "Digital Customer Acquisition", desc: "Helping brands grow their customer base online" },
              { icon: BarChart3, title: "Surveys & Feedback Analytics", desc: "Real insights that drive business improvement" }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp} className="glass-card p-10 rounded-3xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 group shadow-lg hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary transition-all duration-500"></div>
                <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <item.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: WHY CHOOSE US */}
      <section className="py-32 bg-card border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-16">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">Why Choose Us</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Built on Trust, Driven by Results</h2>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              { icon: Shield, title: "Reliable Service", desc: "Helping customers find suitable connectivity solutions." },
              { icon: Users, title: "Professional Team", desc: "Experienced sales and support professionals." },
              { icon: Clock, title: "Fast Response", desc: "Quick assistance and customer support." },
              { icon: Heart, title: "Customer Focused", desc: "Delivering a smooth customer experience." }
            ].map((card, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-popover p-8 rounded-2xl border border-border border-l-4 border-l-primary hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-start gap-6">
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <card.icon size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: STATS */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-border">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="py-6">
              <h3 className="text-5xl md:text-6xl font-bold text-primary mb-4 tracking-tighter">10+</h3>
              <p className="text-lg text-muted-foreground uppercase tracking-widest font-medium">Years of Experience</p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="py-6">
              <h3 className="text-5xl md:text-6xl font-bold text-primary mb-4 tracking-tighter">500+</h3>
              <p className="text-lg text-muted-foreground uppercase tracking-widest font-medium">Happy Customers</p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="py-6">
              <h3 className="text-5xl md:text-6xl font-bold text-primary mb-4 tracking-tighter">24/7</h3>
              <p className="text-lg text-muted-foreground uppercase tracking-widest font-medium">Customer Support</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 6: MISSION PREVIEW */}
      <section className="py-32 bg-card border-t border-border overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                Customer-inspired.<br />
                <span className="text-primary">Client Driven.</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                Connect customers with reliable and innovative technology solutions that improve communication, productivity, and everyday life. We strive to deliver exceptional service, build lasting relationships, and create value through trusted partnerships.
              </p>
              <Link href="/about" className="inline-flex items-center justify-center rounded-full text-base font-medium transition-colors bg-white text-black hover:bg-white/90 h-14 px-8">
                Learn More About Us
              </Link>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              style={{ transform: "rotate(-2deg)" }}
            >
              <img src={missionBg} alt="Our Mission" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-background/40 mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-60"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
