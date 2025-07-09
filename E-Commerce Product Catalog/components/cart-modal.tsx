"use client"

import { Minus, Plus, X } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useCart } from "@/hooks/use-cart"
import { useToast } from "@/hooks/use-toast"

interface CartModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function CartModal({ open, onOpenChange }: CartModalProps) {
  const { items, updateQuantity, removeItem, total } = useCart()
  const { toast } = useToast()

  const handleCheckout = () => {
    if (items.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Add some items to your cart before checking out.",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Order placed!",
      description: `Order total: $${total.toFixed(2)} for ${items.reduce((sum, item) => sum + item.quantity, 0)} items.`,
    })

    // Clear cart after successful checkout
    items.forEach((item) => removeItem(item._id))
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Shopping Cart</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-8 text-gray-500">Your cart is empty</div>
          ) : (
            <>
              {items.map((item) => (
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

                    <div className="flex items-center gap-2 mt-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateQuantity(item._id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <Button size="sm" variant="outline" onClick={() => updateQuantity(item._id, item.quantity + 1)}>
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>

                  <Button size="sm" variant="destructive" onClick={() => removeItem(item._id)}>
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ))}

              <div className="border-t pt-4">
                <div className="flex justify-between items-center text-lg font-semibold">
                  <span>Total: ${total.toFixed(2)}</span>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="flex gap-2 pt-4">
          <Button variant="outline" onClick={() => onOpenChange(false)} className="flex-1">
            Continue Shopping
          </Button>
          <Button onClick={handleCheckout} className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-gray-900">
            Checkout
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
