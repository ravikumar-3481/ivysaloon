import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";

const team = [
  { img: team1, name: "Susan Smith", role: "Hair Stylist" },
  { img: team2, name: "Mary Doe", role: "Colorist" },
  { img: team3, name: "Sharon Yu", role: "Senior Stylist" },
];

const TeamSection = () => (
  <section id="team" className="py-16 md:py-24 px-6 bg-card">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-12">
        Specialists With Many Years Of Experience
      </h2>
      <div className="flex flex-wrap justify-center gap-12">
        {team.map((t) => (
          <div key={t.name} className="flex flex-col items-center">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-4 border-2 border-accent/20">
              <img src={t.img} alt={t.name} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <h3 className="font-heading text-lg text-foreground">{t.name}</h3>
            <p className="text-muted-foreground text-sm">{t.role}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
