import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  TrendingUp, Users, Laptop, ArrowRight,
  CheckCircle, Briefcase, MapPin, Clock, DollarSign, Heart
} from "lucide-react";
import joinBg from "@/assets/join-bg.png";
import heroBg from "@/assets/hero-bg.png";

const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

export default function JoinPage() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">

      {/* ── HERO BANNER ────────────────────────────────────────── */}
      <section className="relative min-h-[65vh] flex items-end pb-16 pt-36 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={joinBg} alt="" className="w-full h-full object-cover object-center" />
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
              <span className="text-blue-400">Join Us</span>
            </div>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-300 mb-6 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
              We Are Hiring
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.05] mb-6">
              Build Your Career<br />With <span className="text-blue-500">ZSolutionz</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
              We are looking for motivated individuals who want to grow with us. Join a team that values your skills, supports your development, and rewards your hard work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── WHY WORK WITH US ───────────────────────────────────── */}
      <section className="py-28 bg-[#0A0F1E]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-3xl mx-auto mb-20">
            <span className="section-label">Why ZSolutionz</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
              Why Work With Us
            </h2>
            <p className="text-slate-400 text-lg">
              We're not just offering jobs — we're offering careers. Here's what makes ZSolutionz a place where people thrive.
            </p>
          </motion.div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: TrendingUp,
                title: "Growth Opportunities",
                desc: "Clear career paths and real advancement. We promote from within and invest in every team member's professional development and upward trajectory.",
              },
              {
                icon: Users,
                title: "Professional Environment",
                desc: "Work alongside experienced industry professionals in a culture that values collaboration, respect, and excellence in everything we do.",
              },
              {
                icon: Laptop,
                title: "Remote Flexibility",
                desc: "Work from wherever you thrive. Our distributed team model gives you the freedom and flexibility to deliver your best work from anywhere.",
              },
            ].map((benefit, i) => (
              <motion.div key={i} variants={fadeUp} className="glass-card rounded-3xl p-10 group hover:border-blue-500/30 hover:shadow-[0_0_40px_rgba(37,99,235,0.1)] transition-all duration-300 hover:-translate-y-1">
                <div className="h-16 w-16 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <benefit.icon size={30} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-slate-400 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TEAM CULTURE ───────────────────────────────────────── */}
      <section className="py-28 bg-[#0F172A] border-y border-white/[0.07]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="section-label">Our Culture</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-8">
                A Culture Built on<br /><span className="text-blue-500">Trust & Growth</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                At ZSolutionz, we believe that our team is our greatest asset. We foster an environment where every voice is heard, every contribution is valued, and every person has the opportunity to grow.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed mb-10">
                Whether you're starting your career or bringing years of experience, you'll find a team that supports you, challenges you, and celebrates your success.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Heart, label: "People First" },
                  { icon: TrendingUp, label: "Career Growth" },
                  { icon: CheckCircle, label: "Inclusive Culture" },
                  { icon: Users, label: "Team Collaboration" },
                ].map((item, i) => (
                  <div key={i} className="glass-card rounded-xl p-4 flex items-center gap-3">
                    <item.icon size={18} className="text-blue-500 shrink-0" />
                    <span className="text-slate-300 text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp}
              className="relative rounded-3xl overflow-hidden aspect-[4/3]"
            >
              <img src={heroBg} alt="Team Culture" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="glass-card rounded-2xl p-6">
                  <div className="text-2xl font-extrabold text-white mb-1">Join Our Growing Team</div>
                  <div className="text-blue-400 text-sm font-medium">3 open positions available</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── OPEN POSITIONS ─────────────────────────────────────── */}
      <section className="py-28 bg-[#0A0F1E]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-3xl mx-auto mb-20">
            <span className="section-label">Careers</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Current Openings</h2>
            <p className="text-slate-400 text-lg">Explore our open positions and find the role that matches your skills and ambitions.</p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10"
          >
            {[
              {
                title: "Sales Representative",
                type: "Full-time",
                badge: "bg-green-500/10 text-green-400 border-green-500/20",
                icon: DollarSign,
                location: "On-site / Remote",
                desc: "Drive customer acquisition and help clients find the right internet solutions. Build lasting customer relationships and meet performance goals in a dynamic sales environment.",
                perks: ["Competitive base + commission", "Performance bonuses", "Career advancement", "Sales training provided"],
              },
              {
                title: "Customer Support Rep",
                type: "Full-time / Remote",
                badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
                icon: Heart,
                location: "Remote Available",
                desc: "Be the voice of ZSolutionz. Handle customer inquiries with professionalism and care. Resolve issues efficiently and deliver a consistently excellent experience.",
                perks: ["Remote-friendly role", "Paid training program", "Structured schedule", "Team support system"],
              },
              {
                title: "Remote Team Member",
                type: "Remote",
                badge: "bg-purple-500/10 text-purple-400 border-purple-500/20",
                icon: Laptop,
                location: "Fully Remote",
                desc: "Join our distributed team from anywhere. Multiple roles available across sales, support, and operations. Bring your skills and grow with a fast-moving company.",
                perks: ["100% remote position", "Flexible schedule", "Multiple role types", "Growth opportunities"],
              },
            ].map((job, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="glass-card rounded-3xl p-8 flex flex-col hover:border-blue-500/40 hover:shadow-[0_0_40px_rgba(37,99,235,0.12)] transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border ${job.badge}`}>
                    {job.type}
                  </div>
                  <div className="h-10 w-10 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <job.icon size={18} strokeWidth={1.5} />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                <div className="flex items-center gap-1.5 text-slate-500 text-sm mb-5">
                  <MapPin size={13} />
                  <span>{job.location}</span>
                </div>
                <p className="text-slate-400 leading-relaxed mb-6 text-sm flex-grow">{job.desc}</p>

                <ul className="space-y-2 mb-8">
                  {job.perks.map((perk, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-sm text-slate-400">
                      <CheckCircle size={14} className="text-blue-500 shrink-0" />
                      {perk}
                    </li>
                  ))}
                </ul>

                <a
                  href="mailto:info@zsolutionz.com?subject=Job Application"
                  data-testid={`link-apply-${i}`}
                  className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 text-white font-semibold h-12 px-6 hover:bg-blue-500 transition-colors w-full"
                >
                  Apply Now <ArrowRight size={16} />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── BENEFITS GRID ──────────────────────────────────────── */}
      <section className="py-24 bg-[#0F172A] border-t border-white/[0.07]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-label">Employee Benefits</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">What You Can Expect</h2>
          </motion.div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-5"
          >
            {[
              { icon: DollarSign, title: "Competitive Pay", desc: "Market-rate salaries with performance bonuses" },
              { icon: TrendingUp, title: "Career Growth", desc: "Clear paths for advancement and promotion" },
              { icon: Clock, title: "Flexible Hours", desc: "Work schedules that fit your lifestyle" },
              { icon: Users, title: "Great Team", desc: "Collaborative, supportive professionals" },
              { icon: Laptop, title: "Remote Work", desc: "Work from home options available" },
              { icon: Heart, title: "Supportive Culture", desc: "People-first environment, always" },
              { icon: Briefcase, title: "Training Provided", desc: "Paid onboarding and skills development" },
              { icon: CheckCircle, title: "Job Security", desc: "Stable, growing company with strong values" },
            ].map((b, i) => (
              <motion.div key={i} variants={fadeUp} className="glass-card rounded-2xl p-6 text-center group hover:border-blue-500/30 transition-all duration-300">
                <div className="h-12 w-12 mx-auto rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-500 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <b.icon size={20} strokeWidth={1.5} />
                </div>
                <h4 className="text-sm font-bold text-white mb-1.5">{b.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── APPLICATION CTA ────────────────────────────────────── */}
      <section className="py-24 bg-[#0A0F1E] border-t border-white/[0.07]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-600/15 via-blue-900/8 to-transparent p-12 md:p-16 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="section-label">Get Started</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                Ready to Join the Team?
              </h2>
              <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10">
                Send your resume to info@zsolutionz.com or reach out through our contact form. We'll be in touch soon.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 text-white font-semibold h-14 px-10 hover:bg-blue-500 transition-colors shadow-[0_0_24px_rgba(37,99,235,0.35)]">
                  Contact Us <ArrowRight size={18} />
                </Link>
                <a href="mailto:info@zsolutionz.com?subject=Job Application" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 text-white font-semibold h-14 px-10 hover:bg-white/10 transition-colors">
                  Email Your Resume
                </a>
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
