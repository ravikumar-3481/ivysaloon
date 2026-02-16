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
  </section>
);

export default HeroSection;
