import salonInterior from "@/assets/salon-interior.jpg";

const ContactSection = () => (
  <section id="contact" className="relative py-16 md:py-24 px-6">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={salonInterior} alt="" className="w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" />
    </div>

    {/* Content card */}
    <div className="relative max-w-lg mx-auto bg-card/95 backdrop-blur-md p-10 md:p-14 rounded-lg shadow-xl text-center">
      <h2 className="font-heading text-3xl text-foreground mb-6">Visit Us</h2>
      <div className="text-muted-foreground font-body space-y-2 mb-8">
        <p><strong className="text-foreground">Opening Hours</strong></p>
        <p>Mon – Fri: 9:00 AM – 8:00 PM</p>
        <p>Saturday: 10:00 AM – 6:00 PM</p>
        <p>Sunday: Closed</p>
        <div className="h-4" />
        <p><strong className="text-foreground">Address</strong></p>
        <p>123 Luxe Avenue, Beverly Hills, CA 90210</p>
      </div>
      <a
        href="#"
        className="inline-block bg-foreground text-primary-foreground px-10 py-4 font-body text-sm uppercase tracking-widest hover:bg-accent transition-colors"
      >
        Make Appointment
      </a>
    </div>
  </section>
);

export default ContactSection;
