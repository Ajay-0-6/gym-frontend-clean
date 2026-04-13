import { motion } from 'motion/react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const trainers = [
  {
    name: 'Alex Rivera',
    role: 'Strength Specialist',
    bio: 'With over 12 years of experience in powerlifting and strength conditioning, Alex helps athletes break through plateaus.',
    img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop'
  },
  {
    name: 'Sarah Chen',
    role: 'HIIT & Conditioning',
    bio: 'Sarah specializes in high-intensity metabolic conditioning. Her sessions are designed to maximize fat loss and endurance.',
    img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop'
  },
  {
    name: 'Marcus Thorne',
    role: 'Functional Expert',
    bio: 'Marcus focuses on mobility and real-world strength. He ensures that your gym gains translate to everyday performance.',
    img: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2069&auto=format&fit=crop'
  },
  {
    name: 'Elena Vance',
    role: 'Yoga & Mobility',
    bio: 'Elena brings balance to the Iron Structure. Her mobility sessions are essential for recovery and long-term joint health.',
    img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2040&auto=format&fit=crop'
  },
  {
    name: 'David Miller',
    role: 'Bodybuilding Coach',
    bio: 'David is a master of hypertrophy. He works with clients to sculpt their physique through precision training and nutrition.',
    img: 'https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?q=80&w=2070&auto=format&fit=crop'
  },
  {
    name: 'Jessica Wu',
    role: 'Nutrition Specialist',
    bio: 'Fueling your transformation. Jessica provides the nutritional structure needed to support your training goals.',
    img: 'https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=1974&auto=format&fit=crop'
  }
];

export default function Trainers() {
  return (
    <div className="pt-32">
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-8xl font-display font-bold uppercase mb-8">Expert Trainers</h1>
          <p className="text-white/50 text-xl max-w-2xl font-light leading-relaxed">
            Our team consists of industry-leading professionals dedicated to your progress. No generic advice—just expert guidance.
          </p>
        </div>
      </section>

      <section className="pb-32 bg-dark">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {trainers.map((trainer, i) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-8">
                <img
                  src={trainer.img}
                  alt={trainer.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-dark/80 backdrop-blur-sm">
                  <div className="flex gap-4">
                    <a href="#" className="text-white hover:text-brand"><Instagram size={20} /></a>
                    <a href="#" className="text-white hover:text-brand"><Twitter size={20} /></a>
                    <a href="#" className="text-white hover:text-brand"><Linkedin size={20} /></a>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-display font-bold uppercase mb-2">{trainer.name}</h3>
              <p className="text-brand font-bold uppercase tracking-widest text-[10px] mb-4">{trainer.role}</p>
              <p className="text-white/50 text-sm leading-relaxed">{trainer.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
