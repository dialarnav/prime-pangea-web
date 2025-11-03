import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import OfficeCleaningPage from "./pages/OfficeCleaningPage";
import DayPorterPage from "./pages/DayPorterPage";
import CovidDisinfectionPage from "./pages/CovidDisinfectionPage";
import PostConstructionPage from "./pages/PostConstructionPage";
import JunkRemovalPage from "./pages/JunkRemovalPage";
import ResidentialCleaningPage from "./pages/ResidentialCleaningPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/office-cleaning" element={<OfficeCleaningPage />} />
          <Route path="/services/day-porter" element={<DayPorterPage />} />
          <Route path="/services/covid-disinfection" element={<CovidDisinfectionPage />} />
          <Route path="/services/post-construction" element={<PostConstructionPage />} />
          <Route path="/services/junk-removal" element={<JunkRemovalPage />} />
          <Route path="/services/residential-cleaning" element={<ResidentialCleaningPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
