export const business = {
  name: 'Güneş Hafriyat',
  phoneDisplay: '0500 000 00 00',
  phoneHref: '+905000000000',
  whatsappHref: '905000000000',
  email: 'info@guneshafriyat.com',
  address: 'Bilecik Merkez, Bilecik',
  hours: 'Pazartesi - Cumartesi, 07:00 - 19:00',
}

export type City = {
  name: string
  slug: string
  description: string
}

export const homeCity = 'Bilecik'

export const bilecikDistricts = [
  'Bilecik Merkez',
  'Bozüyük',
  'Osmaneli',
  'Söğüt',
  'Pazaryeri',
  'Gölpazarı',
  'İnhisar',
  'Yenipazar',
]

export const neighboringCities: City[] = [
  {
    name: 'Bursa',
    slug: 'bursa',
    description:
      'Bursa merkez ve çevre ilçelerinde konut, sanayi ve altyapı projeleri için hafriyat kazı ve nakliye hizmeti veriyoruz.',
  },
  {
    name: 'Eskişehir',
    slug: 'eskisehir',
    description:
      'Eskişehir\'de arsa tesviyesi, temel kazısı ve moloz nakliyesi ihtiyaçlarınızda hızlı ve güvenilir hizmet sunuyoruz.',
  },
  {
    name: 'Kütahya',
    slug: 'kutahya',
    description:
      'Kütahya genelinde iş makinesi kiralama, dolgu toprağı temini ve hafriyat nakliyesi hizmetleri sağlıyoruz.',
  },
  {
    name: 'Sakarya',
    slug: 'sakarya',
    description:
      'Sakarya\'da yapı ve altyapı projeleriniz için kazı, yıkım ve hafriyat taşıma hizmetlerini planlı şekilde yürütüyoruz.',
  },
  {
    name: 'Kocaeli',
    slug: 'kocaeli',
    description:
      'Kocaeli\'de sanayi tesisleri ve konut projeleri için hafriyat kazı, nakliye ve saha düzenleme hizmeti veriyoruz.',
  },
]

export type Service = {
  title: string
  description: string
  icon: 'excavate' | 'truck' | 'level' | 'demolish' | 'rent' | 'trench'
}

export const services: Service[] = [
  {
    title: 'Hafriyat Kazı İşleri',
    description:
      'Konut, sanayi ve altyapı projeleriniz için temel kazısı, bodrum kazısı ve genel hafriyat kazı işlerini deneyimli operatör ekibimizle güvenle tamamlıyoruz.',
    icon: 'excavate',
  },
  {
    title: 'Hafriyat ve Moloz Nakliyesi',
    description:
      'Kazı sonucu ortaya çıkan hafriyat toprağı ve inşaat molozunu, ruhsatlı araç filomuzla belirlenen döküm sahalarına zamanında taşıyoruz.',
    icon: 'truck',
  },
  {
    title: 'Dolgu ve Tesviye',
    description:
      'Arsa ve arazilerde zemin iyileştirme, dolgu toprağı serimi ve tesviye çalışmalarını proje ölçeğine uygun ekipmanla yapıyoruz.',
    icon: 'level',
  },
  {
    title: 'Yıkım Hizmetleri',
    description:
      'Bina ve yapı yıkımlarını iş güvenliği kurallarına uygun şekilde planlayıp, yıkım sonrası moloz nakliyesini de tek elden yönetiyoruz.',
    icon: 'demolish',
  },
  {
    title: 'İş Makinesi Kiralama',
    description:
      'Ekskavatör, loder ve kamyon kiralama hizmetiyle küçük ve büyük ölçekli hafriyat işlerinizde operatörlü makine desteği sağlıyoruz.',
    icon: 'rent',
  },
  {
    title: 'Kanal ve Temel Kazısı',
    description:
      'Altyapı hatları, su ve kanalizasyon şebekeleri için kanal kazısı ile bina temel kazısı işlerini hassas ölçümlerle gerçekleştiriyoruz.',
    icon: 'trench',
  },
]

export type FaqItem = { question: string; answer: string }

export const faqItems: FaqItem[] = [
  {
    question: 'Bilecik ve çevre illerde hangi bölgelere hizmet veriyorsunuz?',
    answer:
      'Bilecik merkez ve tüm ilçelerinin (Bozüyük, Osmaneli, Söğüt, Pazaryeri, Gölpazarı, İnhisar, Yenipazar) yanı sıra Bursa, Eskişehir, Kütahya, Sakarya ve Kocaeli genelinde hafriyat, nakliyat ve kazı hizmeti veriyoruz.',
  },
  {
    question: 'Hafriyat işi için ücretsiz keşif yapıyor musunuz?',
    answer:
      'Evet, iş yerinizi veya arsanızı yerinde inceleyerek ücretsiz keşif yapıyor, iş kapsamına göre aynı gün içinde fiyat teklifi sunuyoruz.',
  },
  {
    question: 'Hafriyat ve moloz nakliyesi fiyatları neye göre belirleniyor?',
    answer:
      'Fiyatlandırma; hafriyat miktarı (m³), mesafe, zemin yapısı ve iş süresine göre değişir. Kesin fiyat için keşif sonrası net teklif veriyoruz.',
  },
  {
    question: 'Hangi araç ve iş makinesi filonuz mevcut?',
    answer:
      'Ekskavatör, loder ve çeşitli tonajda kamyonlardan oluşan araç filomuzla hem küçük ölçekli hem de büyük çaplı hafriyat projelerine hizmet verebiliyoruz.',
  },
  {
    question: 'Acil hafriyat veya nakliye talebi için ne kadar sürede gelebiliyorsunuz?',
    answer:
      'Bilecik merkezde genellikle aynı gün, çevre illerde ise 24-48 saat içinde saha ekibimizi yönlendirerek işe başlayabiliyoruz.',
  },
]
