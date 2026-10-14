// ================================
// 1. PRODUCTOS
// ================================
// Todos los productos están guardados en este arreglo.
// Para agregar o cambiar productos, se modifica esta parte.

const products = [
  {
    id: 1,
    name: "Remera Aura",
    price: 18900,
    category: "Ropa",
    description: "Remera básica de algodón, cómoda y fácil de combinar.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 2,
    name: "Buzo Nube",
    price: 32500,
    category: "Ropa",
    description: "Buzo suave de corte amplio para un look relajado.",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 3,
    name: "Jean Nova",
    price: 44900,
    category: "Ropa",
    description: "Jean clásico de tiro medio y corte recto.",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 4,
    name: "Campera Roma",
    price: 57900,
    category: "Ropa",
    description: "Campera liviana para completar cualquier outfit.",
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 5,
    name: "Pollera Siena",
    price: 28900,
    category: "Ropa",
    description: "Pollera corta con diseño simple y moderno.",
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 6,
    name: "Top Cielo",
    price: 16900,
    category: "Ropa",
    description: "Top liviano para combinar con jeans o polleras.",
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 7,
    name: "Bolso Mía",
    price: 26900,
    category: "Accesorios",
    description: "Bolso compacto para llevar lo esencial todos los días.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 8,
    name: "Gorra Club",
    price: 14900,
    category: "Accesorios",
    description: "Gorra clásica con visera curva y diseño minimalista.",
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 9,
    name: "Cinturón Alba",
    price: 11900,
    category: "Accesorios",
    description: "Cinturón sencillo para sumar un detalle al look.",
    image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 10,
    name: "Bufanda París",
    price: 17400,
    category: "Accesorios",
    description: "Bufanda suave y liviana para los días frescos.",
    image: "https://images.unsplash.com/photo-1609803384069-19f3d0e0b3f6?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 11,
    name: "Zapatillas Base",
    price: 52900,
    category: "Calzado",
    description: "Zapatillas urbanas pensadas para usar todos los días.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 12,
    name: "Botas Siena",
    price: 64900,
    category: "Calzado",
    description: "Botas de estilo urbano para completar outfits de invierno.",
    image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=700&q=80"
  }
];

// ================================
// 2. VARIABLES
// ================================

let cart = JSON.parse(localStorage.getItem("luneCart")) || [];
let favorites = JSON.parse(localStorage.getItem("luneFavorites")) || [];
let darkMode = localStorage.getItem("luneDarkMode") === "true";
let selectedCategory = "Todos";
let discountPercent = 0;

// Elementos del HTML
const productGrid = document.getElementById("productGrid");
const categoriesContainer = document.getElementById("categories");
const searchInput = document.getElementById("searchInput");
const cartPanel = document.getElementById("cartPanel");
const overlay = document.getElementById("overlay");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const subtotalElement = document.getElementById("subtotal");
const discountAmountElement = document.getElementById("discountAmount");
const cartTotalElement = document.getElementById("cartTotal");
const toast = document.getElementById("toast");

// ================================
// 3. MOSTRAR PRODUCTOS
// ================================

function showProducts() {
  const searchText = searchInput.value.toLowerCase();

  // Filtramos por categoría y por texto de búsqueda.
  const filteredProducts = products.filter(product => {
    const matchesCategory =
      selectedCategory === "Todos" || product.category === selectedCategory;

    const matchesSearch =
      product.name.toLowerCase().includes(searchText);

    return matchesCategory && matchesSearch;
  });

  productGrid.innerHTML = "";

  if (filteredProducts.length === 0) {
    document.getElementById("productMessage").textContent =
      "No encontramos productos con esa búsqueda.";
    return;
  }

  document.getElementById("productMessage").textContent = "";

  filteredProducts.forEach(product => {
    const isFavorite = favorites.includes(product.id);

    productGrid.innerHTML += `
      <article class="product-card">
        <img class="product-image" src="${product.image}" alt="${product.name}">
        <div class="product-info">
          <div class="product-top">
            <div>
              <p class="product-name">${product.name}</p>
              <p class="product-category">${product.category}</p>
            </div>
            <button class="favorite-btn ${isFavorite ? "active" : ""}"
              onclick="toggleFavorite(${product.id})"
              aria-label="Agregar a favoritos">
              ${isFavorite ? "♥" : "♡"}
            </button>
          </div>

          <p class="product-description">${product.description}</p>

          <div class="product-bottom">
            <span class="product-price">${formatPrice(product.price)}</span>
            <button class="add-btn" onclick="addToCart(${product.id})">
              Agregar
            </button>
          </div>
        </div>
      </article>
    `;
  });
}

// ================================
// 4. CATEGORÍAS
// ================================

function showCategories() {
  const categories = ["Todos", ...new Set(products.map(product => product.category))];

  categoriesContainer.innerHTML = categories.map(category => `
    <button
      class="category-btn ${category === selectedCategory ? "active" : ""}"
      onclick="filterByCategory('${category}')">
      ${category}
    </button>
  `).join("");
}

function filterByCategory(category) {
  selectedCategory = category;
  showCategories();
  showProducts();
}

// ================================
// 5. CARRITO
// ================================

function addToCart(productId) {
  const product = products.find(product => product.id === productId);
  const existingProduct = cart.find(item => item.id === productId);

  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    cart.push({
      ...product,
      quantity: 1
    });
  }

  saveCart();
  showCart();
  showToast(`${product.name} fue agregado al carrito.`);
}

function changeQuantity(productId, change) {
  const item = cart.find(product => product.id === productId);

  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {
    removeFromCart(productId);
    return;
  }

  saveCart();
  showCart();
}

function removeFromCart(productId) {
  cart = cart.filter(product => product.id !== productId);
  saveCart();
  showCart();
  showToast("Producto eliminado del carrito.");
}

function showCart() {
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <p class="empty-cart">
        Tu carrito está vacío.<br>
        ¡Agregá algún producto para empezar!
      </p>
    `;
  } else {
    cart.forEach(item => {
      cartItems.innerHTML += `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}">
          <div class="cart-item-info">
            <h3>${item.name}</h3>
            <p class="cart-item-price">${formatPrice(item.price)}</p>

            <div class="quantity-row">
              <button onclick="changeQuantity(${item.id}, -1)">−</button>
              <span>${item.quantity}</span>
              <button onclick="changeQuantity(${item.id}, 1)">+</button>
              <button class="remove-btn" onclick="removeFromCart(${item.id})">
                Eliminar
              </button>
            </div>
          </div>
        </div>
      `;
    });
  }

  updateTotals();
  updateCartCount();
}

// ================================
// 6. TOTAL Y DESCUENTO
// ================================

function updateTotals() {
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const discount = subtotal * (discountPercent / 100);
  const total = subtotal - discount;

  subtotalElement.textContent = formatPrice(subtotal);
  discountAmountElement.textContent = formatPrice(discount);
  cartTotalElement.textContent = formatPrice(total);
}

function applyDiscount() {
  const code = document.getElementById("discountInput").value.trim().toUpperCase();
  const message = document.getElementById("discountMessage");

  // Estos son los códigos disponibles para el proyecto.
  const discounts = {
    LUNE10: 10,
    LUNE20: 20,
    BIENVENIDA: 15
  };

  if (discounts[code]) {
    discountPercent = discounts[code];
    message.textContent = `Código aplicado: ${discountPercent}% de descuento.`;
    updateTotals();
    showToast("Descuento aplicado.");
  } else {
    discountPercent = 0;
    message.textContent = "Código no válido.";
    updateTotals();
  }
}

// ================================
// 7. FAVORITOS
// ================================

function toggleFavorite(productId) {
  if (favorites.includes(productId)) {
    favorites = favorites.filter(id => id !== productId);
    showToast("Eliminado de favoritos.");
  } else {
    favorites.push(productId);
    showToast("Agregado a favoritos.");
  }

  localStorage.setItem("luneFavorites", JSON.stringify(favorites));
  showProducts();
}

// ================================
// 8. LOCALSTORAGE
// ================================

// Guardamos el carrito para que no desaparezca al recargar la página.
function saveCart() {
  localStorage.setItem("luneCart", JSON.stringify(cart));
}

function updateCartCount() {
  const totalProducts = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  cartCount.textContent = totalProducts;
}

// ================================
// 9. MODO OSCURO
// ================================

function toggleDarkMode() {
  darkMode = !darkMode;
  document.body.classList.toggle("dark", darkMode);

  localStorage.setItem("luneDarkMode", darkMode);
  document.getElementById("themeBtn").textContent = darkMode ? "☀️" : "🌙";
}

function loadDarkMode() {
  document.body.classList.toggle("dark", darkMode);
  document.getElementById("themeBtn").textContent = darkMode ? "☀️" : "🌙";
}

// ================================
// 10. MENSAJES
// ================================

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

// ================================
// 11. FORMATO DE PRECIOS
// ================================

function formatPrice(price) {
  return "$" + price.toLocaleString("es-AR");
}

// ================================
// 12. EVENTOS
// ================================

searchInput.addEventListener("input", showProducts);

document.getElementById("cartBtn").addEventListener("click", () => {
  cartPanel.classList.add("open");
  overlay.classList.add("show");
});

function closeCart() {
  cartPanel.classList.remove("open");
  overlay.classList.remove("show");
}

document.getElementById("closeCart").addEventListener("click", closeCart);
overlay.addEventListener("click", closeCart);

document.getElementById("themeBtn").addEventListener("click", toggleDarkMode);
document.getElementById("discountBtn").addEventListener("click", applyDiscount);

document.getElementById("checkoutBtn").addEventListener("click", () => {
  if (cart.length === 0) {
    showToast("El carrito está vacío.");
    return;
  }

  showToast("Compra simulada correctamente.");
});

// ================================
// 13. INICIO DE LA PÁGINA
// ================================

loadDarkMode();
showCategories();
showProducts();
showCart();
