import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Marquee, LifecycleSection, OverviewSection, WhyChooseSection, MissionSection } from "@/components/sections";
import { AboutSection, JoinSection } from "@/components/about-join";
import { ContactSection, Footer } from "@/components/contact-footer";

const queryClient = new QueryClient();

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 font-sans">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <LifecycleSection />
        <OverviewSection />
        <WhyChooseSection />
        <MissionSection />
        <AboutSection />
        <JoinSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
