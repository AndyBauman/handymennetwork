
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
import { Building, User, Mail, Phone, Globe, Briefcase, Key, Home, FileText } from 'lucide-react';

const PropertyManagerSignup = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Company Details
    companyName: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    companyPhone: '',
    website: '',
    
    // Contact Person
    fullName: '',
    jobTitle: '',
    email: '',
    contactPhone: '',
    
    // Account Setup
    username: '',
    password: '',
    confirmPassword: '',
    
    // Properties Overview
    propertyCount: '',
    propertyTypes: [],
    
    // Terms
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
  
  // Common property types
  const propertyTypeOptions = [
    "Residential Apartments",
    "Single-Family Homes",
    "Condominiums",
    "Commercial Buildings",
    "Office Spaces",
    "Retail Spaces",
    "Industrial Properties",
    "Mixed-Use Properties",
    "Student Housing",
    "Senior Living",
    "Other"
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

  const handlePropertyTypeChange = (type: string, checked: boolean) => {
    setFormData(prev => {
      if (checked) {
        return { ...prev, propertyTypes: [...prev.propertyTypes, type] };
      } else {
        return { 
          ...prev, 
          propertyTypes: prev.propertyTypes.filter(t => t !== type) 
        };
      }
    });
  };

  const handleNextStep = () => {
    if (step === 1) {
      // Validation for step 1 - Company Details
      if (!formData.companyName || !formData.streetAddress || !formData.city || 
          !formData.state || !formData.zipCode || !formData.companyPhone) {
        toast({
          title: "Missing Information",
          description: "Please fill out all required company details fields.",
          variant: "destructive"
        });
        return;
      }
    } else if (step === 2) {
      // Validation for step 2 - Contact Person
      if (!formData.fullName || !formData.jobTitle || !formData.email || !formData.contactPhone) {
        toast({
          title: "Missing Information",
          description: "Please fill out all required contact person fields.",
          variant: "destructive"
        });
        return;
      }
      
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        toast({
          title: "Invalid Email",
          description: "Please enter a valid email address.",
          variant: "destructive"
        });
        return;
      }
    } else if (step === 3) {
      // Validation for step 3 - Account Setup
      if (!formData.username || !formData.password || !formData.confirmPassword) {
        toast({
          title: "Missing Information",
          description: "Please fill out all required account setup fields.",
          variant: "destructive"
        });
        return;
      }
      
      // Password validation
      if (formData.password.length < 8) {
        toast({
          title: "Weak Password",
          description: "Password must be at least 8 characters long.",
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
      description: "Your property management account has been created. An email confirmation has been sent with a link to verify your account.",
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
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-3xl font-bold">Property Management Sign-Up</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Create and manage multiple properties with ease. Fill out the form below to join Handymen Network and start streamlining your maintenance and repair projects.
            </p>
          </div>
          
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className={`flex flex-col items-center ${step >= 1 ? 'text-brand-blue' : 'text-gray-400'}`}>
                <div className={`flex items-center justify-center w-10 h-10 mb-2 rounded-full ${step >= 1 ? 'bg-brand-blue text-white' : 'bg-gray-200'}`}>
                  1
                </div>
                <span className="text-xs md:text-sm">Company</span>
              </div>
              <div className={`h-1 flex-1 mx-2 ${step >= 2 ? 'bg-brand-blue' : 'bg-gray-200'}`}></div>
              <div className={`flex flex-col items-center ${step >= 2 ? 'text-brand-blue' : 'text-gray-400'}`}>
                <div className={`flex items-center justify-center w-10 h-10 mb-2 rounded-full ${step >= 2 ? 'bg-brand-blue text-white' : 'bg-gray-200'}`}>
                  2
                </div>
                <span className="text-xs md:text-sm">Contact</span>
              </div>
              <div className={`h-1 flex-1 mx-2 ${step >= 3 ? 'bg-brand-blue' : 'bg-gray-200'}`}></div>
              <div className={`flex flex-col items-center ${step >= 3 ? 'text-brand-blue' : 'text-gray-400'}`}>
                <div className={`flex items-center justify-center w-10 h-10 mb-2 rounded-full ${step >= 3 ? 'bg-brand-blue text-white' : 'bg-gray-200'}`}>
                  3
                </div>
                <span className="text-xs md:text-sm">Account</span>
              </div>
              <div className={`h-1 flex-1 mx-2 ${step >= 4 ? 'bg-brand-blue' : 'bg-gray-200'}`}></div>
              <div className={`flex flex-col items-center ${step >= 4 ? 'text-brand-blue' : 'text-gray-400'}`}>
                <div className={`flex items-center justify-center w-10 h-10 mb-2 rounded-full ${step >= 4 ? 'bg-brand-blue text-white' : 'bg-gray-200'}`}>
                  4
                </div>
                <span className="text-xs md:text-sm">Properties</span>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit}>
            {/* Step 1: Company Details */}
            {step === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="h-5 w-5" />
                    Company Details
                  </CardTitle>
                  <CardDescription>
                    Please provide your property management company information
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <Label htmlFor="companyName">Company Name *</Label>
                      <p className="text-xs text-gray-500 mb-1">Please provide the legal or common name of your property management company.</p>
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
                      <Label htmlFor="streetAddress">Company Address *</Label>
                      <p className="text-xs text-gray-500 mb-1">Primary address for billing and correspondence purposes.</p>
                      <Input 
                        id="streetAddress" 
                        name="streetAddress" 
                        value={formData.streetAddress} 
                        onChange={handleChange} 
                        className="mt-1 mb-2" 
                        placeholder="Street Address"
                        required 
                      />
                      
                      <div className="grid grid-cols-2 gap-4 mb-2">
                        <Input 
                          id="city" 
                          name="city" 
                          value={formData.city} 
                          onChange={handleChange} 
                          placeholder="City"
                          required 
                        />
                        
                        <Select 
                          value={formData.state} 
                          onValueChange={(value) => handleSelectChange('state', value)}
                        >
                          <SelectTrigger id="state">
                            <SelectValue placeholder="State" />
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
                      
                      <Input 
                        id="zipCode" 
                        name="zipCode" 
                        value={formData.zipCode} 
                        onChange={handleChange} 
                        placeholder="ZIP Code"
                        required 
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="companyPhone">Phone Number *</Label>
                      <p className="text-xs text-gray-500 mb-1">Main contact number for client and handyman inquiries.</p>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-gray-400" />
                        <Input 
                          id="companyPhone" 
                          name="companyPhone" 
                          type="tel" 
                          value={formData.companyPhone} 
                          onChange={handleChange} 
                          className="flex-1" 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="website">Website (Optional)</Label>
                      <p className="text-xs text-gray-500 mb-1">If your company has a website or property portal, please share the URL.</p>
                      <div className="flex items-center">
                        <Globe className="h-4 w-4 mr-2 text-gray-400" />
                        <Input 
                          id="website" 
                          name="website" 
                          type="url" 
                          value={formData.website} 
                          onChange={handleChange} 
                          className="flex-1" 
                          placeholder="https://yourcompany.com"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
            
            {/* Step 2: Contact Person Information */}
            {step === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Contact Person Information
                  </CardTitle>
                  <CardDescription>
                    Details of the primary individual responsible for overseeing projects
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <p className="text-xs text-gray-500 mb-1">Name of the primary individual responsible for overseeing projects.</p>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-2 text-gray-400" />
                        <Input 
                          id="fullName" 
                          name="fullName" 
                          value={formData.fullName} 
                          onChange={handleChange} 
                          className="flex-1" 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="jobTitle">Job Title/Position *</Label>
                      <p className="text-xs text-gray-500 mb-1">The role or title of the primary contact (e.g., Property Manager, Maintenance Supervisor).</p>
                      <div className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-2 text-gray-400" />
                        <Input 
                          id="jobTitle" 
                          name="jobTitle" 
                          value={formData.jobTitle} 
                          onChange={handleChange} 
                          className="flex-1" 
                          placeholder="e.g. Property Manager"
                          required 
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <p className="text-xs text-gray-500 mb-1">This will serve as the main login and the address where all system notifications will be sent.</p>
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-2 text-gray-400" />
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          value={formData.email} 
                          onChange={handleChange} 
                          className="flex-1" 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="contactPhone">Phone Number *</Label>
                      <p className="text-xs text-gray-500 mb-1">A direct line for urgent updates or inquiries.</p>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-gray-400" />
                        <Input 
                          id="contactPhone" 
                          name="contactPhone" 
                          type="tel" 
                          value={formData.contactPhone} 
                          onChange={handleChange} 
                          className="flex-1" 
                          required 
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
            
            {/* Step 3: Account Setup */}
            {step === 3 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Key className="h-5 w-5" />
                    Account Setup
                  </CardTitle>
                  <CardDescription>
                    Create your account credentials for the Handymen Network platform
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <Label htmlFor="username">Username *</Label>
                      <p className="text-xs text-gray-500 mb-1">Choose a unique username for your Handymen Network account.</p>
                      <Input 
                        id="username" 
                        name="username" 
                        value={formData.username} 
                        onChange={handleChange} 
                        className="mt-1" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="password">Password *</Label>
                      <p className="text-xs text-gray-500 mb-1">Create a strong password (minimum 8 characters).</p>
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
                      <p className="text-xs text-gray-500 mb-1">Re-enter your password to confirm.</p>
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
            
            {/* Step 4: Properties Overview */}
            {step === 4 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Home className="h-5 w-5" />
                    Properties Overview
                  </CardTitle>
                  <CardDescription>
                    Tell us about the properties you manage (Optional during sign-up, can be completed later)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="propertyCount">Number of Properties Managed</Label>
                      <p className="text-xs text-gray-500 mb-1">Indicate how many properties you currently oversee.</p>
                      <Input 
                        id="propertyCount" 
                        name="propertyCount" 
                        type="number" 
                        value={formData.propertyCount} 
                        onChange={handleChange} 
                        className="mt-1" 
                        placeholder="e.g. 10"
                      />
                    </div>
                    
                    <div>
                      <Label>Property Types</Label>
                      <p className="text-xs text-gray-500 mb-2">Select all types of properties that you manage.</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {propertyTypeOptions.map(type => (
                          <div className="flex items-start space-x-2" key={type}>
                            <Checkbox 
                              id={`type-${type}`}
                              checked={formData.propertyTypes.includes(type)}
                              onCheckedChange={(checked) => 
                                handlePropertyTypeChange(type, checked as boolean)
                              }
                            />
                            <label 
                              htmlFor={`type-${type}`}
                              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {type}
                            </label>
                          </div>
                        ))}
                      </div>
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
                    
                    <div className="flex items-start space-x-2 mt-6">
                      <Checkbox 
                        id="agreeToTerms" 
                        checked={formData.agreeToTerms}
                        onCheckedChange={(checked) => handleCheckboxChange('agreeToTerms', checked as boolean)}
                      />
                      <div className="grid gap-1.5 leading-none">
                        <label 
                          htmlFor="agreeToTerms" 
                          className="text-sm font-medium leading-none cursor-pointer flex items-center gap-1"
                        >
                          <FileText className="h-4 w-4" />
                          Service Agreement and Privacy Policy
                        </label>
                        <p className="text-xs text-muted-foreground">
                          Check the box to confirm you have read and agree to the{" "}
                          <Link to="/terms" className="text-brand-blue hover:underline">Terms of Service</Link> and{" "}
                          <Link to="/privacy" className="text-brand-blue hover:underline">Privacy Policy</Link>.
                        </p>
                      </div>
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
              
              {step < 4 ? (
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
            <p className="text-gray-600">
              Already have an account? <Link to="/login" className="text-brand-blue hover:underline">Login</Link>
            </p>
          </div>
        </div>
      </div>
      <SignupCallToAction />
      <Footer />
    </>
  );
};

export default PropertyManagerSignup;
