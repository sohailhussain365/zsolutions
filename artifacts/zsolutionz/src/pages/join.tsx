import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { useRef } from "react";
import {
  TrendingUp, Users, Laptop, ArrowRight,
  CheckCircle, Briefcase, MapPin, Clock, DollarSign, Heart
} from "lucide-react";
import { FloatingOrbs } from "@/components/floating-orbs";
import joinBg from "@/assets/join-bg.png";
import heroBg from "@/assets/hero-bg.png";

const fadeUp    = { hidden: { opacity: 0, y: 52 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22,1,0.36,1] } } };
const fadeLeft  = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.22,1,0.36,1] } } };
const fadeRight = { hidden: { opacity: 0, x:  50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.22,1,0.36,1] } } };
const stagger   = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.13 } } };

export default function JoinPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <div className="flex flex-col w-full overflow-x-hidden">

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-[65vh] flex items-end pb-20 pt-40 overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <img src={joinBg} alt="" className="w-full h-full object-cover object-center scale-110" />
          <div className="absolute inset-0 bg-[#0A0F1E]/82" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0F1E]/50 to-[#0A0F1E]" />
        </motion.div>
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.06]"
          style={{ backgroundImage: `linear-gradient(rgba(37,99,235,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.5) 1px, transparent 1px)`, backgroundSize: "64px 64px" }}
        />
        <FloatingOrbs />

        <div className="container relative z-10 mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22,1,0.36,1] }}>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-600 mb-7">
              <Link href="/" className="hover:text-slate-400 transition-colors">Home</Link>
              <span className="text-slate-700">/</span>
              <span className="text-blue-400">Join Us</span>
            </div>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-500/20 bg-blue-500/8 px-5 py-2.5 text-sm font-medium text-blue-300 mb-7 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
              We Are Hiring
            </div>
            <h1 className="font-extrabold text-white tracking-tight leading-[1.03] mb-6" style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}>
              Build Your Career<br />With{" "}
              <span className="gradient-text">ZSolutionz</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
              We are looking for motivated individuals who want to grow with us. Join a team that values your skills, supports your development, and rewards your hard work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── WHY WORK WITH US ────────────────────────────────── */}
      <section className="py-32 bg-[#0A0F1E] relative overflow-hidden">
        <FloatingOrbs />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-3xl mx-auto mb-24">
            <span className="section-label">Why ZSolutionz</span>
            <h2 className="font-extrabold text-white mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>Why Work With Us</h2>
            <p className="text-slate-400 text-lg">We're not just offering jobs — we're offering careers. Here's what makes ZSolutionz a place where people thrive.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: TrendingUp, title: "Growth Opportunities",   desc: "Clear career paths and real advancement. We promote from within and invest in every team member's professional development and upward trajectory." },
              { icon: Users,      title: "Professional Environment",desc: "Work alongside experienced industry professionals in a culture that values collaboration, respect, and excellence in everything we do." },
              { icon: Laptop,     title: "Remote Flexibility",      desc: "Work from wherever you thrive. Our distributed team model gives you the freedom and flexibility to deliver your best work from anywhere." },
            ].map((benefit, i) => (
              <motion.div key={i} variants={fadeUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="glass-card rounded-3xl p-10 group hover:border-blue-500/35 hover:shadow-[0_0_50px_rgba(37,99,235,0.12)] transition-all duration-500 relative overflow-hidden glass-card-shimmer"
              >
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/60 transition-all duration-500" />
                <div className="h-16 w-16 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 mb-8 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300">
                  <benefit.icon size={30} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-extrabold text-white mb-4">{benefit.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TEAM CULTURE ───────────────────────────────────── */}
      <section className="py-32 bg-[#0F172A] border-y border-white/[0.07] relative overflow-hidden">
        <FloatingOrbs />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft}>
              <span className="section-label">Our Culture</span>
              <h2 className="font-extrabold text-white leading-tight mb-8" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                A Culture Built on<br />
                <span className="gradient-text">Trust &amp; Growth</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                At ZSolutionz, we believe that our team is our greatest asset. We foster an environment where every voice is heard, every contribution is valued, and every person has the opportunity to grow.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed mb-10">
                Whether you're starting your career or bringing years of experience, you'll find a team that supports you, challenges you, and celebrates your success.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Heart,        label: "People First" },
                  { icon: TrendingUp,   label: "Career Growth" },
                  { icon: CheckCircle,  label: "Inclusive Culture" },
                  { icon: Users,        label: "Team Collaboration" },
                ].map((item, i) => (
                  <motion.div key={i} whileHover={{ x: 4, y: -2 }} className="glass-card rounded-xl p-4 flex items-center gap-3 hover:border-blue-500/30 transition-all duration-300">
                    <item.icon size={16} className="text-blue-500 shrink-0" />
                    <span className="text-slate-300 text-sm font-medium">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight}
              className="relative rounded-3xl overflow-hidden aspect-[4/3]"
            >
              <motion.img src={heroBg} alt="Team Culture" className="w-full h-full object-cover"
                whileHover={{ scale: 1.04 }} transition={{ duration: 0.5 }} />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/60 to-transparent" />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-8 left-8 right-8 glass-card rounded-2xl p-6"
              >
                <div className="text-xl font-extrabold text-white mb-1">Join Our Growing Team</div>
                <div className="flex items-center gap-2 text-blue-400 text-sm font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                  3 open positions available
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── OPEN POSITIONS ──────────────────────────────────── */}
      <section className="py-32 bg-[#0A0F1E] relative overflow-hidden">
        <FloatingOrbs />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-3xl mx-auto mb-24">
            <span className="section-label">Careers</span>
            <h2 className="font-extrabold text-white mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>Current Openings</h2>
            <p className="text-slate-400 text-lg">Explore our open positions and find the role that matches your skills and ambitions.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                title: "Sales Representative",
                type: "Full-time",
                badge: "bg-green-500/10 text-green-400 border-green-500/20",
                icon: DollarSign,
                location: "On-site / Remote",
                desc: "Drive customer acquisition and help clients find the right internet solutions. Build lasting customer relationships and meet performance goals in a dynamic sales environment.",
                perks: ["Competitive base + commission", "Performance bonuses", "Career advancement", "Sales training provided"],
                color: "from-green-600/5",
              },
              {
                title: "Customer Support Rep",
                type: "Full-time / Remote",
                badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
                icon: Heart,
                location: "Remote Available",
                desc: "Be the voice of ZSolutionz. Handle customer inquiries with professionalism and care. Resolve issues efficiently and deliver a consistently excellent experience.",
                perks: ["Remote-friendly role", "Paid training program", "Structured schedule", "Team support system"],
                color: "from-blue-600/5",
              },
              {
                title: "Remote Team Member",
                type: "Remote",
                badge: "bg-purple-500/10 text-purple-400 border-purple-500/20",
                icon: Laptop,
                location: "Fully Remote",
                desc: "Join our distributed team from anywhere. Multiple roles available across sales, support, and operations. Bring your skills and grow with a fast-moving company.",
                perks: ["100% remote position", "Flexible schedule", "Multiple role types", "Growth opportunities"],
                color: "from-purple-600/5",
              },
            ].map((job, i) => (
              <motion.div key={i} variants={fadeUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`glass-card rounded-3xl p-8 flex flex-col group hover:border-blue-500/40 hover:shadow-[0_0_50px_rgba(37,99,235,0.15)] transition-all duration-500 relative overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${job.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/50 transition-all duration-500" />

                <div className="flex items-start justify-between mb-6 relative z-10">
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border ${job.badge}`}>
                    {job.type}
                  </div>
                  <div className="h-10 w-10 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_0_16px_rgba(37,99,235,0.5)] transition-all duration-300">
                    <job.icon size={18} strokeWidth={1.5} />
                  </div>
                </div>

                <h3 className="text-xl font-extrabold text-white mb-2 relative z-10">{job.title}</h3>
                <div className="flex items-center gap-1.5 text-slate-500 text-sm mb-5 relative z-10">
                  <MapPin size={13} />
                  <span>{job.location}</span>
                </div>
                <p className="text-slate-400 leading-relaxed mb-6 text-sm flex-grow relative z-10">{job.desc}</p>

                <ul className="space-y-2.5 mb-8 relative z-10">
                  {job.perks.map((perk, j) => (
                    <motion.li key={j}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: j * 0.08 }}
                      className="flex items-center gap-2.5 text-sm text-slate-400"
                    >
                      <CheckCircle size={14} className="text-blue-500 shrink-0" />
                      {perk}
                    </motion.li>
                  ))}
                </ul>

                <Link href="/contact" data-testid={`link-apply-${i}`}
                  className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 text-white font-semibold h-12 px-6 hover:bg-blue-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] group/btn w-full relative z-10"
                >
                  Apply Now
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── BENEFITS GRID ───────────────────────────────────── */}
      <section className="py-28 bg-[#0F172A] border-t border-white/[0.07] relative overflow-hidden">
        <FloatingOrbs />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-3xl mx-auto mb-20">
            <span className="section-label">Employee Benefits</span>
            <h2 className="font-extrabold text-white mb-6" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}>What You Can Expect</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: DollarSign, title: "Competitive Pay",     desc: "Market-rate salaries with performance bonuses" },
              { icon: TrendingUp, title: "Career Growth",       desc: "Clear paths for advancement and promotion" },
              { icon: Clock,      title: "Flexible Hours",      desc: "Work schedules that fit your lifestyle" },
              { icon: Users,      title: "Great Team",          desc: "Collaborative, supportive professionals" },
              { icon: Laptop,     title: "Remote Work",         desc: "Work from home options available" },
              { icon: Heart,      title: "Supportive Culture",  desc: "People-first environment, always" },
              { icon: Briefcase,  title: "Training Provided",   desc: "Paid onboarding and skills development" },
              { icon: CheckCircle,title: "Job Security",        desc: "Stable, growing company with strong values" },
            ].map((b, i) => (
              <motion.div key={i} variants={fadeUp}
                whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.25 } }}
                className="glass-card rounded-2xl p-6 text-center group hover:border-blue-500/35 hover:shadow-[0_0_30px_rgba(37,99,235,0.1)] transition-all duration-300"
              >
                <div className="h-12 w-12 mx-auto rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-500 mb-4 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_0_14px_rgba(37,99,235,0.45)] transition-all duration-300">
                  <b.icon size={20} strokeWidth={1.5} />
                </div>
                <h4 className="text-sm font-extrabold text-white mb-1.5">{b.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── APPLICATION CTA ─────────────────────────────────── */}
      <section className="py-28 bg-[#0A0F1E] border-t border-white/[0.07] relative overflow-hidden">
        <FloatingOrbs />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-600/12 via-blue-900/6 to-transparent p-12 md:p-18 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 rounded-3xl" style={{ background: "radial-gradient(circle at 50% 0%, rgba(37,99,235,0.1), transparent 70%)" }} />
            <span className="section-label relative z-10">Get Started</span>
            <h2 className="font-extrabold text-white mb-6 relative z-10" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Ready to Join the Team?
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10 relative z-10">
              Send your resume to info@zsolutionz.com or reach out through our contact form. We'll be in touch soon.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 text-white font-semibold h-14 px-10 btn-glow shadow-[0_0_30px_rgba(37,99,235,0.4)]"
              >
                Contact Us <ArrowRight size={18} />
              </Link>
              <a href="mailto:info@zsolutionz.com?subject=Job Application"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 text-white font-semibold h-14 px-10 hover:bg-white/8 hover:border-white/30 transition-all"
              >
                Email Us Directly
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
