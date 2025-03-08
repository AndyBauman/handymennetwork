
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto py-12 px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-3">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              How we protect and handle your personal information
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                At Handymen Network, we take your privacy seriously. This policy outlines how we collect, use, disclose, and protect your personal information. By accessing or using our website and services, you agree to the practices described below.
              </p>

              <h3 className="text-xl font-semibold mt-6">1. Information We Collect</h3>
              <p className="font-semibold">Personal Information:</p>
              <ul className="space-y-2 list-disc pl-6">
                <li><strong>Contact Details:</strong> Name, email address, phone number, and mailing address.</li>
                <li><strong>Payment Information:</strong> Credit card details or other payment methods, processed through secure third-party payment gateways.</li>
                <li><strong>Project Details:</strong> Information you provide about your home or business when requesting quotes or services.</li>
              </ul>

              <p className="font-semibold mt-4">Technical Information:</p>
              <ul className="space-y-2 list-disc pl-6">
                <li><strong>Device & Usage Data:</strong> IP address, browser type, operating system, and pages visited on our site.</li>
                <li><strong>Cookies & Tracking:</strong> Data collected through cookies and similar technologies to enhance user experience and for analytics.</li>
              </ul>

              <p className="font-semibold mt-4">Information from Third Parties:</p>
              <ul className="space-y-2 list-disc pl-6">
                <li>We may receive additional information (e.g., background checks on service providers, publicly available data) to improve our offerings and verify compliance with legal requirements.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6">2. How We Use Your Information</h3>
              <p className="font-semibold">To Provide Services:</p>
              <ul className="space-y-2 list-disc pl-6">
                <li>Process quotes, schedule appointments, and communicate project details.</li>
                <li>Facilitate payments and issue invoices.</li>
              </ul>

              <p className="font-semibold mt-4">To Improve Our Services:</p>
              <ul className="space-y-2 list-disc pl-6">
                <li>Analyze usage patterns to enhance website functionality.</li>
                <li>Conduct internal research and analytics to refine our service offerings.</li>
              </ul>

              <p className="font-semibold mt-4">To Communicate with You:</p>
              <ul className="space-y-2 list-disc pl-6">
                <li>Send updates, service confirmations, invoices, or important policy changes.</li>
                <li>Respond to inquiries and provide customer support.</li>
              </ul>

              <p className="font-semibold mt-4">For Marketing Purposes:</p>
              <ul className="space-y-2 list-disc pl-6">
                <li>Deliver promotions or offers that may be of interest.</li>
                <li>You may opt out of marketing communications at any time.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6">3. How We Share Your Information</h3>
              <p className="font-semibold">Within Handymen Network:</p>
              <ul className="space-y-2 list-disc pl-6">
                <li>Information may be shared internally among employees and departments to efficiently deliver services.</li>
              </ul>

              <p className="font-semibold mt-4">With Service Providers:</p>
              <ul className="space-y-2 list-disc pl-6">
                <li>Trusted third-party vendors (e.g., payment processors, background check providers, marketing partners) only to the extent necessary to perform tasks on our behalf.</li>
              </ul>

              <p className="font-semibold mt-4">Legal Compliance & Protection:</p>
              <ul className="space-y-2 list-disc pl-6">
                <li>We may disclose information if required by law, or in the good faith belief that such action is necessary to comply with legal obligations, protect our rights, or ensure user safety.</li>
              </ul>

              <p className="font-semibold mt-4">Business Transfers:</p>
              <ul className="space-y-2 list-disc pl-6">
                <li>In the event of a merger, acquisition, or sale of assets, user information may be transferred to a new entity or third party involved in the transition.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6">4. Data Retention & Protection</h3>
              <p className="font-semibold">Retention Period:</p>
              <ul className="space-y-2 list-disc pl-6">
                <li>We retain personal information only for as long as it is necessary to fulfill the purposes outlined in this policy or as required by law.</li>
              </ul>

              <p className="font-semibold mt-4">Security Measures:</p>
              <ul className="space-y-2 list-disc pl-6">
                <li>Industry-standard encryption and safeguards are employed to protect data from unauthorized access, misuse, or disclosure.</li>
                <li>Although we work diligently to protect your information, no system is entirely foolproof. We cannot guarantee absolute security of your data.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6">5. Cookies & Tracking Technologies</h3>
              <p className="font-semibold">Use of Cookies:</p>
              <ul className="space-y-2 list-disc pl-6">
                <li>Our website utilizes cookies to remember user preferences, analyze traffic, and improve user experience.</li>
              </ul>

              <p className="font-semibold mt-4">Third-Party Tracking:</p>
              <ul className="space-y-2 list-disc pl-6">
                <li>We may use third-party tools (e.g., analytics platforms) that employ cookies or other technologies to gather usage data. These parties have their own privacy policies.</li>
              </ul>

              <p className="font-semibold mt-4">Opting Out:</p>
              <ul className="space-y-2 list-disc pl-6">
                <li>You can typically configure your browser to reject cookies or alert you before accepting them. Disabling cookies may affect website functionality.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6">6. Third-Party Links</h3>
              <p>
                Our website may contain links to third-party sites or services. We are not responsible for the privacy practices of these external platforms. We encourage you to review their privacy policies before providing any personal information.
              </p>

              <h3 className="text-xl font-semibold mt-6">7. Children's Privacy</h3>
              <p>
                Our services are not directed toward individuals under the age of 18. We do not knowingly collect personal information from minors. If you believe a child under 18 has provided us with personal data, please contact us immediately so we can remove that information.
              </p>

              <h3 className="text-xl font-semibold mt-6">8. Your Rights & Choices</h3>
              <p className="font-semibold">Access & Correction:</p>
              <ul className="space-y-2 list-disc pl-6">
                <li>You have the right to request access to the personal information we hold about you and to correct or update any inaccuracies.</li>
              </ul>

              <p className="font-semibold mt-4">Deletion:</p>
              <ul className="space-y-2 list-disc pl-6">
                <li>You may request the deletion of your personal data, subject to certain legal exceptions.</li>
              </ul>

              <p className="font-semibold mt-4">Marketing Preferences:</p>
              <ul className="space-y-2 list-disc pl-6">
                <li>You can opt out of receiving promotional communications at any time by following the instructions in the message or by contacting us directly.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6">9. Policy Updates</h3>
              <p>
                We may periodically update this Privacy Policy to reflect changes in our practices or legal requirements. Updates will be posted with a revised "Last Updated" date. Continued use of our services after any changes constitutes acceptance of the updated policy.
              </p>

              <h3 className="text-xl font-semibold mt-6">10. Contact Us</h3>
              <p>
                If you have questions, concerns, or requests related to this Privacy Policy or our data practices, please contact us at:
              </p>
              <ul className="space-y-2 list-disc pl-6">
                <li><strong>Phone:</strong> (360) 800-0009</li>
                <li><strong>Email:</strong> privacy@handymennetwork.com</li>
              </ul>
              
              <p className="mt-4">
                We appreciate your trust in Handymen Network and are committed to safeguarding your privacy.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
