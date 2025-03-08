
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SignupCallToAction from '@/components/SignupCallToAction';

const PropertyManagerSignup = () => {
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
    companyName: '',
    position: '',
    businessAddress: '',
    unit: '',
    city: '',
    state: '',
    zip: '',
    managedProperties: '',
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || 
          !formData.password || !formData.confirmPassword || !formData.companyName) {
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
      if (!formData.businessAddress || !formData.city || !formData.state || !formData.zip) {
        toast({
          title: "Missing Information",
          description: "Please fill out all business address fields.",
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
    console.log('Submitting property manager registration:', formData);
    
    // Show success message
    toast({
      title: "Registration Successful!",
      description: "Your property management account has been created. You can now manage properties and book services.",
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
            <h1 className="mb-2 text-3xl font-bold">Create Property Manager Account</h1>
            <p className="text-gray-600">Sign up to manage properties and book handyman services</p>
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
                <span>Business</span>
              </div>
              <div className={`h-1 flex-1 mx-4 ${step >= 3 ? 'bg-brand-blue' : 'bg-gray-200'}`}></div>
              <div className={`flex flex-col items-center ${step >= 3 ? 'text-brand-blue' : 'text-gray-400'}`}>
                <div className={`flex items-center justify-center w-10 h-10 mb-2 rounded-full ${step >= 3 ? 'bg-brand-blue text-white' : 'bg-gray-200'}`}>
                  3
                </div>
                <span>Properties</span>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit}>
            {/* Step 1: Personal & Company Information */}
            {step === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle>Personal & Company Information</CardTitle>
                  <CardDescription>Enter your details and company information</CardDescription>
                </CardHeader>
                <CardContent>
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
                      <Label htmlFor="companyName">Company Name *</Label>
                      <Input 
                        id="companyName" 
                        name="companyName" 
                        value={formData.companyName} 
                        onChange={handleChange} 
                        className="mt-1" 
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="position">Your Position</Label>
                      <Input 
                        id="position" 
                        name="position" 
                        value={formData.position} 
                        onChange={handleChange} 
                        className="mt-1" 
                        placeholder="e.g. Property Manager, Owner"
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
                </CardContent>
              </Card>
            )}
            
            {/* Step 2: Business Address */}
            {step === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle>Business Address</CardTitle>
                  <CardDescription>Enter your business location details</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <Label htmlFor="businessAddress">Street Address *</Label>
                      <Input 
                        id="businessAddress" 
                        name="businessAddress" 
                        value={formData.businessAddress} 
                        onChange={handleChange} 
                        className="mt-1" 
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="unit">Suite/Unit (Optional)</Label>
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
                </CardContent>
              </Card>
            )}
            
            {/* Step 3: Property Management */}
            {step === 3 && (
              <Card>
                <CardHeader>
                  <CardTitle>Property Portfolio</CardTitle>
                  <CardDescription>Tell us about the properties you manage</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="managedProperties">Briefly describe the properties you manage</Label>
                      <Textarea
                        id="managedProperties"
                        name="managedProperties"
                        value={formData.managedProperties}
                        onChange={handleChange}
                        className="mt-1"
                        placeholder="e.g. 15 residential units across 3 apartment buildings in downtown area, 2 commercial properties..."
                        rows={4}
                      />
                    </div>
                    
                    <div className="p-4 bg-blue-50 rounded-md">
                      <h3 className="mb-2 text-sm font-semibold text-blue-700">Benefits of Property Manager Account</h3>
                      <ul className="pl-5 text-sm text-blue-700 list-disc">
                        <li>Manage maintenance requests across multiple properties</li>
                        <li>Schedule recurring maintenance and inspections</li>
                        <li>Access discounted rates on handyman services</li>
                        <li>Generate detailed maintenance reports for property owners</li>
                        <li>Dedicated account manager and priority support</li>
                      </ul>
                    </div>
                    
                    <div className="flex items-start space-x-2 mt-4">
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
                </CardContent>
              </Card>
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
                  Create Property Manager Account
                </Button>
              )}
            </div>
          </form>
          
          <div className="p-4 mt-8 text-center">
            <p className="text-gray-600">Already have an account? <Link to="/login" className="text-brand-blue hover:underline">Login</Link></p>
          </div>
        </div>
      </div>
      <SignupCallToAction />
      <Footer />
    </>
  );
};

export default PropertyManagerSignup;
