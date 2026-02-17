import heroImg from "@/assets/hero-salon.jpg";

const HeroSection = () => (
  <section id="hero" className="relative w-full h-[80vh] md:h-screen overflow-hidden">
    <img
      src={heroImg}
      alt="Glamorous woman with voluminous wavy blonde hair in luxury salon"
      className="w-full h-full object-cover"
      loading="eager"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />

    {/* WhatsApp floating CTA */}
    <a
      href="https://wa.me/918401976594?text=Hi%20Ivy%20Salon%2C%20I%27d%20like%20to%20book%20an%20appointment."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 md:bottom-8 md:right-8 z-50 bg-[#25D366] hover:bg-[#1ebe5d] text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110"
      aria-label="Book via WhatsApp"
    >
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.613.613l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.347 0-4.522-.8-6.254-2.143l-.358-.286-3.278 1.098 1.098-3.278-.286-.358A9.956 9.956 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
    </a>
  </section>
);

export default HeroSection;
