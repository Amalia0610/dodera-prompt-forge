import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServicePage from "./pages/services/ServicePage";
import Blog from "./pages/Blog";

const queryClient = new QueryClient();

/**
 * Scrolls to the hash target on navigation, or to top if no hash.
 * Ensures anchor links (/#process, /#contact) work from any page.
 */
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small delay so the DOM has rendered after route change
      const timer = setTimeout(() => {
        const el = document.getElementById(hash.slice(1));
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 80);
      return () => clearTimeout(timer);
    }
    // No hash → scroll to top
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollManager />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/blog" element={<Blog />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
