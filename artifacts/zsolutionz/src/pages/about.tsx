import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { useRef } from "react";
import {
  CheckCircle, Star, HeartHandshake, TrendingUp, Zap,
  ArrowRight, Target, Eye, Award, Users
} from "lucide-react";
import { AnimatedCounter } from "@/components/animated-counter";
import { FloatingOrbs } from "@/components/floating-orbs";
import aboutTechBg from "@/assets/about-tech.png";
import missionBg from "@/assets/mission-bg.png";
import heroBg from "@/assets/hero-bg.png";

const fadeUp    = { hidden: { opacity: 0, y: 52 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22,1,0.36,1] as [number, number, number, number] } } };
const fadeLeft  = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.22,1,0.36,1] as [number, number, number, number] } } };
const fadeRight = { hidden: { opacity: 0, x:  50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.22,1,0.36,1] as [number, number, number, number] } } };
const stagger   = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } };

export default function AboutPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <div className="flex flex-col w-full overflow-x-hidden">

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-[65vh] flex items-end pb-16 pt-32 md:pb-20 md:pt-40 overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover object-center scale-110" />
          <div className="absolute inset-0 bg-[#0A0F1E]/82" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0F1E]/50 to-[#0A0F1E]" />
        </motion.div>
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.06]"
          style={{ backgroundImage: `linear-gradient(rgba(37,99,235,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.5) 1px, transparent 1px)`, backgroundSize: "64px 64px" }}
        />
        <FloatingOrbs />

        <div className="container relative z-10 mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22,1,0.36,1] as [number, number, number, number] }}>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-600 mb-7">
              <Link href="/" className="hover:text-slate-400 transition-colors">Home</Link>
              <span className="text-slate-700">/</span>
              <span className="text-blue-400">About Us</span>
            </div>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-500/20 bg-blue-500/8 px-5 py-2.5 text-sm font-medium text-blue-300 mb-7 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
              Who We Are
            </div>
            <h1 className="font-extrabold text-white tracking-tight leading-[1.03] mb-6" style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}>
              About{" "}
              <span className="gradient-text">ZSolutionz</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
              Committed to connecting customers with reliable internet services while delivering exceptional customer support across every interaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── WHO WE ARE ──────────────────────────────────────── */}
      <section className="py-16 md:py-32 bg-[#0A0F1E] relative overflow-hidden">
        <FloatingOrbs />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft}>
              <span className="section-label">Who We Are</span>
              <h2 className="font-extrabold text-white leading-tight mb-8" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                Connecting People With<br />
                <span className="gradient-text">Trusted Solutions</span>
              </h2>
              <div className="space-y-5 text-slate-400 text-lg leading-relaxed">
                <p>ZSolutionz is committed to helping customers connect with reliable internet services while providing exceptional customer support. We focus on professionalism, transparency, and long-term customer satisfaction.</p>
                <p>At ZSolutionz, we connect customers with reliable technology, internet, and communication solutions tailored to their needs. Our focus is on delivering exceptional service, trusted partnerships, and a seamless customer experience.</p>
                <p>Founded on the belief that everyone deserves quality connectivity, ZSolutionz has grown into a trusted partner for hundreds of customers — always putting their needs first.</p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-5">
                {[
                  { num: 10, suffix: "+", label: "Years of Experience" },
                  { num: 500, suffix: "+", label: "Customers Served" },
                ].map((s, i) => (
                  <motion.div key={i} whileHover={{ y: -4, scale: 1.02 }} className="glass-card rounded-2xl p-6 text-center group cursor-default">
                    <div className="text-3xl font-extrabold text-blue-500 mb-1">
                      <AnimatedCounter target={s.num} suffix={s.suffix} duration={1600} />
                    </div>
                    <div className="text-sm text-slate-400">{s.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight}
              className="relative rounded-3xl overflow-hidden aspect-[4/3]"
            >
              <motion.img
                src={aboutTechBg}
                alt="ZSolutionz Technology"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/50 to-transparent" />
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute top-6 right-6 glass-card rounded-2xl p-5"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-[0_0_16px_rgba(37,99,235,0.6)]">
                    <Award size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">Premium Service</div>
                    <div className="text-slate-400 text-xs">Trusted by hundreds</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MISSION ─────────────────────────────────────────── */}
      <section className="py-16 md:py-32 bg-[#0F172A] border-y border-white/[0.07] relative overflow-hidden">
        <FloatingOrbs />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft}>
              <span className="section-label">Our Mission</span>
              <h2 className="font-extrabold text-white leading-tight mb-8" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                Customer-inspired.<br />
                <span className="gradient-text">Client Driven.</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-10">
                Connect customers with reliable and innovative technology solutions that improve communication, productivity, and everyday life. We strive to deliver exceptional service, build lasting relationships, and create value through trusted partnerships and customer-focused support.
              </p>
              <motion.ul initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-3">
                {[
                  "Personalized solutions tailored to customer needs",
                  "Dedicated support and professional guidance",
                  "Trusted technology and connectivity partners",
                  "Focus on quality service and customer experience",
                ].map((item, i) => (
                  <motion.li key={i} variants={fadeUp}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4 glass-card rounded-xl p-4 hover:border-blue-500/30 transition-all duration-300"
                  >
                    <CheckCircle className="text-blue-500 shrink-0" size={18} />
                    <span className="text-slate-300 font-medium text-sm">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight}
              className="relative rounded-3xl overflow-hidden aspect-[4/3]"
            >
              <motion.img src={missionBg} alt="Our Mission" className="w-full h-full object-cover"
                whileHover={{ scale: 1.04 }} transition={{ duration: 0.5 }} />
              <div className="absolute inset-0 bg-[#0A0F1E]/60" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] via-transparent to-transparent" />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-8 left-8 right-8 glass-card rounded-2xl p-6"
              >
                <p className="text-white font-semibold text-sm italic leading-relaxed">
                  "To unite a business that connects people around the globe, you need to know what you stand for."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── VISION / MISSION / PURPOSE ──────────────────────── */}
      <section className="py-16 md:py-32 bg-[#0A0F1E] relative overflow-hidden">
        <FloatingOrbs />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-3xl mx-auto mb-12 md:mb-24">
            <span className="section-label">Our Foundation</span>
            <h2 className="font-extrabold text-white mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>Vision, Mission &amp; Purpose</h2>
            <p className="text-slate-400 text-lg">Three pillars that guide every decision we make and every customer we serve.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Eye,    title: "Our Vision",  desc: "To be the most trusted name in customer connectivity solutions — known for integrity, expertise, and genuine care for every person we serve." },
              { icon: Target, title: "Our Mission", desc: "Connect customers with reliable and innovative technology solutions that improve communication, productivity, and everyday life through exceptional service." },
              { icon: Users,  title: "Our Purpose", desc: "To build lasting relationships between customers and the technology solutions that empower them — creating value, trust, and connection that endures." },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="rounded-3xl bg-gradient-to-br from-blue-600/8 to-transparent border border-white/[0.07] p-10 hover:border-blue-500/35 hover:shadow-[0_0_50px_rgba(37,99,235,0.12)] transition-all duration-500 group relative overflow-hidden glass-card-shimmer"
              >
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/60 transition-all duration-500" />
                <div className="h-16 w-16 rounded-2xl bg-blue-600/12 flex items-center justify-center text-blue-500 mb-8 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300">
                  <item.icon size={30} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-extrabold text-white mb-4">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CORE VALUES ─────────────────────────────────────── */}
      <section className="py-16 md:py-32 bg-[#0F172A] border-t border-white/[0.07] relative overflow-hidden">
        <FloatingOrbs />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-3xl mx-auto mb-12 md:mb-24">
            <span className="section-label">What We Stand For</span>
            <h2 className="font-extrabold text-white mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>Our Core Values</h2>
            <p className="text-slate-400 text-lg">The principles that define our culture and guide our work every day.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Star,          num: "01", title: "Integrity",              desc: "We operate with honesty and transparency in everything we do — with customers, partners, and each other." },
              { icon: HeartHandshake,num: "02", title: "Customer Commitment",    desc: "Our clients come first, always. We go above and beyond to ensure every customer feels valued and heard." },
              { icon: TrendingUp,    num: "03", title: "Professional Growth",    desc: "We invest in our team's continuous development because a stronger team delivers a stronger customer experience." },
              { icon: Zap,           num: "04", title: "Continuous Improvement", desc: "We never stop evolving. Every interaction, every process, every service — we're always looking to do better." },
            ].map((val, i) => (
              <motion.div key={i} variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="glass-card rounded-3xl p-8 group hover:border-blue-500/35 hover:shadow-[0_0_40px_rgba(37,99,235,0.1)] transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/50 transition-all duration-500" />
                <div className="text-xs font-black text-blue-500/20 tracking-widest mb-6">{val.num}</div>
                <div className="h-14 w-14 rounded-2xl bg-blue-600/10 text-blue-500 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_0_16px_rgba(37,99,235,0.5)] transition-all duration-300">
                  <val.icon size={26} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-extrabold text-white mb-3">{val.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="py-12 md:py-24 bg-[#0A0F1E] border-t border-white/[0.07] relative overflow-hidden">
        <FloatingOrbs />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-600/12 via-blue-900/6 to-transparent p-8 md:p-12 lg:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 rounded-3xl" style={{ background: "radial-gradient(circle at 50% 0%, rgba(37,99,235,0.08), transparent 70%)" }} />
            <h2 className="font-extrabold text-white mb-4 relative z-10" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
              Ready to Work With Us?
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10 relative z-10">
              Get in touch today and discover how ZSolutionz can connect your customers with the solutions they deserve.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 text-white font-semibold h-14 px-10 btn-glow shadow-[0_0_24px_rgba(37,99,235,0.35)]"
              >
                Contact Us <ArrowRight size={18} />
              </Link>
              <Link href="/join"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 text-white font-semibold h-14 px-10 hover:bg-white/8 hover:border-white/30 transition-all"
              >
                Join Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
