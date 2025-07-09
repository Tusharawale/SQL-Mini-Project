"use client"

import { X, ShoppingCart } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useWishlist } from "@/hooks/use-wishlist"
import { useCart } from "@/hooks/use-cart"
import { useToast } from "@/hooks/use-toast"

interface WishlistModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function WishlistModal({ open, onOpenChange }: WishlistModalProps) {
  const { items, removeItem } = useWishlist()
  const { addItem } = useCart()
  const { toast } = useToast()

  const handleAddToCart = (item: any) => {
    addItem(item)
    toast({
      title: "Added to cart",
      description: `${item.title} has been added to your cart.`,
    })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Wishlist</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-8 text-gray-500">Your wishlist is empty</div>
          ) : (
            items.map((item) => (
              <div key={item._id} className="flex items-center gap-4 p-4 border-b">
                <div className="relative w-16 h-16">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover rounded"
                  />
                </div>

                <div className="flex-1">
                  <h4 className="font-semibold text-sm">{item.title}</h4>
                  <p className="text-orange-600 font-semibold">${item.price.toFixed(2)}</p>
                </div>

                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={() => handleAddToCart(item)}
                    className="bg-yellow-400 hover:bg-yellow-500 text-gray-900"
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => removeItem(item._id)}>
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="flex justify-end pt-4">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
