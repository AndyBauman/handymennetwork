
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="mb-4 text-xl font-bold text-white">Handymen<span className="text-brand-orange">Network</span></h2>
            <p className="mb-4">
              Expert handyman services on demand with upfront pricing and verified professionals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/plumbing" className="hover:text-white">Plumbing</Link></li>
              <li><Link to="/services/electrical" className="hover:text-white">Electrical</Link></li>
              <li><Link to="/services/tv-mounting" className="hover:text-white">TV Mounting</Link></li>
              <li><Link to="/services/furniture-assembly" className="hover:text-white">Furniture Assembly</Link></li>
              <li><Link to="/services/home-improvement" className="hover:text-white">Home Improvement</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/how-it-works" className="hover:text-white">How It Works</Link></li>
              <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/pricing" className="hover:text-white">Pricing Policy</Link></li>
              <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-800">
          <div className="flex flex-col items-center justify-center text-center">
            <p className="mb-4">&copy; {currentYear} Handymen Network. All rights reserved.</p>
            <div className="flex items-center space-x-4">
              <span className="text-gray-500">For Professionals:</span>
              <Link to="/handyman-login" className="hover:text-white">Pro Login</Link>
              <Link to="/handyman-signup" className="hover:text-white">Join as Pro</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
