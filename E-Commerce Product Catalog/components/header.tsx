"use client"

import { useState } from "react"
import { Search, User, Heart, ShoppingCart, Gift, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/hooks/use-cart"
import { useWishlist } from "@/hooks/use-wishlist"
import CartModal from "./cart-modal"
import WishlistModal from "./wishlist-modal"

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showCart, setShowCart] = useState(false)
  const [showWishlist, setShowWishlist] = useState(false)
  const { items: cartItems } = useCart()
  const { items: wishlistItems } = useWishlist()

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const wishlistCount = wishlistItems.length

  return (
    <>
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2 gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2 font-semibold text-gray-900">
              <Gift className="h-6 w-6" />
              <span>Avimart</span>
            </div>

            {/* Search Section */}
            <div className="flex items-center flex-1 max-w-2xl">
              <Button variant="outline" className="rounded-r-none border-r-0 text-xs bg-transparent">
                Find Stores <ChevronDown className="ml-1 h-3 w-3" />
              </Button>
              <Select>
                <SelectTrigger className="rounded-none border-x-0 text-xs">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="furniture">Furniture</SelectItem>
                  <SelectItem value="outdoor">Outdoor</SelectItem>
                  <SelectItem value="mattresses">Mattresses</SelectItem>
                  <SelectItem value="rugs">Rugs</SelectItem>
                  <SelectItem value="lighting">Lighting</SelectItem>
                </SelectContent>
              </Select>
              <Input
                type="search"
                placeholder="Search for products"
                className="rounded-none border-x-0 text-xs"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button className="rounded-l-none bg-yellow-400 hover:bg-yellow-500 text-gray-900">
                <Search className="h-4 w-4" />
              </Button>
            </div>

            {/* User Actions */}
            <div className="flex items-center gap-6">
              <Button variant="ghost" className="flex flex-col items-center text-xs p-1">
                <User className="h-5 w-5 mb-1" />
                <span>Account</span>
              </Button>
              <Button
                variant="ghost"
                className="flex flex-col items-center text-xs p-1 relative"
                onClick={() => setShowWishlist(true)}
              >
                <Heart className="h-5 w-5 mb-1" />
                <span>Wishlist</span>
                {wishlistCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 text-xs bg-red-500">{wishlistCount}</Badge>
                )}
              </Button>
              <Button
                variant="ghost"
                className="flex flex-col items-center text-xs p-1 relative"
                onClick={() => setShowCart(true)}
              >
                <ShoppingCart className="h-5 w-5 mb-1" />
                <span>Cart</span>
                {cartCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 text-xs bg-red-500">{cartCount}</Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <CartModal open={showCart} onOpenChange={setShowCart} />
      <WishlistModal open={showWishlist} onOpenChange={setShowWishlist} />
    </>
  )
}
