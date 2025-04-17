import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Course pages
import Courses from "./pages/Courses";
import BasicsCourse from "./pages/courses/BasicsCourse";
import SecurityCourse from "./pages/courses/SecurityCourse";
import SecurityCourseLessons from "./pages/courses/SecurityCourseLessons";
import TradingCourse from "./pages/courses/TradingCourse";
import LightningCourse from "./pages/courses/LightningCourse";
import EconomicsCourse from "./pages/courses/EconomicsCourse";
import PrivacyCourse from "./pages/courses/PrivacyCourse";

// Tool pages
import Tools from "./pages/Tools";
import Calculator from "./pages/tools/Calculator";
import UnitConverter from "./pages/tools/UnitConverter";
import PriceChart from "./pages/tools/PriceChart";
import WalletGenerator from "./pages/tools/WalletGenerator";
import BlockchainExplorer from "./pages/tools/BlockchainExplorer";
import LightningWallets from "./pages/tools/LightningWallets";
import AddressConverter from "./pages/tools/AddressConverter";

// Info pages
import AboutUs from "./pages/AboutUs";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Cookies from "./pages/Cookies";

// Auth pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Course Routes */}
          <Route path="/kurzy" element={<Courses />} />
          <Route path="/kurzy/zaklady" element={<BasicsCourse />} />
          <Route path="/kurzy/bezpecnost" element={<SecurityCourse />} />
          <Route path="/kurzy/bezpecnost/lekce/:lessonId" element={<SecurityCourseLessons />} />
          <Route path="/kurzy/investice" element={<TradingCourse />} />
          <Route path="/kurzy/lightning" element={<LightningCourse />} />
          <Route path="/kurzy/ekonomie" element={<EconomicsCourse />} />
          <Route path="/kurzy/soukromi" element={<PrivacyCourse />} />
          
          {/* Tool Routes */}
          <Route path="/nastroje" element={<Tools />} />
          <Route path="/nastroje/kalkulacka" element={<Calculator />} />
          <Route path="/nastroje/konvertor" element={<UnitConverter />} />
          <Route path="/nastroje/grafy" element={<PriceChart />} />
          <Route path="/nastroje/penezenka" element={<WalletGenerator />} />
          <Route path="/nastroje/explorer" element={<BlockchainExplorer />} />
          <Route path="/nastroje/lightning-wallets" element={<LightningWallets />} />
          <Route path="/nastroje/address-converter" element={<AddressConverter />} />
          
          {/* Info Routes */}
          <Route path="/o-nas" element={<AboutUs />} />
          <Route path="/podminky" element={<Terms />} />
          <Route path="/soukromi" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />
          
          {/* Auth Routes */}
          <Route path="/prihlasit" element={<Login />} />
          <Route path="/registrovat" element={<Register />} />
          
          {/* Catch-all route for 404 errors */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
