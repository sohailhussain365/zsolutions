import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  CheckCircle, Star, HeartHandshake, TrendingUp, Zap,
  ArrowRight, Target, Eye, Award, Users
} from "lucide-react";
import aboutTechBg from "@/assets/about-tech.png";
import missionBg from "@/assets/mission-bg.png";
import heroBg from "@/assets/hero-bg.png";

const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">

      {/* ── HERO BANNER ────────────────────────────────────────── */}
      <section className="relative min-h-[65vh] flex items-end pb-16 pt-36 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-[#0A0F1E]/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0F1E]/50 to-[#0A0F1E]" />
        </div>
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(rgba(37,99,235,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.5) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />
        <div className="container relative z-10 mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronIcon />
              <span className="text-blue-400">About Us</span>
            </div>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-300 mb-6 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
              Who We Are
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.05] mb-6">
              About <span className="text-blue-500">ZSolutionz</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
              Committed to connecting customers with reliable internet services while delivering exceptional customer support across every interaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── WHO WE ARE ─────────────────────────────────────────── */}
      <section className="py-28 bg-[#0A0F1E]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="section-label">Who We Are</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-8">
                Connecting People With<br /><span className="text-blue-500">Trusted Solutions</span>
              </h2>
              <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                <p>
                  ZSolutionz is committed to helping customers connect with reliable internet services while providing exceptional customer support. We focus on professionalism, transparency, and long-term customer satisfaction.
                </p>
                <p>
                  At ZSolutionz, we connect customers with reliable technology, internet, and communication solutions tailored to their needs. Our focus is on delivering exceptional service, trusted partnerships, and a seamless customer experience.
                </p>
                <p>
                  Founded on the belief that everyone deserves quality connectivity, ZSolutionz has grown into a trusted partner for hundreds of customers — always putting their needs first.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-6">
                {[
                  { num: "10+", label: "Years of Experience" },
                  { num: "500+", label: "Customers Served" },
                ].map((s, i) => (
                  <div key={i} className="glass-card rounded-2xl p-6 text-center">
                    <div className="text-3xl font-extrabold text-blue-500 mb-1">{s.num}</div>
                    <div className="text-sm text-slate-400">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp}
              className="relative rounded-3xl overflow-hidden aspect-[4/3]"
            >
              <img src={aboutTechBg} alt="ZSolutionz Technology" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/50 to-transparent" />
              <div className="absolute top-6 right-6">
                <div className="glass-card rounded-2xl p-5">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center">
                      <Award size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">Premium Service</div>
                      <div className="text-slate-400 text-xs">Trusted by hundreds</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── OUR MISSION ────────────────────────────────────────── */}
      <section className="py-28 bg-[#0F172A] border-y border-white/[0.07]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="section-label">Our Mission</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-8">
                Customer-inspired.<br /><span className="text-blue-500">Client Driven.</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-10">
                Connect customers with reliable and innovative technology solutions that improve communication, productivity, and everyday life. We strive to deliver exceptional service, build lasting relationships, and create value through trusted partnerships and customer-focused support.
              </p>
              <motion.ul
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={stagger}
                className="space-y-4"
              >
                {[
                  "Personalized solutions tailored to customer needs",
                  "Dedicated support and professional guidance",
                  "Trusted technology and connectivity partners",
                  "Focus on quality service and customer experience",
                ].map((item, i) => (
                  <motion.li key={i} variants={fadeUp} className="flex items-center gap-4 glass-card rounded-xl p-4">
                    <CheckCircle className="text-blue-500 shrink-0" size={20} />
                    <span className="text-slate-300 font-medium">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp}
              className="relative rounded-3xl overflow-hidden aspect-[4/3]"
            >
              <img src={missionBg} alt="Our Mission" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#0A0F1E]/60" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <blockquote className="glass-card rounded-2xl p-6">
                  <p className="text-white font-semibold text-base italic leading-relaxed">
                    "To unite a business that connects people around the globe, you need to know what you stand for."
                  </p>
                </blockquote>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── VISION & PURPOSE ───────────────────────────────────── */}
      <section className="py-28 bg-[#0A0F1E]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-3xl mx-auto mb-20">
            <span className="section-label">Our Foundation</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Vision, Mission & Purpose</h2>
            <p className="text-slate-400 text-lg">Three pillars that guide every decision we make and every customer we serve.</p>
          </motion.div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: Eye,
                title: "Our Vision",
                color: "from-blue-600/20 to-blue-900/5",
                desc: "To be the most trusted name in customer connectivity solutions — known for integrity, expertise, and genuine care for every person we serve.",
              },
              {
                icon: Target,
                title: "Our Mission",
                color: "from-blue-700/20 to-blue-900/5",
                desc: "Connect customers with reliable and innovative technology solutions that improve communication, productivity, and everyday life through exceptional service.",
              },
              {
                icon: Users,
                title: "Our Purpose",
                color: "from-blue-800/20 to-blue-900/5",
                desc: "To build lasting relationships between customers and the technology solutions that empower them — creating value, trust, and connection that endures.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`rounded-3xl bg-gradient-to-br ${item.color} border border-white/[0.07] p-10 hover:border-blue-500/30 transition-all duration-300 group`}
              >
                <div className="h-16 w-16 rounded-2xl bg-blue-600/15 flex items-center justify-center text-blue-500 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <item.icon size={30} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CORE VALUES ────────────────────────────────────────── */}
      <section className="py-28 bg-[#0F172A] border-t border-white/[0.07]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-3xl mx-auto mb-20">
            <span className="section-label">What We Stand For</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Our Core Values</h2>
            <p className="text-slate-400 text-lg">The principles that define our culture and guide our work every day.</p>
          </motion.div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: Star, num: "01", title: "Integrity", desc: "We operate with honesty and transparency in everything we do — with customers, partners, and each other." },
              { icon: HeartHandshake, num: "02", title: "Customer Commitment", desc: "Our clients come first, always. We go above and beyond to ensure every customer feels valued and heard." },
              { icon: TrendingUp, num: "03", title: "Professional Growth", desc: "We invest in our team's continuous development because a stronger team delivers a stronger customer experience." },
              { icon: Zap, num: "04", title: "Continuous Improvement", desc: "We never stop evolving. Every interaction, every process, every service — we're always looking to do better." },
            ].map((val, i) => (
              <motion.div key={i} variants={fadeUp} className="glass-card rounded-3xl p-8 group hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(37,99,235,0.08)] transition-all duration-300">
                <div className="text-xs font-bold text-blue-500/30 tracking-widest mb-6">{val.num}</div>
                <div className="h-14 w-14 rounded-2xl bg-blue-600/10 text-blue-500 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <val.icon size={26} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{val.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA STRIP ──────────────────────────────────────────── */}
      <section className="py-20 bg-[#0A0F1E] border-t border-white/[0.07]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-600/15 via-blue-900/8 to-transparent p-10 md:p-14 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Ready to Work With Us?
              </h2>
              <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10">
                Get in touch today and discover how ZSolutionz can connect your customers with the solutions they deserve.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 text-white font-semibold h-14 px-10 hover:bg-blue-500 transition-colors shadow-[0_0_24px_rgba(37,99,235,0.35)]">
                  Contact Us <ArrowRight size={18} />
                </Link>
                <Link href="/join" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 text-white font-semibold h-14 px-10 hover:bg-white/10 transition-colors">
                  Join Our Team
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}

function ChevronIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}
