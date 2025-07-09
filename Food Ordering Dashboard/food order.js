
        // Menu data
        const menuItems = [
            {
                id: 1,
                name: "Margherita Pizza",
                category: "pizza",
                price: 12.99,
                description: "Fresh tomatoes, mozzarella cheese, basil leaves, and olive oil on a crispy crust.",
                rating: 4.8,
                icon: "🍕"
            },
            {
                id: 2,
                name: "Classic Cheeseburger",
                category: "burger",
                price: 9.99,
                description: "Juicy beef patty with cheese, lettuce, tomato, and our special sauce.",
                rating: 4.6,
                icon: "🍔"
            },
            {
                id: 3,
                name: "Spaghetti Carbonara",
                category: "pasta",
                price: 14.99,
                description: "Creamy pasta with bacon, eggs, parmesan cheese, and black pepper.",
                rating: 4.7,
                icon: "🍝"
            },
            {
                id: 4,
                name: "Chocolate Cake",
                category: "dessert",
                price: 6.99,
                description: "Rich chocolate cake with chocolate frosting and chocolate chips.",
                rating: 4.9,
                icon: "🍰"
            },
            {
                id: 5,
                name: "Fresh Orange Juice",
                category: "drink",
                price: 3.99,
                description: "Freshly squeezed orange juice, no added sugar or preservatives.",
                rating: 4.5,
                icon: "🥤"
            },
            {
                id: 6,
                name: "Pepperoni Pizza",
                category: "pizza",
                price: 15.99,
                description: "Classic pepperoni pizza with mozzarella cheese and tomato sauce.",
                rating: 4.7,
                icon: "🍕"
            },
            {
                id: 7,
                name: "BBQ Bacon Burger",
                category: "burger",
                price: 13.99,
                description: "Grilled beef patty with BBQ sauce, bacon, onion rings, and cheese.",
                rating: 4.8,
                icon: "🍔"
            },
            {
                id: 8,
                name: "Penne Arrabbiata",
                category: "pasta",
                price: 11.99,
                description: "Spicy tomato sauce with garlic, red peppers, and fresh herbs.",
                rating: 4.4,
                icon: "🍝"
            },
            {
                id: 9,
                name: "Tiramisu",
                category: "dessert",
                price: 7.99,
                description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone.",
                rating: 4.8,
                icon: "🍰"
            },
            {
                id: 10,
                name: "Iced Coffee",
                category: "drink",
                price: 4.99,
                description: "Cold brew coffee served with ice and your choice of milk.",
                rating: 4.6,
                icon: "☕"
            }
        ];

        // Cart state
        let cart = [];
        let currentCategory = 'all';

        // Initialize the app
        document.addEventListener('DOMContentLoaded', function() {
            renderMenu();
            setupCategoryFilters();
            setupSearch();
        });

        // Render menu items
        function renderMenu(items = menuItems) {
            const menuGrid = document.getElementById('menuGrid');
            menuGrid.innerHTML = '';

            items.forEach(item => {
                const menuItemElement = document.createElement('div');
                menuItemElement.className = `menu-item ${currentCategory !== 'all' && item.category !== currentCategory ? 'hidden' : ''}`;
                menuItemElement.innerHTML = `
                    <div class="menu-item-image">
                        <span style="font-size: 4rem;">${item.icon}</span>
                    </div>
                    <div class="menu-item-content">
                        <div class="menu-item-header">
                            <h3 class="menu-item-name">${item.name}</h3>
                            <span class="menu-item-price">$${item.price}</span>
                        </div>
                        <p class="menu-item-description">${item.description}</p>
                        <div class="menu-item-footer">
                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <span>${item.rating}</span>
                            </div>
                            <button class="add-to-cart" onclick="addToCart(${item.id})">
                                <i class="fas fa-plus"></i>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                `;
                menuGrid.appendChild(menuItemElement);
            });
        }

        // Setup category filters
        function setupCategoryFilters() {
            const categoryCards = document.querySelectorAll('.category-card');
            categoryCards.forEach(card => {
                card.addEventListener('click', function() {
                    // Remove active class from all cards
                    categoryCards.forEach(c => c.classList.remove('active'));
                    // Add active class to clicked card
                    this.classList.add('active');
                    
                    // Filter menu items
                    currentCategory = this.dataset.category;
                    filterMenu(currentCategory);
                });
            });
        }

        // Filter menu items
        function filterMenu(category) {
            const menuItems = document.querySelectorAll('.menu-item');
            menuItems.forEach(item => {
                if (category === 'all') {
                    item.classList.remove('hidden');
                } else {
                    const itemCategory = getItemCategory(item);
                    if (itemCategory === category) {
                        item.classList.remove('hidden');
                    } else {
                        item.classList.add('hidden');
                    }
                }
            });
        }

        // Get item category from menu data
        function getItemCategory(itemElement) {
            const itemName = itemElement.querySelector('.menu-item-name').textContent;
            const item = menuItems.find(i => i.name === itemName);
            return item ? item.category : '';
        }

        // Setup search functionality
        function setupSearch() {
            const searchInput = document.getElementById('searchInput');
            searchInput.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase();
                searchFood(searchTerm);
            });
        }

        // Search food items
        function searchFood(searchTerm = '') {
            if (!searchTerm) {
                searchTerm = document.getElementById('searchInput').value.toLowerCase();
            }
            
            const filteredItems = menuItems.filter(item => 
                item.name.toLowerCase().includes(searchTerm) ||
                item.description.toLowerCase().includes(searchTerm) ||
                item.category.toLowerCase().includes(searchTerm)
            );
            
            renderMenu(filteredItems);
        }

        // Add item to cart
        function addToCart(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    if (!item) return;

    const existingItem = cart.find(i => i.id === itemId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }

    // ✅ Save to DB
    fetch('add_to_cart.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
    })
    .then(res => res.json())
    .then(data => {
        if (data.status === "success") {
            console.log("Item added to database");
        } else {
            console.error("DB error:", data.msg);
        }
    });

    updateCartUI();
    showSuccessMessage();
}


        // Remove item from cart
        function removeFromCart(itemId) {
            cart = cart.filter(item => item.id !== itemId);
            updateCartUI();
        }

        // Update item quantity
        function updateQuantity(itemId, change) {
            const item = cart.find(i => i.id === itemId);
            if (!item) return;

            item.quantity += change;
            if (item.quantity <= 0) {
                removeFromCart(itemId);
            } else {
                updateCartUI();
            }
        }

        // Update cart UI
        function updateCartUI() {
            const cartCount = document.getElementById('cartCount');
            const cartItems = document.getElementById('cartItems');
            const cartTotal = document.getElementById('cartTotal');
            const checkoutBtn = document.getElementById('checkoutBtn');

            // Update cart count
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;

            // Update cart items
            if (cart.length === 0) {
                cartItems.innerHTML = `
                    <div class="empty-cart">
                        <i class="fas fa-shopping-cart"></i>
                        <p>Your cart is empty</p>
                        <p>Add some delicious items!</p>
                    </div>
                `;
                checkoutBtn.disabled = true;
            } else {
                cartItems.innerHTML = cart.map(item => `
                    <div class="cart-item">
                        <div class="cart-item-image">
                            ${item.icon}
                        </div>
                        <div class="cart-item-details">
                            <div class="cart-item-name">${item.name}</div>
                            <div class="cart-item-price">$${item.price}</div>
                            <div class="quantity-controls">
                                <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">
                                    <i class="fas fa-minus"></i>
                                </button>
                                <span class="quantity">${item.quantity}</span>
                                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">
                                    <i class="fas fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                `).join('');
                checkoutBtn.disabled = false;
            }

            // Update total
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            cartTotal.textContent = `$${total.toFixed(2)}`;
        }

        // Toggle cart sidebar
        function toggleCart() {
            const cartSidebar = document.getElementById('cartSidebar');
            const overlay = document.getElementById('overlay');
            
            cartSidebar.classList.toggle('open');
            overlay.classList.toggle('active');
        }

        // Show success message
        function showSuccessMessage() {
            const successMessage = document.getElementById('successMessage');
            successMessage.classList.add('show');
            setTimeout(() => {
                successMessage.classList.remove('show');
            }, 2000);
        }

        // Checkout function
        function checkout() {
            if (cart.length === 0) return;

            const checkoutBtn = document.getElementById('checkoutBtn');
            const originalText = checkoutBtn.innerHTML;
            
            // Show loading state
            checkoutBtn.innerHTML = '<div class="loading"></div> Processing...';
            checkoutBtn.disabled = true;

            // Simulate checkout process
            setTimeout(() => {
                alert(`Order placed successfully! Total: $${cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}\n\nThank you for your order! We'll deliver it soon.`);
                
                // Clear cart
                cart = [];
                updateCartUI();
                toggleCart();
                
                // Reset button
                checkoutBtn.innerHTML = originalText;
                checkoutBtn.disabled = false;
            }, 2000);
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Close cart when clicking outside
        document.addEventListener('click', function(e) {
            const cartSidebar = document.getElementById('cartSidebar');
            const cartBtn = document.querySelector('.cart-btn');
            
            if (!cartSidebar.contains(e.target) && !cartBtn.contains(e.target) && cartSidebar.classList.contains('open')) {
                toggleCart();
            }
        });

        // Handle escape key to close cart
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                const cartSidebar = document.getElementById('cartSidebar');
                if (cartSidebar.classList.contains('open')) {
                    toggleCart();
                }
            }
        });
   