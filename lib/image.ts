const CDN_BASE = "https://img.varden.se/varden.se/b2b";

export function cdnImage(
  category: string,
  name: string,
  width: 320 | 768 | 1536 | 2048 = 1536
): string {
  return `${CDN_BASE}/${category}/${name}--${width}x${width}.webp`;
}

export function cdnHero(name: string, width: number, height: number): string {
  return `${CDN_BASE}/hero/${name}--${width}x${height}.webp`;
}

export function cdnProduct(name: string, width: number, height: number): string {
  return `${CDN_BASE}/product/${name}--${width}x${height}.webp`;
}
