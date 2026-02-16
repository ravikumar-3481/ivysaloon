const prices = [
  { service: "Hair Cut", price: "$50" },
  { service: "Hair Styling", price: "$100" },
  { service: "Hair Coloring", price: "$120" },
  { service: "Deep Treatment", price: "$80" },
  { service: "Blow Dry", price: "$40" },
  { service: "Bridal Package", price: "$250" },
];

const PricingSection = () => (
  <section id="pricing" className="py-16 md:py-24 px-6 bg-card">
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-12">
        Pricing That Suits Your Needs
      </h2>
      <div className="space-y-4">
        {prices.map((p) => (
          <div key={p.service} className="flex items-end justify-between gap-2">
            <span className="font-body text-foreground text-lg">{p.service}</span>
            <span className="flex-1 border-b border-dotted border-muted-foreground/40 mx-2 mb-1" />
            <span className="font-heading text-lg text-foreground">{p.price}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
