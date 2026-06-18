import { motion } from "framer-motion";
import { Link } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
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
  email: z.string().email("Invalid email address"),
  phone: z.string().min(5, "Phone number is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, this would be an API call
    console.log(values);
    setIsSubmitted(true);
    form.reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  }

  return (
    <div className="flex flex-col w-full">
      {/* HERO BANNER */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center pt-20 border-b border-border overflow-hidden">
        <div className="absolute inset-0 z-0 bg-background" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
             style={{
               backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
               backgroundSize: '4rem 4rem'
             }}
        />
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="text-sm font-medium text-muted-foreground mb-4">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">&gt;</span>
              <span className="text-primary">Contact Us</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">Let's Connect</h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
              We'd love to hear from you. Reach out and we'll respond promptly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            
            {/* LEFT COLUMN: Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
              
              <a href="mailto:info@zsolutionz.com" className="block glass-card p-8 rounded-3xl hover:border-primary/50 transition-colors group">
                <div className="flex items-start space-x-6">
                  <div className="bg-primary/10 p-4 rounded-2xl text-primary shrink-0 group-hover:scale-110 transition-transform">
                    <Mail size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Email Us</h4>
                    <p className="text-muted-foreground text-lg group-hover:text-primary transition-colors">info@zsolutionz.com</p>
                  </div>
                </div>
              </a>
              
              <a href="tel:+12623992770" className="block glass-card p-8 rounded-3xl hover:border-primary/50 transition-colors group">
                <div className="flex items-start space-x-6">
                  <div className="bg-primary/10 p-4 rounded-2xl text-primary shrink-0 group-hover:scale-110 transition-transform">
                    <Phone size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Call Us</h4>
                    <p className="text-muted-foreground text-lg group-hover:text-primary transition-colors">+1(262) 399-2770</p>
                  </div>
                </div>
              </a>

              <div className="glass-card p-8 rounded-3xl">
                <div className="flex items-start space-x-6">
                  <div className="bg-primary/10 p-4 rounded-2xl text-primary shrink-0">
                    <MapPin size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Visit Us</h4>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      1906 Madera St Apt 8,<br />
                      Waukesha, WI 53189,<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-popover border border-border p-10 rounded-3xl relative overflow-hidden"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Send a Message</h2>
              
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  className="absolute inset-0 bg-popover z-10 flex flex-col items-center justify-center p-10 text-center"
                >
                  <div className="h-20 w-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                  <p className="text-muted-foreground text-lg">
                    Thank you for reaching out. We will get back to you shortly.
                  </p>
                </motion.div>
              ) : null}

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-0">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="bg-background border-border text-white h-14 rounded-xl px-4" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/80">Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" className="bg-background border-border text-white h-14 rounded-xl px-4" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/80">Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="+1 (555) 000-0000" className="bg-background border-border text-white h-14 rounded-xl px-4" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="How can we help you?" 
                            className="bg-background border-border text-white min-h-[160px] resize-none rounded-xl p-4" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <button 
                    type="submit" 
                    className="w-full inline-flex items-center justify-center rounded-xl text-lg font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90 h-14 mt-4 shadow-lg shadow-primary/20"
                  >
                    Send Message
                  </button>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
