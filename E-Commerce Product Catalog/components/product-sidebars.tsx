"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ShoppingCart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import { useToast } from "@/hooks/use-toast"
import type { Product } from "@/types/product"

export default function ProductSidebars() {
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([])
  const [topSellingProducts, setTopSellingProducts] = useState<Product[]>([])
  const [onSaleProducts, setOnSaleProducts] = useState<Product[]>([])
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([])
  const { addItem } = useCart()
  const { toast } = useToast()

  useEffect(() => {
    fetchSidebarProducts()
  }, [])

  const fetchSidebarProducts = async () => {
    try {
      const response = await fetch("/api/products")
      const products = await response.json()

      setRelatedProducts(products.slice(0, 3))
      setTopSellingProducts(products.filter((p: Product) => p.rating >= 4.5).slice(0, 3))
      setOnSaleProducts(products.filter((p: Product) => p.discount).slice(0, 3))
      setFeaturedProducts(products.filter((p: Product) => p.featured || p.rating >= 4.6).slice(0, 3))
    } catch (error) {
      console.error("Error fetching sidebar products:", error)
    }
  }

  const handleAddToCart = (product: Product) => {
    addItem(product)
    toast({
      title: "Added to cart",
      description: `${product.title} has been added to your cart.`,
    })
  }

  const SidebarSection = ({ title, products }: { title: string; products: Product[] }) => (
    <div>
      <h3 className="text-sm font-semibold mb-4 text-gray-900">{title}</h3>
      <div className="space-y-3">
        {products.map((product) => (
          <div
            key={product._id}
            className="flex items-center gap-3 p-2 bg-white rounded-lg hover:shadow-md transition-shadow"
          >
            <div className="relative w-10 h-10 flex-shrink-0">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                fill
                className="object-cover rounded"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-xs font-semibold text-gray-900 line-clamp-2 mb-1">{product.title}</h4>
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-2 h-2 ${
                      i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="text-xs text-gray-500">(1234)</span>
              </div>
              <div className="text-xs font-semibold text-orange-600">${product.price.toFixed(2)}</div>
            </div>
            <Button size="sm" variant="ghost" onClick={() => handleAddToCart(product)} className="p-1 h-auto">
              <ShoppingCart className="w-4 h-4 text-gray-500 hover:text-gray-900" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SidebarSection title="Related Products (08)" products={relatedProducts} />
          <SidebarSection title="Top Selling Products (08)" products={topSellingProducts} />
          <SidebarSection title="On-Sale Products (08)" products={onSaleProducts} />
          <SidebarSection title="Featured Products (08)" products={featuredProducts} />
        </div>
      </div>
    </section>
  )
}
