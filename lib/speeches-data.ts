export interface Speech {
  id: number;
  date: string;
  title: string;
  category: string;
  videoUrl?: string;
  description?: string;
}

export const speechesData: Speech[] = [
  {
    id: 1,
    date: '09.11.2025',
    title: 'Politička strategija EU-a za Latinsku Ameriku 2/2',
    category: 'EU diplomacija',
    description: 'Nastavak rasprave o političkoj strategiji EU-a za Latinsku Ameriku'
  },
  {
    id: 2,
    date: '08.11.2025',
    title: 'Politička strategija EU-a za Latinsku Ameriku 1/2',
    category: 'EU diplomacija',
    description: 'Prvi dio rasprave o političkoj strategiji EU-a za Latinsku Ameriku'
  },
  {
    id: 3,
    date: '07.11.2025',
    title: 'Novi strateški program EU-a i Indije',
    category: 'Strateška partnerstva',
    description: 'Rasprava o novom strateškom programu između EU-a i Indije'
  },
  {
    id: 4,
    date: '07.11.2025',
    title: "The EU's role in Gaza peace efforts",
    category: 'Međunarodni mir',
    description: 'Uloga EU-a u mirovnim naporima za Gazu i rješenje dvije države'
  },
  {
    id: 5,
    date: '09.10.2025',
    title: 'Val nasilja u Srbiji',
    category: 'Ljudska prava',
    description: 'Val nasilja i kontinuirana primjena sile nad prosvjednicima u Srbiji'
  },
  {
    id: 6,
    date: '09.10.2025',
    title: 'Terorizam u Kolumbiji',
    category: 'Sigurnost',
    description: 'Stanje u Kolumbiji nakon vala nedavnih terorističkih napada'
  },
  {
    id: 7,
    date: '09.10.2025',
    title: 'Ukrajina - sigurnosna jamstva',
    category: 'Vanjska politika',
    description: 'Djelovanje EU-a radi osiguravanja sigurnosnih jamstava i pravednog mira za Ukrajinu'
  },
  {
    id: 8,
    date: '10.08.2025',
    title: 'Bosna i Hercegovina izvješća',
    category: 'Proširenje EU',
    description: 'Izvješća Komisije o Bosni i Hercegovini za 2023. i 2024.'
  },
  {
    id: 9,
    date: '19.07.2025',
    title: 'NATO summit lipanj 2025',
    category: 'Obrana',
    description: 'Predstojeći sastanak na vrhu NATO-a od 24. do 26. lipnja 2025'
  },
  {
    id: 10,
    date: '18.07.2025',
    title: 'EU proširenje i globalni izazovi',
    category: 'Institucije',
    description: 'Institucijske i političke implikacije procesa proširenja EU-a i globalnih izazova'
  },
  // Dodatni govori - nastavak
  {
    id: 11,
    date: '17.06.2025',
    title: 'Pokušaj ubojstva senatora Miguela Uribea',
    category: 'Sigurnost'
  },
  {
    id: 12,
    date: '17.06.2025',
    title: 'Izvješće Komisije o Moldovi za 2023. i 2024',
    category: 'Proširenje EU'
  },
  {
    id: 13,
    date: '17.06.2025',
    title: 'Izvješća Komisije o Crnoj Gori za 2023. i 2024',
    category: 'Proširenje EU'
  },
  {
    id: 14,
    date: '10.06.2025',
    title: 'Odgovor EU-a na plan izraelske vlade o zauzimanju pojasa Gaze',
    category: 'Vanjska politika'
  },
  {
    id: 15,
    date: '21.05.2025',
    title: 'Postupno ukidanje ruske energije, Sjeverni tok i energetska suverenost EU-a',
    category: 'Energetika'
  },
  {
    id: 16,
    date: '20.05.2025',
    title: 'Politička strategija EU-a za Latinsku Ameriku',
    category: 'EU diplomacija'
  },
  {
    id: 17,
    date: '08.05.2025',
    title: 'Izvješća o Turskoj za 2023. i 2024',
    category: 'Proširenje EU'
  },
  {
    id: 18,
    date: '07.05.2025',
    title: 'Izvješće Turska - blue card odgovor',
    category: 'Proširenje EU'
  },
  {
    id: 19,
    date: '07.05.2025',
    title: 'Izvješća Komisije o Kosovu za 2023. i 2024',
    category: 'Proširenje EU'
  },
  {
    id: 20,
    date: '06.05.2025',
    title: 'Izvješća Komisije o Srbiji za 2023. i 2024',
    category: 'Proširenje EU'
  },
  {
    id: 21,
    date: '23.04.2025',
    title: 'TV emisija IZ SRCA EUROPE - Ostavština pape Franje',
    category: 'Kultura'
  },
  {
    id: 22,
    date: '04.04.2025',
    title: 'Ciljani napadi na kršćane u Demokratskoj Republici Kongu',
    category: 'Ljudska prava'
  },
  {
    id: 23,
    date: '03.04.2025',
    title: 'Dramatična situacija u Gazi',
    category: 'Vanjska politika'
  },
  {
    id: 24,
    date: '02.04.2025',
    title: 'Provedba zajedničke vanjske i sigurnosne politike - godišnje izvješće za 2024',
    category: 'Vanjska politika'
  },
  {
    id: 25,
    date: '01.04.2025',
    title: 'Obveze Kosova i Srbije',
    category: 'Balkan'
  },
  {
    id: 26,
    date: '13.03.2025',
    title: 'Secesionističke prijetnje u Bosni i Hercegovini',
    category: 'Balkan'
  },
  {
    id: 27,
    date: '13.03.2025',
    title: 'Bijela knjiga o budućnosti europske obrane',
    category: 'Obrana'
  },
  {
    id: 28,
    date: '12.03.2025',
    title: 'Sve lošije stanje u Gazi nakon neproduljenja prekida vatre',
    category: 'Vanjska politika'
  },
  {
    id: 29,
    date: '11.03.2025',
    title: 'Potreba za potporom EU-a pravednoj tranziciji i obnovi u Siriji',
    category: 'Vanjska politika'
  },
  {
    id: 30,
    date: '20.02.2025',
    title: 'AFET: Izvješća Komisije o Kosovu za 2023. i 2024',
    category: 'Proširenje EU'
  },
  {
    id: 31,
    date: '13.02.2025',
    title: 'Trgovinski sporazum između EU-a i Mercosura',
    category: 'Trgovina'
  },
  {
    id: 32,
    date: '12.02.2025',
    title: 'Represija koju u Nikaragvi provodi režim Ortega-Murillo',
    category: 'Ljudska prava'
  },
  {
    id: 33,
    date: '11.02.2025',
    title: 'Šira sveobuhvatna strategija EU-a za Bliski Istok',
    category: 'Vanjska politika'
  },
  {
    id: 34,
    date: '11.02.2025',
    title: 'Politička kriza u Srbiji',
    category: 'Balkan'
  },
  {
    id: 35,
    date: '11.02.2025',
    title: 'Nastavak nepokolebljive potpore EU-a Ukrajini tri godine nakon početka ruske ratne agresije',
    category: 'Vanjska politika'
  },
  {
    id: 36,
    date: '29.01.2025',
    title: 'Exchange of views with Mr. Krzysztof Paszyk, Minister of Economic Development',
    category: 'Ekonomija'
  },
  {
    id: 37,
    date: '22.01.2025',
    title: 'Ujedinjavanje Europe protiv aktera koji su neprijateljski nastrojeni prema EU-u',
    category: 'Vanjska politika'
  },
  {
    id: 38,
    date: '21.01.2025',
    title: 'Daljnje pogoršanje političke situacije u Gruziji',
    category: 'Vanjska politika'
  },
  {
    id: 39,
    date: '21.01.2025',
    title: 'Stanje u Venezueli nakon uzurpacije predsjedničkih ovlasti 10. siječnja 2025',
    category: 'Ljudska prava'
  },
  {
    id: 40,
    date: '21.01.2025',
    title: 'Geopolitičke i gospodarske implikacije za transatlantske odnose pod novom Trumpovom administracijom',
    category: 'Vanjska politika'
  },
  {
    id: 41,
    date: '17.12.2024',
    title: 'Svrgavanje sirijskog režima, geopolitičke implikacije i humanitarna situacija u regiji',
    category: 'Vanjska politika'
  },
  {
    id: 42,
    date: '27.11.2024',
    title: 'Jačanje nepokolebljive potpore EU-a Ukrajini',
    category: 'Vanjska politika'
  },
  {
    id: 43,
    date: '27.11.2024',
    title: 'Nastavak eskalacije stanja na Bliskom istoku: humanitarna kriza u Gazi',
    category: 'Vanjska politika'
  },
  {
    id: 44,
    date: '26.11.2024',
    title: 'Ishod sastanka na vrhu čelnika skupine G20',
    category: 'Međunarodne organizacije'
  },
  {
    id: 45,
    date: '23.10.2024',
    title: 'Tjedni pregled govora',
    category: 'Pregled'
  },
  {
    id: 46,
    date: '21.10.2024',
    title: 'Odgovor u raspravi - Ukrajina',
    category: 'Vanjska politika'
  },
  {
    id: 47,
    date: '11.10.2024',
    title: 'Porast vjerske netrpeljivosti u Europi',
    category: 'Ljudska prava'
  },
  {
    id: 48,
    date: '09.10.2024',
    title: 'Stanje u Moldaviji i Gruziji',
    category: 'Vanjska politika'
  },
  {
    id: 49,
    date: '23.09.2024',
    title: 'Budućnost europske konkurentnosti',
    category: 'Ekonomija'
  },
  {
    id: 50,
    date: '23.09.2024',
    title: 'Kontinuirana financijska i vojna potpora država članica EU-a Ukrajini',
    category: 'Vanjska politika'
  },
  {
    id: 51,
    date: '22.09.2024',
    title: 'Kontinuirani problemi antisemitizma u Europi',
    category: 'Ljudska prava'
  },
  {
    id: 52,
    date: '29.08.2024',
    title: 'Proširena sjednica ŽO HDZ-a Varaždinske županije',
    category: 'Hrvatska politika'
  },
];

export const categories = [
  'Sve',
  'Vanjska politika',
  'Proširenje EU',
  'EU diplomacija',
  'Balkan',
  'Ljudska prava',
  'Obrana',
  'Sigurnost',
  'Ekonomija',
  'Hrvatska politika',
];
