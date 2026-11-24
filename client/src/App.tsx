import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import { SnackbarProvider } from "notistack";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppLayout from "./layouts/AppLayout";
import ProtectedRoute from "./routes/ProtectedRoute";
import AdminLayout from "./layouts/AdminLayout";
import ScrollToTop from "./components/utils/ScrollToTop";
import AdminHome from "./components/AdminHome";
import Login from "./components/Login";
import Register from "./components/Register";
import Contact from "./components/pages/contact/Contact";
import Biography from "./components/pages/biography/Biography";
import Services from "./components/pages/services/Services";
import NotFound from "./components/pages/not-found/NotFound";
import ServiceDetails from "./components/pages/service-details/ServiceDetails";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <HelmetProvider>
      <SnackbarProvider />
      <QueryClientProvider client={queryClient}>
        <Router>
          {/* <Header /> */}
          <ScrollToTop />
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/biography" element={<Biography />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />

              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/services/:slug" element={<ServiceDetails />} />
              <Route path="*" element={<NotFound />} />
            </Route>

            <Route element={<ProtectedRoute />}>
              <Route path="admin" element={<AdminLayout />}>
                <Route index element={<AdminHome />} />
              </Route>
            </Route>
          </Routes>
        </Router>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
