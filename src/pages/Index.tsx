
import Hero from '@/components/Hero';
import FeaturedServices from '@/components/FeaturedServices';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SignupCallToAction from '@/components/SignupCallToAction';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedServices />
        <HowItWorks />
        <Testimonials />
        <CallToAction />
      </main>
      <SignupCallToAction />
      <Footer />
    </div>
  );
};

export default Index;
