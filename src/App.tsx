import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Units from "./pages/Units";
import Customers from "./pages/Customers";
import Payments from "./pages/Payments";
import Analytics from "./pages/Analytics";
import Towers from "./pages/Towers";
import MilestonePlans from "./pages/MilestonePlans";
import ProgressLogging from "./pages/ProgressLogging";
import ScheduledDues from "./pages/ScheduledDues";
import EmailTemplates from "./pages/EmailTemplates";
import Documents from "./pages/Documents";
import UsersAndRoles from "./pages/UsersAndRoles";
import Reports from "./pages/Reports";
import SettingsPage from "./pages/Settings";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="projects" element={<Projects />} />
            <Route path="towers" element={<Towers />} />
            <Route path="units" element={<Units />} />
            <Route path="customers" element={<Customers />} />
            <Route path="plans" element={<MilestonePlans />} />
            <Route path="progress" element={<ProgressLogging />} />
            <Route path="payments" element={<Payments />} />
            <Route path="dues" element={<ScheduledDues />} />
            <Route path="emails" element={<EmailTemplates />} />
            <Route path="documents" element={<Documents />} />
            <Route path="users" element={<UsersAndRoles />} />
            <Route path="reports" element={<Reports />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
