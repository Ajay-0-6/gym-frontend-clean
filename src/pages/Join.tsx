import { motion } from "motion/react";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import React from "react";

export default function Join() {
  const [searchParams] = useSearchParams();
  const initialPlan = searchParams.get("plan") || "standard";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: initialPlan,
    goal: "muscle-gain",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://gym-backend-vfvr.onrender.com/api/join", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitted(true);

        setFormData({
          name: "",
          email: "",
          phone: "",
          plan: "standard",
          goal: "muscle-gain",
        });
      } else {
        alert(data.message || "Submission failed");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32 pb-20 px-6 bg-dark">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl w-full p-12 border border-brand bg-surface text-center"
        >
          <h2 className="text-4xl font-display font-bold uppercase mb-6 text-white">
            Welcome to the Elite
          </h2>

          <p className="text-white/60 mb-10 leading-relaxed">
            Your application has been received. One of our master trainers will
            contact you within 24 hours to schedule your initial assessment.
          </p>

          <button
            onClick={() => setSubmitted(false)}
            className="px-10 py-4 bg-brand text-white font-bold uppercase tracking-widest hover:bg-brand/90 transition-all"
          >
            Back to Form
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 bg-dark">
      {/* Main Join Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Side */}
          <div>
            <h1 className="text-5xl md:text-8xl font-display font-bold uppercase mb-8 leading-none text-white">
              Join the <br />
              <span className="text-brand">Structure</span>
            </h1>

            <p className="text-white/50 text-xl font-light leading-relaxed mb-12">
              Take the first step towards your transformation. Fill out the form
              and we'll build your path to success.
            </p>

            <div className="space-y-12">
              {[
                [
                  "01",
                  "Initial Assessment",
                  "We analyze your current fitness level and goals.",
                ],
                [
                  "02",
                  "Plan Selection",
                  "Choose the membership that fits your lifestyle.",
                ],
                [
                  "03",
                  "Begin Training",
                  "Start your journey with expert guidance.",
                ],
              ].map(([num, title, desc]) => (
                <div className="flex gap-6" key={num}>
                  <div className="w-12 h-12 border border-brand flex items-center justify-center shrink-0 text-brand font-bold">
                    {num}
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-xs mb-2 text-white">
                      {title}
                    </h4>
                    <p className="text-white/40 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-10 border border-white/10 bg-surface"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-dark border border-white/10 px-4 py-4 text-white focus:border-brand outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-dark border border-white/10 px-4 py-4 text-white focus:border-brand outline-none"
                  />
                </div>
              </div>

              {/* Phone + Plan */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                    Phone Number
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full bg-dark border border-white/10 px-4 py-4 text-white focus:border-brand outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                    Select Plan
                  </label>

                  <div className="relative">
                    <select
                      value={formData.plan}
                      onChange={(e) =>
                        setFormData({ ...formData, plan: e.target.value })
                      }
                      onFocus={() => setActiveDropdown("plan")}
                      onBlur={() => setActiveDropdown(null)}
                      className="w-full bg-dark border border-white/10 px-4 py-4 text-white appearance-none pr-10 focus:border-brand outline-none"
                    >
                      <option value="basic">Basic Plan</option>
                      <option value="standard">Standard Plan</option>
                      <option value="premium">Premium Plan</option>
                    </select>

                    {activeDropdown === "plan" ? (
                      <ChevronUp className="absolute right-4 top-1/2 -translate-y-1/2 text-brand pointer-events-none" size={16} />
                    ) : (
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" size={16} />
                    )}
                  </div>
                </div>
              </div>

              {/* Goal */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                  Primary Goal
                </label>

                <div className="relative">
                  <select
                    value={formData.goal}
                    onChange={(e) =>
                      setFormData({ ...formData, goal: e.target.value })
                    }
                    onFocus={() => setActiveDropdown("goal")}
                    onBlur={() => setActiveDropdown(null)}
                    className="w-full bg-dark border border-white/10 px-4 py-4 text-white appearance-none pr-10 focus:border-brand outline-none"
                  >
                    <option value="muscle-gain">Muscle Gain</option>
                    <option value="weight-loss">Weight Loss</option>
                    <option value="endurance">Endurance</option>
                    <option value="flexibility">Flexibility & Recovery</option>
                  </select>

                  {activeDropdown === "goal" ? (
                    <ChevronUp className="absolute right-4 top-1/2 -translate-y-1/2 text-brand pointer-events-none" size={16} />
                  ) : (
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" size={16} />
                  )}
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-5 bg-brand text-white font-bold uppercase tracking-widest hover:bg-brand/90 transition-all disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-surface border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-brand font-bold uppercase tracking-widest text-[10px] mb-2">
              Our Location
            </h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold uppercase text-white">
              Find the Structure
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="border border-white/10 bg-dark overflow-hidden">
              <img
                src="https://picsum.photos/seed/loc1/800/400"
                alt="Gym"
                className="w-full h-40 object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />

              <div className="p-6">
                <h4 className="text-white font-bold uppercase mb-4">
                  Main Facility
                </h4>

                <p className="text-white/50 mb-5 text-sm leading-relaxed">
                  123 Elite Plaza, Fitness District <br />
                  New York, NY 10001
                </p>

                <div className="space-y-2 text-sm">
                  <p className="flex justify-between">
                    <span className="text-white/30">PHONE</span>
                    <span className="text-white">+1 (555) 123-4567</span>
                  </p>

                  <p className="flex justify-between">
                    <span className="text-white/30">EMAIL</span>
                    <span className="text-white">
                      contact@ironstructure.com
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative border border-white/10 overflow-hidden h-full min-h-[360px]">
              <img
                src="https://picsum.photos/seed/map/800/600"
                alt="Map"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-dark/80 border border-brand px-6 py-4 text-center">
                  <p className="text-brand text-xs uppercase font-bold mb-1">
                    Visit Us
                  </p>
                  <p className="text-white text-sm font-semibold">
                    Open 24/7 for Members
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}