import { motion } from "framer-motion";
import { Link } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Phone, MapPin, CheckCircle2, ArrowRight, Clock, MessageSquare } from "lucide-react";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(5, "Phone number is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { fullName: "", email: "", phone: "", message: "" },
  });

  function onSubmit(_values: z.infer<typeof formSchema>) {
    setIsSubmitted(true);
    form.reset();
    setTimeout(() => setIsSubmitted(false), 8000);
  }

  return (
    <div className="flex flex-col w-full overflow-x-hidden">

      {/* ── HERO BANNER ────────────────────────────────────────── */}
      <section className="relative min-h-[55vh] flex items-end pb-16 pt-36 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[#0A0F1E]" />
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(37,99,235,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.12) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0A0F1E] via-transparent to-[#0A0F1E]" />
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/8 rounded-full blur-3xl pointer-events-none z-0" />

        <div className="container relative z-10 mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronIcon />
              <span className="text-blue-400">Contact Us</span>
            </div>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-300 mb-6 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
              We'd Love to Hear From You
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.05] mb-6">
              Let's <span className="text-blue-500">Connect</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
              Reach out to our team and we'll respond promptly. Whether you have a question, need support, or want to explore working together — we're here.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── QUICK CONTACT STRIP ────────────────────────────────── */}
      <section className="py-10 bg-[#0F172A] border-y border-white/[0.07]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {[
              { icon: Phone, label: "Call Us", value: "+1(262) 399-2770", href: "tel:+12623992770", sub: "Available during business hours" },
              { icon: Mail, label: "Email Us", value: "info@zsolutionz.com", href: "mailto:info@zsolutionz.com", sub: "We reply within 24 hours" },
              { icon: Clock, label: "Business Hours", value: "Mon – Fri, 9am – 6pm", href: "#", sub: "Central Standard Time" },
            ].map((item, i) => (
              <motion.a
                key={i}
                variants={fadeUp}
                href={item.href}
                className="glass-card rounded-2xl p-6 flex items-center gap-5 hover:border-blue-500/40 transition-all duration-300 group"
              >
                <div className="h-12 w-12 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-500 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <item.icon size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">{item.label}</div>
                  <div className="text-white font-bold text-sm">{item.value}</div>
                  <div className="text-slate-500 text-xs mt-0.5">{item.sub}</div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── MAIN CONTACT SECTION ───────────────────────────────── */}
      <section className="py-28 bg-[#0A0F1E]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-7xl mx-auto">

            {/* LEFT: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 flex flex-col gap-6"
            >
              <div>
                <span className="section-label">Contact Information</span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
                  Get In Touch
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  Have a question or need assistance? Our team is ready to help. Reach out through any of the channels below.
                </p>
              </div>

              <a
                href="mailto:info@zsolutionz.com"
                data-testid="link-email"
                className="glass-card rounded-2xl p-7 flex items-start gap-5 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="h-14 w-14 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Mail size={26} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">Email Us</h4>
                  <p className="text-blue-400 font-medium group-hover:text-blue-300 transition-colors">info@zsolutionz.com</p>
                  <p className="text-slate-500 text-sm mt-1">We reply within 24 hours</p>
                </div>
              </a>

              <a
                href="tel:+12623992770"
                data-testid="link-phone"
                className="glass-card rounded-2xl p-7 flex items-start gap-5 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="h-14 w-14 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Phone size={26} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">Call Us</h4>
                  <p className="text-blue-400 font-medium group-hover:text-blue-300 transition-colors">+1(262) 399-2770</p>
                  <p className="text-slate-500 text-sm mt-1">Mon – Fri, 9am – 6pm CST</p>
                </div>
              </a>

              <div className="glass-card rounded-2xl p-7 flex items-start gap-5">
                <div className="h-14 w-14 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 shrink-0">
                  <MapPin size={26} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">Visit Us</h4>
                  <p className="text-slate-400 leading-relaxed">
                    1906 Madera St Apt 8<br />
                    Waukesha, WI 53189<br />
                    United States of America
                  </p>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-7 flex items-start gap-5">
                <div className="h-14 w-14 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 shrink-0">
                  <MessageSquare size={26} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">Looking to Join?</h4>
                  <p className="text-slate-400 text-sm leading-relaxed mb-3">
                    Interested in career opportunities? Check out our open positions.
                  </p>
                  <Link href="/join" className="inline-flex items-center gap-1.5 text-blue-400 text-sm font-semibold hover:text-blue-300 transition-colors">
                    View Open Positions <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-3 relative"
            >
              <div className="glass-card rounded-3xl p-10 relative overflow-hidden min-h-[600px]">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

                <span className="section-label">Send a Message</span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-8">
                  We'd Love to Hear From You
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 z-20 bg-[#0F172A] flex flex-col items-center justify-center p-10 text-center rounded-3xl"
                  >
                    <div className="h-24 w-24 bg-green-500/10 text-green-400 rounded-full flex items-center justify-center mb-8">
                      <CheckCircle2 size={44} />
                    </div>
                    <h3 className="text-3xl font-extrabold text-white mb-4">Message Sent!</h3>
                    <p className="text-slate-400 text-lg max-w-sm">
                      Thank you for reaching out to ZSolutionz. Our team will get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : null}

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-300 text-sm font-medium">Full Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="John Doe"
                              data-testid="input-fullname"
                              className="bg-[#0A0F1E] border-white/10 text-white h-14 rounded-xl px-5 focus:border-blue-500/50 focus:ring-blue-500/20 placeholder:text-slate-600"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-400 text-xs" />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-300 text-sm font-medium">Email Address</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="john@example.com"
                                data-testid="input-email"
                                className="bg-[#0A0F1E] border-white/10 text-white h-14 rounded-xl px-5 focus:border-blue-500/50 focus:ring-blue-500/20 placeholder:text-slate-600"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-red-400 text-xs" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-300 text-sm font-medium">Phone Number</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="+1 (555) 000-0000"
                                data-testid="input-phone"
                                className="bg-[#0A0F1E] border-white/10 text-white h-14 rounded-xl px-5 focus:border-blue-500/50 focus:ring-blue-500/20 placeholder:text-slate-600"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-red-400 text-xs" />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-300 text-sm font-medium">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us how we can help you..."
                              data-testid="input-message"
                              className="bg-[#0A0F1E] border-white/10 text-white min-h-[140px] resize-none rounded-xl p-5 focus:border-blue-500/50 focus:ring-blue-500/20 placeholder:text-slate-600"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-400 text-xs" />
                        </FormItem>
                      )}
                    />

                    <button
                      type="submit"
                      data-testid="button-submit"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl text-base font-semibold transition-all bg-blue-600 text-white hover:bg-blue-500 h-14 shadow-[0_0_24px_rgba(37,99,235,0.3)] hover:shadow-[0_0_36px_rgba(37,99,235,0.45)]"
                    >
                      Send Message <ArrowRight size={18} />
                    </button>
                  </form>
                </Form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ / ABOUT STRIP ──────────────────────────────────── */}
      <section className="py-24 bg-[#0F172A] border-t border-white/[0.07]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Response Time",
                desc: "We aim to respond to all inquiries within 24 business hours. For urgent matters, please call us directly.",
                icon: Clock,
              },
              {
                title: "Career Inquiries",
                desc: "Interested in joining our team? Visit our Careers page or email your resume directly to info@zsolutionz.com.",
                icon: ArrowRight,
              },
              {
                title: "Service Questions",
                desc: "Need help with internet solutions or connectivity? Our expert team is ready to guide you through every option.",
                icon: CheckCircle2,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp}
                className="glass-card rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-500 mb-6">
                  <item.icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
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
