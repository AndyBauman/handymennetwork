
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Careers = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <div className="container max-w-4xl px-4 py-12 mx-auto">
          <h1 className="mb-8 text-4xl font-bold text-center">Careers at Handymen Network</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed">
              Join our team and be part of a growing platform that connects homeowners with skilled professionals. 
              We're always looking for talented individuals who are passionate about improving the home service industry.
            </p>
            
            <h2 className="mt-10 mb-4 text-2xl font-bold">Why Work With Us</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong>Innovation:</strong> Be part of a team that's reimagining how home services work.</li>
              <li><strong>Growth:</strong> Develop your skills in a fast-paced, supportive environment.</li>
              <li><strong>Impact:</strong> See the direct results of your work in helping homeowners and service providers.</li>
              <li><strong>Culture:</strong> Join a diverse, inclusive workplace that values collaboration and creativity.</li>
            </ul>
            
            <h2 className="mt-10 mb-4 text-2xl font-bold">Open Positions</h2>
            <p>
              We currently don't have any open positions, but we're always interested in meeting talented people. 
              Send your resume to careers@handymennetwork.com and we'll keep you in mind for future opportunities.
            </p>
            
            <div className="flex flex-col items-center justify-center mt-12 space-y-4">
              <p className="text-xl font-semibold text-center">Have questions about working with us?</p>
              <Button size="lg" className="mt-2" asChild>
                <Link to="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
