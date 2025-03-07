
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <div className="container max-w-4xl px-4 py-12 mx-auto">
          <h1 className="mb-8 text-4xl font-bold text-center">About Us</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed">
              Welcome to your go-to platform for seamless, same-day handyman services! Inspired by the simplicity and convenience of apps like Uber and Instacart, we've created an innovative way to instantly connect homeowners and property management companies with qualified, nearby handymen—exactly when you need them most.
            </p>
            
            <h2 className="mt-10 mb-4 text-2xl font-bold">How It Works</h2>
            <p>
              Our platform eliminates the stress, guesswork, and delays often associated with home maintenance and repairs. Whether you need plumbing, electrical, painting, carpentry, drywall repair, flooring, tile installation, or any other household service, we've got you covered.
            </p>
            <p>
              Just select your project, instantly see clear, upfront market-based pricing, and confirm. Our smart matching algorithm immediately pairs your job with the nearest available and skilled handyman, who can start working the same day.
            </p>
            
            <h2 className="mt-10 mb-4 text-2xl font-bold">Transparent Pricing</h2>
            <p>
              We believe in absolute transparency. Every task has clear, fixed market pricing—no hidden fees, no negotiations. You'll know exactly what you're paying upfront, ensuring peace of mind and confidence in every job booked.
            </p>
            
            <h2 className="mt-10 mb-4 text-2xl font-bold">Who We Serve</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong>Homeowners</strong> who need quick, reliable home repairs or improvements.</li>
              <li><strong>Property Management Companies</strong> looking for streamlined scheduling, invoicing, and job management for multiple properties.</li>
            </ul>
            
            <h2 className="mt-10 mb-4 text-2xl font-bold">Quality & Trust</h2>
            <p>
              We carefully vet every handyman, verifying their qualifications, licenses, and background. After each job, homeowners provide ratings and reviews to maintain consistently high-quality service and accountability.
            </p>
            
            <h2 className="mt-10 mb-4 text-2xl font-bold">Our Commitment</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong>Instant Service:</strong> Matching available handymen within minutes.</li>
              <li><strong>Reliable Results:</strong> High-quality workmanship guaranteed.</li>
              <li><strong>Convenience:</strong> Easy online booking and real-time job tracking.</li>
              <li><strong>Fairness:</strong> Transparent, standardized pricing with secure in-app payments.</li>
            </ul>
            
            <p className="mt-8 text-lg">
              We're here to simplify home improvement, providing unmatched convenience and trustworthiness—just a click away.
            </p>
            
            <div className="flex flex-col items-center justify-center mt-12 space-y-4">
              <p className="text-xl font-semibold text-center">Ready to experience home maintenance made easy?</p>
              <Button size="lg" className="mt-2" asChild>
                <Link to="/book">Book Your First Service Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
