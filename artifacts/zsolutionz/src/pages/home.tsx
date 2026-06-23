import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Headphones, Globe, BarChart3, Shield, Users, Clock, Heart,
  ArrowRight, CheckCircle, Phone, Mail, ChevronRight,
  Zap, Award, TrendingUp, Star
} from "lucide-react";
import { AnimatedCounter } from "@/components/animated-counter";
import { FloatingOrbs, HeroParticles } from "@/components/floating-orbs";
import heroBg from "@/assets/hero-bg.png";
import missionBg from "@/assets/mission-bg.png";
import aboutTechBg from "@/assets/about-tech.png";

/* ── Variants ──────────────────────────────────────────── */
const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22,1,0.36,1] as [number, number, number, number] } },
};
const stagger = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const fadeLeft  = { hidden: { opacity: 0, x: -24 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22,1,0.36,1] as [number, number, number, number] } } };
const fadeRight = { hidden: { opacity: 0, x: 24 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22,1,0.36,1] as [number, number, number, number] } } };

/* Word-reveal split animation */
function WordReveal({ text, className = "" }: { text: string; className?: string }) {
  const words = text.split(" ");
  return (
    <motion.span
      className={className}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
      initial="hidden"
      animate="visible"
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22,1,0.36,1] as [number, number, number, number] } } }}
        >
          {w}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default function HomePage() {

  return (
    <div className="flex flex-col w-full overflow-x-hidden">

      {/* ══════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════ */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Parallax bg */}
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover object-center hero-bg-zoom" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1E]/97 via-[#0A0F1E]/82 to-[#0A0F1E]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] via-transparent to-[#0A0F1E]/30" />
        </div>

        {/* Animated grid */}
        <div className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(37,99,235,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.06) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
            animation: "gridDrift 25s linear infinite",
          }}
        />

        {/* Floating orbs & particles */}
        <FloatingOrbs />
        <HeroParticles />

        <div className="container relative z-10 mx-auto px-6 lg:px-16 pt-36 pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">

            {/* ── Left copy ── */}
            <div className="lg:col-span-7">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-3 rounded-full border border-blue-500/25 bg-blue-500/8 px-5 py-2.5 text-sm font-medium text-blue-300 mb-10 backdrop-blur-sm"
              >
                <span className="h-2 w-2 rounded-full bg-blue-400" style={{ animation: "glowPulse 2s ease-in-out infinite" }} />
                A Connected Lifecycle · 10+ Years of Experience
              </motion.div>

              {/* Headline with word reveal */}
              <h1 className="font-extrabold tracking-tight text-white leading-[1.03] mb-8" style={{ fontSize: "clamp(2rem, 6vw, 5.5rem)" }}>
                <WordReveal text="Connecting" />
                <br />
                <WordReveal text="Customers With" />
                <br />
                <span className="gradient-text">
                  <WordReveal text="Reliable Solutions" />
                </span>
              </h1>

              {/* Sub */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-lg md:text-xl text-slate-400 mb-12 max-w-xl leading-relaxed"
              >
                ZSolutionz helps customers find reliable home internet and connectivity solutions with a simple, hassle-free process. Professional service. Dedicated support. Real results.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.75 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/contact"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-blue-600 text-white font-semibold text-base h-14 px-10 btn-glow shadow-[0_0_40px_rgba(37,99,235,0.45)]"
                >
                  Get In Touch
                  <ArrowRight size={17} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                </Link>
                <Link href="/join"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 text-white font-semibold text-base h-14 px-10 transition-all duration-300 hover:bg-white/8 hover:border-white/30 backdrop-blur-sm"
                >
                  Join Our Team
                </Link>
              </motion.div>

              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
                className="flex flex-wrap gap-4 mt-10"
              >
                {[
                  { icon: Shield, label: "Trusted Service" },
                  { icon: Award,  label: "10+ Years Experience" },
                  { icon: Users,  label: "500+ Happy Customers" },
                ].map((b, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.1 + i * 0.1 }}
                    className="flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.03] backdrop-blur-sm px-4 py-2"
                  >
                    <b.icon size={13} className="text-blue-400" strokeWidth={1.5} />
                    <span className="text-slate-400 text-xs font-medium">{b.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* ── Right: floating stat cards ── */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.22,1,0.36,1] as [number, number, number, number] }}
              className="hidden lg:flex lg:col-span-5 flex-col gap-4"
            >
              {[
                { num: 10, suffix: "+", label: "Years of Experience", sub: "Industry expertise", icon: Award,     delay: 0.1 },
                { num: 500, suffix: "+", label: "Happy Customers",     sub: "Served nationwide",   icon: Users,     delay: 0.2 },
                { num: 24, suffix: "/7", label: "Support Available",   sub: "Always here for you", icon: Headphones,delay: 0.3 },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40, y: 20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.15, duration: 0.6, ease: [0.22,1,0.36,1] as [number, number, number, number] }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="glass-card rounded-2xl p-6 flex items-center gap-5 cursor-default group"
                >
                  <div className="h-12 w-12 rounded-xl bg-blue-600/12 flex items-center justify-center text-blue-400 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <s.icon size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-white leading-none">
                      <AnimatedCounter target={s.num} suffix={s.suffix} duration={1600} />
                    </div>
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
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-default"
        >
          <span className="text-[10px] text-slate-600 uppercase tracking-[0.25em]">Scroll</span>
          <motion.div
            animate={{ scaleY: [1, 0.4, 1] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            className="h-8 w-px bg-gradient-to-b from-blue-500/70 to-transparent origin-top"
          />
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          TICKER MARQUEE
      ══════════════════════════════════════════════════════════ */}
      <div className="relative bg-[#0D1424] border-y border-white/[0.06] py-4 overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0D1424] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0D1424] to-transparent z-10 pointer-events-none" />
        <div className="flex whitespace-nowrap" style={{ animation: "ticker 38s linear infinite" }}>
          {[...Array(10)].map((_, i) => (
            <span key={i} className="inline-flex items-center gap-8 px-10 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-600">
              Reliable Service <span className="text-blue-800 text-sm">◆</span>
              Professional Team <span className="text-blue-800 text-sm">◆</span>
              Fast Response <span className="text-blue-800 text-sm">◆</span>
              Customer Focused <span className="text-blue-800 text-sm">◆</span>
              10+ Years Experience <span className="text-blue-800 text-sm">◆</span>
              Trusted Partner <span className="text-blue-800 text-sm">◆</span>
              24/7 Support <span className="text-blue-800 text-sm">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-[#0A0F1E]">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/[0.05]"
        >
          {[
            { num: 10,  suffix: "+",  label: "Years of Experience", sub: "Industry proven" },
            { num: 500, suffix: "+",  label: "Happy Customers",     sub: "And growing" },
            { num: 24,  suffix: "/7", label: "Customer Support",    sub: "Always available" },
            { num: 100, suffix: "%",  label: "Commitment",          sub: "To every client" },
          ].map((s, i) => (
            <motion.div key={i} variants={fadeUp} className="flex flex-col items-center py-16 px-8 text-center relative overflow-hidden group">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/60 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-b from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/4 transition-all duration-700" />
              <span className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-500 mb-2 relative z-10">
                <AnimatedCounter target={s.num} suffix={s.suffix} duration={1800} />
              </span>
              <span className="text-white font-bold text-sm md:text-base mb-1 relative z-10">{s.label}</span>
              <span className="text-slate-600 text-xs uppercase tracking-wider relative z-10">{s.sub}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CONNECTED LIFECYCLE
      ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-32 bg-[#0D1424] relative overflow-hidden">
        <FloatingOrbs />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-4xl mx-auto text-center mb-12 md:mb-24">
            <span className="section-label">End-to-End Service</span>
            <h2 className="font-extrabold text-white leading-tight mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              A Connected Lifecycle Empowering the<br />
              <span className="gradient-text">End-to-End Customer Experience</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              We support every stage of the customer journey — from acquisition to long-term loyalty.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Headphones, num: "01", title: "Service & Support",               desc: "Delivering exceptional ongoing customer service. Our team handles every inquiry with professionalism, speed, and genuine care — building loyalty that lasts." },
              { icon: Globe,      num: "02", title: "Digital Customer Acquisition",     desc: "Helping brands grow their customer base through strategic outreach and digital channels. We connect the right customers with the right solutions." },
              { icon: BarChart3,  num: "03", title: "Surveys & Feedback Analytics",    desc: "Real insights from real customers. We gather, analyze, and act on feedback to continuously improve the experience and drive business results." },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="relative rounded-3xl bg-gradient-to-br from-blue-600/8 to-transparent border border-white/[0.07] p-10 group hover:border-blue-500/35 hover:shadow-[0_0_50px_rgba(37,99,235,0.12)] transition-all duration-500 overflow-hidden glass-card-shimmer"
              >
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/60 transition-all duration-500" />
                <div className="text-xs font-black text-blue-500/15 tracking-[0.3em] mb-8">{item.num}</div>
                <div className="h-16 w-16 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-400 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
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
          WHY CHOOSE US
      ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-32 bg-[#0A0F1E] relative overflow-hidden">
        <FloatingOrbs />
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft} className="lg:col-span-5 lg:sticky lg:top-32">
              <span className="section-label">Why Choose Us</span>
              <h2 className="font-extrabold text-white leading-tight mb-6" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                Built on Trust,<br />Driven by{" "}
                <span className="gradient-text">Results</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-10">
                We combine industry expertise with a genuine commitment to every customer — delivering the professionalism and speed that modern connectivity demands.
              </p>
              <Link href="/about"
                className="inline-flex items-center gap-2 text-blue-400 font-semibold text-sm hover:text-blue-300 transition-colors group link-underline"
              >
                Learn more about ZSolutionz
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { icon: Shield,  title: "Reliable Service",    desc: "Consistent, dependable connectivity solutions customers can count on every single time." },
                { icon: Users,   title: "Professional Team",   desc: "Experienced specialists dedicated to setting the standard for excellence in every interaction." },
                { icon: Clock,   title: "Fast Response",       desc: "Rapid, efficient assistance that respects your time and resolves issues on first contact." },
                { icon: Heart,   title: "Customer Focused",    desc: "Every decision, every process, every interaction — centered entirely on the customer's success." },
              ].map((card, i) => (
                <motion.div key={i} variants={fadeUp}
                  whileHover={{ y: -5, transition: { duration: 0.25 } }}
                  className="glass-card rounded-2xl p-7 hover:border-blue-500/35 hover:shadow-[0_8px_40px_rgba(37,99,235,0.1)] transition-all duration-300 group relative overflow-hidden card-accent-left"
                >
                  <div className="h-12 w-12 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-400 mb-5 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 group-hover:shadow-[0_0_16px_rgba(37,99,235,0.5)]">
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
      <section className="py-16 md:py-32 bg-[#0D1424] relative overflow-hidden">
        <FloatingOrbs />
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

            {/* Image */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft} className="relative order-2 lg:order-1">
              <motion.div
                className="relative rounded-3xl overflow-hidden aspect-[4/3]"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.4 }}
              >
                <img src={missionBg} alt="Our Mission" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0A0F1E]/70 via-[#0A0F1E]/20 to-transparent" />
                {/* Scan line overlay */}
                <div className="absolute inset-0 pointer-events-none" style={{
                  backgroundImage: "linear-gradient(transparent 50%, rgba(37,99,235,0.03) 50%)",
                  backgroundSize: "100% 4px",
                }} />
              </motion.div>
              {/* Floating quote */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-5 max-w-[250px] border-blue-500/20 shadow-[0_0_30px_rgba(37,99,235,0.15)]"
              >
                <div className="flex items-start gap-2.5">
                  <Star className="text-blue-500 shrink-0 mt-0.5" size={14} fill="currentColor" />
                  <p className="text-white text-xs font-medium leading-relaxed italic">
                    "Customer-inspired. Client driven."
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Text */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight} className="order-1 lg:order-2">
              <span className="section-label">Our Mission</span>
              <h2 className="font-extrabold text-white leading-tight mb-8" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                To Unite a Business That<br />Connects{" "}
                <span className="gradient-text">People Around the Globe</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-10">
                Connect customers with reliable and innovative technology solutions that improve communication, productivity, and everyday life. We strive to deliver exceptional service, build lasting relationships, and create value through trusted partnerships.
              </p>
              <motion.ul initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-3 mb-12">
                {[
                  "Personalized solutions tailored to customer needs",
                  "Dedicated support and professional guidance",
                  "Trusted technology and connectivity partners",
                  "Focus on quality service and customer experience",
                ].map((item, i) => (
                  <motion.li key={i} variants={fadeUp} className="flex items-center gap-3.5">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="h-6 w-6 rounded-full bg-blue-600/15 flex items-center justify-center shrink-0"
                    >
                      <CheckCircle className="text-blue-500" size={14} />
                    </motion.div>
                    <span className="text-slate-300 text-sm font-medium">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <Link href="/about"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 text-white font-semibold h-13 px-8 py-4 hover:bg-white/8 hover:border-white/30 transition-all duration-300"
              >
                Discover Our Story
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SERVICES / WHO WE ARE
      ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-32 bg-[#0A0F1E] relative overflow-hidden">
        <FloatingOrbs />
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft}>
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
                  <motion.div key={i} whileHover={{ y: -4, scale: 1.03 }} className="glass-card rounded-xl p-4 text-center cursor-default">
                    <item.icon size={20} className="text-blue-500 mx-auto mb-2" strokeWidth={1.5} />
                    <span className="text-slate-300 text-xs font-semibold">{item.label}</span>
                  </motion.div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 text-white font-semibold h-13 px-8 py-4 btn-glow shadow-[0_0_24px_rgba(37,99,235,0.3)]"
                >
                  About Us <ArrowRight size={16} />
                </Link>
                <Link href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 text-white font-semibold h-13 px-8 py-4 hover:bg-white/8 transition-colors"
                >
                  Get In Touch
                </Link>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-3xl overflow-hidden aspect-[4/3]"
            >
              <img src={aboutTechBg} alt="Technology" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/50 to-transparent mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E]/60 to-transparent" />
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute top-6 left-6 glass-card rounded-xl px-5 py-3"
              >
                <div className="flex items-center gap-2.5">
                  <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-white text-sm font-semibold">Trusted & Reliable</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CAREERS CTA
      ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-32 bg-[#0D1424] relative overflow-hidden">
        <FloatingOrbs />
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-600/12 via-blue-900/6 to-transparent p-8 md:p-12 lg:p-20 relative overflow-hidden"
            >
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-700"
                style={{ background: "linear-gradient(135deg, rgba(37,99,235,0.08), transparent, rgba(37,99,235,0.08))" }}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
                <div>
                  <span className="section-label">Join Our Team</span>
                  <h2 className="font-extrabold text-white leading-tight mb-5" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
                    Build Your Career<br />With ZSolutionz
                  </h2>
                  <p className="text-slate-400 leading-relaxed">
                    We are looking for motivated individuals who want to grow with us. Sales, customer support, and remote roles available.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <Link href="/join"
                    className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-blue-600 text-white font-semibold h-14 px-10 btn-glow shadow-[0_0_30px_rgba(37,99,235,0.35)]"
                  >
                    View Open Positions
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 text-white font-semibold h-14 px-10 hover:bg-white/8 transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CONTACT STRIP
      ══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-[#0A0F1E] border-t border-white/[0.06]">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { icon: Phone, label: "Call Us Anytime", value: "+1(262) 399-2770", sub: "Available during business hours", href: "tel:+12623992770" },
              { icon: Mail,  label: "Email Us",        value: "info@zsolutionz.com", sub: "We reply within 24 hours",     href: "mailto:info@zsolutionz.com" },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="glass-card rounded-2xl p-8 flex items-center gap-6 hover:border-blue-500/40 transition-all duration-300 group"
              >
                <div className="h-14 w-14 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-400 shrink-0 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300">
                  <item.icon size={26} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.15em] text-slate-600 mb-1">{item.label}</div>
                  <div className="text-xl font-extrabold text-white">{item.value}</div>
                  <div className="text-xs text-slate-500 mt-1">{item.sub}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
