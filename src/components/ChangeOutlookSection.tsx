import { Clock, Headphones } from "lucide-react";
import salonInterior from "@/assets/salon-interior.jpg";

const ChangeOutlookSection = () => (
  <section id="about" className="py-16 md:py-24 px-6 bg-secondary">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
      {/* Circular image */}
      <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shrink-0 border-4 border-accent/30">
        <img
          src={salonInterior}
          alt="Luxury salon interior"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Text */}
      <div className="text-center md:text-left">
        <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
          We Will Change How You Look
        </h2>
        <p className="text-muted-foreground mb-8 leading-relaxed max-w-md">
          Our salon provides a premium experience that transforms not just your hair, but your
          confidence. Book an appointment and discover the difference.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 mb-8">
          <div className="flex items-center gap-3">
            <Clock className="h-6 w-6 text-accent" />
            <span className="text-foreground font-body">Online Appointment</span>
          </div>
          <div className="flex items-center gap-3">
            <Headphones className="h-6 w-6 text-accent" />
            <span className="text-foreground font-body">24/7 Support</span>
          </div>
        </div>
        <a
          href="#contact"
          className="inline-block border-2 border-foreground text-foreground px-8 py-3 font-body text-sm uppercase tracking-widest hover:bg-foreground hover:text-primary-foreground transition-colors"
        >
          Discover More
        </a>
      </div>
    </div>
  </section>
);

export default ChangeOutlookSection;
