import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';
import Documentation from './pages/Documentation';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="relative flex min-h-screen flex-col bg-[#FFFFFF] overflow-x-hidden font-['Plus_Jakarta_Sans']">
          <Navbar />
          <main className="flex-1">
            <Routes>
              {/* Public Routes */}
              <Route
                path="/"
                element={
                  <div className="layout-content-container flex flex-col max-w-[960px] mx-auto px-4">
                    <Home />
                  </div>
                }
              />
              <Route
                path="/features"
                element={
                  <div className="layout-content-container flex flex-col max-w-[960px] mx-auto px-4">
                    <Features />
                  </div>
                }
              />
              <Route
                path="/pricing"
                element={
                  <div className="layout-content-container flex flex-col max-w-[960px] mx-auto px-4">
                    <Pricing />
                  </div>
                }
              />
              <Route
                path="/documentation"
                element={
                  <div className="layout-content-container flex flex-col max-w-[960px] mx-auto px-4">
                    <Documentation />
                  </div>
                }
              />
              <Route
                path="/about"
                element={
                  <div className="layout-content-container flex flex-col max-w-[960px] mx-auto px-4">
                    <About />
                  </div>
                }
              />
              <Route
                path="/contact"
                element={
                  <div className="layout-content-container flex flex-col max-w-[960px] mx-auto px-4">
                    <Contact />
                  </div>
                }
              />

              {/* Auth Routes */}
              <Route
                path="/login"
                element={
                  <div className="layout-content-container flex flex-col max-w-[960px] mx-auto px-4">
                    <Login />
                  </div>
                }
              />
              <Route
                path="/register"
                element={
                  <div className="layout-content-container flex flex-col max-w-[960px] mx-auto px-4">
                    <Register />
                  </div>
                }
              />

              {/* Protected Routes */}
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <div className="layout-content-container flex flex-col max-w-[960px] mx-auto px-4">
                      <div>Dashboard Content</div>
                    </div>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/settings"
                element={
                  <ProtectedRoute>
                    <div className="layout-content-container flex flex-col max-w-[960px] mx-auto px-4">
                      <div>Settings Content</div>
                    </div>
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
