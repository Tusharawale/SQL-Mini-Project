// Product Data
const products = [
  {
    id: 1,
    title: "Home Furniture Area Leather Sofa",
    category: "decoration",
    price: 368.0,
    originalPrice: null,
    discount: null,
    image: "https://via.placeholder.com/200x180/8B4513/fff?text=Leather+Sofa",
    featured: false,
    rating: 4.5,
    brand: "benchma",
  },
  {
    id: 2,
    title: "Modern Blue Accent Chair",
    category: "chair",
    price: 168.0,
    originalPrice: 200.0,
    discount: 16,
    image: "https://via.placeholder.com/200x180/4169E1/fff?text=Blue+Chair",
    featured: false,
    rating: 4.2,
    brand: "floyd",
  },
  {
    id: 3,
    title: "High Quality Furniture Hardware S520 Hotel Home",
    category: "chair",
    price: 78.0,
    originalPrice: 98.0,
    discount: 20,
    image: "https://via.placeholder.com/200x180/8B4513/fff?text=Hotel+Chair",
    featured: true,
    rating: 4.8,
    brand: "arterio",
  },
  {
    id: 4,
    title: "Desk Legs Accessories Home Sofa Legs Metal",
    category: "decoration",
    price: 168.0,
    originalPrice: null,
    discount: null,
    image: "https://via.placeholder.com/200x180/D2691E/fff?text=Desk+Legs",
    featured: false,
    rating: 4.0,
    brand: "poly",
  },
  {
    id: 5,
    title: "Quality Assurance Moon Furnitures",
    category: "chair",
    price: 180.0,
    originalPrice: 198.0,
    discount: 9,
    image: "https://via.placeholder.com/200x180/4169E1/fff?text=Moon+Chair",
    featured: false,
    rating: 4.6,
    brand: "floyd",
  },
  {
    id: 6,
    title: "Coffee Union Dining Tables And Chairs Set Solid",
    category: "table",
    price: 168.0,
    originalPrice: null,
    discount: null,
    image: "https://via.placeholder.com/200x180/8B4513/fff?text=Dining+Set",
    featured: false,
    rating: 4.3,
    brand: "benchma",
  },
  {
    id: 7,
    title: "Home Furniture Hardware Aluminium Alloy",
    category: "decoration",
    price: 168.0,
    originalPrice: null,
    discount: null,
    image: "https://via.placeholder.com/200x180/C0C0C0/000?text=Metal+Bucket",
    featured: false,
    rating: 4.1,
    brand: "arterio",
  },
  {
    id: 8,
    title: "Outdoor Pillow Cushion 500 Hours Colorfastness",
    category: "decoration",
    price: 168.0,
    originalPrice: 200.0,
    discount: 16,
    image: "https://via.placeholder.com/200x180/228B22/fff?text=Plant+Pot",
    featured: false,
    rating: 4.4,
    brand: "poly",
  },
  {
    id: 9,
    title: "Hardware Aluminium Alloy Lever Handle Mortise",
    category: "decoration",
    price: 168.0,
    originalPrice: null,
    discount: null,
    image: "https://via.placeholder.com/200x180/DEB887/000?text=Woven+Basket",
    featured: false,
    rating: 4.2,
    brand: "floyd",
  },
  {
    id: 10,
    title: "Cushion For Chair Home Decor Wholesale",
    category: "decoration",
    price: 168.0,
    originalPrice: null,
    discount: null,
    image: "https://via.placeholder.com/200x180/F5DEB3/000?text=Round+Clock",
    featured: false,
    rating: 4.0,
    brand: "benchma",
  },
  {
    id: 11,
    title: "Spray New Home In Addition To Formal Wedding",
    category: "chair",
    price: 180.0,
    originalPrice: 198.0,
    discount: 9,
    image: "https://via.placeholder.com/200x180/4169E1/fff?text=Wedding+Chair",
    featured: false,
    rating: 4.7,
    brand: "arterio",
  },
  {
    id: 12,
    title: "Fashion Design Furniture Hardware",
    category: "decoration",
    price: 168.0,
    originalPrice: null,
    discount: null,
    image: "https://via.placeholder.com/200x180/8B4513/fff?text=Wooden+Basket",
    featured: false,
    rating: 4.3,
    brand: "poly",
  },
  {
    id: 13,
    title: "Round Coffee Table Light Wood",
    category: "table",
    price: 168.0,
    originalPrice: null,
    discount: null,
    image: "https://via.placeholder.com/200x180/DEB887/000?text=Round+Table",
    featured: false,
    rating: 4.5,
    brand: "floyd",
  },
  {
    id: 14,
    title: "Mesh Swivel Chair Director Revolving Mesh",
    category: "chair",
    price: 168.0,
    originalPrice: 200.0,
    discount: 16,
    image: "https://via.placeholder.com/200x180/8B4513/fff?text=Cork+Chair",
    featured: false,
    rating: 4.1,
    brand: "benchma",
  },
  {
    id: 15,
    title: "Design Plain Chipboard Particle Board Price",
    category: "decoration",
    price: 168.0,
    originalPrice: null,
    discount: null,
    image: "https://via.placeholder.com/200x180/8B4513/fff?text=Dog+Decor",
    featured: false,
    rating: 4.2,
    brand: "arterio",
  },
  {
    id: 16,
    title: "Keypad Digital Wireless Cheap Home Furniture Biometric",
    category: "decoration",
    price: 168.0,
    originalPrice: null,
    discount: null,
    image: "https://via.placeholder.com/200x180/000000/fff?text=Black+Basket",
    featured: false,
    rating: 4.0,
    brand: "poly",
  },
  {
    id: 17,
    title: "Custom Large Nordic Boho Macrame Wall",
    category: "decoration",
    price: 168.0,
    originalPrice: 200.0,
    discount: 16,
    image: "https://via.placeholder.com/200x180/8B4513/fff?text=Wall+Decor",
    featured: false,
    rating: 4.6,
    brand: "floyd",
  },
  {
    id: 18,
    title: "Hanging Decoration Hanging Open Glass",
    category: "decoration",
    price: 168.0,
    originalPrice: null,
    discount: null,
    image: "https://via.placeholder.com/200x180/8B4513/fff?text=Cabinet",
    featured: false,
    rating: 4.4,
    brand: "benchma",
  },
  {
    id: 19,
    title: "Amazon Hot Selling Pine Wood Table Lamp",
    category: "lamp",
    price: 168.0,
    originalPrice: null,
    discount: null,
    image: "https://via.placeholder.com/200x180/FFFFFF/000?text=Table+Lamp",
    featured: false,
    rating: 4.3,
    brand: "arterio",
  },
  {
    id: 20,
    title: "Amazon Trending Pine Wood Wooden Chain",
    category: "decoration",
    price: 168.0,
    originalPrice: 200.0,
    discount: 16,
    image: "https://via.placeholder.com/200x180/4682B4/fff?text=Abstract+Art",
    featured: false,
    rating: 4.5,
    brand: "poly",
  },
  {
    id: 21,
    title: "Decor Higher Ranking Home Decoration",
    category: "decoration",
    price: 168.0,
    originalPrice: null,
    discount: null,
    image: "https://via.placeholder.com/200x180/8B4513/fff?text=Pencil+Holder",
    featured: false,
    rating: 4.1,
    brand: "floyd",
  },
  {
    id: 22,
    title: "New Product Peacock Peacock Bird Pattern",
    category: "decoration",
    price: 168.0,
    originalPrice: null,
    discount: null,
    image: "https://via.placeholder.com/200x180/8B4513/fff?text=Toy+Hammer",
    featured: false,
    rating: 4.2,
    brand: "benchma",
  },
  {
    id: 23,
    title: "Decorative Decor Higher Ranking Home",
    category: "decoration",
    price: 168.0,
    originalPrice: 200.0,
    discount: 16,
    image: "https://via.placeholder.com/200x180/228B22/fff?text=Green+Clock",
    featured: false,
    rating: 4.7,
    brand: "arterio",
  },
  {
    id: 24,
    title: "Macrame Wooden Floating Shelf Wall Hanging Decor",
    category: "decoration",
    price: 168.0,
    originalPrice: null,
    discount: null,
    image: "https://via.placeholder.com/200x180/FFFFFF/000?text=Glass+Bottle",
    featured: false,
    rating: 4.4,
    brand: "poly",
  },
]

// Application State
let cart = JSON.parse(localStorage.getItem("cart")) || []
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || []
let filteredProducts = [...products]
let currentPage = 1
const productsPerPage = 20

// DOM Elements
const productsGrid = document.getElementById("products-grid")
const cartBtn = document.getElementById("cart-btn")
const wishlistBtn = document.getElementById("wishlist-btn")
const cartCount = document.getElementById("cart-count")
const wishlistCount = document.getElementById("wishlist-count")
const cartModal = document.getElementById("cart-modal")
const wishlistModal = document.getElementById("wishlist-modal")

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  renderProducts()
  updateCartCount()
  updateWishlistCount()
  setupEventListeners()
  setupCarousel()
  loadSidebarProducts()
})

// Event Listeners Setup
function setupEventListeners() {
  // Search functionality
  const searchInput = document.querySelector(".search-input")
  const searchBtn = document.querySelector(".search-btn")

  searchBtn.addEventListener("click", handleSearch)
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  })

  // Filter functionality
  document.getElementById("category-filter").addEventListener("change", applyFilters)
  document.getElementById("brand-filter").addEventListener("change", applyFilters)
  document.getElementById("discount-filter").addEventListener("change", applyFilters)
  document.getElementById("price-filter").addEventListener("change", applyFilters)
  document.getElementById("sort-filter").addEventListener("change", applyFilters)

  // View toggle
  document.querySelectorAll(".view-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      document.querySelectorAll(".view-btn").forEach((b) => b.classList.remove("active"))
      this.classList.add("active")

      const view = this.dataset.view
      updateGridView(view)
    })
  })

  // Cart and Wishlist modals
  cartBtn.addEventListener("click", () => openModal("cart-modal"))
  wishlistBtn.addEventListener("click", () => openModal("wishlist-modal"))

  document.getElementById("close-cart").addEventListener("click", () => closeModal("cart-modal"))
  document.getElementById("close-wishlist").addEventListener("click", () => closeModal("wishlist-modal"))
  document.getElementById("close-cart-btn").addEventListener("click", () => closeModal("cart-modal"))
  document.getElementById("close-wishlist-btn").addEventListener("click", () => closeModal("wishlist-modal"))

  // Close modals when clicking outside
  document.querySelectorAll(".modal").forEach((modal) => {
    modal.addEventListener("click", function (e) {
      if (e.target === this) {
        this.classList.remove("active")
      }
    })
  })

  // Checkout button
  document.getElementById("checkout-btn").addEventListener("click", handleCheckout)
}

// Search functionality
function handleSearch() {
  const searchTerm = document.querySelector(".search-input").value.toLowerCase()

  if (searchTerm.trim() === "") {
    filteredProducts = [...products]
  } else {
    filteredProducts = products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchTerm) || product.category.toLowerCase().includes(searchTerm),
    )
  }

  currentPage = 1
  renderProducts()
  updatePaginationInfo()
}

// Filter functionality
function applyFilters() {
  const categoryFilter = document.getElementById("category-filter").value
  const brandFilter = document.getElementById("brand-filter").value
  const discountFilter = document.getElementById("discount-filter").value
  const priceFilter = document.getElementById("price-filter").value
  const sortFilter = document.getElementById("sort-filter").value

  filteredProducts = products.filter((product) => {
    // Category filter
    if (categoryFilter && product.category !== categoryFilter) return false

    // Brand filter
    if (brandFilter && product.brand !== brandFilter) return false

    // Discount filter
    if (discountFilter === "all" && !product.discount) return false
    if (discountFilter === "20" && (!product.discount || product.discount < 20)) return false
    if (discountFilter === "30" && (!product.discount || product.discount < 30)) return false

    // Price filter
    if (priceFilter) {
      const [min, max] = priceFilter.split("-").map(Number)
      if (product.price < min || product.price > max) return false
    }

    return true
  })

  // Apply sorting
  if (sortFilter === "price-low") {
    filteredProducts.sort((a, b) => a.price - b.price)
  } else if (sortFilter === "price-high") {
    filteredProducts.sort((a, b) => b.price - a.price)
  } else if (sortFilter === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating)
  } else if (sortFilter === "popularity") {
    filteredProducts.sort((a, b) => b.rating - a.rating)
  }

  currentPage = 1
  renderProducts()
  updatePaginationInfo()
}

// Update grid view
function updateGridView(view) {
  const grid = document.getElementById("products-grid")

  grid.className = "products-grid"

  if (view === "list") {
    grid.style.gridTemplateColumns = "1fr"
  } else if (view === "large") {
    grid.style.gridTemplateColumns = "repeat(auto-fill, minmax(300px, 1fr))"
  } else {
    grid.style.gridTemplateColumns = "repeat(auto-fill, minmax(200px, 1fr))"
  }
}

// Render products
function renderProducts() {
  const startIndex = (currentPage - 1) * productsPerPage
  const endIndex = startIndex + productsPerPage
  const productsToShow = filteredProducts.slice(startIndex, endIndex)

  productsGrid.innerHTML = productsToShow.map((product) => createProductCard(product)).join("")

  // Add event listeners to product cards
  productsToShow.forEach((product) => {
    const addToCartBtn = document.querySelector(`[data-product-id="${product.id}"][data-action="add-to-cart"]`)
    const addToWishlistBtn = document.querySelector(`[data-product-id="${product.id}"][data-action="add-to-wishlist"]`)
    const compareBtn = document.querySelector(`[data-product-id="${product.id}"][data-action="compare"]`)

    if (addToCartBtn) {
      addToCartBtn.addEventListener("click", () => addToCart(product))
    }
    if (addToWishlistBtn) {
      addToWishlistBtn.addEventListener("click", () => addToWishlist(product))
    }
    if (compareBtn) {
      compareBtn.addEventListener("click", () => compareProduct(product))
    }
  })
}

// Create product card HTML
function createProductCard(product) {
  const discountHtml = product.discount ? `<span class="discount-badge">Save ${product.discount}%</span>` : ""

  const originalPriceHtml = product.originalPrice
    ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>`
    : ""

  const featuredClass = product.featured ? "featured" : ""
  const titleClass = product.category === "chair" || product.category === "sofa" ? "blue" : ""

  const featuredActions = product.featured
    ? `
        <div class="product-actions">
            <button class="btn btn-primary" data-product-id="${product.id}" data-action="add-to-cart">
                <i class="fas fa-cart-plus"></i> Add to Cart
            </button>
        </div>
        <div class="product-secondary-actions">
            <button class="secondary-action" data-product-id="${product.id}" data-action="compare">
                <i class="fas fa-exchange-alt"></i> Compare
            </button>
            <button class="secondary-action" data-product-id="${product.id}" data-action="add-to-wishlist">
                <i class="far fa-heart"></i> Wishlist
            </button>
        </div>
    `
    : `
        <div class="product-actions">
            <button class="btn btn-small btn-secondary" data-product-id="${product.id}" data-action="add-to-cart">
                <i class="fas fa-cart-plus"></i>
            </button>
            <button class="btn btn-small btn-secondary" data-product-id="${product.id}" data-action="add-to-wishlist">
                <i class="far fa-heart"></i>
            </button>
        </div>
    `

  return `
        <div class="product-card ${featuredClass}">
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <div class="product-category">${product.category}</div>
            <div class="product-title ${titleClass}">${product.title}</div>
            <div class="product-price">
                ${originalPriceHtml}
                <span class="current-price">$${product.price.toFixed(2)}</span>
                ${discountHtml}
            </div>
            ${featuredActions}
        </div>
    `
}

// Cart functionality
function addToCart(product) {
  const existingItem = cart.find((item) => item.id === product.id)

  if (existingItem) {
    existingItem.quantity += 1
  } else {
    cart.push({
      ...product,
      quantity: 1,
    })
  }

  updateCartCount()
  saveCart()
  showNotification(`${product.title} added to cart!`)
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId)
  updateCartCount()
  saveCart()
  renderCartItems()
}

function updateCartQuantity(productId, quantity) {
  const item = cart.find((item) => item.id === productId)
  if (item) {
    if (quantity <= 0) {
      removeFromCart(productId)
    } else {
      item.quantity = quantity
      updateCartCount()
      saveCart()
      renderCartItems()
    }
  }
}

function updateCartCount() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  cartCount.textContent = totalItems
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart))
}

function renderCartItems() {
  const cartItems = document.getElementById("cart-items")
  const cartTotal = document.getElementById("cart-total")

  if (cart.length === 0) {
    cartItems.innerHTML = '<div class="empty-message">Your cart is empty</div>'
    cartTotal.textContent = "0.00"
    return
  }

  cartItems.innerHTML = cart
    .map(
      (item) => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.title}">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.title}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
                    <input type="number" class="quantity-input" value="${item.quantity}" 
                           onchange="updateCartQuantity(${item.id}, parseInt(this.value))" min="1">
                    <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
        </div>
    `,
    )
    .join("")

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  cartTotal.textContent = total.toFixed(2)
}

// Wishlist functionality
function addToWishlist(product) {
  const existingItem = wishlist.find((item) => item.id === product.id)

  if (!existingItem) {
    wishlist.push(product)
    updateWishlistCount()
    saveWishlist()
    showNotification(`${product.title} added to wishlist!`)
  } else {
    showNotification(`${product.title} is already in your wishlist!`, "error")
  }
}

function removeFromWishlist(productId) {
  wishlist = wishlist.filter((item) => item.id !== productId)
  updateWishlistCount()
  saveWishlist()
  renderWishlistItems()
}

function updateWishlistCount() {
  wishlistCount.textContent = wishlist.length
}

function saveWishlist() {
  localStorage.setItem("wishlist", JSON.stringify(wishlist))
}

function renderWishlistItems() {
  const wishlistItems = document.getElementById("wishlist-items")

  if (wishlist.length === 0) {
    wishlistItems.innerHTML = '<div class="empty-message">Your wishlist is empty</div>'
    return
  }

  wishlistItems.innerHTML = wishlist
    .map(
      (item) => `
        <div class="wishlist-item">
            <img src="${item.image}" alt="${item.title}">
            <div class="wishlist-item-info">
                <div class="wishlist-item-title">${item.title}</div>
                <div class="wishlist-item-price">$${item.price.toFixed(2)}</div>
            </div>
            <div class="wishlist-actions">
                <button class="btn btn-small btn-primary" onclick="addToCart(${JSON.stringify(item).replace(/"/g, "&quot;")})">
                    <i class="fas fa-cart-plus"></i>
                </button>
                <button class="remove-btn" onclick="removeFromWishlist(${item.id})">Remove</button>
            </div>
        </div>
    `,
    )
    .join("")
}

// Compare functionality
function compareProduct(product) {
  showNotification(`${product.title} added to comparison!`)
  // This would typically open a comparison modal or page
  console.log("Compare product:", product)
}

// Modal functionality
function openModal(modalId) {
  const modal = document.getElementById(modalId)
  modal.classList.add("active")

  if (modalId === "cart-modal") {
    renderCartItems()
  } else if (modalId === "wishlist-modal") {
    renderWishlistItems()
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId)
  modal.classList.remove("active")
}

// Checkout functionality
function handleCheckout() {
  if (cart.length === 0) {
    showNotification("Your cart is empty!", "error")
    return
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  // Simulate checkout process
  showNotification("Processing your order...", "info")

  setTimeout(() => {
    cart = []
    updateCartCount()
    saveCart()
    closeModal("cart-modal")
    showNotification(`Order placed successfully! Total: $${total.toFixed(2)} for ${itemCount} items.`)
  }, 2000)
}

// Notification system
function showNotification(message, type = "success") {
  const notification = document.createElement("div")
  notification.className = `notification ${type}`
  notification.textContent = message

  document.body.appendChild(notification)

  setTimeout(() => {
    notification.classList.add("show")
  }, 100)

  setTimeout(() => {
    notification.classList.remove("show")
    setTimeout(() => {
      document.body.removeChild(notification)
    }, 300)
  }, 3000)
}

// Brand carousel functionality
function setupCarousel() {
  const track = document.getElementById("brand-track")
  const prevBtn = document.getElementById("brand-prev")
  const nextBtn = document.getElementById("brand-next")

  let currentPosition = 0
  const slideWidth = 132 // 100px width + 32px gap
  const maxSlides = track.children.length - 6 // Show 6 brands at once

  nextBtn.addEventListener("click", () => {
    if (currentPosition < maxSlides) {
      currentPosition++
      track.style.transform = `translateX(-${currentPosition * slideWidth}px)`
    }
  })

  prevBtn.addEventListener("click", () => {
    if (currentPosition > 0) {
      currentPosition--
      track.style.transform = `translateX(-${currentPosition * slideWidth}px)`
    }
  })

  // Auto-scroll carousel
  setInterval(() => {
    if (currentPosition < maxSlides) {
      currentPosition++
    } else {
      currentPosition = 0
    }
    track.style.transform = `translateX(-${currentPosition * slideWidth}px)`
  }, 3000)
}

// Load sidebar products
function loadSidebarProducts() {
  const relatedProducts = products.slice(0, 3)
  const topSellingProducts = products.filter((p) => p.rating >= 4.5).slice(0, 3)
  const onSaleProducts = products.filter((p) => p.discount).slice(0, 3)
  const featuredProducts = products.filter((p) => p.featured || p.rating >= 4.6).slice(0, 3)

  renderSidebarProducts("related-products", relatedProducts)
  renderSidebarProducts("top-selling-products", topSellingProducts)
  renderSidebarProducts("on-sale-products", onSaleProducts)
  renderSidebarProducts("featured-products", featuredProducts)
}

function renderSidebarProducts(containerId, products) {
  const container = document.getElementById(containerId)

  container.innerHTML = products
    .map(
      (product) => `
        <div class="sidebar-product">
            <img src="${product.image}" alt="${product.title}">
            <div class="sidebar-product-info">
                <div class="sidebar-product-title">${product.title}</div>
                <div class="sidebar-product-rating">
                    ${generateStars(product.rating)}
                    <span>(1234)</span>
                </div>
                <div class="sidebar-product-price">$${product.price.toFixed(2)}</div>
            </div>
            <button class="sidebar-add-btn" onclick="addToCart(${JSON.stringify(product).replace(/"/g, "&quot;")})">
                <i class="fas fa-shopping-cart"></i>
            </button>
        </div>
    `,
    )
    .join("")
}

function generateStars(rating) {
  const fullStars = Math.floor(rating)
  const halfStar = rating % 1 >= 0.5
  let starsHtml = ""

  for (let i = 0; i < fullStars; i++) {
    starsHtml += '<i class="fas fa-star"></i>'
  }

  if (halfStar) {
    starsHtml += '<i class="fas fa-star-half-alt"></i>'
  }

  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0)
  for (let i = 0; i < emptyStars; i++) {
    starsHtml += '<i class="far fa-star"></i>'
  }

  return starsHtml
}

// Update pagination info
function updatePaginationInfo() {
  const startIndex = (currentPage - 1) * productsPerPage + 1
  const endIndex = Math.min(currentPage * productsPerPage, filteredProducts.length)
  const total = filteredProducts.length

  document.getElementById("pagination-info").textContent = `${startIndex}-${endIndex} of ${total} results`
}

// Pagination functionality
document.querySelectorAll(".page-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    if (this.innerHTML.includes("chevron-right")) {
      // Next page
      const totalPages = Math.ceil(filteredProducts.length / productsPerPage)
      if (currentPage < totalPages) {
        currentPage++
        renderProducts()
        updatePaginationInfo()
        updatePaginationButtons()
      }
    } else {
      // Specific page
      const page = Number.parseInt(this.textContent)
      if (page && page !== currentPage) {
        currentPage = page
        renderProducts()
        updatePaginationInfo()
        updatePaginationButtons()
      }
    }
  })
})

function updatePaginationButtons() {
  document.querySelectorAll(".page-btn").forEach((btn) => {
    btn.classList.remove("active")
    if (btn.textContent == currentPage) {
      btn.classList.add("active")
    }
  })
}

// Responsive navigation toggle
function setupMobileNavigation() {
  const navToggle = document.createElement("button")
  navToggle.className = "nav-toggle"
  navToggle.innerHTML = '<i class="fas fa-bars"></i>'
  navToggle.style.display = "none"

  const navigation = document.querySelector(".navigation")
  const navContent = document.querySelector(".nav-content")

  navigation.insertBefore(navToggle, navContent)

  navToggle.addEventListener("click", () => {
    navContent.classList.toggle("mobile-open")
  })

  // Show/hide mobile toggle based on screen size
  function checkScreenSize() {
    if (window.innerWidth <= 768) {
      navToggle.style.display = "block"
    } else {
      navToggle.style.display = "none"
      navContent.classList.remove("mobile-open")
    }
  }

  window.addEventListener("resize", checkScreenSize)
  checkScreenSize()
}

// Initialize mobile navigation
setupMobileNavigation()

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Lazy loading for images
function setupLazyLoading() {
  const images = document.querySelectorAll("img[data-src]")

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src
        img.classList.remove("lazy")
        imageObserver.unobserve(img)
      }
    })
  })

  images.forEach((img) => imageObserver.observe(img))
}

// Performance optimization: Debounce search
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Apply debounce to search
const debouncedSearch = debounce(handleSearch, 300)
document.querySelector(".search-input").addEventListener("input", debouncedSearch)

// Add loading states
function showLoading(element) {
  element.innerHTML = '<div class="loading"></div>'
}

function hideLoading(element, content) {
  element.innerHTML = content
}

// Error handling
window.addEventListener("error", (e) => {
  console.error("JavaScript error:", e.error)
  showNotification("An error occurred. Please refresh the page.", "error")
})

// Service worker registration for offline functionality
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("SW registered: ", registration)
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError)
      })
  })
}

console.log("Avimart E-commerce Website Loaded Successfully!")
