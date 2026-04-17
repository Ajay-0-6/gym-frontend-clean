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
      {/* Main Join Section */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Side */}
          <div>
            <h1 className="text-5xl md:text-8xl font-display font-bold uppercase mb-8 leading-none">
              Join the <br /> <span className="text-brand">Structure</span>
            </h1>

            <p className="text-white/50 text-xl font-light leading-relaxed mb-12">
              Take the first step towards your transformation. Fill out the form
              and we'll build your path to success.
            </p>

            {/* 3 Steps */}
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="w-12 h-12 border border-brand flex items-center justify-center text-brand font-bold">
                  01
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-2">
                    Initial Assessment
                  </h4>
                  <p className="text-white/40 text-sm">
                    We analyze your current fitness level and goals.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 border border-brand flex items-center justify-center text-brand font-bold">
                  02
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-2">
                    Plan Selection
                  </h4>
                  <p className="text-white/40 text-sm">
                    Choose the membership that fits your lifestyle.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 border border-brand flex items-center justify-center text-brand font-bold">
                  03
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-2">
                    Begin Training
                  </h4>
                  <p className="text-white/40 text-sm">
                    Start your journey with expert guidance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
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
                  className="w-full bg-dark border border-white/10 px-4 py-4 text-white"
                />

                <input
                  required
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-dark border border-white/10 px-4 py-4 text-white"
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
                  className="w-full bg-dark border border-white/10 px-4 py-4 text-white"
                />

                <div className="relative">
                  <select
                    value={formData.plan}
                    onChange={(e) =>
                      setFormData({ ...formData, plan: e.target.value })
                    }
                    onFocus={() => setActiveDropdown("plan")}
                    onBlur={() => setActiveDropdown(null)}
                    className="w-full bg-dark border border-white/10 px-4 py-4 text-white appearance-none"
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
                  className="w-full bg-dark border border-white/10 px-4 py-4 text-white appearance-none"
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
                className="w-full py-5 bg-brand text-white font-bold uppercase tracking-widest hover:bg-brand/90 transition-all disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Missing Location Section Added */}
      <section className="py-20 bg-surface border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-brand uppercase tracking-widest text-sm mb-3">
              Our Location
            </p>
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase">
              Find the Structure
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="p-8 border border-white/10 bg-dark">
              <h3 className="text-2xl font-bold mb-4">Main Facility</h3>
              <p className="text-white/60 leading-relaxed mb-4">
                123 Elite Plaza, Fitness District <br />
                New York, NY 10001
              </p>
              <p className="text-white/50">Phone: +1 (555) 123-4567</p>
              <p className="text-white/50">Email: contact@ironstructure.com</p>
            </div>

            <div className="border border-white/10 overflow-hidden min-h-[300px] bg-dark flex items-center justify-center">
              <p className="text-white/50 uppercase tracking-widest">
                Map / Location Preview
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}