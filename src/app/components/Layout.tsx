import { Outlet, Link, useLocation } from "react-router";
import { Phone, MapPin, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "figma:asset/cc1ed476a4ebcbe125024e49a8bd19d4b661ed84.png";

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Scroll spy effect
  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      const sections = ["hero", "services", "about", "process", "testimonials", "blogs", "locations", "faq"];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
    setMobileMenuOpen(false);
  };

  const sections = [
    { id: "hero", label: "Home" },
    { id: "services", label: "Services" },
    { id: "about", label: "About" },
    { id: "process", label: "Process" },
    { id: "testimonials", label: "Testimonials" },
    { id: "locations", label: "Locations" },
    { id: "faq", label: "FAQ" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white py-2.5 border-b border-white/10">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
            <Phone className="w-4 h-4 text-green-400" />
            <span className="font-medium">Helpline: 9217244110</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-blue-400" />
            <span className="hidden md:inline">H-2, Basement Ground Floor, Ch. Hukum Chand Marg, Green Park Extension, New Delhi 110016</span>
            <span className="md:hidden">Green Park Extension, New Delhi</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-blue-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Molecular Diagnostics and Therapy" className="h-12 md:h-16" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {location.pathname === "/" ? (
                <>
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`px-4 py-2.5 rounded-lg transition-all font-medium ${
                        activeSection === section.id
                          ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md"
                          : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                      }`}
                    >
                      {section.label}
                    </button>
                  ))}
                  <Link
                    to="/blogs"
                    className="px-4 py-2.5 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all font-medium"
                  >
                    Blogs
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/"
                    className="px-4 py-2.5 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all font-medium"
                  >
                    Home
                  </Link>
                  <Link
                    to="/blogs"
                    className={`px-4 py-2.5 rounded-lg transition-all font-medium ${
                      isActive("/blogs") ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md" : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                    }`}
                  >
                    Blogs
                  </Link>
                </>
              )}
              <a
                href="tel:9217244110"
                className="ml-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2.5 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-md font-medium"
              >
                📞 Book Appointment
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden py-4 border-t flex flex-col gap-2 bg-gray-50 rounded-b-lg">
              {location.pathname === "/" ? (
                <>
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`text-left px-4 py-2.5 rounded-lg transition-all font-medium ${
                        activeSection === section.id
                          ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md"
                          : "text-gray-700 hover:bg-blue-50"
                      }`}
                    >
                      {section.label}
                    </button>
                  ))}
                  <Link
                    to="/blogs"
                    className="text-left px-4 py-2.5 rounded-lg text-gray-700 hover:bg-blue-50 transition-all font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Blogs
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/"
                    className="text-left px-4 py-2.5 rounded-lg text-gray-700 hover:bg-blue-50 transition-all font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    to="/blogs"
                    className={`text-left px-4 py-2.5 rounded-lg transition-all font-medium ${
                      isActive("/blogs") ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md" : "text-gray-700 hover:bg-blue-50"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Blogs
                  </Link>
                </>
              )}
              <a
                href="tel:9217244110"
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2.5 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all text-center shadow-md mt-2 font-medium"
              >
                📞 Book Appointment
              </a>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img src={logo} alt="Molecular Diagnostics" className="h-12 mb-4 brightness-0 invert" />
              <p className="text-gray-400 text-sm">
                Where Technology Meets Patient Care
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact Us</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>H-2, Basement Ground Floor</p>
                <p>Ch. Hukum Chand Marg</p>
                <p>Green Park Extension</p>
                <p>New Delhi 110016</p>
                <p className="mt-4">Helpline: 9217244110</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2 text-sm">
                <Link to="/" className="block text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
                <Link to="/blogs" className="block text-gray-400 hover:text-white transition-colors">
                  Blogs
                </Link>
                <a href="tel:9217244110" className="block text-gray-400 hover:text-white transition-colors">
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Molecular Diagnostics and Therapy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}