"use client"

import { useState, useEffect } from "react"
import { Grid, List, LayoutGrid } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ProductCard from "./product-card"
import type { Product } from "@/types/product"

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [viewMode, setViewMode] = useState<"grid" | "list" | "large">("grid")
  const [filters, setFilters] = useState({
    category: "all",
    brand: "all",
    discount: "all",
    price: "all",
    sort: "default",
  })

  useEffect(() => {
    fetchProducts()
  }, [])

  useEffect(() => {
    applyFilters()
  }, [products, filters])

  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/products")
      const data = await response.json()
      setProducts(data)
      setFilteredProducts(data)
    } catch (error) {
      console.error("Error fetching products:", error)
    } finally {
      setLoading(false)
    }
  }

  const applyFilters = () => {
    let filtered = [...products]

    // Apply category filter
    if (filters.category !== "all") {
      filtered = filtered.filter((product) => product.category === filters.category)
    }

    // Apply brand filter
    if (filters.brand !== "all") {
      filtered = filtered.filter((product) => product.brand === filters.brand)
    }

    // Apply discount filter
    if (filters.discount === "all") {
      filtered = filtered.filter((product) => product.discount && product.discount > 0)
    } else if (filters.discount) {
      const discountValue = Number.parseInt(filters.discount)
      filtered = filtered.filter((product) => product.discount && product.discount >= discountValue)
    }

    // Apply price filter
    if (filters.price !== "all") {
      const [min, max] = filters.price.split("-").map(Number)
      filtered = filtered.filter((product) => product.price >= min && product.price <= max)
    }

    // Apply sorting
    switch (filters.sort) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case "popularity":
        filtered.sort((a, b) => b.rating - a.rating)
        break
    }

    setFilteredProducts(filtered)
  }

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  const getGridClass = () => {
    switch (viewMode) {
      case "list":
        return "grid-cols-1"
      case "large":
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      default:
        return "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-400"></div>
      </div>
    )
  }

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        {/* View Toggle */}
        <div className="flex gap-1">
          <Button variant={viewMode === "grid" ? "default" : "outline"} size="sm" onClick={() => setViewMode("grid")}>
            <Grid className="h-4 w-4" />
          </Button>
          <Button variant={viewMode === "list" ? "default" : "outline"} size="sm" onClick={() => setViewMode("list")}>
            <List className="h-4 w-4" />
          </Button>
          <Button variant={viewMode === "large" ? "default" : "outline"} size="sm" onClick={() => setViewMode("large")}>
            <LayoutGrid className="h-4 w-4" />
          </Button>
        </div>

        {/* Filter Selects */}
        <Select onValueChange={(value) => handleFilterChange("category", value)} value={filters.category}>
          <SelectTrigger className="w-40 text-xs">
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="furniture">Furniture</SelectItem>
            <SelectItem value="decoration">Decoration</SelectItem>
            <SelectItem value="chair">Chair</SelectItem>
            <SelectItem value="table">Table</SelectItem>
            <SelectItem value="lamp">Lamp</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => handleFilterChange("brand", value)} value={filters.brand}>
          <SelectTrigger className="w-40 text-xs">
            <SelectValue placeholder="Featured Brands" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Brands</SelectItem>
            <SelectItem value="benchma">Benchma</SelectItem>
            <SelectItem value="floyd">Floyd</SelectItem>
            <SelectItem value="arterio">Arterio</SelectItem>
            <SelectItem value="poly">Poly & Bark</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => handleFilterChange("discount", value)} value={filters.discount}>
          <SelectTrigger className="w-32 text-xs">
            <SelectValue placeholder="Discount" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="all-discounted">All Discounted</SelectItem>
            <SelectItem value="20">20% Off</SelectItem>
            <SelectItem value="30">30% Off</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => handleFilterChange("price", value)} value={filters.price}>
          <SelectTrigger className="w-32 text-xs">
            <SelectValue placeholder="By Price" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Prices</SelectItem>
            <SelectItem value="50-250">$50-$250</SelectItem>
            <SelectItem value="250-500">$250-$500</SelectItem>
            <SelectItem value="500-750">$500-$750</SelectItem>
            <SelectItem value="750-1000">$750-$1000</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => handleFilterChange("sort", value)} value={filters.sort}>
          <SelectTrigger className="w-40 text-xs">
            <SelectValue placeholder="Default Sorting" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Default Sorting</SelectItem>
            <SelectItem value="popularity">Sort by popularity</SelectItem>
            <SelectItem value="rating">Sort by rating</SelectItem>
            <SelectItem value="price-low">Price: low to high</SelectItem>
            <SelectItem value="price-high">Price: high to low</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Products Grid */}
      <div className={`grid gap-4 mb-8 ${getGridClass()}`}>
        {filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} viewMode={viewMode} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center text-xs">
        <span>
          1-{filteredProducts.length} of {filteredProducts.length} results
        </span>
        <div className="flex gap-1">
          <Button variant="default" size="sm" className="bg-yellow-400 text-gray-900">
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <Button variant="outline" size="sm">
            →
          </Button>
        </div>
      </div>
    </div>
  )
}
