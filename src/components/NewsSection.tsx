import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";

const posts = [
  {
    img: blog1,
    date: "09 OCT",
    title: "Revitalizing Scalp Treatments You Need to Try",
  },
  {
    img: blog2,
    date: "15 OCT",
    title: "Top Hair Care Products for the Winter Season",
  },
];

const NewsSection = () => (
  <section id="news" className="py-16 md:py-24 px-6 bg-secondary">
    <div className="max-w-5xl mx-auto">
      <h2 className="font-heading text-3xl md:text-4xl text-foreground text-center mb-12">
        The Latest News
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((p) => (
          <div key={p.title} className="group bg-card rounded-lg overflow-hidden shadow-sm">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 text-xs font-body uppercase tracking-wider">
                {p.date}
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-heading text-xl text-foreground mb-3">{p.title}</h3>
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

export default NewsSection;
