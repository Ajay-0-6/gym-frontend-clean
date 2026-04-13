import { motion } from 'motion/react';

const images = [
 'https://plus.unsplash.com/premium_photo-1663011447205-ae70222ea780?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3ltJTIwZmFjaWxpdHl8ZW58MHx8MHx8fDA%3D',
              'https://plus.unsplash.com/premium_photo-1723810059969-c70ee44677a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGd5bSUyMGZhY2lsaXR5fGVufDB8fDB8fHww',
              'https://plus.unsplash.com/premium_photo-1663134049335-0b888f4799c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGd5bSUyMGZhY2lsaXR5fGVufDB8fDB8fHww',
              'https://images.unsplash.com/photo-1773289337975-776b0c7ca508?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGd5bSUyMGZhY2lsaXR5fGVufDB8fDB8fHww',
              'https://plus.unsplash.com/premium_photo-1663036226779-50b27804233d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGd5bSUyMGZhY2lsaXR5fGVufDB8fDB8fHww',
              'https://plus.unsplash.com/premium_photo-1672281090616-f0f1ea8aa8ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGd5bSUyMGZhY2lsaXR5fGVufDB8fDB8fHww',
              'https://plus.unsplash.com/premium_photo-1663011447205-ae70222ea780?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3ltJTIwZmFjaWxpdHl8ZW58MHx8MHx8fDA%3D',
              'https://plus.unsplash.com/premium_photo-1672281064815-511a9b646216?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGd5bSUyMGZhY2lsaXR5fGVufDB8fDB8fHww',
];

export default function Gallery() {
  return (
    <div className="pt-32">
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-8xl font-display font-bold uppercase mb-8">The Facility</h1>
          <p className="text-white/50 text-xl max-w-2xl font-light leading-relaxed">
            A look inside our elite training environment. Precision equipment, structured spaces, and a community of champions.
          </p>
        </div>
      </section>

      <section className="pb-32 bg-dark">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="relative aspect-square overflow-hidden group border border-white/5"
            >
              <img
                src={img}
                alt="Gym Facility"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
