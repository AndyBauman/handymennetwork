
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto py-12 px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-3">Terms of Service</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Understanding your rights and responsibilities
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Terms of Service</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                Welcome to Handymen Network. These Terms of Service ("Terms") govern your access to and use of our website, mobile applications (if applicable), and any services or content provided by Handymen Network (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you must discontinue use of our Services.
              </p>

              <h3 className="text-xl font-semibold mt-6">1. Use of Services</h3>
              <p className="font-semibold">Eligibility:</p>
              <ul className="space-y-2 list-disc pl-6">
                <li>By using our Services, you confirm that you are at least 18 years old and legally capable of entering into binding contracts.</li>
              </ul>

              <p className="font-semibold mt-4">Account Registration:</p>
              <ul className="space-y-2 list-disc pl-6">
                <li>Certain features may require creating an account. You agree to provide accurate, current, and complete information during registration. You are responsible for safeguarding your login credentials and for all activities under your account.</li>
              </ul>

              <p className="font-semibold mt-4">Service Description:</p>
              <ul className="space-y-2 list-disc pl-6">
                <li>Handymen Network provides a platform connecting clients with service professionals. While we strive to offer a convenient and efficient process, actual work is performed by independent contractors who maintain their own insurance and licenses.</li>
              </ul>

              <p className="font-semibold mt-4">Prohibited Uses:</p>
              <ul className="space-y-2 list-disc pl-6">
                <li>You agree not to misuse our Services. Prohibited uses include, but are not limited to, submitting false or misleading information, infringing on intellectual property rights, and engaging in unlawful, fraudulent, or abusive activities.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6">2. User Responsibilities</h3>
              <p className="font-semibold">Accurate Information:</p>
              <ul className="space-y-2 list-disc pl-6">
                <li>You are responsible for providing accurate details regarding project scope, site conditions, and any other relevant information.</li>
              </ul>

              <p className="font-semibold mt-4">Compliance with Laws:</p>
              <ul className="space-y-2 list-disc pl-6">
                <li>You agree to comply with all local, state, and federal regulations when using our Services, including obtaining any necessary permits or permissions.</li>
              </ul>

              <p className="font-semibold mt-4">Interactions with Service Providers:</p>
              <ul className="space-y-2 list-disc pl-6">
                <li>Any contract for services is strictly between you and the service provider. Handymen Network is not a party to this contract and bears no responsibility for the actions or omissions of the service provider.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6">3. Payments and Fees</h3>
              <p className="font-semibold">Quotes and Estimates:</p>
              <ul className="space-y-2 list-disc pl-6">
                <li>All quotes or estimates provided via Handymen Network are based on information you supply. Actual costs may differ if project conditions change.</li>
              </ul>

              <p className="font-semibold mt-4">Payment Processing:</p>
              <ul className="space-y-2 list-disc pl-6">
                <li>Payment is typically made directly to the service provider, or through our designated third-party payment processor. Handymen Network does not store credit card details.</li>
              </ul>

              <p className="font-semibold mt-4">Refunds:</p>
              <ul className="space-y-2 list-disc pl-6">
                <li>Refunds, if any, are subject to the terms and conditions of the service provider with whom you contract. Handymen Network will assist in dispute resolution where feasible, but cannot guarantee refunds.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6">4. Intellectual Property Rights</h3>
              <p className="font-semibold">Ownership:</p>
              <ul className="space-y-2 list-disc pl-6">
                <li>All trademarks, logos, and content on our website and within our Services are owned by Handymen Network or licensed to us, unless otherwise indicated.</li>
              </ul>

              <p className="font-semibold mt-4">Restrictions:</p>
              <ul className="space-y-2 list-disc pl-6">
                <li>You may not copy, reproduce, distribute, or create derivative works of our content without explicit written permission from Handymen Network.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6">5. Disclaimers</h3>
              <p className="font-semibold">No Warranty:</p>
              <ul className="space-y-2 list-disc pl-6">
                <li><strong>Services "As Is":</strong> Handymen Network provides its Services on an "as is" and "as available" basis. We make no warranties, express or implied, regarding the reliability, accuracy, or suitability of the Services.</li>
                <li><strong>Third-Party Providers:</strong> Handymen Network is not responsible for the quality of work performed by third-party service professionals. We do not guarantee their performance, nor do we endorse any specific service provider.</li>
              </ul>

              <p className="font-semibold mt-4">Liability Limitation:</p>
              <ul className="space-y-2 list-disc pl-6">
                <li>Handymen Network shall not be liable for any direct, indirect, incidental, or consequential damages arising out of or related to your use of our Services or your relationship with service providers, to the fullest extent permitted by law.</li>
              </ul>

              <p className="font-semibold mt-4">Indemnification:</p>
              <ul className="space-y-2 list-disc pl-6">
                <li>You agree to defend, indemnify, and hold harmless Handymen Network, its affiliates, and their respective officers, directors, employees, and agents from and against any claims, liabilities, damages, judgments, or expenses arising out of your use of the Services or breach of these Terms.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6">6. Termination</h3>
              <p className="font-semibold">Right to Suspend or Terminate:</p>
              <ul className="space-y-2 list-disc pl-6">
                <li>Handymen Network may, at its sole discretion, suspend or terminate your account and/or access to the Services for any reason, including non-compliance with these Terms.</li>
              </ul>

              <p className="font-semibold mt-4">Effect of Termination:</p>
              <ul className="space-y-2 list-disc pl-6">
                <li>Upon termination, your right to use our Services ceases immediately. You remain responsible for any outstanding obligations incurred prior to termination.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6">7. Dispute Resolution</h3>
              <p className="font-semibold">Negotiation:</p>
              <ul className="space-y-2 list-disc pl-6">
                <li>In the event of a dispute between you and a service provider, you agree to attempt resolving the issue directly.</li>
              </ul>

              <p className="font-semibold mt-4">Mediation/Arbitration:</p>
              <ul className="space-y-2 list-disc pl-6">
                <li>If a dispute cannot be resolved through negotiation, you or the service provider may elect to proceed with mediation or binding arbitration, subject to the terms and conditions set by the service provider or as otherwise required by law.</li>
              </ul>

              <p className="font-semibold mt-4">Governing Law:</p>
              <ul className="space-y-2 list-disc pl-6">
                <li>These Terms are governed by the laws of the state in which Handymen Network is headquartered, without regard to conflict of law principles.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6">8. Changes to the Terms</h3>
              <p>
                We may modify these Terms at any time. When changes occur, we will post the updated Terms with a new "Last Updated" date. Your continued use of our Services after any revisions means you agree to be bound by them.
              </p>

              <h3 className="text-xl font-semibold mt-6">9. Contact Us</h3>
              <p>
                If you have questions or concerns regarding these Terms of Service, please contact us at:
              </p>
              <ul className="space-y-2 list-disc pl-6">
                <li><strong>Phone:</strong> (360) 800-0009</li>
                <li><strong>Email:</strong> support@handymennetwork.com</li>
              </ul>
              
              <p className="mt-4">
                By using our Services, you acknowledge that you have read, understood, and agreed to these Terms of Service. Thank you for choosing Handymen Network. We appreciate your business and look forward to serving your needs.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
