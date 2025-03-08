
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SignupCallToAction from "@/components/SignupCallToAction";

const FAQ = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto py-12 px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-3">Frequently Asked Questions (FAQ)</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Below you'll find answers to our most commonly asked questions, organized by category. If you have additional questions not covered here, please feel free to reach out to our team directly.
            </p>
          </div>

          <div className="grid gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>General Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What is Handymen Network?</AccordionTrigger>
                    <AccordionContent>
                      Handymen Network is a platform that connects clients—such as homeowners and property managers—with skilled handyman professionals. We streamline the process of finding qualified tradespeople, comparing quotes, and completing projects.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>How does Handymen Network ensure quality service?</AccordionTrigger>
                    <AccordionContent>
                      We vet our professionals by reviewing their credentials, experience, and feedback from prior clients. Additionally, our rating and review system helps maintain high-quality work standards.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>How do I get started?</AccordionTrigger>
                    <AccordionContent>
                      It's easy! Simply create an account, provide details about your project or services, and use our platform to post or bid on available jobs.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Does Handymen Network offer customer support?</AccordionTrigger>
                    <AccordionContent>
                      Yes. You can reach out to our support team by phone or email for help with issues like account setup, service disputes, or payment inquiries.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>Is my payment information secure?</AccordionTrigger>
                    <AccordionContent>
                      We use trusted third-party payment processors with industry-standard security measures. Handymen Network does not store sensitive payment details on its own servers.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>For Homeowners</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How do I submit a project request?</AccordionTrigger>
                    <AccordionContent>
                      Log into your Handymen Network account, click "Post a Project," and fill out the form with details such as project type, location, and desired timeframe. Include photos if available.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>What if I'm unsure about the exact scope of my project?</AccordionTrigger>
                    <AccordionContent>
                      Provide as much information as you can—our professionals can help clarify the scope and make recommendations during the initial consultation or quote stage.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Can I review the handyman's credentials and past work?</AccordionTrigger>
                    <AccordionContent>
                      Yes. Each handyman professional has a profile containing details about their skills, licenses, insurance, and customer reviews.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>What if I need to reschedule or cancel a project?</AccordionTrigger>
                    <AccordionContent>
                      Communicate directly with the handyman professional through our messaging system. Policies regarding cancellations or changes are typically outlined in your agreement or quote.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>For Property Managers</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Can I manage multiple properties under one account?</AccordionTrigger>
                    <AccordionContent>
                      Absolutely. You can create a profile for each property and easily issue or track service requests for all of them from a single dashboard.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Do you offer recurring maintenance services?</AccordionTrigger>
                    <AccordionContent>
                      Yes, you can schedule recurring tasks such as lawn care or regular inspections. Simply set up a repeat schedule or communicate directly with the handyman to arrange ongoing maintenance.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>How do I handle billing for multiple properties?</AccordionTrigger>
                    <AccordionContent>
                      Handymen Network simplifies billing by providing separate invoices for each property or consolidated billing summaries, depending on your preference.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Can I invite team members to access the same account?</AccordionTrigger>
                    <AccordionContent>
                      Yes. You can add authorized staff or colleagues to your property management account, granting them permission to create, monitor, and approve service requests.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>For Handyman Professionals</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How do I join Handymen Network?</AccordionTrigger>
                    <AccordionContent>
                      Click "Sign Up" on our website and select the "Handyman Professional" option. After filling out a brief application and providing any required documents (e.g., proof of insurance), you'll be vetted and added to our network.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>How do I receive job leads?</AccordionTrigger>
                    <AccordionContent>
                      Once your profile is live, you'll see open projects in your service area. You can filter by job type, location, or budget. You'll also receive notifications for jobs that match your skills and preferences.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>What fees does Handymen Network charge service providers?</AccordionTrigger>
                    <AccordionContent>
                      We typically charge a small fee or commission for successful job matches. The exact structure may vary depending on your region or membership plan. All fees are outlined clearly during registration.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>How can I improve my visibility or ranking?</AccordionTrigger>
                    <AccordionContent>
                      Deliver consistent, high-quality work and encourage clients to leave positive reviews. Keeping your profile up to date with photos, certifications, and testimonials also helps build trust and attract more clients.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h3 className="text-xl font-bold mb-4">Still Have Questions?</h3>
            <p className="mb-2">If you need more information or assistance, please contact our support team at:</p>
            <ul className="mb-4">
              <li><strong>Email:</strong> support@handymennetwork.com</li>
              <li><strong>Phone:</strong> (360) 800-0009</li>
            </ul>
            <p>We're here to help make your experience with Handymen Network as smooth and successful as possible!</p>
          </div>
        </div>
      </main>
      <SignupCallToAction />
      <Footer />
    </div>
  );
};

export default FAQ;
