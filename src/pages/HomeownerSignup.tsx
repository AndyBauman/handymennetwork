
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { User, Lock, Home, CreditCard, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const HomeownerSignup = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    address: '',
    unit: '',
    city: '',
    state: '',
    zip: '',
    agreeToTerms: false
  });

  // List of US states for the dropdown
  const states = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", 
    "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", 
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", 
    "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", 
    "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", 
    "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", 
    "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming",
    "District of Columbia", "Puerto Rico", "U.S. Virgin Islands", "Guam", "American Samoa", 
    "Northern Mariana Islands"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleNextStep = () => {
    if (step === 1) {
      // Validation for step 1
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.password || !formData.confirmPassword) {
        toast({
          title: "Missing Information",
          description: "Please fill out all required fields.",
          variant: "destructive"
        });
        return;
      }
      
      if (formData.password !== formData.confirmPassword) {
        toast({
          title: "Password Mismatch",
          description: "Passwords do not match.",
          variant: "destructive"
        });
        return;
      }
    } else if (step === 2) {
      // Validation for step 2
      if (!formData.address || !formData.city || !formData.state || !formData.zip) {
        toast({
          title: "Missing Information",
          description: "Please fill out all address fields.",
          variant: "destructive"
        });
        return;
      }
    }
    
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeToTerms) {
      toast({
        title: "Terms Required",
        description: "Please agree to the terms and conditions.",
        variant: "destructive"
      });
      return;
    }
    
    // In a real application, you would submit this data to your backend
    console.log('Submitting homeowner registration:', formData);
    
    // Show success message
    toast({
      title: "Registration Successful!",
      description: "Your account has been created. You can now book handyman services.",
    });
    
    // Redirect to homepage or dashboard
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <>
      <Navbar />
      <div className="container px-4 py-12 mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-3xl font-bold">Create Your Account</h1>
            <p className="text-gray-600">Sign up to book and manage handyman services</p>
          </div>
          
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className={`flex flex-col items-center ${step >= 1 ? 'text-brand-blue' : 'text-gray-400'}`}>
                <div className={`flex items-center justify-center w-10 h-10 mb-2 rounded-full ${step >= 1 ? 'bg-brand-blue text-white' : 'bg-gray-200'}`}>
                  1
                </div>
                <span>Account</span>
              </div>
              <div className={`h-1 flex-1 mx-4 ${step >= 2 ? 'bg-brand-blue' : 'bg-gray-200'}`}></div>
              <div className={`flex flex-col items-center ${step >= 2 ? 'text-brand-blue' : 'text-gray-400'}`}>
                <div className={`flex items-center justify-center w-10 h-10 mb-2 rounded-full ${step >= 2 ? 'bg-brand-blue text-white' : 'bg-gray-200'}`}>
                  2
                </div>
                <span>Address</span>
              </div>
              <div className={`h-1 flex-1 mx-4 ${step >= 3 ? 'bg-brand-blue' : 'bg-gray-200'}`}></div>
              <div className={`flex flex-col items-center ${step >= 3 ? 'text-brand-blue' : 'text-gray-400'}`}>
                <div className={`flex items-center justify-center w-10 h-10 mb-2 rounded-full ${step >= 3 ? 'bg-brand-blue text-white' : 'bg-gray-200'}`}>
                  3
                </div>
                <span>Payment</span>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit}>
            {/* Step 1: Personal Information */}
            {step === 1 && (
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h2 className="mb-6 text-xl font-semibold">Personal Information</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input 
                      id="firstName" 
                      name="firstName" 
                      value={formData.firstName} 
                      onChange={handleChange} 
                      className="mt-1" 
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input 
                      id="lastName" 
                      name="lastName" 
                      value={formData.lastName} 
                      onChange={handleChange} 
                      className="mt-1" 
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
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
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      type="tel" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      className="mt-1" 
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="password">Password *</Label>
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
                  <div>
                    <Label htmlFor="confirmPassword">Confirm Password *</Label>
                    <Input 
                      id="confirmPassword" 
                      name="confirmPassword" 
                      type="password" 
                      value={formData.confirmPassword} 
                      onChange={handleChange} 
                      className="mt-1" 
                      required 
                    />
                  </div>
                </div>
              </div>
            )}
            
            {/* Step 2: Address */}
            {step === 2 && (
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h2 className="mb-6 text-xl font-semibold">Home Address</h2>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <Label htmlFor="address">Street Address *</Label>
                    <Input 
                      id="address" 
                      name="address" 
                      value={formData.address} 
                      onChange={handleChange} 
                      className="mt-1" 
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="unit">Apartment/Unit (Optional)</Label>
                    <Input 
                      id="unit" 
                      name="unit" 
                      value={formData.unit} 
                      onChange={handleChange} 
                      className="mt-1" 
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input 
                        id="city" 
                        name="city" 
                        value={formData.city} 
                        onChange={handleChange} 
                        className="mt-1" 
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State *</Label>
                      <Select 
                        value={formData.state} 
                        onValueChange={(value) => handleSelectChange('state', value)}
                      >
                        <SelectTrigger id="state" className="mt-1">
                          <SelectValue placeholder="Select a state" />
                        </SelectTrigger>
                        <SelectContent>
                          {states.map((state) => (
                            <SelectItem key={state} value={state}>
                              {state}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="zip">ZIP Code *</Label>
                      <Input 
                        id="zip" 
                        name="zip" 
                        value={formData.zip} 
                        onChange={handleChange} 
                        className="mt-1" 
                        required 
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Step 3: Payment Method */}
            {step === 3 && (
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h2 className="mb-6 text-xl font-semibold">Add Payment Method</h2>
                
                <div className="mb-6">
                  <p className="mb-4 text-sm text-gray-600">
                    You can add a payment method now or later when you book a service.
                  </p>
                  
                  <div className="p-4 mb-6 bg-gray-50 rounded-md flex flex-col gap-4">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div>
                        <Label htmlFor="cardName">Cardholder Name</Label>
                        <Input
                          id="cardName"
                          name="cardName"
                          className="mt-1"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input
                          id="cardNumber"
                          name="cardNumber"
                          className="mt-1"
                          placeholder="•••• •••• •••• ••••"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div>
                        <Label htmlFor="expDate">Expiration Date</Label>
                        <Input
                          id="expDate"
                          name="expDate"
                          className="mt-1"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input
                          id="cvv"
                          name="cvv"
                          className="mt-1"
                          placeholder="•••"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-3 mb-6 border border-gray-200 rounded-md">
                    <Button type="button" variant="outline" className="ml-auto">
                      Skip for Now
                    </Button>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-start space-x-2">
                    <Checkbox 
                      id="agreeToTerms" 
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => handleCheckboxChange('agreeToTerms', checked as boolean)}
                      className="mt-1"
                    />
                    <label htmlFor="agreeToTerms" className="text-sm cursor-pointer">
                      I agree to the <Link to="/terms" className="text-brand-blue hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-brand-blue hover:underline">Privacy Policy</Link>.
                    </label>
                  </div>
                </div>
              </div>
            )}
            
            <div className="flex justify-between mt-8">
              {step > 1 && (
                <Button type="button" variant="outline" onClick={handlePrevStep}>
                  Back
                </Button>
              )}
              
              {step < 3 ? (
                <Button type="button" className="ml-auto" onClick={handleNextStep}>
                  Next
                </Button>
              ) : (
                <Button type="submit" className="ml-auto bg-brand-orange hover:bg-brand-orange/90">
                  Create Account
                </Button>
              )}
            </div>
          </form>
          
          <div className="p-4 mt-8 text-center">
            <p className="text-gray-600">Already have an account? <Link to="/login" className="text-brand-blue hover:underline">Login</Link></p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomeownerSignup;
