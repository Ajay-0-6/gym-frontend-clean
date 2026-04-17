import { motion } from "motion/react";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import React from "react";

export default function Join() {
  const [searchParams] = useSearchParams();
  const initialPlan = searchParams.get("plan") || "standard";

  const initialForm = {
    name: "",
    email: "",
    phone: "",
    plan: initialPlan,
    goal: "muscle-gain",
  };

  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      ...formData,
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
    };

    try {
      const res = await fetch("https://gym-backend-vfvr.onrender.com/api/join", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      let data: any = {};
      try {
        data = await res.json();
      } catch {
        data = {};
      }

      console.log("Response:", data);

      if (res.ok) {
        setSubmitted(true);
        setFormData(initialForm);
      } else {
        alert(data.message || "Submission failed");
      }
    } catch (error) {
      console.error("Submit Error:", error);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32 pb-20 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl w-full p-12 border border-brand bg-surface text-center"
        >
          <h2 className="text-4xl font-display font-bold uppercase mb-6">
            Welcome to the Elite
          </h2>

          <p className="text-white/60 mb-10 leading-relaxed">
            Your application has been received. One of our trainers will contact
            you within 24 hours.
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
    <div className="pt-32 pb-20">
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left */}
          <div>
            <h1 className="text-5xl md:text-8xl font-display font-bold uppercase mb-8 leading-none">
              Join the <br /> <span className="text-brand">Structure</span>
            </h1>

            <p className="text-white/50 text-xl font-light leading-relaxed mb-12">
              Take the first step towards your transformation.
            </p>
          </div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-10 border border-white/10 bg-surface"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input
                  required
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-dark border border-white/10 px-4 py-4 text-white outline-none"
                />

                <input
                  required
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-dark border border-white/10 px-4 py-4 text-white outline-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input
                  required
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full bg-dark border border-white/10 px-4 py-4 text-white outline-none"
                />

                <div className="relative">
                  <select
                    value={formData.plan}
                    onChange={(e) =>
                      setFormData({ ...formData, plan: e.target.value })
                    }
                    onFocus={() => setActiveDropdown("plan")}
                    onBlur={() => setActiveDropdown(null)}
                    className="w-full bg-dark border border-white/10 px-4 py-4 text-white appearance-none outline-none"
                  >
                    <option value="basic">Basic Plan</option>
                    <option value="standard">Standard Plan</option>
                    <option value="premium">Premium Plan</option>
                  </select>

                  {activeDropdown === "plan" ? (
                    <ChevronUp className="absolute right-4 top-1/2 -translate-y-1/2 text-brand" size={16} />
                  ) : (
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40" size={16} />
                  )}
                </div>
              </div>

              <div className="relative">
                <select
                  value={formData.goal}
                  onChange={(e) =>
                    setFormData({ ...formData, goal: e.target.value })
                  }
                  onFocus={() => setActiveDropdown("goal")}
                  onBlur={() => setActiveDropdown(null)}
                  className="w-full bg-dark border border-white/10 px-4 py-4 text-white appearance-none outline-none"
                >
                  <option value="muscle-gain">Muscle Gain</option>
                  <option value="weight-loss">Weight Loss</option>
                  <option value="endurance">Endurance</option>
                  <option value="flexibility">Flexibility & Recovery</option>
                </select>

                {activeDropdown === "goal" ? (
                  <ChevronUp className="absolute right-4 top-1/2 -translate-y-1/2 text-brand" size={16} />
                ) : (
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40" size={16} />
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-5 bg-brand text-white font-bold uppercase tracking-widest hover:bg-brand/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}