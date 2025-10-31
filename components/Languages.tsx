'use client';

export default function Languages() {
  const languages = [
    { name: 'Španjolski', flagCode: 'es', level: 'Maternji jezik' },
    { name: 'Hrvatski', flagCode: 'hr', level: 'Maternji jezik' },
    { name: 'Engleski', flagCode: 'gb', level: 'Tečan' },
    { name: 'Talijanski', flagCode: 'it', level: 'Tečan' },
    { name: 'Francuski', flagCode: 'fr', level: 'Tečan' },
  ];

  return (
    <div>
      <h2 className="text-4xl font-bold mb-12 text-center text-hdz-blue">
        Jezici
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {languages.map((lang, index) => (
          <div key={index} className="card p-6 text-center hover:scale-105 transition-transform">
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-gray-200 shadow-md">
                <img
                  src={`https://flagcdn.com/w160/${lang.flagCode}.png`}
                  alt={`${lang.name} zastava`}
                  width="80"
                  height="80"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <h3 className="font-bold text-xl mb-2 text-gray-900">{lang.name}</h3>
            <p className="text-gray-600">{lang.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
