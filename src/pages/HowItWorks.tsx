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
              A step-by-step guide to using the Handymen Network platform
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
                    Describe your project in detail. Include the type of service (e.g., plumbing, 
                    painting, electrical), location, and any special requirements. The more specific 
                    you are, the more accurate your quotes will be.
                  </p>
                </li>
                <li>
                  <p className="font-semibold">Receive & Compare Quotes</p>
                  <p>
                    Vetted service professionals review your request and provide estimates. Compare 
                    quotes, check profiles, and read customer reviews to select the best fit for your needs.
                  </p>
                </li>
                <li>
                  <p className="font-semibold">Schedule the Work</p>
                  <p>
                    Coordinate directly with the professional to confirm the date, time, and scope of the 
                    project. You'll receive a clear timeline and cost breakdown before any work begins.
                  </p>
                </li>
                <li>
                  <p className="font-semibold">Completion & Payment</p>
                  <p>
                    Once the job is finished to your satisfaction, pay securely according to the agreed-upon 
                    terms (either via our platform or directly to the handyman, as specified in the quote).
                  </p>
                </li>
                <li>
                  <p className="font-semibold">Review & Feedback</p>
                  <p>
                    Share your experience by leaving a review. Your feedback helps maintain a network of 
                    top-quality, reliable professionals.
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
                    Sign up or log in to add details about your property (or multiple properties). 
                    Provide a clear description of the work required—this might include regular maintenance 
                    tasks, repairs, or renovations.
                  </p>
                </li>
                <li>
                  <p className="font-semibold">Issue Maintenance Requests</p>
                  <p>
                    Whether it's a minor fix or a major project, submit service requests with deadlines, 
                    budgets, and any specifications. Add photos or documents for clarity.
                  </p>
                </li>
                <li>
                  <p className="font-semibold">Get Matched & Compare Options</p>
                  <p>
                    Handymen Network will match you with multiple qualified professionals. Evaluate 
                    their quotes, reviews, and availability to ensure you choose the best service provider for each task.
                  </p>
                </li>
                <li>
                  <p className="font-semibold">Manage Projects Effortlessly</p>
                  <p>
                    Stay organized with integrated tracking tools. Monitor progress, schedule appointments, 
                    and approve any change orders—all in one place.
                  </p>
                </li>
                <li>
                  <p className="font-semibold">Finalize & Keep Records</p>
                  <p>
                    When the job is done, verify completion and submit payment through your preferred method. 
                    Use our platform to store project history, receipts, and documentation for future reference.
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
                    Complete a simple registration process, including background and credential checks, 
                    to become an approved professional in our system.
                  </p>
                </li>
                <li>
                  <p className="font-semibold">View Relevant Job Leads</p>
                  <p>
                    Once onboard, you'll gain access to local projects posted by homeowners and property managers. 
                    Filter by location, project type, or budget to find leads that match your expertise.
                  </p>
                </li>
                <li>
                  <p className="font-semibold">Send Quotes & Proposals</p>
                  <p>
                    Submit your estimate with clear pricing, project timelines, and any additional information 
                    the client might need. Your profile, reviews, and work history help you stand out.
                  </p>
                </li>
                <li>
                  <p className="font-semibold">Confirm & Complete the Work</p>
                  <p>
                    After the client accepts your quote, coordinate directly with them to schedule the job. 
                    Make sure to communicate any changes in scope or pricing before starting.
                  </p>
                </li>
                <li>
                  <p className="font-semibold">Payment & Feedback</p>
                  <p>
                    Receive payment for completed work as outlined in the original quote or contract. 
                    Encourage clients to leave a review, which improves your visibility and credibility for future projects.
                  </p>
                </li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </main>
      <SignupCallToAction />
      <Footer />
    </div>
  );
};

export default HowItWorks;
