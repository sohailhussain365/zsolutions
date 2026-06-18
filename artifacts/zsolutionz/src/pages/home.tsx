import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Headphones, Globe, BarChart3, Shield, Users, Clock, Heart,
  ArrowRight, CheckCircle, Star, Phone, Mail, ChevronRight
} from "lucide-react";
import heroBg from "@/assets/hero-bg.png";
import missionBg from "@/assets/mission-bg.png";
import aboutTechBg from "@/assets/about-tech.png";

const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section id="home" className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-[#0A0F1E]/75" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1E]/30 via-transparent to-[#0A0F1E]" />
        </div>
        {/* Animated grid overlay */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-[0.08]"
          style={{
            backgroundImage: `linear-gradient(rgba(37,99,235,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.4) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
            animation: "gridMove 18s linear infinite",
          }}
        />
        <style>{`@keyframes gridMove { from { background-position: 0 0; } to { background-position: 64px 64px; } }`}</style>

        <div className="container relative z-10 mx-auto px-6 lg:px-12">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-300 mb-10 backdrop-blur-sm"
            >
              <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
              A Connected Lifecycle · 10+ Years of Experience
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.05] mb-8"
            >
              Connecting Customers<br />
              With <span className="text-blue-500">Reliable</span><br />
              <span className="text-blue-400">Solutions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl leading-relaxed"
            >
              ZSolutionz helps customers find reliable home internet and connectivity solutions with a simple and hassle-free process. Professional service. Dedicated support. Real results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact"
                data-testid="link-hero-contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 text-white font-semibold text-base h-14 px-10 hover:bg-blue-500 transition-all duration-300 shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.55)]"
              >
                Get In Touch <ArrowRight size={18} />
              </Link>
              <Link
                href="/join"
                data-testid="link-hero-join"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 text-white font-semibold text-base h-14 px-10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                Join Our Team
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Floating stat cards */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute right-8 bottom-24 hidden xl:flex flex-col gap-4"
        >
          {[
            { num: "10+", label: "Years of Experience" },
            { num: "500+", label: "Happy Customers" },
            { num: "24/7", label: "Support Available" },
          ].map((s, i) => (
            <div key={i} className="glass-card rounded-2xl px-6 py-4 text-right min-w-[180px]">
              <div className="text-2xl font-bold text-blue-400">{s.num}</div>
              <div className="text-xs text-slate-400 mt-0.5">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── MARQUEE ────────────────────────────────────────────── */}
      <div className="relative bg-[#0F172A] border-y border-white/[0.07] py-5 overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5" />
        <div className="flex whitespace-nowrap" style={{ animation: "marquee 35s linear infinite" }}>
          {[...Array(8)].map((_, i) => (
            <span key={i} className="inline-flex items-center gap-6 px-8 text-xs font-semibold uppercase tracking-[0.25em] text-blue-400/80">
              Reliable Service <span className="text-blue-600">·</span>
              Professional Team <span className="text-blue-600">·</span>
              Fast Response <span className="text-blue-600">·</span>
              Customer Focused <span className="text-blue-600">·</span>
              10+ Years <span className="text-blue-600">·</span>
              Trusted Partner <span className="text-blue-600">·</span>
              24/7 Support <span className="text-blue-600">·</span>
            </span>
          ))}
        </div>
        <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
      </div>

      {/* ── STATS ──────────────────────────────────────────────── */}
      <section className="py-24 bg-[#0A0F1E] border-b border-white/[0.07]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.07]"
          >
            {[
              { num: "10+", label: "Years of Experience", sub: "Industry expertise" },
              { num: "500+", label: "Happy Customers", sub: "Served nationwide" },
              { num: "24/7", label: "Customer Support", sub: "Always available" },
              { num: "100%", label: "Commitment", sub: "To every client" },
            ].map((s, i) => (
              <motion.div key={i} variants={fadeUp} className="flex flex-col items-center py-12 px-8 text-center">
                <span className="text-4xl md:text-5xl font-extrabold text-blue-500 mb-2">{s.num}</span>
                <span className="text-white font-semibold text-base mb-1">{s.label}</span>
                <span className="text-slate-500 text-sm">{s.sub}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CONNECTED LIFECYCLE ────────────────────────────────── */}
      <section className="py-28 bg-[#0F172A]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-3xl mx-auto text-center mb-20"
          >
            <span className="section-label">Our Services</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              A Connected Lifecycle Empowering the<br />
              <span className="text-blue-500">End-to-End Customer Experience</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              We support every stage of the customer journey — from acquisition to long-term satisfaction.
            </p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: Headphones,
                num: "01",
                title: "Service & Support",
                desc: "Delivering exceptional ongoing customer service. Our team is trained to handle every inquiry with professionalism, speed, and genuine care — building loyalty that lasts.",
              },
              {
                icon: Globe,
                num: "02",
                title: "Digital Customer Acquisition",
                desc: "Helping brands grow their customer base through strategic outreach and digital channels. We connect the right customers with the right solutions every time.",
              },
              {
                icon: BarChart3,
                num: "03",
                title: "Surveys & Feedback Analytics",
                desc: "Real insights from real customers. We gather, analyze, and act on feedback to continuously improve the experience and drive measurable business results.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="glass-card rounded-3xl p-10 group hover:shadow-[0_0_40px_rgba(37,99,235,0.12)] transition-all duration-500 hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/60 transition-all duration-500" />
                <div className="text-xs font-bold text-blue-500/40 tracking-widest mb-6">{item.num}</div>
                <div className="h-14 w-14 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <item.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ──────────────────────────────────────── */}
      <section className="py-28 bg-[#0A0F1E]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="section-label">Why Choose Us</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                Built on Trust,<br />Driven by <span className="text-blue-500">Results</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-10">
                We combine industry expertise with a genuine commitment to every customer. Our team brings the professionalism, speed, and heart that modern connectivity service demands.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors group"
              >
                Learn more about us
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              {[
                { icon: Shield, title: "Reliable Service", desc: "Consistent, dependable connectivity solutions customers can count on." },
                { icon: Users, title: "Professional Team", desc: "Experienced sales and support specialists dedicated to excellence." },
                { icon: Clock, title: "Fast Response", desc: "Rapid, efficient assistance that respects your time and needs." },
                { icon: Heart, title: "Customer Focused", desc: "Every decision is made with the customer's best interest at heart." },
              ].map((card, i) => (
                <motion.div key={i} variants={fadeUp} className="glass-card rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300 group">
                  <div className="h-12 w-12 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-500 mb-5 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <card.icon size={22} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MISSION PREVIEW ────────────────────────────────────── */}
      <section className="py-28 bg-[#0F172A] overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp}
              className="relative rounded-3xl overflow-hidden aspect-[4/3]"
            >
              <img src={missionBg} alt="Our Mission" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#0A0F1E]/50" />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="glass-card rounded-2xl p-6">
                  <div className="text-3xl font-extrabold text-white mb-1">Customer-inspired.</div>
                  <div className="text-blue-400 font-semibold">Client Driven.</div>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="section-label">Our Mission</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-8">
                To Unite a Business That<br />Connects <span className="text-blue-500">People</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Connect customers with reliable and innovative technology solutions that improve communication, productivity, and everyday life. We strive to deliver exceptional service, build lasting relationships, and create value through trusted partnerships.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Personalized solutions tailored to customer needs",
                  "Dedicated support and professional guidance",
                  "Trusted technology and connectivity partners",
                  "Focus on quality service and customer experience",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="text-blue-500 shrink-0" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-[#0A0F1E] font-semibold h-13 px-8 py-3 hover:bg-blue-50 transition-colors"
              >
                Learn More About Us <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ABOUT PREVIEW ──────────────────────────────────────── */}
      <section className="py-28 bg-[#0A0F1E]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="section-label">Who We Are</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-8">
                Simple. Reliable.<br /><span className="text-blue-500">Connected.</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                ZSolutionz is committed to helping customers connect with reliable internet services while providing exceptional customer support. We focus on professionalism, transparency, and long-term customer satisfaction.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed mb-10">
                At ZSolutionz, we connect customers with reliable technology, internet, and communication solutions tailored to their needs. Our focus is on delivering exceptional service, trusted partnerships, and a seamless customer experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about" className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 text-white font-semibold h-13 px-8 py-3 hover:bg-blue-500 transition-colors">
                  About Us <ArrowRight size={18} />
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 text-white font-semibold h-13 px-8 py-3 hover:bg-white/8 transition-colors">
                  Contact Us
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp}
              className="relative rounded-3xl overflow-hidden aspect-[4/3]"
            >
              <img src={aboutTechBg} alt="Technology" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CAREERS CTA ────────────────────────────────────────── */}
      <section className="py-24 bg-[#0F172A] border-t border-white/[0.07]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="rounded-3xl bg-gradient-to-br from-blue-600/20 via-blue-900/10 to-transparent border border-blue-500/20 p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-xl">
              <span className="section-label">Join Our Team</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Build Your Career<br />With ZSolutionz
              </h2>
              <p className="text-slate-400 text-lg">
                We are looking for motivated individuals who want to grow with us. Sales, support, and remote roles available.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link href="/join" className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 text-white font-semibold h-14 px-10 hover:bg-blue-500 transition-colors shadow-[0_0_24px_rgba(37,99,235,0.35)]">
                View Open Positions <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 text-white font-semibold h-14 px-10 hover:bg-white/10 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUICK CONTACT STRIP ────────────────────────────────── */}
      <section className="py-16 bg-[#0A0F1E] border-t border-white/[0.07]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="tel:+12623992770"
              className="glass-card rounded-2xl p-8 flex items-center gap-6 hover:border-blue-500/40 transition-all duration-300 group"
            >
              <div className="h-14 w-14 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Phone size={26} strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1">Call Us Anytime</div>
                <div className="text-xl font-bold text-white">+1(262) 399-2770</div>
              </div>
            </a>
            <a
              href="mailto:info@zsolutionz.com"
              className="glass-card rounded-2xl p-8 flex items-center gap-6 hover:border-blue-500/40 transition-all duration-300 group"
            >
              <div className="h-14 w-14 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Mail size={26} strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1">Email Us</div>
                <div className="text-xl font-bold text-white">info@zsolutionz.com</div>
              </div>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
