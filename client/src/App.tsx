
import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import InvestorPage from "@/pages/InvestorPage";
import Navbar from "@/components/Navbar";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/investor" component={InvestorPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Router />
      <Toaster />
    </div>
  );
}

export default App;
