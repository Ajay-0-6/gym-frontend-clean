import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Users, Trophy, Clock, ShieldCheck } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
            alt="Athlete training"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.5em' }}
            animate={{ opacity: 1, letterSpacing: '0.2em' }}
            transition={{ duration: 1 }}
            className="text-brand font-bold uppercase text-sm mb-6"
          >
            Elite Fitness Facility
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-8xl font-display font-bold uppercase leading-none mb-8"
          >
            Discipline Builds <br /> <span className="text-white/20 outline-text">Champions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light"
          >
            Train with purpose. Transform your body with expert coaching and structured programs designed for results.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <Link
              to="/join"
              className="px-10 py-4 bg-brand text-white font-bold uppercase tracking-widest hover:bg-brand/90 transition-all w-full md:w-64 text-center"
            >
              Join Now
            </Link>
            <Link
              to="/programs"
              className="px-10 py-4 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white hover:text-dark transition-all w-full md:w-64 text-center"
            >
              View Programs
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
          <div className="w-[1px] h-12 bg-white" />
        </div>
      </section>

      {/* Concept Section */}
      <section className="py-32 bg-dark">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div {...fadeIn}>
            <h2 className="text-brand font-bold uppercase tracking-widest text-sm mb-6">Our Philosophy</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold uppercase mb-8 leading-tight">
              Your Fitness. <br /> Your Structure.
            </h3>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              We don’t just train bodies. We build systems for long-term transformation. Every program is designed with precision and purpose, ensuring that every drop of sweat leads to progress.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <ShieldCheck className="text-brand shrink-0" size={24} />
                <div>
                  <h4 className="font-bold uppercase text-xs mb-2">Proven Systems</h4>
                  <p className="text-white/40 text-sm">Scientifically backed training methodologies.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Trophy className="text-brand shrink-0" size={24} />
                <div>
                  <h4 className="font-bold uppercase text-xs mb-2">Expert Coaching</h4>
                  <p className="text-white/40 text-sm">Guided by industry-leading professionals.</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-full h-full border border-brand/30 z-0" />
            <img
              src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop"
              alt="Gym environment"
              className="relative z-10 w-full aspect-square object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-32 bg-surface border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <h2 className="text-brand font-bold uppercase tracking-widest text-sm mb-6">Our Programs</h2>
              <h3 className="text-4xl md:text-6xl font-display font-bold uppercase">Structured Training</h3>
            </div>
            <Link to="/programs" className="text-sm font-bold uppercase tracking-widest flex items-center gap-2 hover:text-brand transition-colors">
              Explore All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {[
              { title: 'Strength Training', desc: 'Build muscle and increase power with heavy lifting.', img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop' },
              { title: 'Cross Training', desc: 'Interval-based workouts for extreme endurance.', img: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop' },
              { title: 'Functional Training', desc: 'Improve real-life movement and core stability.', img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop' },
              { title: 'Group Classes', desc: 'Zumba, HIIT, and Yoga sessions for all levels.', img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop' },
            ].map((program, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-dark p-8 min-h-[400px] flex flex-col justify-end overflow-hidden"
              >
                <div className="absolute inset-0 opacity-20 group-hover:opacity-60 transition-opacity duration-500">
                  <img src={program.img} alt={program.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="relative z-10">
                  <h4 className="text-xl font-bold uppercase mb-4 group-hover:text-brand transition-colors">{program.title}</h4>
                  <p className="text-white/40 text-sm mb-6 group-hover:text-white/80 transition-colors">{program.desc}</p>
                  <Link to={`/programs#${program.title.toLowerCase().replace(' ', '-')}`} className="text-xs font-bold uppercase tracking-widest border-b border-brand pb-1 opacity-0 group-hover:opacity-100 transition-all">
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: 'Members', value: '5000+', icon: Users },
            { label: 'Years Experience', value: '10+', icon: Trophy },
            { label: 'Expert Trainers', value: '50+', icon: ShieldCheck },
            { label: 'Access', value: '24/7', icon: Clock },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <stat.icon className="text-brand mx-auto mb-6" size={32} />
              <div className="text-4xl md:text-5xl font-display font-bold mb-2">{stat.value}</div>
              <div className="text-white/40 uppercase tracking-widest text-[10px] font-bold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trainers Section */}
      <section className="py-32 bg-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-brand font-bold uppercase tracking-widest text-sm mb-6">Elite Team</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold uppercase">Master Trainers</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { name: 'Alex Rivera', role: 'Strength Specialist', img: 'https://images.unsplash.com/photo-1701481057396-30fddf7775b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGd5bSUyMHRyYWluZXJzfGVufDB8fDB8fHww' },
              { name: 'Sarah Chen', role: 'HIIT & Conditioning', img: 'https://images.unsplash.com/photo-1606902965551-dce093cda6e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltJTIwdHJhaW5lcnN8ZW58MHx8MHx8fDA%3D' },
              { name: 'Marcus Thorne', role: 'Functional Expert', img: 'https://images.unsplash.com/photo-1549476464-37392f717541?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltJTIwdHJhaW5lcnN8ZW58MHx8MHx8fDA%3D' },
            ].map((trainer, i) => (
              <motion.div
                key={trainer.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group w-full"
              >
                <div className="relative overflow-hidden mb-6 aspect-[3/4]">
                  <img
                    src={trainer.img}
                    alt={trainer.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="text-xl font-bold uppercase mb-1">{trainer.name}</h4>
                <p className="text-white/40 text-xs uppercase tracking-widest">{trainer.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-20">
            <h3 className="text-4xl md:text-6xl font-display font-bold uppercase">The Facility</h3>
            <Link to="/gallery" className="text-xs font-bold uppercase tracking-widest border-b border-brand pb-1">View All</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://plus.unsplash.com/premium_photo-1663011447205-ae70222ea780?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3ltJTIwZmFjaWxpdHl8ZW58MHx8MHx8fDA%3D',
              'https://plus.unsplash.com/premium_photo-1723810059969-c70ee44677a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGd5bSUyMGZhY2lsaXR5fGVufDB8fDB8fHww',
              'https://plus.unsplash.com/premium_photo-1663134049335-0b888f4799c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGd5bSUyMGZhY2lsaXR5fGVufDB8fDB8fHww',
              'https://images.unsplash.com/photo-1773289337975-776b0c7ca508?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGd5bSUyMGZhY2lsaXR5fGVufDB8fDB8fHww',
              'https://plus.unsplash.com/premium_photo-1663011447205-ae70222ea780?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3ltJTIwZmFjaWxpdHl8ZW58MHx8MHx8fDA%3D',
              'https://plus.unsplash.com/premium_photo-1723810059969-c70ee44677a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGd5bSUyMGZhY2lsaXR5fGVufDB8fDB8fHww',
              'https://plus.unsplash.com/premium_photo-1663134049335-0b888f4799c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGd5bSUyMGZhY2lsaXR5fGVufDB8fDB8fHww',
              'https://images.unsplash.com/photo-1773289337975-776b0c7ca508?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGd5bSUyMGZhY2lsaXR5fGVufDB8fDB8fHww',
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="relative aspect-square overflow-hidden group"
              >
                <img src={img} alt="Gym" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-[10px] uppercase tracking-[0.3em] font-bold">View</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-dark border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-brand font-bold uppercase tracking-widest text-sm mb-6">Testimonials</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold uppercase">What Our Members Say</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { text: "Real transformation in 90 days. The structured approach here is unlike any other gym I've been to.", author: "James Wilson" },
              { text: "Best structured gym I’ve joined. The trainers actually care about your progress and form.", author: "Elena Rodriguez" },
              { text: "Professional trainers and great environment. The equipment is top-tier and always clean.", author: "David Chen" },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 border border-white/5 bg-surface"
              >
                <p className="text-white/60 italic mb-8 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-[1px] bg-brand" />
                  <span className="text-xs font-bold uppercase tracking-widest">{t.author}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-brand relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-display font-bold uppercase mb-12 leading-none"
          >
            Start Your <br /> Transformation Today
          </motion.h2>
          <Link
            to="/join"
            className="inline-block px-12 py-5 bg-white text-brand font-bold uppercase tracking-widest hover:bg-dark hover:text-white transition-all"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
}
