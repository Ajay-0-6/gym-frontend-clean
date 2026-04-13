import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const programs = [
  {
    id: 'strength-training',
    title: 'Strength Training',
    subtitle: 'Build Power & Muscle',
    desc: 'Our strength program focuses on compound movements and progressive overload. Whether you are a beginner or an elite lifter, our structured approach ensures consistent gains.',
    benefits: ['Hypertrophy focus', 'Powerlifting techniques', 'Form correction', 'Personalized tracking'],
    img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'cross-training',
    title: 'Cross Training',
    subtitle: 'Endurance & Versatility',
    desc: 'High-intensity interval training combined with functional movements. This program is designed to push your cardiovascular limits while building lean muscle.',
    benefits: ['Metabolic conditioning', 'Gymnastics skills', 'Olympic lifting', 'High-energy environment'],
    img: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop'
  },
  {
    id: 'functional-training',
    title: 'Functional Training',
    subtitle: 'Real-World Strength',
    desc: 'Focus on movements that improve your daily life. We prioritize core stability, mobility, and multi-planar movements to keep you injury-free and performing at your best.',
    benefits: ['Core stabilization', 'Mobility work', 'Balance & Coordination', 'Injury prevention'],
    img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'group-classes',
    title: 'Group Classes',
    subtitle: 'Community & Energy',
    desc: 'Join our vibrant community in high-energy sessions. From Zumba to Yoga, our group classes provide the perfect balance of fun and fitness.',
    benefits: ['Expert instructors', 'Supportive community', 'Diverse class types', 'All fitness levels'],
    img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function Programs() {
  return (
    <div className="pt-32">
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-8xl font-display font-bold uppercase mb-8">Our Programs</h1>
          <p className="text-white/50 text-xl max-w-2xl font-light leading-relaxed">
            Every program at Iron Structure is designed with precision. We don't believe in random workouts—we believe in structured systems for transformation.
          </p>
        </div>
      </section>

      <section className="pb-32 bg-dark">
        <div className="max-w-7xl mx-auto px-6 space-y-32">
          {programs.map((program, i) => (
            <motion.div
              key={program.id}
              id={program.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center`}
            >
              <div className="flex-1 w-full">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={program.img} alt={program.title} className="w-full h-full object-cover hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 border border-white/10 pointer-events-none" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-brand font-bold uppercase tracking-widest text-sm mb-4">{program.subtitle}</h2>
                <h3 className="text-4xl md:text-5xl font-display font-bold uppercase mb-8">{program.title}</h3>
                <p className="text-white/60 text-lg mb-10 leading-relaxed">
                  {program.desc}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                  {program.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-white/80">
                      <CheckCircle2 className="text-brand" size={18} />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/join"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-brand text-white font-bold uppercase tracking-widest hover:bg-brand/90 transition-all"
                >
                  Join Program <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
