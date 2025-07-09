import Header from "@/components/header"
import Navigation from "@/components/navigation"
import ProductGrid from "@/components/product-grid"
import BrandCarousel from "@/components/brand-carousel"
import ProductSidebars from "@/components/product-sidebars"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />
      <main className="py-4">
        <div className="container mx-auto px-4">
          <div className="text-xs text-gray-500 mb-2">Home / Furniture & Decoration</div>
          <h1 className="text-lg font-semibold text-gray-900 mb-4">Furniture & Decoration</h1>
          <ProductGrid />
        </div>
      </main>
      <BrandCarousel />
      <ProductSidebars />
      <Footer />
    </div>
  )
}
