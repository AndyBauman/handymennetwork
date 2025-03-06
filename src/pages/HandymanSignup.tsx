
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import { Wrench, CheckCircle, FileCheck, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const HandymanSignup = () => {
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
    city: '',
    state: '',
    zip: '',
    skills: [] as string[],
    availableDays: [] as string[],
    hasLicense: false,
    hasInsurance: false,
    agreeToTerms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSkillChange = (skill: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      skills: checked 
        ? [...prev.skills, skill]
        : prev.skills.filter(s => s !== skill)
    }));
  };

  const handleDayChange = (day: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      availableDays: checked 
        ? [...prev.availableDays, day]
        : prev.availableDays.filter(d => d !== day)
    }));
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
    } else if (step === 3) {
      // Validation for step 3
      if (formData.skills.length === 0) {
        toast({
          title: "Missing Skills",
          description: "Please select at least one skill.",
          variant: "destructive"
        });
        return;
      }
      
      if (formData.availableDays.length === 0) {
        toast({
          title: "Missing Availability",
          description: "Please select at least one day of availability.",
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
    console.log('Submitting handyman registration:', formData);
    
    // Show success message
    toast({
      title: "Registration Submitted!",
      description: "Your application has been submitted for review. We'll email you once your account is approved.",
    });
    
    // Redirect to success page or dashboard
    setTimeout(() => {
      navigate('/handyman-dashboard');
    }, 2000);
  };

  return (
    <>
      <Navbar />
      <div className="container px-4 py-12 mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-3xl font-bold">Join Our Handyman Network</h1>
            <p className="text-gray-600">Complete your profile to start receiving job requests</p>
          </div>
          
          {/* Progress Steps */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <div className={`flex flex-col items-center ${step >= 1 ? 'text-brand-blue' : 'text-gray-400'}`}>
                <div className={`flex items-center justify-center w-10 h-10 mb-2 rounded-full ${step >= 1 ? 'bg-brand-blue text-white' : 'bg-gray-200'}`}>
                  1
                </div>
                <span>Personal Info</span>
              </div>
              <div className={`h-1 flex-1 mx-4 ${step >= 2 ? 'bg-brand-blue' : 'bg-gray-200'}`}></div>
              <div className={`flex flex-col items-center ${step >= 2 ? 'text-brand-blue' : 'text-gray-400'}`}>
                <div className={`flex items-center justify-center w-10 h-10 mb-2 rounded-full ${step >= 2 ? 'bg-brand-blue text-white' : 'bg-gray-200'}`}>
                  2
                </div>
                <span>Location</span>
              </div>
              <div className={`h-1 flex-1 mx-4 ${step >= 3 ? 'bg-brand-blue' : 'bg-gray-200'}`}></div>
              <div className={`flex flex-col items-center ${step >= 3 ? 'text-brand-blue' : 'text-gray-400'}`}>
                <div className={`flex items-center justify-center w-10 h-10 mb-2 rounded-full ${step >= 3 ? 'bg-brand-blue text-white' : 'bg-gray-200'}`}>
                  3
                </div>
                <span>Skills</span>
              </div>
              <div className={`h-1 flex-1 mx-4 ${step >= 4 ? 'bg-brand-blue' : 'bg-gray-200'}`}></div>
              <div className={`flex flex-col items-center ${step >= 4 ? 'text-brand-blue' : 'text-gray-400'}`}>
                <div className={`flex items-center justify-center w-10 h-10 mb-2 rounded-full ${step >= 4 ? 'bg-brand-blue text-white' : 'bg-gray-200'}`}>
                  4
                </div>
                <span>Verification</span>
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
            
            {/* Step 2: Location */}
            {step === 2 && (
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h2 className="mb-6 text-xl font-semibold">Service Area & Location</h2>
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
                      <Input 
                        id="state" 
                        name="state" 
                        value={formData.state} 
                        onChange={handleChange} 
                        className="mt-1" 
                        required 
                      />
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
            
            {/* Step 3: Skills & Availability */}
            {step === 3 && (
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h2 className="mb-6 text-xl font-semibold">Skills & Availability</h2>
                
                <div className="mb-6">
                  <h3 className="mb-3 text-lg font-medium">Select Your Skills *</h3>
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                    {['Plumbing', 'Electrical', 'Carpentry', 'Painting', 'Flooring', 'Tiling', 'Appliance Repair', 'HVAC', 'Drywall', 'Landscaping', 'Furniture Assembly', 'TV Mounting'].map((skill) => (
                      <div key={skill} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`skill-${skill}`} 
                          checked={formData.skills.includes(skill)}
                          onCheckedChange={(checked) => handleSkillChange(skill, checked as boolean)}
                        />
                        <label htmlFor={`skill-${skill}`} className="text-sm font-medium leading-none cursor-pointer">
                          {skill}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="mb-3 text-lg font-medium">Availability *</h3>
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                      <div key={day} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`day-${day}`}
                          checked={formData.availableDays.includes(day)}
                          onCheckedChange={(checked) => handleDayChange(day, checked as boolean)}
                        />
                        <label htmlFor={`day-${day}`} className="text-sm font-medium leading-none cursor-pointer">
                          {day}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {/* Step 4: Verification */}
            {step === 4 && (
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h2 className="mb-6 text-xl font-semibold">Verification & Agreement</h2>
                
                <div className="mb-6">
                  <h3 className="mb-3 text-lg font-medium">Certifications & Documents</h3>
                  <p className="mb-4 text-sm text-gray-600">We require verification of your qualifications to ensure the quality of our network.</p>
                  
                  <div className="p-4 mb-4 space-y-4 border rounded-md">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="hasLicense" 
                        checked={formData.hasLicense}
                        onCheckedChange={(checked) => handleCheckboxChange('hasLicense', checked as boolean)}
                      />
                      <label htmlFor="hasLicense" className="text-sm font-medium leading-none cursor-pointer">
                        I have a valid professional/trade license (if applicable for my services)
                      </label>
                    </div>
                    
                    <div className="pl-6">
                      <Label htmlFor="licenseUpload" className="block mb-2 text-sm">Upload License (Optional)</Label>
                      <Input id="licenseUpload" type="file" className="cursor-pointer" />
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="hasInsurance" 
                        checked={formData.hasInsurance}
                        onCheckedChange={(checked) => handleCheckboxChange('hasInsurance', checked as boolean)}
                      />
                      <label htmlFor="hasInsurance" className="text-sm font-medium leading-none cursor-pointer">
                        I have liability insurance coverage
                      </label>
                    </div>
                    
                    <div className="pl-6">
                      <Label htmlFor="insuranceUpload" className="block mb-2 text-sm">Upload Insurance Proof (Optional)</Label>
                      <Input id="insuranceUpload" type="file" className="cursor-pointer" />
                    </div>
                    
                    <div>
                      <Label htmlFor="idUpload" className="block mb-2 text-sm">Upload Photo ID (Required)</Label>
                      <Input id="idUpload" type="file" className="cursor-pointer" required />
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <div className="flex items-start space-x-2">
                    <Checkbox 
                      id="agreeToTerms" 
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => handleCheckboxChange('agreeToTerms', checked as boolean)}
                      className="mt-1"
                    />
                    <label htmlFor="agreeToTerms" className="text-sm cursor-pointer">
                      I agree to the <Link to="/terms" className="text-brand-blue hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-brand-blue hover:underline">Privacy Policy</Link>. I understand that I am an independent contractor, not an employee of Handymen Network.
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
              
              {step < 4 ? (
                <Button type="button" className="ml-auto" onClick={handleNextStep}>
                  Next
                </Button>
              ) : (
                <Button type="submit" className="ml-auto bg-brand-orange hover:bg-brand-orange/90">
                  Submit Application
                </Button>
              )}
            </div>
          </form>
          
          <div className="p-4 mt-8 text-center">
            <p className="text-gray-600">Already have an account? <Link to="/handyman-login" className="text-brand-blue hover:underline">Login</Link></p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HandymanSignup;
