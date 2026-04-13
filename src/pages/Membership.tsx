import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '999',
    period: 'month',
    features: [
      'Access to gym floor',
      'Locker room access',
      'Free WiFi',
      'Standard equipment',
      '1 Guest pass per month'
    ],
    cta: 'Select Basic',
    highlight: false
  },
  {
    name: 'Standard',
    price: '1999',
    period: 'month',
    features: [
      'All Basic features',
      'Group classes included',
      'Personalized workout plan',
      'Nutritional guidance',
      '5 Guest passes per month',
      'Sauna & Steam access'
    ],
    cta: 'Select Standard',
    highlight: true
  },
  {
    name: 'Premium',
    price: '2999',
    period: 'month',
    features: [
      'All Standard features',
      'Unlimited personal training',
      'Priority booking',
      'Premium recovery lounge',
      'Unlimited guest passes',
      'Physiotherapy sessions'
    ],
    cta: 'Select Premium',
    highlight: false
  }
];

export default function Membership() {
  return (
    <div className="pt-32">
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-8xl font-display font-bold uppercase mb-8">Membership Plans</h1>
          <p className="text-white/50 text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Choose the structure that fits your goals. No hidden fees, just pure commitment to your transformation.
          </p>
        </div>
      </section>

      <section className="pb-32 bg-dark">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-12 border ${plan.highlight ? 'border-brand bg-surface' : 'border-white/10 bg-dark'} flex flex-col`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-display font-bold uppercase mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-10">
                <span className="text-4xl font-bold">₹{plan.price}</span>
                <span className="text-white/40 text-sm uppercase tracking-widest">/{plan.period}</span>
              </div>
              <ul className="space-y-6 mb-12 flex-grow">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-white/60">
                    <Check className="text-brand shrink-0" size={18} />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to={`/join?plan=${plan.name.toLowerCase()}`}
                className={`w-full py-4 text-center font-bold uppercase tracking-widest transition-all ${plan.highlight ? 'bg-brand text-white hover:bg-brand/90' : 'bg-white text-dark hover:bg-brand hover:text-white'}`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-surface border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-display font-bold uppercase mb-8 text-glow">Corporate Memberships</h3>
          <p className="text-white/50 mb-10 leading-relaxed">
            Looking to build a stronger team? We offer customized packages for corporate groups of 10 or more. Elevate your company's performance through fitness.
          </p>
          <Link to="/join?type=corporate" className="text-brand font-bold uppercase tracking-widest border-b border-brand pb-1 hover:text-white hover:border-white transition-all">
            Contact for Corporate Rates
          </Link>
        </div>
      </section>
    </div>
  );
}
