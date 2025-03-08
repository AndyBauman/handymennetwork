
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SignupCallToAction from "@/components/SignupCallToAction";

const HowItWorks = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto py-12 px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-3">How It Works</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Below is an overview of how Handymen Network operates for homeowners, property managers, and the handyman professionals who power our platform. We use straightforward, transparent pricing to make every step clear and hassle-free.
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>For Homeowners</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <ol className="space-y-4 list-decimal pl-6">
                <li>
                  <p className="font-semibold">Submit Your Request</p>
                  <p>
                    Provide details about your project (e.g., plumbing, painting, electrical), your location, and any specific requirements. Our system has set pricing for standard services, so you'll know the cost before confirming the job.
                  </p>
                </li>
                <li>
                  <p className="font-semibold">Choose Your Professional</p>
                  <p>
                    We match you with vetted, background-checked service providers in your area. Review their profiles, past work, and customer ratings to find the right fit for your needs.
                  </p>
                </li>
                <li>
                  <p className="font-semibold">Schedule the Work</p>
                  <p>
                    Coordinate a convenient date and time directly with your chosen professional. You'll receive a clear breakdown of the agreed-upon tasks and the total cost upfront.
                  </p>
                </li>
                <li>
                  <p className="font-semibold">Project Completion & Payment</p>
                  <p>
                    Once the job is finished to your satisfaction, you'll pay securely using our platform or the method outlined during booking. No surprises—just straightforward pricing.
                  </p>
                </li>
                <li>
                  <p className="font-semibold">Review & Feedback</p>
                  <p>
                    Help us maintain a high-quality network by rating and reviewing your experience. Your feedback ensures that only reliable, top-rated professionals remain on the platform.
                  </p>
                </li>
              </ol>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>For Property Managers</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <ol className="space-y-4 list-decimal pl-6">
                <li>
                  <p className="font-semibold">Create a Property Profile</p>
                  <p>
                    Sign up or log in to add properties under your account. Include essential details like address, property type, and any ongoing maintenance needs.
                  </p>
                </li>
                <li>
                  <p className="font-semibold">Submit Maintenance Requests</p>
                  <p>
                    For each repair or service, select the appropriate category from our list of standardized options. Attach photos or documents if needed, and confirm the fixed price for each task.
                  </p>
                </li>
                <li>
                  <p className="font-semibold">Coordinate & Track Projects</p>
                  <p>
                    Our platform lets you schedule tasks, track progress, and communicate directly with the assigned professional—all from a single, user-friendly dashboard.
                  </p>
                </li>
                <li>
                  <p className="font-semibold">Approve Work & Make Payment</p>
                  <p>
                    After confirming the work is complete, submit payment securely. Handymen Network keeps a record of every job, helping you stay organized across multiple properties.
                  </p>
                </li>
                <li>
                  <p className="font-semibold">Store Records & Leave Feedback</p>
                  <p>
                    Keep a digital history of completed jobs, costs, and receipts for easy reference. Rate your professional to inform others and maintain the high standards of our community.
                  </p>
                </li>
              </ol>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>For Handyman Professionals</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <ol className="space-y-4 list-decimal pl-6">
                <li>
                  <p className="font-semibold">Join Our Network</p>
                  <p>
                    Complete a simple registration process, including any required background checks and credential verifications. Once approved, you'll gain access to job opportunities in your area.
                  </p>
                </li>
                <li>
                  <p className="font-semibold">Browse & Accept Jobs</p>
                  <p>
                    We post requests from homeowners and property managers with standardized pricing. Filter jobs by location or specialty, then accept the ones that fit your schedule and skill set.
                  </p>
                </li>
                <li>
                  <p className="font-semibold">Communicate & Schedule</p>
                  <p>
                    Connect with the client directly to finalize details like appointment time or any special considerations. Make sure everyone is on the same page before starting.
                  </p>
                </li>
                <li>
                  <p className="font-semibold">Complete the Work</p>
                  <p>
                    Perform the service according to the outlined scope. Should any issues or changes arise, promptly communicate with the client through our messaging system.
                  </p>
                </li>
                <li>
                  <p className="font-semibold">Get Paid & Earn Reviews</p>
                  <p>
                    Once the job is done, receive secure payment as outlined in the initial request. Encourage clients to leave a review, boosting your credibility and helping you attract more business.
                  </p>
                </li>
              </ol>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Whether you're a homeowner looking for a quick fix, a property manager juggling multiple sites, or a seasoned handyman seeking consistent work, Handymen Network's transparent pricing and intuitive platform keep the process simple and reliable for everyone.
            </p>
          </div>
        </div>
      </main>
      <SignupCallToAction />
      <Footer />
    </div>
  );
};

export default HowItWorks;
