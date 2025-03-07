
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <div className="container max-w-4xl px-4 py-12 mx-auto">
          <h1 className="mb-8 text-4xl font-bold text-center">Contact Us</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-center mb-8">
              We're here to help! Reach out with any questions about our services.
            </p>
            
            {/* Contact form placeholder */}
            <div className="bg-gray-100 p-8 rounded-lg">
              <p className="text-center text-gray-600">Contact form coming soon...</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
