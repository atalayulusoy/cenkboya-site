const cenkAddress =
  "Orhangazi Mahallesi 1715. Sokak No:1 Mimsan Mobilyacılar Çarşısı, 34000 Esenyurt/İstanbul";
const cenkMapsQuery = encodeURIComponent(cenkAddress);

export const companyInfo = {
  name: "CENK SERİGRAFİ BOYALARI",
  shortName: "Cenk",
  phoneDisplay: "+90 531 573 49 13",
  phoneHref: "tel:+905315734913",
  whatsappHref: "https://wa.me/905315734913",
  instagramHandle: "@cenk_boya12",
  instagramHref: "https://www.instagram.com/cenk_boya12/",
  facebookHref: "",
  address: cenkAddress,
  mapsHref: `https://www.google.com/maps/search/?api=1&query=${cenkMapsQuery}`,
  mapsEmbedHref: `https://www.google.com/maps?q=${cenkMapsQuery}&z=16&output=embed`,
  heroTitle: "Profesyonel Baskı Boyalarında Güçlü Çözüm Ortağınız",
  heroDescription:
    "Serigrafi, tekstil, poşet, eldiven, tişört ve endüstriyel baskı boyalarında yüksek kalite üretim.",
  aboutDescription:
    "Cenk Serigrafi Boyaları olarak serigrafi ve endüstriyel baskı sektörüne yüksek kaliteli boya üretimi sunuyoruz. Müşterilerimizin ihtiyaçlarına özel renk ve içerik üretimi yapabiliyoruz. Güçlü tutuculuk, kaliteli pigment yapısı ve uzun ömürlü baskı performansı ile profesyonel çözümler sunuyoruz.",
};

export const navItems = [
  { label: "Ana Sayfa", href: "#anasayfa" },
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "Ürünler", href: "#urunler" },
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Üretim", href: "#uretim" },
  { label: "Referanslar", href: "#referanslar" },
  { label: "İletişim", href: "#iletisim" },
];

export const featureItems = [
  {
    icon: "droplets",
    title: "Yüksek Tutuculuk",
    description:
      "Zorlu yüzeylerde bile güven veren yapışma performansı ile net, güçlü ve kalıcı sonuçlar.",
  },
  {
    icon: "palette",
    title: "Özel Renk Üretimi",
    description:
      "Marka renklerinize, üretim hattınıza ve baskı zeminine özel ton geliştirme esnekliği.",
  },
  {
    icon: "shield",
    title: "Dayanıklı Pigment Yapısı",
    description:
      "Canlılığını koruyan, ışık ve sürtünme dayanımı yüksek pigment teknolojileri.",
  },
  {
    icon: "factory",
    title: "Endüstriyel Kalite",
    description:
      "Süreklilik isteyen üretim hatlarına uygun stabilite, viskozite ve performans standardı.",
  },
  {
    icon: "rocket",
    title: "Hızlı Üretim",
    description:
      "Siparişten sevkiyata kadar planlı, seri ve zaman kaybını azaltan üretim akışı.",
  },
  {
    icon: "sparkles",
    title: "Müşteriye Özel Çözümler",
    description:
      "Baskı tipi, zemin yapısı ve kullanım alanına göre özelleştirilen formül desteği.",
  },
];

export const productItems = [
  {
    title: "Serigrafi Boyaları",
    eyebrow: "Hassas ağ ve yüksek transfer",
    accent: ["#ef4444", "#f97316"],
  },
  {
    title: "Akrilik Boyalar",
    eyebrow: "Esnek ve hızlı kuruyan yapı",
    accent: ["#22c55e", "#84cc16"],
  },
  {
    title: "Hobi Boyaları",
    eyebrow: "Canlı tonlar ve pratik kullanım",
    accent: ["#facc15", "#fb7185"],
  },
  {
    title: "Poşet Baskı Boyaları",
    eyebrow: "Kaygan yüzeylerde güçlü tutuculuk",
    accent: ["#38bdf8", "#0ea5e9"],
  },
  {
    title: "Tişört Baskı Boyaları",
    eyebrow: "Tekstilde esnek, doygun baskı",
    accent: ["#a855f7", "#ec4899"],
  },
  {
    title: "Eldiven Baskı Boyaları",
    eyebrow: "Fonksiyonel ve dayanıklı işaretleme",
    accent: ["#14b8a6", "#06b6d4"],
  },
  {
    title: "Endüstriyel Baskı Boyaları",
    eyebrow: "Yoğun kullanım için kararlı performans",
    accent: ["#f97316", "#eab308"],
  },
  {
    title: "Tekstil Baskı Boyaları",
    eyebrow: "Yumuşak tuşe ve kalıcı renk",
    accent: ["#6366f1", "#8b5cf6"],
  },
  {
    title: "Plastik Baskı Boyaları",
    eyebrow: "Sert yüzeylere özel formül",
    accent: ["#06b6d4", "#3b82f6"],
  },
  {
    title: "Özel Üretim Boyalar",
    eyebrow: "İhtiyaca göre formül tasarımı",
    accent: ["#fb7185", "#f43f5e"],
  },
];

export const productHighlights = [
  "İstenilen her renk üretilebilir.",
  "Özel üretim yapılabilir.",
  "Yüksek kalite pigment kullanılır.",
  "Uzun ömürlü baskı performansı sağlar.",
];

export const serviceItems = [
  {
    icon: "swatchbook",
    title: "Özel Renk Geliştirme",
    description:
      "Kurumsal renk uyumu, numune eşleştirme ve parti bazlı ton standardizasyonu sağlıyoruz.",
  },
  {
    icon: "flask",
    title: "Formül ve Reçete Desteği",
    description:
      "Yüzey yapısına, baskı hızına ve kullanım alanına göre teknik formül danışmanlığı sunuyoruz.",
  },
  {
    icon: "layers",
    title: "Baskı Süreci Optimizasyonu",
    description:
      "Makine, elek, kurutma ve zemin uyumunu değerlendirerek üretim verimini artırıyoruz.",
  },
  {
    icon: "users",
    title: "Kurumsal Tedarik İşbirliği",
    description:
      "Sürekli üretim yapan işletmeler için planlı tedarik, hızlı sevkiyat ve sürdürülebilir kalite sunuyoruz.",
  },
];

export const statItems = [
  { value: 10, suffix: "+", label: "Yıllık Deneyim" },
  { value: 1000, suffix: "+", label: "Mutlu Müşteri" },
  { value: 999, suffix: "+", label: "Sınırsız Renk Üretimi" },
  { value: 100, suffix: "%", label: "Yüksek Kalite Standardı" },
];

export const advantageItems = [
  {
    icon: "target",
    title: "Güçlü Tutuculuk",
    description: "Farklı yüzey tiplerinde stabil ve güvenilir baskı sonucu.",
  },
  {
    icon: "sparkles",
    title: "Canlı Renkler",
    description: "Yüksek pigment yoğunluğu ile dikkat çeken doygun tonlar.",
  },
  {
    icon: "shield",
    title: "Uzun Ömürlü Kullanım",
    description: "Aşınmaya, sürtünmeye ve üretim koşullarına karşı dayanım.",
  },
  {
    icon: "clock",
    title: "Hızlı Teslimat",
    description: "Üretim planlaması güçlü, sevkiyat süreci hızlı ve kontrollü.",
  },
  {
    icon: "badge",
    title: "Müşteri Memnuniyeti",
    description: "İhtiyacı anlayan, çözüm odaklı ve sürdürülebilir hizmet yaklaşımı.",
  },
  {
    icon: "flask",
    title: "Özel Formül Desteği",
    description: "Standart ürünlerin ötesine geçen, kullanım senaryosuna göre geliştirme.",
  },
];

export const processSteps = [
  {
    title: "Renk Analizi",
    description:
      "Talep edilen ton, yüzey tipi ve baskı hedefi teknik olarak analiz edilir.",
    icon: "palette",
  },
  {
    title: "Özel Formül Hazırlığı",
    description:
      "Pigment, bağlayıcı ve yardımcı bileşenler baskı gereksinimine göre eşleştirilir.",
    icon: "flask",
  },
  {
    title: "Üretim",
    description:
      "Kontrollü karışım ve proses yönetimi ile seri üretim hattına geçilir.",
    icon: "factory",
  },
  {
    title: "Kalite Kontrol",
    description:
      "Renk, viskozite, tutuculuk ve performans kontrolleri detaylı olarak tamamlanır.",
    icon: "shield",
  },
  {
    title: "Paketleme",
    description:
      "Ürüne uygun ambalaj, etiketleme ve sevkiyat hazırlıkları profesyonelce yapılır.",
    icon: "boxes",
  },
  {
    title: "Teslimat",
    description:
      "Siparişler planlanan termin doğrultusunda güvenli ve hızlı şekilde sevk edilir.",
    icon: "rocket",
  },
];

export const applicationShowcaseItems = [
  {
    title: "Cam Baskı",
    category: "Cam Yüzey Uygulaması",
    image:
      "https://images.pexels.com/photos/34686413/pexels-photo-34686413.jpeg?auto=compress&cs=tinysrgb&w=1400",
    summary:
      "Şişe, kavanoz ve cam yüzeylerde yüksek netlikte, dayanıklı ve premium baskı görünümü.",
  },
  {
    title: "Starbucks Plastik Bardak Baskısı",
    category: "Plastik Bardak Uygulaması",
    image:
      "https://images.pexels.com/photos/33511696/pexels-photo-33511696.jpeg?auto=compress&cs=tinysrgb&w=1400",
    summary:
      "Soğuk içecek bardakları ve plastik yüzeylerde canlı renk, güçlü tutuculuk ve temiz transfer.",
  },
  {
    title: "Tişört Baskı",
    category: "Tekstil Uygulaması",
    image:
      "https://images.pexels.com/photos/33650426/pexels-photo-33650426.jpeg?auto=compress&cs=tinysrgb&w=1400",
    summary:
      "Pamuklu ve karışım tekstillerde esnek, uzun ömürlü ve renk doygunluğu yüksek baskı sonucu.",
  },
];

export const referenceBrands = [
  {
    name: "Gezer Terlik",
    mark: "GEZER",
    descriptor: "Terlik",
    logoKind: "gezer",
    logoUrl: "https://logo.clearbit.com/gezer.com.tr",
    tone: "from-sky-500/24 via-cyan-400/14 to-white/5",
  },
  {
    name: "Starbucks",
    mark: "STARBUCKS",
    descriptor: "Coffee",
    logoKind: "starbucks",
    logoUrl: "https://logo.clearbit.com/starbucks.com",
    tone: "from-emerald-500/24 via-green-400/14 to-white/5",
  },
  {
    name: "Espresso Lab",
    mark: "ESPRESSO LAB",
    descriptor: "Coffee",
    logoKind: "espresso",
    logoUrl: "https://logo.clearbit.com/espressolab.com",
    tone: "from-stone-300/20 via-amber-500/14 to-white/5",
  },
  {
    name: "Mavi",
    mark: "MAVI",
    descriptor: "Denim",
    logoKind: "mavi",
    logoUrl: "https://logo.clearbit.com/mavi.com",
    tone: "from-blue-500/24 via-sky-300/14 to-white/5",
  },
  {
    name: "Lufian",
    mark: "LUFIAN",
    descriptor: "Menswear",
    logoKind: "lufian",
    logoUrl: "https://logo.clearbit.com/lufian.com",
    tone: "from-zinc-200/18 via-white/10 to-white/5",
  },
  {
    name: "Nike",
    mark: "NIKE",
    descriptor: "Sport",
    logoKind: "nike",
    logoUrl: "https://logo.clearbit.com/nike.com",
    tone: "from-white/20 via-neutral-300/12 to-white/5",
  },
  {
    name: "Adidas",
    mark: "ADIDAS",
    descriptor: "Sport",
    logoKind: "adidas",
    logoUrl: "https://logo.clearbit.com/adidas.com",
    tone: "from-indigo-400/20 via-white/12 to-white/5",
  },
  {
    name: "Puma",
    mark: "PUMA",
    descriptor: "Sport",
    logoKind: "puma",
    logoUrl: "https://logo.clearbit.com/puma.com",
    tone: "from-red-500/22 via-orange-300/12 to-white/5",
  },
];

export const galleryItems = [
  {
    title: "Baskı Örneği",
    category: "Serigrafi Uygulaması",
    image:
      "https://images.pexels.com/photos/697673/pexels-photo-697673.jpeg?auto=compress&cs=tinysrgb&w=1400",
    aspect: "aspect-[4/5]",
    summary:
      "Yüksek kontrast, net yüzey transferi ve canlı renk dengesi ile premium baskı kalitesi.",
  },
  {
    title: "Pigment Laboratuvarı",
    category: "Boya Üretim Görüntüsü",
    image:
      "https://images.pexels.com/photos/3735718/pexels-photo-3735718.jpeg?auto=compress&cs=tinysrgb&w=1400",
    aspect: "aspect-[16/11]",
    summary:
      "Özel ton hazırlıkları ve reçete geliştirme süreçleri kontrollü laboratuvar akışıyla ilerler.",
  },
  {
    title: "Endüstriyel Hat",
    category: "Üretim Alanı",
    image:
      "https://images.pexels.com/photos/18569745/pexels-photo-18569745.jpeg?auto=compress&cs=tinysrgb&w=1400",
    aspect: "aspect-[16/10]",
    summary:
      "Süreklilik odaklı üretim, ölçülebilir kalite standardı ve güçlü proses organizasyonu.",
  },
  {
    title: "Renk Kartelası",
    category: "Renk Örnekleri",
    image:
      "https://images.pexels.com/photos/10275085/pexels-photo-10275085.jpeg?auto=compress&cs=tinysrgb&w=1400",
    aspect: "aspect-[3/4]",
    summary:
      "Geniş ton aralığı ile talebe göre özelleşen, parti bazında tutarlı renk yönetimi.",
  },
  {
    title: "Ürün Çekimi",
    category: "Premium Ambalaj",
    image:
      "https://images.pexels.com/photos/1887946/pexels-photo-1887946.jpeg?auto=compress&cs=tinysrgb&w=1400",
    aspect: "aspect-[16/11]",
    summary:
      "Kurumsal görünüm, güven veren ambalaj dili ve raf üzerinde güçlü premium etki.",
  },
  {
    title: "Teknik Kontrol",
    category: "Kalite Süreci",
    image:
      "https://images.pexels.com/photos/35383622/pexels-photo-35383622.jpeg?auto=compress&cs=tinysrgb&w=1400",
    aspect: "aspect-[16/12]",
    summary:
      "Sevkiyat öncesi son kontroller ile yüzey uyumu, parlaklık ve dayanım kriterleri doğrulanır.",
  },
];

export const testimonialItems = [
  {
    name: "Murat K.",
    company: "Tekstil Baskı Atölyesi",
    quote:
      "Renk tutarlılığı ve baskı dayanımı beklentimizin üzerinde. Özellikle özel ton çalışmaları çok başarılı.",
  },
  {
    name: "Elif T.",
    company: "Ambalaj Üretim Firması",
    quote:
      "Poşet baskı boyalarında hem kuruma hem tutuculuk açısından çok verimli sonuç aldık. Süreçleri de hızlı.",
  },
  {
    name: "Serkan A.",
    company: "Endüstriyel Baskı Tedarikçisi",
    quote:
      "Numune sürecinden seri üretime kadar iletişim güçlüydü. Teknik destek tarafı gerçekten fark yaratıyor.",
  },
  {
    name: "Gizem Y.",
    company: "Kurumsal Promosyon Üreticisi",
    quote:
      "Canlı renkler, temiz baskı ve zamanında teslimat. Uzun vadeli çalışmak isteyen firmalar için güven verici.",
  },
];
