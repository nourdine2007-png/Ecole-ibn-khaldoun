import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/Layout";
import NotFound from "@/pages/not-found";

// Pages
import Home from "@/pages/Home";
import About from "@/pages/About";
import Staff from "@/pages/Staff";
import Levels from "@/pages/Levels";
import Activities from "@/pages/Activities";
import Gallery from "@/pages/Gallery";
import StudentSpace from "@/pages/StudentSpace";
import Contact from "@/pages/Contact";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/staff" component={Staff} />
        <Route path="/levels" component={Levels} />
        <Route path="/activities" component={Activities} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/student-space" component={StudentSpace} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
