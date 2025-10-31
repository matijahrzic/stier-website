import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import AchievementsSlider from '@/components/AchievementsSlider';
import Priorities from '@/components/Priorities';
import LatestNews from '@/components/LatestNews';
import SocialFeeds from '@/components/SocialFeeds';
import NewsletterPopup from '@/components/NewsletterPopup';
import AccessibilityBar from '@/components/AccessibilityBar';
import ScrollToTop from '@/components/ScrollToTop';
import PhotoGallery from '@/components/PhotoGallery';

export default function Home() {
  return (
    <main className="min-h-screen">
      <AccessibilityBar />
      <Header />
      <Hero />

      <section id="achievements" className="py-20 bg-bg-light checkerboard-bg">
        <div className="container mx-auto px-4">
          <AchievementsSlider />
        </div>
      </section>

      <section id="priorities" className="py-20 bg-white checkerboard-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-hdz-blue">
            Prioriteti
          </h2>
          <Priorities />
        </div>
      </section>

      <section id="news" className="py-20 bg-bg-light">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-hdz-blue">
            Najnovije vijesti
          </h2>
          <LatestNews />
        </div>
      </section>

      {/* Photo Gallery */}
      <PhotoGallery />

      <section id="social" className="py-20 bg-white checkerboard-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-hdz-blue">
            Pratite me
          </h2>
          <SocialFeeds />
        </div>
      </section>

      <Footer />
      <NewsletterPopup />
      <ScrollToTop />
    </main>
  );
}
