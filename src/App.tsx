
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "@/lib/theme-provider";
import { AuthProvider } from "@/context/AuthContext";
import Index from "./pages/Index";

import NotFound from "./pages/NotFound";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import MyStories from "./pages/MyStories";
import Settings from "./pages/Settings";
import Statistics from "./pages/Statistics";
import EditFanfic from "./pages/EditFanfic";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/fandom/:fandomId" element={<Explore />} />
            <Route path="/rating/:rating" element={<Explore />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/my-stories" element={<MyStories />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/edit/:fanficId" element={<EditFanfic />} />
            <Route path="/create" element={<NotFound />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
