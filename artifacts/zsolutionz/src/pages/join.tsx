import { motion } from "framer-motion";
import { Link } from "wouter";
import { TrendingUp, Users, Laptop, ArrowRight } from "lucide-react";
import joinBg from "@/assets/join-bg.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function JoinPage() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO BANNER */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center pt-20 border-b border-border">
        <div className="absolute inset-0 z-0">
          <img src={joinBg} alt="Join Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/90" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="text-sm font-medium text-muted-foreground mb-4">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">&gt;</span>
              <span className="text-primary">Join Us</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">Build Your Career<br />With ZSolutionz</h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
              We are looking for motivated individuals who want to grow with us
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHY WORK WITH US */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, title: "Growth Opportunities", desc: "Clear career paths and advancement within the company." },
              { icon: Users, title: "Professional Environment", desc: "Work alongside industry experts in a supportive culture." },
              { icon: Laptop, title: "Remote Flexibility", desc: "Work from wherever you thrive with our distributed model." }
            ].map((benefit, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-popover border border-border p-10 rounded-3xl text-center hover:border-primary/30 transition-colors">
                <div className="h-16 w-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <benefit.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Current Openings</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Sales Representative", 
                type: "Full-time", 
                desc: "Drive customer acquisition and help clients find the right internet solutions. Excellent communication skills required." 
              },
              { 
                title: "Customer Support Representative", 
                type: "Full-time / Remote", 
                desc: "Be the first point of contact for our customers. Provide exceptional support and resolve inquiries professionally." 
              },
              { 
                title: "Remote Team Member", 
                type: "Remote", 
                desc: "Join our distributed team and contribute your skills from anywhere. Multiple roles available." 
              }
            ].map((job, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-background border border-border p-8 rounded-3xl flex flex-col hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.1)]">
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
                    {job.type}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-4">{job.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{job.desc}</p>
                </div>
                <div className="mt-auto pt-8">
                  <a href="mailto:info@zsolutionz.com" className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors bg-white text-black hover:bg-white/90 h-12 px-6 w-full">
                    Apply Now
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* APPLICATION CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Join the Team?</h2>
              <p className="text-xl text-white/70 mb-10">
                Send your resume to info@zsolutionz.com or use the contact form below.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center rounded-full text-base font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-10 shadow-lg shadow-primary/25">
                  Contact Us
                </Link>
                <a href="mailto:info@zsolutionz.com" className="inline-flex items-center justify-center rounded-full text-base font-medium transition-colors border border-white/20 text-white hover:bg-white/10 h-14 px-10 backdrop-blur-sm">
                  Email Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
