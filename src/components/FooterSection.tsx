import { Home, Compass, ShoppingBag, User } from "lucide-react";
import magnoliaImg from "@/assets/magnolia-bg.jpg";

const FooterSection = () => (
  <>
    {/* Newsletter */}
    <section className="relative py-20 px-6">
      <div className="absolute inset-0">
        <img src={magnoliaImg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-card/70 backdrop-blur-sm" />
      </div>
      <div className="relative max-w-lg mx-auto text-center">
        <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-4">
          Want To Get Updates on Spa & Wellness News?
        </h2>
        <p className="text-muted-foreground mb-8">Subscribe to our newsletter for the latest tips and offers.</p>
        <form className="flex gap-2 max-w-sm mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 bg-transparent border-b-2 border-foreground/30 py-2 px-1 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent font-body transition-colors"
          />
          <button
            type="submit"
            className="bg-foreground text-primary-foreground px-6 py-2 font-body text-sm uppercase tracking-wider hover:bg-accent transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>

    {/* Footer text */}
    <footer className="py-6 px-6 bg-card text-center pb-20 md:pb-6">
      <p className="text-muted-foreground text-sm font-body">
        © 2026 Ivy Salon. All rights reserved.
      </p>
    </footer>

    {/* Mobile bottom nav */}
    <nav className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-md border-t border-border md:hidden z-50">
      <div className="flex justify-around py-3">
        {[
          { icon: Home, label: "Home", href: "#hero" },
          { icon: Compass, label: "Discover", href: "#services" },
          { icon: ShoppingBag, label: "Cart", href: "#" },
          { icon: User, label: "Profile", href: "#" },
        ].map((item) => (
          <a key={item.label} href={item.href} className="flex flex-col items-center gap-1 text-muted-foreground hover:text-accent transition-colors">
            <item.icon className="h-5 w-5" />
            <span className="text-[10px] font-body">{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  </>
);

export default FooterSection;
