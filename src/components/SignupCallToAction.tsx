
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SignupCallToAction = () => {
  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="mb-6 max-w-3xl mx-auto text-gray-600">
          Join Handymen Network today to experience hassle-free home services and maintenance.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link to="/signup">Sign Up as Homeowner</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/handyman-signup">Join as Handyman</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignupCallToAction;
