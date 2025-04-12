
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import CoinToss from "@/pages/CoinToss";
import SattaMatka from "@/pages/SattaMatka";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/coin-toss" element={<CoinToss />} />
          <Route path="/satta-matka" element={<SattaMatka />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
        <Sonner />
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
