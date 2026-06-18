import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
  import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
  import { Toaster } from "@/components/ui/toaster";
  import { TooltipProvider } from "@/components/ui/tooltip";
  import { AnimatePresence, motion } from "framer-motion";
  import NotFound from "@/pages/not-found";

  import { Layout } from "@/components/layout";
  import HomePage from "@/pages/home";
  import AboutPage from "@/pages/about";
  import JoinPage from "@/pages/join";
  import ContactPage from "@/pages/contact";

  const queryClient = new QueryClient();

  const pageVariants = {
    initial: { opacity: 0, y: 28, filter: "blur(4px)" },
    enter:   { opacity: 1, y: 0,  filter: "blur(0px)", transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
    exit:    { opacity: 0, y: -14, filter: "blur(2px)", transition: { duration: 0.3,  ease: [0.55, 0, 1, 0.45] as [number, number, number, number] } },
  };

  function PageWrapper({ children }: { children: React.ReactNode }) {
    return (
      <motion.div variants={pageVariants} initial="initial" animate="enter" exit="exit">
        {children}
      </motion.div>
    );
  }

  function Router() {
    const [location] = useLocation();
    return (
      <Layout>
        <AnimatePresence mode="wait">
          <Switch location={location} key={location}>
            <Route path="/">
              <PageWrapper><HomePage /></PageWrapper>
            </Route>
            <Route path="/about">
              <PageWrapper><AboutPage /></PageWrapper>
            </Route>
            <Route path="/join">
              <PageWrapper><JoinPage /></PageWrapper>
            </Route>
            <Route path="/contact">
              <PageWrapper><ContactPage /></PageWrapper>
            </Route>
            <Route>
              <PageWrapper><NotFound /></PageWrapper>
            </Route>
          </Switch>
        </AnimatePresence>
      </Layout>
    );
  }

  function App() {
    return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <WouterRouter>
            <Router />
          </WouterRouter>
        </TooltipProvider>
      </QueryClientProvider>
    );
  }

  export default App;
  