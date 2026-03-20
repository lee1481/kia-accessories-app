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
  price: number;
  image: string;
  sections: PackageSection[];
  hasPositionOption?: boolean;
  isCustom?: boolean;
}
export const milwaukeePackages: ProductPackage[] = [];
export const kiaPackages: ProductPackage[] = [];
export const workspacePackages: ProductPackage[] = [];
export const allPackages: ProductPackage[] = [];
export function getPackageById(id: string): ProductPackage | undefined {
  return allPackages.find(pkg => pkg.id === id);
}
export function getPackagesByBrand(brand: string): ProductPackage[] {
  return allPackages.filter(pkg => pkg.brand === brand);
}
