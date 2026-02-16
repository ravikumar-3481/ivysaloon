import { Wifi, Car, Wind, Coffee } from "lucide-react";
import salonInterior from "@/assets/salon-interior.jpg";

const amenities = [
  { icon: Wifi, label: "Free Wi-Fi" },
  { icon: Car, label: "Parking Available" },
  { icon: Wind, label: "Air Conditioning" },
  { icon: Coffee, label: "Complimentary Coffee" },
];

const AmenitiesSection = () => (
  <section className="py-16 md:py-24 px-6 bg-secondary">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
      {/* Amenities list */}
      <div className="flex-1">
        <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-8">What We Provide</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {amenities.map((a) => (
            <div key={a.label} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <a.icon className="h-5 w-5 text-accent" />
              </div>
              <span className="font-body text-foreground">{a.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Semi-circle image */}
      <div className="flex-1 flex justify-center">
        <div className="w-72 h-72 md:w-96 md:h-96 overflow-hidden rounded-l-full">
          <img
            src={salonInterior}
            alt="Salon amenities"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
);

export default AmenitiesSection;
