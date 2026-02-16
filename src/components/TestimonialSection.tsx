import stylistImg from "@/assets/stylist-testimonial.jpg";
import team1 from "@/assets/team-1.jpg";
import { Quote } from "lucide-react";

const TestimonialSection = () => (
  <section className="py-16 md:py-24 px-6 bg-secondary">
    <div className="max-w-6xl mx-auto">
      <h2 className="font-heading text-3xl md:text-4xl text-foreground text-center mb-12">
        Here's What Our Satisfied Clients Are Saying
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Quote */}
        <div className="flex-1">
          <Quote className="h-10 w-10 text-accent mb-4" />
          <blockquote className="text-foreground text-lg leading-relaxed mb-6 italic font-body">
            "Ivy Salon completely transformed my look. The stylists are incredibly talented, and
            the atmosphere is so luxurious and relaxing. I wouldn't go anywhere else!"
          </blockquote>
          <div className="flex items-center gap-3">
            <img src={team1} alt="Client avatar" className="w-10 h-10 rounded-full object-cover" />
            <div>
              <p className="font-heading text-foreground">Amanda R.</p>
              <p className="text-muted-foreground text-sm">Loyal Client</p>
            </div>
          </div>
        </div>

        {/* Arch image */}
        <div className="flex-1 flex justify-center">
          <div className="w-64 h-80 md:w-72 md:h-96 overflow-hidden rounded-t-full">
            <img
              src={stylistImg}
              alt="Professional stylist"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TestimonialSection;
