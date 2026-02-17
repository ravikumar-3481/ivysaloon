import { useEffect, useState } from "react";
import { Star } from "lucide-react";

// ──────────────────────────────────────────────
// REPLACE THIS with your actual Google Sheet ID
const SHEET_ID = "YOUR_GOOGLE_SHEET_ID_HERE";
const SHEET_NAME = "Sheet1";
// ──────────────────────────────────────────────

interface Feedback {
  name: string;
  rating: number;
  comment: string;
  date: string;
}

const FeedbackSection = () => {
  const [items, setItems] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${SHEET_NAME}`;

    fetch(url)
      .then((res) => res.text())
      .then((text) => {
        // Google returns JSONP-like wrapper — strip it
        const json = JSON.parse(text.substring(47).slice(0, -2));
        const rows: Feedback[] = (json.table.rows as any[]).map((row: any) => ({
          name: row.c[0]?.v ?? "Anonymous",
          rating: Number(row.c[1]?.v) || 5,
          comment: row.c[2]?.v ?? "",
          date: row.c[3]?.v ?? "",
        }));
        // Latest 4 entries
        setItems(rows.slice(-4).reverse());
      })
      .catch(() => {
        // Fallback demo data when sheet is unreachable
        setItems([
          { name: "Elena R.", rating: 5, comment: "Best salon experience ever! Absolutely loved my new look.", date: "2025-12-10" },
          { name: "Priya S.", rating: 5, comment: "The staff is so skilled and welcoming. Highly recommend!", date: "2025-11-28" },
          { name: "Michelle T.", rating: 4, comment: "Great coloring service, will definitely come back.", date: "2025-11-15" },
          { name: "Ava K.", rating: 5, comment: "Luxurious ambiance and top-notch styling. Five stars!", date: "2025-10-30" },
        ]);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="feedback" className="py-16 md:py-24 px-6 bg-secondary">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <p className="text-accent font-body text-sm uppercase tracking-widest mb-2">What Clients Say</p>
        <h2 className="font-heading text-3xl md:text-4xl text-foreground">
          Real Feedback
        </h2>
      </div>

      {loading ? (
        <div className="flex justify-center gap-6 flex-wrap max-w-5xl mx-auto">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-full sm:w-64 h-48 rounded-lg bg-muted animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {items.map((fb, i) => (
            <div
              key={i}
              className="bg-card rounded-lg p-6 shadow-sm border border-border flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, s) => (
                    <Star
                      key={s}
                      className={`w-4 h-4 ${s < fb.rating ? "text-accent fill-accent" : "text-border"}`}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                  "{fb.comment}"
                </p>
              </div>
              <div>
                <p className="font-heading text-foreground text-sm">{fb.name}</p>
                {fb.date && (
                  <p className="text-muted-foreground text-xs font-body mt-1">{fb.date}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default FeedbackSection;
