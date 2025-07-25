import ResponsiveNavigation from "@/components/ResponsiveNavigation";
import Hero from "@/components/Hero";
import ResponsiveShowcase from "@/components/ResponsiveShowcase";
import DeviceDemo from "@/components/DeviceDemo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ResponsiveNavigation />
      <Hero />
      <ResponsiveShowcase />
      <DeviceDemo />
      <Footer />
    </div>
  );
};

export default Index;
