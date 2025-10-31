import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AccessibilityBar from '@/components/AccessibilityBar';
import ScrollToTop from '@/components/ScrollToTop';
import BiographyHero from '@/components/BiographyHero';
import CareerTimeline from '@/components/CareerTimeline';
import Languages from '@/components/Languages';
import Awards from '@/components/Awards';
import PhotoSeparator from '@/components/PhotoSeparator';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AccessibilityBar />
      <Header />

      <BiographyHero />

      {/* Biography Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-hdz-blue">
            O meni
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Main Bio Text */}
            <div className="lg:col-span-2">
              <div className="bg-bg-light p-8 rounded-lg mb-8">
                <p className="text-lg leading-relaxed mb-4">
                  <strong>Rođen:</strong> 6. siječnja 1972. u Buenos Airesu, Argentina
                </p>
                <p className="text-lg leading-relaxed">
                  <strong>Obitelj:</strong> Oženjen, otac troje djece
                </p>
              </div>

              <h3 className="text-2xl font-bold text-hdz-blue mb-4">Obrazovanje</h3>
              <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700">
                <li>Diplomirao <strong>Političke znanosti i međunarodne odnose</strong> te <strong>novinarstvo</strong> na Katoličkom sveučilištu u Argentini</li>
                <li>Nostrificirao diplomu na <strong>Fakultetu političkih znanosti Sveučilišta u Zagrebu</strong></li>
                <li>Završio <strong>Diplomatsku akademiju</strong> u Zagrebu</li>
                <li>Postdiplomski tečaj o upravlju krizama na <strong>Institute of World Politics</strong> u Washingtonu</li>
              </ul>
            </div>

            {/* Side Photo */}
            <div className="lg:col-span-1">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/images/24-10-09_Stier_portraits_3.jpg"
                  alt="Davor Ivo Stier"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center top', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>

          {/* Additional Photos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/IMG_1489.jpeg"
                alt="Davor Ivo Stier u Europskom parlamentu"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                style={{ objectPosition: 'center top', objectFit: 'cover' }}
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/SASA5928xs.jpg"
                alt="Davor Ivo Stier"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                style={{ objectPosition: 'center top', objectFit: 'cover' }}
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/SASA5931xs.jpg"
                alt="Davor Ivo Stier"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                style={{ objectPosition: 'center top', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-20 bg-bg-light checkerboard-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-hdz-blue">
            Karijera
          </h2>
          <CareerTimeline />
        </div>
      </section>

      {/* Photo Separator 1 */}
      <PhotoSeparator imagePath="/images/IMG_1677.jpeg" height="h-80" />

      {/* Languages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <Languages />
        </div>
      </section>

      {/* Photo Separator 2 */}
      <PhotoSeparator imagePath="/images/SASA5940xs.jpg" height="h-96" />

      {/* Awards & Recognition */}
      <section className="py-20 bg-bg-light">
        <div className="container mx-auto px-4">
          <Awards />
        </div>
      </section>

      {/* Party Roles */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-hdz-blue">
            Stranačke dužnosti
          </h2>
          <div className="space-y-4">
            <div className="card p-6">
              <div className="flex items-start">
                <span className="text-hdz-blue font-bold text-lg mr-4">2024</span>
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    Predsjednik Kluba zastupnika Europske pučke stranke u Parlamentarnoj skupštini Vijeća Europe
                  </h3>
                </div>
              </div>
            </div>
            <div className="card p-6">
              <div className="flex items-start">
                <span className="text-hdz-blue font-bold text-lg mr-4">2022</span>
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    Potpredsjednik Kluba zastupnika Europske pučke stranke u Parlamentarnoj skupštini Vijeća Europe
                  </h3>
                </div>
              </div>
            </div>
            <div className="card p-6">
              <div className="flex items-start">
                <span className="text-hdz-blue font-bold text-lg mr-4">2016</span>
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    Politički tajnik Hrvatske demokratske zajednice
                  </h3>
                </div>
              </div>
            </div>
            <div className="card p-6">
              <div className="flex items-start">
                <span className="text-hdz-blue font-bold text-lg mr-4">2010</span>
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    Međunarodni tajnik Hrvatske demokratske zajednice
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
}
