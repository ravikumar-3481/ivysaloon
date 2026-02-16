import serviceCut from "@/assets/service-cut.jpg";
import serviceColoring from "@/assets/service-coloring.jpg";
import serviceTreatment from "@/assets/service-treatment.jpg";
import serviceStyling from "@/assets/service-styling.jpg";

const services = [
  {
    img: serviceCut,
    title: "Haircutting",
    desc: "Precision cuts tailored to your face shape and lifestyle.",
  },
  {
    img: serviceColoring,
    title: "Coloring",
    desc: "From subtle highlights to bold transformations.",
  },
  {
    img: serviceTreatment,
    title: "Treatment",
    desc: "Restorative treatments for healthy, radiant hair.",
  },
  {
    img: serviceStyling,
    title: "Styling",
    desc: "Special occasion or everyday looks crafted with care.",
  },
];

const ServiceMenuSection = () => (
  <section id="services" className="py-16 md:py-24 px-6 bg-card">
    <div className="max-w-6xl mx-auto">
      <h2 className="font-heading text-3xl md:text-4xl text-foreground text-center mb-12">
        We Are Proud Of Our Service
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s) => (
          <div key={s.title} className="group">
            {/* Arch-shaped card */}
            <div className="overflow-hidden rounded-t-full aspect-[3/4]">
              <img
                src={s.img}
                alt={s.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="pt-4 text-center">
              <h3 className="font-heading text-xl text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm mb-3">{s.desc}</p>
              <a href="#" className="text-accent text-sm font-body uppercase tracking-wider hover:underline">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServiceMenuSection;
