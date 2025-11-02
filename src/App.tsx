import EtherealBeamsHero from '@/components/ui/ethereal-beams-hero';
import LogoCloudDemo from '@/components/LogoCloudDemo';
import CategoryListDemo from '@/components/CategoryListDemo';
import TestimonialsDemo from '@/components/TestimonialsDemo';
import CTADemo from '@/components/CTADemo';
import { FlickeringFooter } from '@/components/ui/flickering-footer';

function App() {
  return (
    <div className="w-full">
      <div id="home">
        <EtherealBeamsHero />
      </div>
      <LogoCloudDemo />
      <div id="solutions">
        <CategoryListDemo />
      </div>
      <div id="testimonials">
        <TestimonialsDemo />
      </div>
      <div id="cta">
        <CTADemo />
      </div>
      <FlickeringFooter />
    </div>
  );
}

export default App;
