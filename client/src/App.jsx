import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';
import { Toaster } from 'react-hot-toast';
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
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="relative flex min-h-screen flex-col bg-[#FFFFFF] overflow-x-hidden font-['Plus_Jakarta_Sans']">
          <Toaster
            position="top-center"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#333',
                color: '#fff',
              },
              success: {
                style: {
                  background: '#019863',
                },
              },
              error: {
                style: {
                  background: '#ef4444',
                },
              },
            }}
          />
          <Navbar />
          <main className="flex-1">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={
                <div className="layout-content-container flex flex-col max-w-[1200px] mx-auto px-4">
                  <Home />
                </div>
              } />
              <Route path="/features" element={
                <div className="layout-content-container flex flex-col max-w-[960px] mx-auto px-4">
                  <Features />
                </div>
              } />
              <Route path="/pricing" element={
                <div className="layout-content-container flex flex-col max-w-[960px] mx-auto px-4">
                  <Pricing />
                </div>
              } />
              <Route path="/documentation" element={
                <div className="layout-content-container flex flex-col max-w-[960px] mx-auto px-4">
                  <Documentation />
                </div>
              } />
              <Route path="/about" element={
                <div className="layout-content-container flex flex-col max-w-[960px] mx-auto px-4">
                  <About />
                </div>
              } />
              <Route path="/contact" element={
                <div className="layout-content-container flex flex-col max-w-[960px] mx-auto px-4">
                  <Contact />
                </div>
              } />

              {/* Auth Routes */}
              <Route path="/login" element={
                <div className="layout-content-container flex flex-col max-w-[960px] mx-auto px-4">
                  <Login />
                </div>
              } />
              <Route path="/register" element={
                <div className="layout-content-container flex flex-col max-w-[960px] mx-auto px-4">
                  <Register />
                </div>
              } />

              {/* Protected Routes */}
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              } />
              <Route path="/settings" element={
                <ProtectedRoute>
                  <div className="layout-content-container flex flex-col max-w-[960px] mx-auto px-4">
                    <div>Settings Content</div>
                  </div>
                </ProtectedRoute>
              } />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
