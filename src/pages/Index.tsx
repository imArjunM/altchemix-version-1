import { Header } from '@/components/Header/Header';
import { Hero } from '@/components/Hero/Hero';
import { IndustryBrowser } from '@/components/IndustryBrowser/IndustryBrowser';
import { ProductGrid } from '@/components/ProductGrid/ProductGrid';
import { Technology } from '@/components/Technology/Technology';
import { Trust } from '@/components/Trust/Trust';
import { Sustainability } from '@/components/Sustainability/Sustainability';
import { Resources } from '@/components/Resources/Resources';
import { Contact } from '@/components/Contact/Contact';
import { Footer } from '@/components/Footer/Footer';
import { MobileStickyCTA } from '@/components/MobileStickyCTA/MobileStickyCTA';
import { AdditiveCapabilitiesSection } from '@/components/ProductGrid/AdditiveCapabilities';
import { ServicesInnovation } from '@/components/Technology/ServicesInnovation';

const Index = () => {
  return (
    <div className='min-h-screen bg-background'>
      {/* Skip Link for Accessibility */}
      <a
        href='#main-content'
        className='sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-lg'
      >
        Skip to main content
      </a>

      <Header />
      <main id='main-content'>
        <Hero />
        <IndustryBrowser />
        <ProductGrid />
        <AdditiveCapabilitiesSection />
        <ServicesInnovation />
        <Trust />
        {/* <Resources />
        <Sustainability /> */}
        <Contact />
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
};

export default Index;
