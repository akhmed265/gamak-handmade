export interface IProduct {
  id: string
  title: string
  description: string
  priceLarge: number
  priceSmall: number
  productionDays: number
  colors: string[]
  images: Record<string, string[]>
}

