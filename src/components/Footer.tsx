import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="text-2xl font-display font-bold tracking-tighter flex items-center gap-2 mb-6">
            <span className="text-brand">IRON</span>
            <span className="text-white">STRUCTURE</span>
          </Link>
          <p className="text-white/50 text-sm leading-relaxed mb-8">
            Premium fitness facility dedicated to structured training and long-term transformation. Join the elite.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-brand hover:border-brand transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-brand hover:border-brand transition-all">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-brand hover:border-brand transition-all">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-brand hover:border-brand transition-all">
              <Youtube size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Quick Links</h4>
          <ul className="flex flex-col gap-4">
            <li><Link to="/programs" className="text-white/50 hover:text-brand text-sm transition-colors">Programs</Link></li>
            <li><Link to="/plans" className="text-white/50 hover:text-brand text-sm transition-colors">Membership Plans</Link></li>
            <li><Link to="/trainers" className="text-white/50 hover:text-brand text-sm transition-colors">Expert Trainers</Link></li>
            <li><Link to="/gallery" className="text-white/50 hover:text-brand text-sm transition-colors">Our Gallery</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Opening Hours</h4>
          <ul className="flex flex-col gap-4">
            <li className="flex justify-between text-sm">
              <span className="text-white/50">Mon - Fri</span>
              <span className="text-white">05:00 - 23:00</span>
            </li>
            <li className="flex justify-between text-sm">
              <span className="text-white/50">Saturday</span>
              <span className="text-white">06:00 - 21:00</span>
            </li>
            <li className="flex justify-between text-sm">
              <span className="text-white/50">Sunday</span>
              <span className="text-white">08:00 - 18:00</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Location</h4>
          <p className="text-white/50 text-sm leading-relaxed mb-4">
            123 Elite Plaza, Fitness District<br />
            New York, NY 10001
          </p>
          <p className="text-white/50 text-sm mb-2">+1 (555) 123-4567</p>
          <p className="text-white/50 text-sm">contact@ironstructure.com</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 uppercase tracking-widest">
        <p>© 2026 Iron Structure Gym. All Rights Reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
