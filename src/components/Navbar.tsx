
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-brand-blue">Handymen<span className="text-brand-orange">Network</span></span>
        </Link>
        
        <nav className="hidden md:flex md:items-center md:gap-6">
          <Link to="/services" className="text-sm font-medium transition-colors hover:text-brand-blue">
            Services
          </Link>
          <Link to="/how-it-works" className="text-sm font-medium transition-colors hover:text-brand-blue">
            How It Works
          </Link>
          <Link to="/about" className="text-sm font-medium transition-colors hover:text-brand-blue">
            About
          </Link>
          <Link to="/contact" className="text-sm font-medium transition-colors hover:text-brand-blue">
            Contact
          </Link>
        </nav>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden md:flex" asChild>
            <Link to="/profile">
              <User className="w-5 h-5" />
              <span className="sr-only">Profile</span>
            </Link>
          </Button>
          
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/login">Login</Link>
            </Button>
            
            <Button variant="outline" size="sm" asChild>
              <Link to="/signup">Sign Up</Link>
            </Button>
            
            <div className="h-5 mx-1 border-l border-gray-300"></div>

            <Button variant="ghost" size="sm" asChild>
              <Link to="/handyman-login">Pro Login</Link>
            </Button>
            
            <Button variant="outline" size="sm" className="gap-1" asChild>
              <Link to="/handyman-signup">
                <Wrench className="w-4 h-4" />
                Join as Pro
              </Link>
            </Button>
          </div>
          
          <Button variant="default" className="hidden md:inline-flex" asChild>
            <Link to="/book">Book Now</Link>
          </Button>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="w-5 h-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link to="/" className="text-lg font-medium">
                  Home
                </Link>
                <Link to="/services" className="text-lg font-medium">
                  Services
                </Link>
                <Link to="/how-it-works" className="text-lg font-medium">
                  How It Works
                </Link>
                <Link to="/about" className="text-lg font-medium">
                  About
                </Link>
                <Link to="/contact" className="text-lg font-medium">
                  Contact
                </Link>
                <Link to="/profile" className="text-lg font-medium">
                  Profile
                </Link>
                
                <div className="py-2 my-2 border-t border-b">
                  <h3 className="mb-2 font-medium text-gray-500">Account</h3>
                  <Link to="/login" className="block py-1 text-lg font-medium">
                    Login
                  </Link>
                  <Link to="/signup" className="block py-1 text-lg font-medium">
                    Sign Up
                  </Link>
                </div>
                
                <div className="py-2 my-2 border-b">
                  <h3 className="mb-2 font-medium text-gray-500">For Professionals</h3>
                  <Link to="/handyman-login" className="block py-1 text-lg font-medium">
                    Pro Login
                  </Link>
                  <Link to="/handyman-signup" className="block py-1 text-lg font-medium">
                    Join as Pro
                  </Link>
                </div>
                
                <Button variant="default" className="mt-4" asChild>
                  <Link to="/book">Book Now</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
