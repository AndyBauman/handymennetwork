
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const HomeownerLogin = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, rememberMe: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate login - in a real app this would connect to your backend
    console.log('Login attempted with:', formData);
    
    // Show success message
    toast({
      title: "Login Successful!",
      description: "Welcome back to Handymen Network.",
    });
    
    // Redirect to home or dashboard
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };

  return (
    <>
      <Navbar />
      <div className="container px-4 py-12 mx-auto">
        <div className="max-w-md mx-auto">
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-3xl font-bold">Welcome Back</h1>
            <p className="text-gray-600">Sign in to your Handymen Network account</p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-md">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  className="mt-1" 
                  required 
                />
              </div>
              
              <div className="mb-6">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link to="/forgot-password" className="text-sm text-brand-blue hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Input 
                  id="password" 
                  name="password" 
                  type="password" 
                  value={formData.password} 
                  onChange={handleChange} 
                  className="mt-1" 
                  required 
                />
              </div>
              
              <div className="flex items-center mb-6">
                <Checkbox 
                  id="rememberMe" 
                  checked={formData.rememberMe}
                  onCheckedChange={(checked) => handleCheckboxChange(checked as boolean)}
                />
                <label htmlFor="rememberMe" className="ml-2 text-sm cursor-pointer">
                  Remember me
                </label>
              </div>
              
              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </form>
            
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 text-gray-500 bg-white">Or continue with</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="w-full">
                Google
              </Button>
              <Button variant="outline" className="w-full">
                Facebook
              </Button>
            </div>
          </div>
          
          <div className="p-4 mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account? <Link to="/signup" className="text-brand-blue hover:underline">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomeownerLogin;
