export interface Product {
  _id: string
  title: string
  category: string
  price: number
  originalPrice?: number
  discount?: number
  image: string
  featured: boolean
  rating: number
  brand: string
  description?: string
  inStock: boolean
  createdAt: Date
  updatedAt: Date
}
