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

function Router() {
  const [location] = useLocation();

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Switch location={location} key={location}>
          <Route path="/">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              <HomePage />
            </motion.div>
          </Route>
          <Route path="/about">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              <AboutPage />
            </motion.div>
          </Route>
          <Route path="/join">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              <JoinPage />
            </motion.div>
          </Route>
          <Route path="/contact">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              <ContactPage />
            </motion.div>
          </Route>
          <Route>
            <NotFound />
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
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
