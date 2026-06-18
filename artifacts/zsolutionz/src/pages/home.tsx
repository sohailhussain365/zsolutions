import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { useRef } from "react";
import {
  Headphones, Globe, BarChart3, Shield, Users, Clock, Heart,
  ArrowRight, CheckCircle, Phone, Mail, ChevronRight,
  Zap, Award, TrendingUp, Star
} from "lucide-react";
import heroBg from "@/assets/hero-bg.png";
import missionBg from "@/assets/mission-bg.png";
import aboutTechBg from "@/assets/about-tech.png";

const fadeUp = {
  hidden: { opacity: 0, y: 56 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.13 } },
};

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <div className="flex flex-col w-full overflow-x-hidden">

      {/* ══════════════════════════════════════════════════════════
          HERO — Full-Viewport Cinematic
      ══════════════════════════════════════════════════════════ */}
      <section ref={heroRef} id="home" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Parallax background */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover object-center scale-110" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1E]/95 via-[#0A0F1E]/80 to-[#0A0F1E]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] via-transparent to-[#0A0F1E]/20" />
        </motion.div>

        {/* Animated grid */}
        <div className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(37,99,235,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.06) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
            animation: "gridDrift 25s linear infinite",
          }}
        />
        {/* Blue radial glow */}
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none z-0" />

        <style>{`
          @keyframes gridDrift { from { background-position: 0 0; } to { background-position: 80px 80px; } }
          @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
          @keyframes glowPulse { 0%,100% { opacity: 0.4; } 50% { opacity: 1; } }
        `}</style>

        <div className="container relative z-10 mx-auto px-6 lg:px-16 pt-32 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-3 rounded-full border border-blue-500/25 bg-blue-500/8 px-5 py-2.5 text-sm font-medium text-blue-300 mb-10 backdrop-blur-sm"
              >
                <span className="h-2 w-2 rounded-full bg-blue-400" style={{ animation: "glowPulse 2s ease-in-out infinite" }} />
                A Connected Lifecycle · 10+ Years of Experience
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="font-extrabold tracking-tight text-white leading-[1.02] mb-8"
                style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
              >
                Connecting<br />
                Customers With<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                  Reliable Solutions
                </span>
              </motion.h1>

              {/* Sub */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="text-lg md:text-xl text-slate-400 mb-12 max-w-xl leading-relaxed"
              >
                ZSolutionz helps customers find reliable home internet and connectivity solutions with a simple, hassle-free process. Professional service. Dedicated support. Real results.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/contact"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-blue-600 text-white font-semibold text-base h-14 px-10 transition-all duration-300 hover:bg-blue-500 shadow-[0_0_40px_rgba(37,99,235,0.45)] hover:shadow-[0_0_55px_rgba(37,99,235,0.6)] hover:-translate-y-0.5"
                >
                  Get In Touch
                  <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/join"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 text-white font-semibold text-base h-14 px-10 transition-all duration-300 hover:bg-white/8 hover:border-white/25 backdrop-blur-sm"
                >
                  Join Our Team
                </Link>
              </motion.div>
            </div>

            {/* Floating stat cards (desktop) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hidden lg:flex lg:col-span-5 flex-col gap-4"
            >
              {[
                { num: "10+", label: "Years of Experience", sub: "Industry expertise", icon: Award },
                { num: "500+", label: "Happy Customers", sub: "Served nationwide", icon: Users },
                { num: "24/7", label: "Support Available", sub: "Always here for you", icon: Headphones },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.12 }}
                  className="glass-card rounded-2xl p-6 flex items-center gap-5 hover:border-blue-500/40 transition-all duration-300 group cursor-default"
                >
                  <div className="h-12 w-12 rounded-xl bg-blue-600/15 flex items-center justify-center text-blue-400 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <s.icon size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-white leading-none">{s.num}</div>
                    <div className="text-sm font-semibold text-slate-300 mt-0.5">{s.label}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{s.sub}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-slate-600 uppercase tracking-widest">Scroll</span>
          <div className="h-10 w-px bg-gradient-to-b from-blue-500/60 to-transparent" />
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          TICKER MARQUEE
      ══════════════════════════════════════════════════════════ */}
      <div className="relative bg-[#0D1424] border-y border-white/[0.06] py-5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1424] via-transparent to-[#0D1424] pointer-events-none z-10" />
        <div className="flex whitespace-nowrap" style={{ animation: "ticker 40s linear infinite" }}>
          {[...Array(10)].map((_, i) => (
            <span key={i} className="inline-flex items-center gap-8 px-10 text-[11px] font-bold uppercase tracking-[0.22em] text-slate-600">
              Reliable Service <span className="text-blue-700 text-base">◆</span>
              Professional Team <span className="text-blue-700 text-base">◆</span>
              Fast Response <span className="text-blue-700 text-base">◆</span>
              Customer Focused <span className="text-blue-700 text-base">◆</span>
              10+ Years Experience <span className="text-blue-700 text-base">◆</span>
              Trusted Partner <span className="text-blue-700 text-base">◆</span>
              24/7 Support <span className="text-blue-700 text-base">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════════════════════════ */}
      <section className="py-0 bg-[#0A0F1E]">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/[0.06]"
        >
          {[
            { num: "10+", label: "Years of Experience", sub: "Industry proven" },
            { num: "500+", label: "Happy Customers", sub: "And growing" },
            { num: "24/7", label: "Customer Support", sub: "Always available" },
            { num: "100%", label: "Commitment", sub: "To every client" },
          ].map((s, i) => (
            <motion.div key={i} variants={fadeUp} className="flex flex-col items-center py-16 px-8 text-center relative group">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/40 transition-all duration-700" />
              <span className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-500 mb-2 tabular-nums">{s.num}</span>
              <span className="text-white font-bold text-sm md:text-base mb-1">{s.label}</span>
              <span className="text-slate-600 text-xs uppercase tracking-wider">{s.sub}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CONNECTED LIFECYCLE
      ══════════════════════════════════════════════════════════ */}
      <section className="py-32 bg-[#0D1424] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
          <div className="absolute -top-24 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-4xl mx-auto text-center mb-24">
            <span className="section-label">End-to-End Service</span>
            <h2 className="font-extrabold text-white leading-tight mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              A Connected Lifecycle Empowering the<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                End-to-End Customer Experience
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              We support every stage of the customer journey — from acquisition to long-term loyalty.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Headphones, num: "01",
                title: "Service & Support",
                desc: "Delivering exceptional ongoing customer service. Our team handles every inquiry with professionalism, speed, and genuine care — building loyalty that lasts.",
                accentColor: "from-blue-600/20 to-transparent",
              },
              {
                icon: Globe, num: "02",
                title: "Digital Customer Acquisition",
                desc: "Helping brands grow their customer base through strategic outreach and digital channels. We connect the right customers with the right solutions.",
                accentColor: "from-blue-700/20 to-transparent",
              },
              {
                icon: BarChart3, num: "03",
                title: "Surveys & Feedback Analytics",
                desc: "Real insights from real customers. We gather, analyze, and act on feedback to continuously improve the experience and drive business results.",
                accentColor: "from-blue-800/20 to-transparent",
              },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp}
                className={`relative rounded-3xl bg-gradient-to-br ${item.accentColor} border border-white/[0.07] p-10 group hover:border-blue-500/35 hover:shadow-[0_0_50px_rgba(37,99,235,0.1)] transition-all duration-500 hover:-translate-y-1.5 overflow-hidden`}
              >
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/50 transition-all duration-500" />
                <div className="text-xs font-black text-blue-500/20 tracking-[0.3em] mb-8">{item.num}</div>
                <div className="h-16 w-16 rounded-2xl bg-blue-600/12 flex items-center justify-center text-blue-400 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <item.icon size={30} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-extrabold text-white mb-4">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          WHY CHOOSE US  — Asymmetric layout
      ══════════════════════════════════════════════════════════ */}
      <section className="py-32 bg-[#0A0F1E] relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left sticky text */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-5 lg:sticky lg:top-32">
              <span className="section-label">Why Choose Us</span>
              <h2 className="font-extrabold text-white leading-tight mb-6" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                Built on Trust,<br />Driven by<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Results</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-10">
                We combine industry expertise with a genuine commitment to every customer — delivering the professionalism and speed that modern connectivity demands.
              </p>
              <Link href="/about"
                className="inline-flex items-center gap-2 text-blue-400 font-semibold text-sm hover:text-blue-300 transition-colors group"
              >
                Learn more about ZSolutionz
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Right cards */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { icon: Shield, title: "Reliable Service", desc: "Consistent, dependable connectivity solutions customers can count on every single time." },
                { icon: Users, title: "Professional Team", desc: "Experienced sales and support specialists dedicated to setting the standard for excellence." },
                { icon: Clock, title: "Fast Response", desc: "Rapid, efficient assistance that respects your time and resolves issues on first contact." },
                { icon: Heart, title: "Customer Focused", desc: "Every decision, every process, every interaction — centered entirely on the customer's success." },
              ].map((card, i) => (
                <motion.div key={i} variants={fadeUp}
                  className="glass-card rounded-2xl p-7 hover:border-blue-500/35 hover:shadow-[0_0_30px_rgba(37,99,235,0.08)] transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="h-12 w-12 rounded-xl bg-blue-600/12 flex items-center justify-center text-blue-400 mb-5 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <card.icon size={22} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-extrabold text-white mb-2.5">{card.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          MISSION — Bold two-column split
      ══════════════════════════════════════════════════════════ */}
      <section className="py-32 bg-[#0D1424] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-blue-600/6 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Image side */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                <img src={missionBg} alt="Our Mission" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0A0F1E]/70 via-[#0A0F1E]/20 to-transparent" />
              </div>
              {/* Floating quote card */}
              <div className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-6 max-w-[260px] border-blue-500/20">
                <div className="flex items-start gap-3">
                  <Star className="text-blue-500 shrink-0 mt-0.5" size={16} fill="currentColor" />
                  <p className="text-white text-sm font-medium leading-relaxed italic">
                    "Customer-inspired. Client driven."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Text side */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="order-1 lg:order-2">
              <span className="section-label">Our Mission</span>
              <h2 className="font-extrabold text-white leading-tight mb-8" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                To Unite a Business That<br />Connects{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                  People Around the Globe
                </span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-10">
                Connect customers with reliable and innovative technology solutions that improve communication, productivity, and everyday life. We strive to deliver exceptional service, build lasting relationships, and create value through trusted partnerships.
              </p>
              <ul className="space-y-4 mb-12">
                {[
                  "Personalized solutions tailored to customer needs",
                  "Dedicated support and professional guidance",
                  "Trusted technology and connectivity partners",
                  "Focus on quality service and customer experience",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3.5">
                    <div className="h-6 w-6 rounded-full bg-blue-600/15 flex items-center justify-center shrink-0">
                      <CheckCircle className="text-blue-500" size={14} />
                    </div>
                    <span className="text-slate-300 text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 text-white font-semibold h-13 px-8 py-3.5 hover:bg-white/8 hover:border-white/25 transition-all duration-300"
              >
                Discover Our Story
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SERVICES OVERVIEW
      ══════════════════════════════════════════════════════════ */}
      <section className="py-32 bg-[#0A0F1E] relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="section-label">Simple. Reliable. Connected.</span>
              <h2 className="font-extrabold text-white leading-tight mb-8" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                Who We Are
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                ZSolutionz is committed to helping customers connect with reliable internet services while providing exceptional customer support. We focus on professionalism, transparency, and long-term customer satisfaction.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed mb-12">
                At ZSolutionz, we connect customers with reliable technology, internet, and communication solutions tailored to their needs. Our focus is on delivering exceptional service, trusted partnerships, and a seamless customer experience.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-12">
                {[
                  { icon: Zap, label: "Fast" },
                  { icon: Shield, label: "Reliable" },
                  { icon: TrendingUp, label: "Growing" },
                ].map((item, i) => (
                  <div key={i} className="glass-card rounded-xl p-4 text-center">
                    <item.icon size={20} className="text-blue-500 mx-auto mb-2" strokeWidth={1.5} />
                    <span className="text-slate-300 text-xs font-semibold">{item.label}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 text-white font-semibold h-13 px-8 py-3.5 hover:bg-blue-500 transition-colors shadow-[0_0_24px_rgba(37,99,235,0.3)]"
                >
                  About Us <ArrowRight size={16} />
                </Link>
                <Link href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 text-white font-semibold h-13 px-8 py-3.5 hover:bg-white/8 transition-colors"
                >
                  Get In Touch
                </Link>
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="relative rounded-3xl overflow-hidden aspect-[4/3]"
            >
              <img src={aboutTechBg} alt="Technology" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/50 to-transparent mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E]/60 to-transparent" />
              <div className="absolute top-6 left-6 glass-card rounded-xl px-5 py-3">
                <div className="flex items-center gap-2.5">
                  <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-white text-sm font-semibold">Trusted & Reliable</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CAREERS CTA — Full-width gradient panel
      ══════════════════════════════════════════════════════════ */}
      <section className="py-32 bg-[#0D1424] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyNTYzRUIiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTEyIDB2Nmg2di02aC02em0xMiAwdjZoNnYtNmgtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40" />
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-600/12 via-blue-900/6 to-transparent p-12 md:p-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                  <span className="section-label">Join Our Team</span>
                  <h2 className="font-extrabold text-white leading-tight mb-5" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
                    Build Your Career<br />With ZSolutionz
                  </h2>
                  <p className="text-slate-400 leading-relaxed">
                    We are looking for motivated individuals who want to grow with us. Sales, customer support, and remote roles available.
                  </p>
                </motion.div>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex flex-col gap-4">
                  <Link href="/join"
                    className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-blue-600 text-white font-semibold h-14 px-10 hover:bg-blue-500 transition-all shadow-[0_0_30px_rgba(37,99,235,0.35)] hover:-translate-y-0.5"
                  >
                    View Open Positions
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 text-white font-semibold h-14 px-10 hover:bg-white/8 transition-colors"
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CONTACT STRIP
      ══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-[#0A0F1E] border-t border-white/[0.06]">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <motion.a
              href="tel:+12623992770"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="glass-card rounded-2xl p-8 flex items-center gap-6 hover:border-blue-500/40 transition-all duration-300 group hover:-translate-y-0.5"
            >
              <div className="h-14 w-14 rounded-2xl bg-blue-600/12 flex items-center justify-center text-blue-400 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Phone size={26} strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.15em] text-slate-600 mb-1">Call Us Anytime</div>
                <div className="text-xl font-extrabold text-white">+1(262) 399-2770</div>
                <div className="text-xs text-slate-500 mt-1">Available during business hours</div>
              </div>
            </motion.a>
            <motion.a
              href="mailto:info@zsolutionz.com"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="glass-card rounded-2xl p-8 flex items-center gap-6 hover:border-blue-500/40 transition-all duration-300 group hover:-translate-y-0.5"
            >
              <div className="h-14 w-14 rounded-2xl bg-blue-600/12 flex items-center justify-center text-blue-400 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Mail size={26} strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.15em] text-slate-600 mb-1">Email Us</div>
                <div className="text-xl font-extrabold text-white">info@zsolutionz.com</div>
                <div className="text-xs text-slate-500 mt-1">We reply within 24 hours</div>
              </div>
            </motion.a>
          </div>
        </div>
      </section>

    </div>
  );
}
