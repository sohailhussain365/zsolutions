import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle, Star, HeartHandshake, TrendingUp, Zap } from "lucide-react";
import aboutTechBg from "@/assets/about-tech.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO BANNER */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center pt-20 border-b border-border">
        <div className="absolute inset-0 z-0">
          <img src={aboutTechBg} alt="About Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/90" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="text-sm font-medium text-muted-foreground mb-4">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">&gt;</span>
              <span className="text-primary">About Us</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">About ZSolutionz</h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
              Committed to connecting customers with reliable internet services
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Who We Are</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  ZSolutionz is committed to helping customers connect with reliable internet services while providing exceptional customer support. We focus on professionalism, transparency, and long-term customer satisfaction.
                </p>
                <p>
                  At ZSolutionz, we connect customers with reliable technology, internet, and communication solutions tailored to their needs. Our focus is on delivering exceptional service, trusted partnerships, and a seamless customer experience.
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
              <img src={aboutTechBg} alt="Technology abstract" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* OUR MISSION */}
      <section className="py-24 bg-popover border-y border-border relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-primary/5 blur-3xl rounded-full pointer-events-none mix-blend-screen" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Our Mission</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Connect customers with reliable and innovative technology solutions that improve communication, productivity, and everyday life. We strive to deliver exceptional service, build lasting relationships, and create value through trusted partnerships and customer-focused support.
              </p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Personalized solutions tailored to customer needs",
                "Dedicated support and professional guidance",
                "Trusted technology and connectivity partners",
                "Focus on quality service and customer experience"
              ].map((bullet, i) => (
                <motion.div key={i} variants={fadeInUp} className="flex items-center gap-4 bg-background/50 p-6 rounded-2xl border border-border">
                  <CheckCircle className="text-primary shrink-0" size={24} />
                  <span className="text-white/90 text-lg">{bullet}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-20">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">What We Stand For</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Our Core Values</h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Star, title: "Integrity", desc: "We operate with honesty and transparency in all we do" },
              { icon: HeartHandshake, title: "Customer Commitment", desc: "Our clients come first, always" },
              { icon: TrendingUp, title: "Professional Growth", desc: "We invest in our team's continuous development" },
              { icon: Zap, title: "Continuous Improvement", desc: "Always evolving to serve better" }
            ].map((val, i) => (
              <motion.div key={i} variants={fadeInUp} className="glass-card p-8 rounded-3xl text-center group hover:border-primary/30 transition-colors">
                <div className="h-16 w-16 mx-auto rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <val.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{val.title}</h3>
                <p className="text-muted-foreground">{val.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
