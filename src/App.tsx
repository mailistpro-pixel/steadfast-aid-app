import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import RightNow from "./pages/RightNow";
import Survival from "./pages/Survival";
import Medical from "./pages/Medical";
import Evacuation from "./pages/Evacuation";
import Psychological from "./pages/Psychological";
import Simulation from "./pages/Simulation";
import Notes from "./pages/Notes";
import Signals from "./pages/Signals";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/right-now" element={<RightNow />} />
          <Route path="/survival" element={<Survival />} />
          <Route path="/medical" element={<Medical />} />
          <Route path="/evacuation" element={<Evacuation />} />
          <Route path="/psychological" element={<Psychological />} />
          <Route path="/simulation" element={<Simulation />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/signals" element={<Signals />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
