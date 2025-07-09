"use client"

import { useState } from "react"
import Image from "next/image"
import { ShoppingCart, Heart, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/hooks/use-cart"
import { useWishlist } from "@/hooks/use-wishlist"
import { useToast } from "@/hooks/use-toast"
import type { Product } from "@/types/product"

interface ProductCardProps {
  product: Product
  viewMode?: "grid" | "list" | "large"
}

export default function ProductCard({ product, viewMode = "grid" }: ProductCardProps) {
  const { addItem } = useCart()
  const { addItem: addToWishlist, items: wishlistItems } = useWishlist()
  const { toast } = useToast()
  const [imageLoading, setImageLoading] = useState(true)

  const isInWishlist = wishlistItems.some((item) => item._id === product._id)

  const handleAddToCart = () => {
    addItem(product)
    toast({
      title: "Added to cart",
      description: `${product.title} has been added to your cart.`,
    })
  }

  const handleAddToWishlist = () => {
    if (!isInWishlist) {
      addToWishlist(product)
      toast({
        title: "Added to wishlist",
        description: `${product.title} has been added to your wishlist.`,
      })
    }
  }

  const cardClass = viewMode === "list" ? "flex gap-4 p-4" : "flex flex-col p-3"

  const imageClass = viewMode === "list" ? "w-24 h-24 flex-shrink-0" : "w-full h-44 mb-2"

  return (
    <div
      className={`border rounded-lg bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${product.featured ? "bg-yellow-50 border-yellow-400" : "border-gray-200"} ${cardClass}`}
    >
      <div className={`relative ${imageClass}`}>
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.title}
          fill
          className={`object-cover rounded ${imageLoading ? "blur-sm" : "blur-0"} transition-all duration-300`}
          onLoad={() => setImageLoading(false)}
        />
        {product.discount && (
          <Badge className="absolute top-2 right-2 bg-red-500 text-white text-xs">Save {product.discount}%</Badge>
        )}
      </div>

      <div className="flex-1">
        <div className="text-xs uppercase text-gray-500 font-semibold mb-1">{product.category}</div>

        <h3
          className={`font-semibold text-gray-900 mb-2 line-clamp-2 ${
            product.category === "chair" ? "text-blue-600" : ""
          } ${viewMode === "list" ? "text-sm" : "text-xs"}`}
        >
          {product.title}
        </h3>

        <div className="flex items-center gap-2 mb-3">
          {product.originalPrice && (
            <span className="text-xs text-red-600 line-through">${product.originalPrice.toFixed(2)}</span>
          )}
          <span className="text-sm font-semibold text-orange-600">${product.price.toFixed(2)}</span>
        </div>

        {product.featured ? (
          <div className="space-y-2">
            <Button
              onClick={handleAddToCart}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-xs"
            >
              <ShoppingCart className="w-3 h-3 mr-1" />
              Add to Cart
            </Button>
            <div className="flex justify-between text-xs">
              <button className="flex items-center gap-1 text-gray-500 hover:text-gray-900">
                <BarChart3 className="w-3 h-3" />
                Compare
              </button>
              <button
                onClick={handleAddToWishlist}
                className={`flex items-center gap-1 hover:text-gray-900 ${
                  isInWishlist ? "text-red-500" : "text-gray-500"
                }`}
              >
                <Heart className={`w-3 h-3 ${isInWishlist ? "fill-current" : ""}`} />
                Wishlist
              </button>
            </div>
          </div>
        ) : (
          <div className="flex gap-2">
            <Button onClick={handleAddToCart} size="sm" variant="outline" className="flex-1 text-xs bg-transparent">
              <ShoppingCart className="w-3 h-3" />
            </Button>
            <Button
              onClick={handleAddToWishlist}
              size="sm"
              variant="outline"
              className={`flex-1 text-xs ${isInWishlist ? "text-red-500 border-red-500" : ""}`}
            >
              <Heart className={`w-3 h-3 ${isInWishlist ? "fill-current" : ""}`} />
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
