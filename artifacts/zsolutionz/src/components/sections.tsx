import { motion } from "framer-motion";
import { Headphones, Globe, BarChart3, CheckCircle, Shield, Users, Clock, Heart } from "lucide-react";
import aboutTechBg from "@/assets/about-tech.png";
import missionBg from "@/assets/mission-bg.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export function Marquee() {
  return (
    <div className="bg-card border-y border-border py-4 overflow-hidden flex">
      <div className="animate-marquee whitespace-nowrap flex items-center space-x-8">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="text-sm md:text-base font-semibold text-primary uppercase tracking-widest inline-block px-4">
            The world's leading brands trust ZSolutionz.
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}

export function LifecycleSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">A Connected Lifecycle Empowering the End-to-End Customer Experience</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { icon: Headphones, title: "Service & Support", desc: "Round-the-clock professional assistance." },
            { icon: Globe, title: "Digital Customer Acquisition", desc: "Connecting you with the right audience." },
            { icon: BarChart3, title: "Surveys & Feedback Analytics", desc: "Data-driven insights for improvement." }
          ].map((item, i) => (
            <motion.div key={i} variants={fadeInUp} className="bg-card/50 border border-border p-8 rounded-2xl hover:border-primary/50 transition-colors group">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function OverviewSection() {
  return (
    <section className="py-24 relative overflow-hidden border-t border-border">
      <div className="absolute inset-0 z-0">
        <img src={aboutTechBg} alt="Abstract Tech" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Simple. Reliable. Connected.</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              We help customers explore internet solutions and provide support throughout the sign-up process. Our goal is to deliver a smooth customer experience through professional service and dedicated support.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function WhyChooseSection() {
  const cards = [
    { icon: Shield, title: "Reliable Service", desc: "Helping customers find suitable connectivity solutions." },
    { icon: Users, title: "Professional Team", desc: "Experienced sales and support professionals." },
    { icon: Clock, title: "Fast Response", desc: "Quick assistance and customer support." },
    { icon: Heart, title: "Customer Focused", desc: "Delivering a smooth customer experience." }
  ];

  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose ZSolutionz</h2>
          <div className="h-1 w-16 bg-primary rounded-full"></div>
        </motion.div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {cards.map((card, i) => (
            <motion.div key={i} variants={fadeInUp} className="bg-card p-6 rounded-2xl border border-border hover:-translate-y-2 transition-transform duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.1)]">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                <card.icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function MissionSection() {
  const bullets = [
    "Personalized solutions tailored to customer needs",
    "Dedicated support and professional guidance",
    "Trusted technology and connectivity partners",
    "Focus on quality service and customer experience"
  ];

  return (
    <section className="py-24 relative overflow-hidden border-t border-border">
      <div className="absolute inset-0 z-0">
        <img src={missionBg} alt="Mission" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Customer-inspired.<br/><span className="text-primary">Client Driven.</span></h2>
            <p className="text-xl text-white/80 mb-8 font-medium">To unite a business that connects people around the globe, you need to know what you stand for.</p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Connect customers with reliable and innovative technology solutions that improve communication, productivity, and everyday life. We strive to deliver exceptional service, build lasting relationships, and create value through trusted partnerships and customer-focused support.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="bg-card/40 backdrop-blur-md p-8 rounded-3xl border border-border">
            <h3 className="text-2xl font-bold text-white mb-6">Our Focus</h3>
            <ul className="space-y-4">
              {bullets.map((bullet, i) => (
                <motion.li key={i} variants={fadeInUp} className="flex items-start">
                  <CheckCircle className="text-primary mt-1 mr-4 shrink-0" size={20} />
                  <span className="text-white/90">{bullet}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
