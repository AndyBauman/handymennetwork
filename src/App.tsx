
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Booking from "./pages/Booking";
import HomeownerSignup from "./pages/HomeownerSignup";
import HomeownerLogin from "./pages/HomeownerLogin";
import HomeownerDashboard from "./pages/HomeownerDashboard";
import HandymanSignup from "./pages/HandymanSignup";
import HandymanLogin from "./pages/HandymanLogin";
import HandymanDashboard from "./pages/HandymanDashboard";
import PropertyManagerSignup from "./pages/PropertyManagerSignup";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import HowItWorks from "./pages/HowItWorks";
import Careers from "./pages/Careers";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/book" element={<Booking />} />
          <Route path="/signup" element={<HomeownerSignup />} />
          <Route path="/login" element={<HomeownerLogin />} />
          <Route path="/dashboard" element={<HomeownerDashboard />} />
          <Route path="/handyman-signup" element={<HandymanSignup />} />
          <Route path="/handyman-login" element={<HandymanLogin />} />
          <Route path="/handyman-dashboard" element={<HandymanDashboard />} />
          <Route path="/property-manager-signup" element={<PropertyManagerSignup />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/faq" element={<FAQ />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
