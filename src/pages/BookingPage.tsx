import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, Phone, Scissors, MessageSquare, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_NUMBER = "918401976594";

const services = [
  { id: "haircut", label: "Hair Cut", price: "$50" },
  { id: "styling", label: "Styling", price: "$100" },
  { id: "coloring", label: "Coloring", price: "$120" },
  { id: "treatment", label: "Hair Treatment", price: "$80" },
  { id: "bridal", label: "Bridal Package", price: "$250" },
  { id: "blowdry", label: "Blow Dry", price: "$40" },
];

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
  "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
  "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM",
  "7:00 PM", "7:30 PM",
];

const BookingPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validateStep1 = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    else if (form.name.trim().length > 100) e.name = "Name too long";
    if (!form.phone.trim()) e.phone = "Phone is required";
    else if (!/^\+?[\d\s\-()]{7,20}$/.test(form.phone.trim())) e.phone = "Invalid phone number";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateStep2 = () => {
    const e: Record<string, string> = {};
    if (!form.service) e.service = "Please select a service";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateStep3 = () => {
    const e: Record<string, string> = {};
    if (!form.date) e.date = "Please select a date";
    if (!form.time) e.time = "Please select a time";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const nextStep = () => {
    if (step === 1 && !validateStep1()) return;
    if (step === 2 && !validateStep2()) return;
    if (step === 3 && !validateStep3()) return;
    setStep((s) => Math.min(s + 1, 4));
  };

  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const selectedService = services.find((s) => s.id === form.service);

  const sendToWhatsApp = () => {
    const name = encodeURIComponent(form.name.trim());
    const phone = encodeURIComponent(form.phone.trim());
    const service = encodeURIComponent(selectedService?.label ?? "");
    const price = encodeURIComponent(selectedService?.price ?? "");
    const date = encodeURIComponent(form.date);
    const time = encodeURIComponent(form.time);
    const notes = encodeURIComponent(form.notes.trim().slice(0, 500));

    const message =
      `Hi Ivy Salon! I'd like to book an appointment.%0A%0A` +
      `👤 Name: ${name}%0A📱 Phone: ${phone}%0A💇 Service: ${service} (${price})%0A📅 Date: ${date}%0A🕐 Time: ${time}` +
      (form.notes.trim() ? `%0A📝 Notes: ${notes}` : "");

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank", "noopener,noreferrer");

    toast({
      title: "Redirecting to WhatsApp",
      description: "Your booking details have been prepared. Complete the booking on WhatsApp!",
    });
  };

  // Today's date for min attribute
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <button onClick={() => navigate("/")} className="flex items-center gap-2 text-foreground hover:text-accent transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-body text-sm hidden sm:inline">Back</span>
          </button>
          <a href="/" className="font-heading text-2xl tracking-wide text-foreground">Ivy Salon</a>
          <div className="w-16" />
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-12 md:py-20">
        {/* Title */}
        <div className="text-center mb-10">
          <p className="text-accent font-body text-sm uppercase tracking-widest mb-2">Appointment</p>
          <h1 className="font-heading text-3xl md:text-4xl text-foreground">Book Your Visit</h1>
        </div>

        {/* Progress */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-body transition-colors ${
                  step >= s ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"
                }`}
              >
                {s}
              </div>
              {s < 4 && <div className={`w-8 md:w-14 h-0.5 ${step > s ? "bg-accent" : "bg-border"}`} />}
            </div>
          ))}
        </div>

        {/* Step 1 — Personal Info */}
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="font-heading text-xl text-foreground flex items-center gap-2">
              <User className="w-5 h-5 text-accent" /> Personal Details
            </h2>
            <div>
              <label className="block font-body text-sm text-muted-foreground mb-1">Full Name *</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="e.g. Priya Sharma"
                maxLength={100}
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground font-body focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
              />
              {errors.name && <p className="text-destructive text-xs mt-1 font-body">{errors.name}</p>}
            </div>
            <div>
              <label className="block font-body text-sm text-muted-foreground mb-1">Phone Number *</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  placeholder="+91 84019 76594"
                  maxLength={20}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-card text-foreground font-body focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
                />
              </div>
              {errors.phone && <p className="text-destructive text-xs mt-1 font-body">{errors.phone}</p>}
            </div>
          </div>
        )}

        {/* Step 2 — Service Selection */}
        {step === 2 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="font-heading text-xl text-foreground flex items-center gap-2">
              <Scissors className="w-5 h-5 text-accent" /> Choose a Service
            </h2>
            {errors.service && <p className="text-destructive text-xs font-body">{errors.service}</p>}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map((s) => (
                <button
                  key={s.id}
                  onClick={() => update("service", s.id)}
                  className={`flex items-center justify-between px-5 py-4 rounded-lg border text-left font-body transition-all ${
                    form.service === s.id
                      ? "border-accent bg-accent/10 ring-2 ring-accent/30"
                      : "border-border bg-card hover:border-accent/50"
                  }`}
                >
                  <span className="text-foreground">{s.label}</span>
                  <span className="text-accent font-heading text-lg">{s.price}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3 — Date & Time */}
        {step === 3 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="font-heading text-xl text-foreground flex items-center gap-2">
              <Calendar className="w-5 h-5 text-accent" /> Select Date & Time
            </h2>
            <div>
              <label className="block font-body text-sm text-muted-foreground mb-1">Preferred Date *</label>
              <input
                type="date"
                value={form.date}
                min={today}
                onChange={(e) => update("date", e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground font-body focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
              />
              {errors.date && <p className="text-destructive text-xs mt-1 font-body">{errors.date}</p>}
            </div>
            <div>
              <label className="block font-body text-sm text-muted-foreground mb-1">Preferred Time *</label>
              {errors.time && <p className="text-destructive text-xs mb-2 font-body">{errors.time}</p>}
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {timeSlots.map((t) => (
                  <button
                    key={t}
                    onClick={() => update("time", t)}
                    className={`py-2 px-2 rounded-md text-sm font-body transition-all ${
                      form.time === t
                        ? "bg-accent text-accent-foreground"
                        : "bg-card border border-border text-foreground hover:border-accent/50"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block font-body text-sm text-muted-foreground mb-1">
                <MessageSquare className="inline w-4 h-4 mr-1" />
                Additional Notes (optional)
              </label>
              <textarea
                value={form.notes}
                onChange={(e) => update("notes", e.target.value)}
                maxLength={500}
                rows={3}
                placeholder="Any special requests..."
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground font-body focus:outline-none focus:ring-2 focus:ring-accent/50 transition resize-none"
              />
            </div>
          </div>
        )}

        {/* Step 4 — Confirmation */}
        {step === 4 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="font-heading text-xl text-foreground text-center">Confirm Your Booking</h2>
            <div className="bg-card border border-border rounded-xl p-6 space-y-4">
              <Row label="Name" value={form.name} />
              <Row label="Phone" value={form.phone} />
              <Row label="Service" value={`${selectedService?.label} — ${selectedService?.price}`} />
              <Row label="Date" value={form.date} />
              <Row label="Time" value={form.time} />
              {form.notes.trim() && <Row label="Notes" value={form.notes.trim()} />}
            </div>
            <button
              onClick={sendToWhatsApp}
              className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white py-4 rounded-lg font-body text-base uppercase tracking-wider transition-colors shadow-lg"
            >
              <Send className="w-5 h-5" />
              Send to WhatsApp & Book
            </button>
            <p className="text-center text-muted-foreground text-xs font-body">
              You'll be redirected to WhatsApp to confirm your appointment.
            </p>
          </div>
        )}

        {/* Navigation buttons */}
        {step < 4 && (
          <div className="flex items-center justify-between mt-10">
            <button
              onClick={prevStep}
              disabled={step === 1}
              className="px-6 py-3 rounded-lg border border-border text-foreground font-body text-sm hover:bg-muted transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Back
            </button>
            <button
              onClick={nextStep}
              className="px-8 py-3 rounded-lg bg-foreground text-primary-foreground font-body text-sm uppercase tracking-wider hover:bg-accent transition-colors"
            >
              {step === 3 ? "Review" : "Next"}
            </button>
          </div>
        )}
        {step === 4 && (
          <div className="mt-4 text-center">
            <button onClick={prevStep} className="text-accent font-body text-sm underline underline-offset-4 hover:text-foreground transition-colors">
              ← Go back and edit
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

const Row = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between gap-4">
    <span className="text-muted-foreground font-body text-sm shrink-0">{label}</span>
    <span className="text-foreground font-body text-sm text-right">{value}</span>
  </div>
);

export default BookingPage;
