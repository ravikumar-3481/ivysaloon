import serviceCut from "@/assets/service-cut.jpg";
import serviceDye from "@/assets/service-dye.jpg";
import serviceTreatment from "@/assets/service-treatment.jpg";

const cards = [
  { img: serviceCut, label: "Cut" },
  { img: serviceDye, label: "Dye" },
  { img: serviceTreatment, label: "Treatment" },
];

const SatisfactionSection = () => (
  <section className="py-16 md:py-24 px-6 bg-card">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
        Your Satisfaction Is Our Priority
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
        At Ivy Salon, we are dedicated to making you feel beautiful and confident. Our experienced
        stylists use the finest products and techniques to deliver stunning results every time.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div key={card.label} className="group overflow-hidden rounded-lg">
            <div className="relative overflow-hidden aspect-[3/4]">
              <img
                src={card.img}
                alt={`${card.label} service`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/20 flex items-end justify-center pb-6">
                <span className="font-heading text-xl text-primary-foreground tracking-wider uppercase">
                  {card.label}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SatisfactionSection;
