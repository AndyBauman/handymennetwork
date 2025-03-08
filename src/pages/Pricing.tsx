
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SignupCallToAction from "@/components/SignupCallToAction";

const Pricing = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto py-12 px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-3">Pricing Policy</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fair and transparent pricing for all parties involved
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Pricing Policy</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                At Handymen Network, we are committed to ensuring that all parties—both clients and the skilled professionals in our network—are treated fairly and protected throughout every project. To maintain transparency and uphold high standards of quality and integrity, we adhere to the following pricing policy:
              </p>

              <h3 className="text-xl font-semibold mt-6">Transparent Quotes and Estimates</h3>
              <ul className="space-y-2 list-disc pl-6">
                <li><strong>Detailed Proposals:</strong> Before any work begins, clients receive a clear, itemized estimate that outlines labor, materials, and any additional costs.</li>
                <li><strong>Validity Period:</strong> Quotes are typically valid for a specified period (e.g., 30 days). After this period, material costs and other factors may change, requiring a revised estimate.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6">Scope of Work</h3>
              <ul className="space-y-2 list-disc pl-6">
                <li><strong>Defined Scope:</strong> Each project's scope of work, including timelines, deliverables, and any relevant terms, will be outlined in the initial quote or contract.</li>
                <li><strong>Additional or Expanded Work:</strong> If the client requests additional work outside the original scope, a separate estimate or "change order" will be provided and must be approved before the extra work begins.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6">Payment Terms</h3>
              <ul className="space-y-2 list-disc pl-6">
                <li><strong>Deposit Requirements:</strong> A deposit may be required to secure materials or confirm the start date. The deposit amount will be clearly stated in the quote or contract.</li>
                <li><strong>Payment Schedule:</strong> Depending on project size and duration, payments may be split into multiple milestones (e.g., deposit, progress payment, final payment). Each payment will be tied to the completion of a specific phase of work.</li>
                <li><strong>Accepted Payment Methods:</strong> We accept various payment methods (e.g., credit cards, checks, bank transfers) for the convenience of our clients. Any fees or surcharges will be clearly communicated in advance.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6">Changes and Adjustments</h3>
              <ul className="space-y-2 list-disc pl-6">
                <li><strong>Revised Estimates:</strong> Should prices of materials fluctuate unexpectedly or project requirements change, updated estimates will be discussed and agreed upon in writing.</li>
                <li><strong>Mutual Agreement:</strong> No additional costs will be incurred without prior written or electronic consent from the client.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6">Cancellations and Refunds</h3>
              <ul className="space-y-2 list-disc pl-6">
                <li><strong>Cancellation Terms:</strong> Clients may cancel a project at any time prior to its start, but deposits may be non-refundable if materials were purchased or if the handyman reserved time that could have been scheduled for other work.</li>
                <li><strong>Refund Requests:</strong> If a client believes a refund is warranted for any reason, Handymen Network will review the request on a case-by-case basis and work to find a fair resolution.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6">Dispute Resolution</h3>
              <ul className="space-y-2 list-disc pl-6">
                <li><strong>Open Communication:</strong> We encourage all parties to communicate promptly if any disagreements or issues arise.</li>
                <li><strong>Negotiation and Mediation:</strong> Handymen Network will make every reasonable effort to mediate disputes in good faith, ensuring both parties reach an agreeable solution.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6">Protection of All Parties</h3>
              <ul className="space-y-2 list-disc pl-6">
                <li><strong>Insurance and Licensing:</strong> Handymen Network requires that all professionals maintain appropriate insurance and licensing to protect both clients and providers in the event of accidents or liability issues.</li>
                <li><strong>Fair Compensation:</strong> Skilled professionals in our network receive compensation that reflects their expertise, ensuring high-quality workmanship and continued cooperation.</li>
                <li><strong>Client Satisfaction:</strong> A transparent pricing structure and clearly defined project scopes help minimize misunderstandings and increase satisfaction for everyone involved.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6">Policy Updates</h3>
              <ul className="space-y-2 list-disc pl-6">
                <li><strong>Ongoing Review:</strong> This pricing policy is subject to periodic review and updates. Any changes will be posted and communicated in a timely manner.</li>
                <li><strong>Continued Compliance:</strong> By engaging with Handymen Network, both clients and service providers agree to adhere to the most current version of this policy.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
      <SignupCallToAction />
      <Footer />
    </div>
  );
};

export default Pricing;
