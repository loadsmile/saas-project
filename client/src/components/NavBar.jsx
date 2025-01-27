import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useAuth } from '../context/useAuth';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  const navLinks = [
    { title: "Home", route: "/" },
    { title: "Features", route: "/features" },
    { title: "Pricing", route: "/pricing" },
    { title: "Documentation", route: "/documentation" }
  ];

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <nav className="border-b border-[#F4EFE6]">
      <div className="max-w-[1200px] mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link to="/" className="text-lg font-bold tracking-[-0.015em] text-[#1C160C]">
            Tech
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              to={link.route}
              className="text-sm font-medium text-[#1C160C] hover:text-[#A18249]"
            >
              {link.title}
            </Link>
          ))}

          {user ? (
            <>
              <Link
                to="/dashboard"
                className="text-sm font-medium text-[#1C160C] hover:text-[#A18249]"
              >
                Admin Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="text-sm font-medium text-[#1C160C] hover:text-[#A18249]"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-sm font-medium text-[#1C160C] hover:text-[#A18249]"
              >
                Sign in
              </Link>
              <Link
                to="/register"
                className="bg-[#019863] text-white px-4 py-2 rounded-full text-sm font-bold tracking-[0.015em] hover:bg-opacity-90"
              >
                Get started
              </Link>
            </>
          )}
        </div>

        <button
          className="md:hidden text-[#1C160C]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-[#F4EFE6]">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              to={link.route}
              className="block px-4 py-2 text-sm font-medium text-[#1C160C] hover:bg-[#F4EFE6]"
              onClick={() => setIsOpen(false)}
            >
              {link.title}
            </Link>
          ))}

          {user ? (
            <>
              <Link
                to="/dashboard"
                className="block px-4 py-2 text-sm font-medium text-[#1C160C] hover:bg-[#F4EFE6]"
                onClick={() => setIsOpen(false)}
              >
                Admin Dashboard
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-sm font-medium text-[#1C160C] hover:bg-[#F4EFE6]"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="block px-4 py-2 text-sm font-medium text-[#1C160C] hover:bg-[#F4EFE6]"
                onClick={() => setIsOpen(false)}
              >
                Sign in
              </Link>
              <Link
                to="/register"
                className="block px-4 py-2 text-sm font-medium text-[#019863] hover:bg-[#F4EFE6]"
                onClick={() => setIsOpen(false)}
              >
                Get started
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
