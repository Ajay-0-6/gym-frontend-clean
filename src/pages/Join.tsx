import { motion } from 'motion/react';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import React from 'react';

export default function Join() {
  const [searchParams] = useSearchParams();
  const initialPlan = searchParams.get('plan') || 'standard';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: initialPlan,
    goal: 'muscle-gain',
  });

  const [submitted, setSubmitted] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('https://gym-backend-q7co.onrender.com/api/join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        console.log(data);
        setSubmitted(true);

        setFormData({
          name: '',
          email: '',
          phone: '',
          plan: 'standard',
          goal: 'muscle-gain',
        });
      } else {
        alert('Submission failed');
      }
    } catch (error) {
      console.error(error);
      alert('Server error');
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
    <div className="pt-32 pb-20">
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl md:text-8xl font-display font-bold uppercase mb-8 leading-none">
              Join the <br /> <span className="text-brand">Structure</span>
            </h1>

            <p className="text-white/50 text-xl font-light leading-relaxed mb-12">
              Take the first step towards your transformation. Fill out the form
              and we'll build your path to success.
            </p>

            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="w-12 h-12 border border-brand flex items-center justify-center shrink-0 text-brand font-bold">
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
                <div className="w-12 h-12 border border-brand flex items-center justify-center shrink-0 text-brand font-bold">
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
                <div className="w-12 h-12 border border-brand flex items-center justify-center shrink-0 text-brand font-bold">
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
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                    Full Name
                  </label>

                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-dark border border-white/10 px-4 py-4 text-white focus:border-brand outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                    Email Address
                  </label>

                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-dark border border-white/10 px-4 py-4 text-white focus:border-brand outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                    Phone Number
                  </label>

                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full bg-dark border border-white/10 px-4 py-4 text-white focus:border-brand outline-none transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                    Select Plan
                  </label>

                  <div className="relative">
                    <select
                      value={formData.plan}
                      onChange={(e) => {
                        setFormData({ ...formData, plan: e.target.value });
                        e.target.blur();
                      }}
                      onFocus={() => setActiveDropdown('plan')}
                      onBlur={() => setActiveDropdown(null)}
                      className="w-full bg-dark border border-white/10 px-4 py-4 text-white focus:border-brand outline-none transition-colors appearance-none pr-10"
                    >
                      <option value="basic">Basic Plan</option>
                      <option value="standard">Standard Plan</option>
                      <option value="premium">Premium Plan</option>
                    </select>

                    {activeDropdown === 'plan' ? (
                      <ChevronUp
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-brand pointer-events-none"
                        size={16}
                      />
                    ) : (
                      <ChevronDown
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"
                        size={16}
                      />
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                  Primary Goal
                </label>

                <div className="relative">
                  <select
                    value={formData.goal}
                    onChange={(e) => {
                      setFormData({ ...formData, goal: e.target.value });
                      e.target.blur();
                    }}
                    onFocus={() => setActiveDropdown('goal')}
                    onBlur={() => setActiveDropdown(null)}
                    className="w-full bg-dark border border-white/10 px-4 py-4 text-white focus:border-brand outline-none transition-colors appearance-none pr-10"
                  >
                    <option value="muscle-gain">Muscle Gain</option>
                    <option value="weight-loss">Weight Loss</option>
                    <option value="endurance">Endurance</option>
                    <option value="flexibility">Flexibility & Recovery</option>
                  </select>

                  {activeDropdown === 'goal' ? (
                    <ChevronUp
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-brand pointer-events-none"
                      size={16}
                    />
                  ) : (
                    <ChevronDown
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"
                      size={16}
                    />
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-brand text-white font-bold uppercase tracking-widest hover:bg-brand/90 transition-all"
              >
                Submit Application
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}