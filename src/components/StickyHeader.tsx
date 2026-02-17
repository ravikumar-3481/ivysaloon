import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, Search, ShoppingBag, CalendarCheck } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Pricing", href: "#pricing" },
  { label: "Feedback", href: "#feedback" },
  { label: "Contact", href: "#contact" },
  { label: "News", href: "#news" },
];

const StickyHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    if (location.pathname !== "/") {
      navigate("/" + href);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-card/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Hamburger */}
        <Sheet>
          <SheetTrigger asChild>
            <button aria-label="Open menu" className="p-1">
              <Menu className="h-6 w-6 text-foreground" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 bg-card">
            <SheetTitle className="font-heading text-2xl mb-8">Ivy Salon</SheetTitle>
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-lg font-body text-foreground hover:text-accent transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => navigate("/book")}
                className="mt-4 flex items-center gap-2 bg-accent text-accent-foreground px-5 py-3 rounded-lg font-body text-sm uppercase tracking-wider hover:bg-accent/90 transition-colors"
              >
                <CalendarCheck className="w-4 h-4" />
                Book Appointment
              </button>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <button onClick={() => navigate("/")} className="font-heading text-2xl md:text-3xl tracking-wide text-foreground">
          Ivy Salon
        </button>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/book")}
            className="hidden md:inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2 rounded-md font-body text-xs uppercase tracking-widest hover:bg-accent/90 transition-colors"
          >
            <CalendarCheck className="w-4 h-4" />
            Book Now
          </button>
          <button aria-label="Search" className="p-1">
            <Search className="h-5 w-5 text-foreground" />
          </button>
          <button aria-label="Cart" className="p-1">
            <ShoppingBag className="h-5 w-5 text-foreground" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default StickyHeader;
