export interface MaterialItem {
  name: string;
  quantity: number | string;
}
export interface PackageSection {
  title: string;
  items: MaterialItem[];
}
export interface ProductPackage {
  id: string;
  brand: string;
  name: string;
  fullName: string;
  description: string;
  price: number;        // Total (소비자가 = 상품가 + 장착공임)
  productCost: number;  // 상품 가격 (부품 원가)
  laborCost: number;    // 장착 공임 (우리 매출)
  image: string;
  sections: PackageSection[];
  hasPositionOption?: boolean;
  isCustom?: boolean;
}

// ── EV9 ───────────────────────────────────────────────────────────
export const ev9Packages: ProductPackage[] = [
  {
    id: 'ev9-sidestep',
    brand: 'ev9',
    name: '사이드스텝',
    fullName: 'EV9 사이드스텝',
    description: '기아 EV9 순정 사이드스텝',
    price: 670000,
    productCost: 560000,
    laborCost: 110000,
    image: '/static/images/ev9-sidestep.jpg',
    sections: []
  }
]

// ── 카니발 (KA4/PE) ───────────────────────────────────────────────
export const carnivalPackages: ProductPackage[] = [
  {
    id: 'carnival-sidestep',
    brand: 'carnival',
    name: '사이드스텝',
    fullName: '카니발 사이드스텝',
    description: '기아 카니발 순정 사이드스텝',
    price: 530000,
    productCost: 420000,
    laborCost: 110000,
    image: '/static/images/carnival-sidestep.jpg',
    sections: []
  },
  {
    id: 'carnival-air-purifier',
    brand: 'carnival',
    name: '빌트인공기청정기',
    fullName: '카니발 빌트인공기청정기',
    description: '기아 카니발 순정 빌트인공기청정기',
    price: 485000,
    productCost: 430000,
    laborCost: 55000,
    image: '/static/images/carnival-rear-entertainment2.jpg',
    sections: []
  },
  {
    id: 'carnival-rear-entertainment',
    brand: 'carnival',
    name: '후석 엔터테인먼트',
    fullName: '카니발 후석 엔터테인먼트',
    description: '기아 카니발 순정 후석 엔터테인먼트 시스템',
    price: 1565000,
    productCost: 1400000,
    laborCost: 165000,
    image: '/static/images/carnival-rear-entertainment.jpg',
    sections: []
  }
]

// ── 쏘렌토 (MQ4/PE) ──────────────────────────────────────────────
export const sorentoPackages: ProductPackage[] = [
  {
    id: 'sorento-sidestep',
    brand: 'sorento',
    name: '사이드스텝',
    fullName: '쏘렌토 사이드스텝',
    description: '기아 쏘렌토 순정 사이드스텝',
    price: 510000,
    productCost: 400000,
    laborCost: 110000,
    image: '/static/images/sorento-sidestep.jpg',
    sections: []
  },
  {
    id: 'sorento-air-purifier',
    brand: 'sorento',
    name: '빌트인공기청정기',
    fullName: '쏘렌토 빌트인공기청정기',
    description: '기아 쏘렌토 순정 빌트인공기청정기',
    price: 485000,
    productCost: 430000,
    laborCost: 55000,
    image: '/static/images/sorento-rear-entertainment-black.jpg',
    sections: []
  },
  {
    id: 'sorento-rear-entertainment',
    brand: 'sorento',
    name: '후석 엔터테인먼트',
    fullName: '쏘렌토 후석 엔터테인먼트',
    description: '기아 쏘렌토 순정 후석 엔터테인먼트 시스템',
    price: 1465000,
    productCost: 1300000,
    laborCost: 165000,
    image: '/static/images/sorento-rear-entertainment-beige.jpg',
    sections: []
  },
  {
    id: 'sorento-wheel',
    brand: 'sorento',
    name: '전면 가공 휠',
    fullName: '쏘렌토 전면 가공 휠',
    description: '기아 쏘렌토 순정 전면 가공 휠',
    price: 1165000,
    productCost: 1000000,
    laborCost: 165000,
    image: '/static/images/sorento-wheel.jpg',
    sections: []
  }
]

// ── 스포티지 (NQ5) ────────────────────────────────────────────────
export const sportagePackages: ProductPackage[] = [
  {
    id: 'sportage-sidestep',
    brand: 'sportage',
    name: '사이드스텝',
    fullName: '스포티지 사이드스텝',
    description: '기아 스포티지 순정 사이드스텝',
    price: 450000,
    productCost: 340000,
    laborCost: 110000,
    image: '/static/images/sportage-sidestep.jpg',
    sections: []
  },
  {
    id: 'sportage-air-purifier',
    brand: 'sportage',
    name: '빌트인공기청정기',
    fullName: '스포티지 빌트인공기청정기',
    description: '기아 스포티지 순정 빌트인공기청정기',
    price: 455000,
    productCost: 400000,
    laborCost: 55000,
    image: '/static/images/sorento-rear-entertainment-dark.jpg',
    sections: []
  }
]

// ── K8 ────────────────────────────────────────────────────────────
export const k8Packages: ProductPackage[] = [
  {
    id: 'k8-air-purifier',
    brand: 'k8',
    name: '빌트인공기청정기',
    fullName: 'K8 빌트인공기청정기',
    description: '기아 K8 순정 빌트인공기청정기',
    price: 545000,
    productCost: 490000,
    laborCost: 55000,
    image: '/static/images/sorento-rear-entertainment-dark.jpg',
    sections: []
  }
]

// ── 타스만 (TK) ───────────────────────────────────────────────────
export const tasmanPackages: ProductPackage[] = [
  {
    id: 'tasman-bed-cover',
    brand: 'tasman',
    name: '베드커버',
    fullName: '타스만 베드커버',
    description: '기아 타스만 순정 베드커버',
    price: 2275000,
    productCost: 2000000,
    laborCost: 275000,
    image: '/static/images/tasman-bed-cover.jpg',
    sections: []
  },
  {
    id: 'tasman-sports-bar',
    brand: 'tasman',
    name: '스포츠 바',
    fullName: '타스만 스포츠 바',
    description: '기아 타스만 순정 스포츠 바',
    price: 1715000,
    productCost: 1550000,
    laborCost: 165000,
    image: '/static/images/tasman-sports-bar.jpg',
    sections: []
  },
  {
    id: 'tasman-glass-protector',
    brand: 'tasman',
    name: '글라스 프로텍터 (스포츠 바)',
    fullName: '타스만 글라스 프로텍터',
    description: '기아 타스만 순정 글라스 프로텍터 (스포츠 바 옵션)',
    price: 205000,
    productCost: 150000,
    laborCost: 55000,
    image: '/static/images/tasman-sports-bar2.jpg',
    sections: []
  },
  {
    id: 'tasman-cross-bar',
    brand: 'tasman',
    name: '크로스 바 (스포츠 바)',
    fullName: '타스만 크로스 바',
    description: '기아 타스만 순정 크로스 바 (스포츠 바 옵션)',
    price: 245000,
    productCost: 190000,
    laborCost: 55000,
    image: '/static/images/tasman-bed-slide-rail.jpg',
    sections: []
  },
  {
    id: 'tasman-towbar',
    brand: 'tasman',
    name: '토우히치',
    fullName: '타스만 토우히치',
    description: '기아 타스만 순정 토우히치',
    price: 1515000,
    productCost: 1350000,
    laborCost: 165000,
    image: '/static/images/tasman-towbar.jpg',
    sections: []
  },
  {
    id: 'tasman-board-sidestep',
    brand: 'tasman',
    name: '보드타입 사이드스텝',
    fullName: '타스만 보드타입 사이드스텝',
    description: '기아 타스만 순정 보드타입 사이드스텝',
    price: 730000,
    productCost: 620000,
    laborCost: 110000,
    image: '/static/images/tasman-sidestep.jpg',
    sections: []
  },
  {
    id: 'tasman-offroad-sidestep',
    brand: 'tasman',
    name: '오프로드 스타일 사이드스텝',
    fullName: '타스만 오프로드 스타일 사이드스텝',
    description: '기아 타스만 순정 오프로드 스타일 사이드스텝',
    price: 752000,
    productCost: 620000,
    laborCost: 132000,
    image: '/static/images/tasman-offroad-sidestep.jpg',
    sections: []
  },
  {
    id: 'tasman-offroad-wheel',
    brand: 'tasman',
    name: '오프로드 스타일 휠',
    fullName: '타스만 오프로드 스타일 휠',
    description: '기아 타스만 순정 오프로드 스타일 휠',
    price: 1165000,
    productCost: 1000000,
    laborCost: 165000,
    image: '/static/images/tasman-offroad-wheel.jpg',
    sections: []
  },
  {
    id: 'tasman-mud-guard',
    brand: 'tasman',
    name: '머드 가드',
    fullName: '타스만 머드 가드',
    description: '기아 타스만 순정 머드 가드',
    price: 123000,
    productCost: 90000,
    laborCost: 33000,
    image: '/static/images/tasman-mud-guard.jpg',
    sections: []
  },
  {
    id: 'tasman-bed-mullipanel',
    brand: 'tasman',
    name: '베드 물리패널',
    fullName: '타스만 베드 물리패널',
    description: '기아 타스만 순정 베드 물리패널',
    price: 477000,
    productCost: 400000,
    laborCost: 77000,
    image: '/static/images/tasman-bed-mullipanal.jpg',
    sections: []
  }
]

export const milwaukeePackages: ProductPackage[] = [];
export const kiaPackages: ProductPackage[] = [];
export const workspacePackages: ProductPackage[] = [];

export const allPackages: ProductPackage[] = [
  ...ev9Packages,
  ...carnivalPackages,
  ...sorentoPackages,
  ...sportagePackages,
  ...k8Packages,
  ...tasmanPackages,
];

export function getPackageById(id: string): ProductPackage | undefined {
  return allPackages.find(pkg => pkg.id === id);
}
export function getPackagesByBrand(brand: string): ProductPackage[] {
  return allPackages.filter(pkg => pkg.brand === brand);
}
