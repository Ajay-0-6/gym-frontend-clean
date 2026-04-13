import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Programs', path: '/programs' },
    { name: 'Plans', path: '/plans' },
    { name: 'Trainers', path: '/trainers' },
    { name: 'Gallery', path: '/gallery' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-dark/95 border-b border-white/10 py-4">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-display font-bold tracking-tighter flex items-center gap-2">
          <span className="text-brand">IRON</span>
          <span className="text-white">STRUCTURE</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium uppercase tracking-widest nav-underline pb-1 transition-colors duration-300 ${
                location.pathname === link.path 
                  ? 'text-brand after:w-full' 
                  : 'text-white/70 hover:text-brand'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            to="/join"
            className="px-8 py-3 bg-brand text-white text-xs font-bold uppercase tracking-widest hover:bg-brand/90 transition-colors"
          >
            Join Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed inset-0 z-40 bg-dark flex flex-col items-center justify-center gap-8 md:hidden"
      >
        <button className="absolute top-6 right-6 text-white" onClick={() => setIsOpen(false)}>
          <X size={32} />
        </button>
        {navLinks.map((link, i) => (
          <motion.div
            key={link.name}
            initial={{ opacity: 0, y: 20 }}
            animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: i * 0.1 }}
          >
            <Link
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-3xl font-display font-bold uppercase tracking-widest text-white hover:text-brand transition-colors"
            >
              {link.name}
            </Link>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: navLinks.length * 0.1 }}
          className="w-full px-12 mt-8"
        >
          <Link
            to="/join"
            onClick={() => setIsOpen(false)}
            className="block w-full py-5 bg-brand text-white text-center text-sm font-bold uppercase tracking-widest"
          >
            Join Now
          </Link>
        </motion.div>
      </motion.div>
    </nav>
  );
}
