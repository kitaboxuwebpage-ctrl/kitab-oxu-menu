async function loadComponent(targetId, filePath) {
  const target = document.getElementById(targetId);
  const res = await fetch(filePath);
  target.innerHTML = await res.text();
}

let cartPanel;
let overlay;

(async function init() {
  await loadComponent("topbar", "components/topbar.html");
  await loadComponent("categories", "components/categories.html");
  await loadComponent("products", "components/products.html");
  await loadComponent("bottombar", "components/bottombar.html");

  cartPanel = document.getElementById("cartPanel");
  overlay = document.getElementById("overlay");
})();

const products = {
  1: { id: 1, name: "Americano/Iced", price: 3.0, image: "assets/americano.avif" },
  2: { id: 2, name: "Espresso", price: 2.0, image: "assets/espresso.jpeg" },
  3: { id: 3, name: "Caffe Latte/Iced ", price: 3.5, image: "assets/caffe_latte.jpeg" },
  4: { id: 4, name: "Cappuccino", price: 3.5, image: "assets/cappuccino.jpeg" },
  5: { id: 5, name: "Caramel Macchiato", price: 4.5, image: "assets/caramel_macchiato.jpeg" },
  6: { id: 6, name: "Double Espresso", price: 3.0, image: "assets/double_espresso.jpeg" },
  7: { id: 7, name: "Flat White", price: 3.5, image: "assets/flat_white.jpeg" },
  8: { id: 8, name: "Latte Macchiato", price: 3.5, image: "assets/latte_macchiato.jpeg" },
  9: { id: 9, name: "Macchiato", price: 3.5, image: "assets/macchiato.jpeg" },
 10: { id:10, name: "Mocha/Iced ", price: 4.0, image: "assets/mocha_iced.jpeg" },
 11: { id:11, name: "Raf Coffee", price: 4.5, image: "assets/raf_coffee.jpeg" },
 12: { id:12, name: "Kakao", price: 2.5, image: "assets/kakao.jpeg" },
 13: { id:13, name: "İsti Şokolad", price: 4.5, image: "assets/isti_şokolad.jpeg" },
 14: { id:14, name: "İsti Şokolad(Ağ)", price: 4.5, image: "assets/isti_şokolad(ağ).jpeg" },
 15: { id:15, name: "Sahlep", price: 4.0, image: "assets/sahlep.jpeg" },
 16: { id: 16, name: "Çay fincan", price: 0.8, image: "assets/çay_fincan.jpeg" },
 17: { id: 17, name: "Yaşıl çay", price: 0.8, image: "assets/yaşıl_çay.jpeg" },
 18: { id: 18, name: "Bitki çayları", price: 1.0, image: "assets/bitki_çayları.jpeg" },
 19: { id: 19, name: "Qara çay (çaydan)", price: 3.0, image: "assets/çay_çaydan.jpeg" },
 20: { id: 20, name: "Yaşıl çay (çaydan)", price: 3.5, image: "assets/bitki_çaydan.jpeg" },
 21: { id: 21, name: "Bitki çayları (çaydan)", price: 4.0, image: "assets/çay_çaydan(qara çay).jpeg" },
 22: { id: 22, name: "Süd", price: 1.0, image: "assets/süd.jpeg" },
 23: { id: 23, name: "Sirop", price: 1.0, image: "assets/syrup_10.jpg" },
 24: { id: 24, name: "Sirop (Premium)", price: 1.2, image: "assets/syrup_12.jpg" },
 25: { id: 25, name: "Cola / Fanta / Sprite (0.5)", price: 2.0, image: "assets/colafantasprite_0.5.jpeg" },
 26: { id: 26, name: "Cola / Fanta / Sprite (0.33)", price: 2.5, image: "assets/colafantasprite_0.33.jpeg" },
 27: { id: 27, name: "Cola (1 lt)", price: 3.0, image: "assets/cola_1lt.jpeg" },
 28: { id: 28, name: "Fuse Tea (0.5)", price: 2.5, image: "assets/fuse_tea_0.5.jpeg" },
 29: { id: 29, name: "Cappy (0.5)", price: 2.5, image: "assets/cappy_0.5.jpeg" },
 30: { id: 30, name: "Su (qazlı / qazsız)", price: 1.0, image: "assets/su_(qazlı, qazsız).jpeg" },
 31: { id: 31, name: "Şokolad (3 top)", price: 3.0, image: "assets/sokolad_3top.jpeg" },
 32: { id: 32, name: "Çiyələk (3 top)", price: 3.0, image: "assets/ciyelek_3top.jpeg" },
 33: { id: 33, name: "Vanil (3 top)", price: 3.0, image: "assets/vanil_3top.jpeg" },
 34: { id: 34, name: "Banan (3 top)", price: 3.0, image: "assets/banan_3top.jpeg" },
 35: { id: 35, name: "Portağal (0.25l)", price: 1.5, image: "assets/portagal_0.25l.jpeg" },
 36: { id: 36, name: "Gilas (0.25l)", price: 1.5, image: "assets/gilas_0.25l.jpeg" },
 37: { id: 37, name: "Şaftalı (0.25l)", price: 1.5, image: "assets/saftali_0.25l.jpeg" },
 38: { id: 38, name: "Mango (0.25l)", price: 1.5, image: "assets/mango_0.25l.jpeg" },
 39: { id: 39, name: "Alma (0.25l)", price: 1.5, image: "assets/alma_0.25l.jpeg" },
 40: { id: 40, name: "Grenadine", price: 4.0, image: "assets/grenadine.jpeg" },
 41: { id: 41, name: "Çiyələk", price: 4.0, image: "assets/ciyelek.jpeg" },
 42: { id: 42, name: "Banan", price: 4.0, image: "assets/banan.jpeg" },
 43: { id: 43, name: "Kivi", price: 4.0, image: "assets/kivi.jpeg" },
 44: { id: 44, name: "Passion Fruit", price: 4.0, image: "assets/passion_fruit.jpeg" },
 45: { id: 45, name: "Ananas", price: 4.0, image: "assets/ananas.jpeg" },
 46: { id: 46, name: "Mango", price: 4.0, image: "assets/mango.jpeg" },
 47: { id: 47, name: "Blue Cracao", price: 4.0, image: "assets/blue_cracao.jpeg" },
 48: { id: 48, name: "Çiyələkli Madaqaskar", price: 5.0, image: "assets/ciyelekli_madaqaskar.jpeg" },
 49: { id: 49, name: "Çiyələkli MilkShake", price: 4.80, image: "assets/çiyələkli_MilkShake.jpeg" },
 50: { id: 50, name: "Şokoladlı MilkShake", price: 4.80, image: "assets/şokoladlı_MilkShake.jpeg" },
 51: { id: 51, name: "Bananlı MilkShake", price: 4.80, image: "assets/bananlı_MilkShake.jpeg" },
 52: { id: 52, name: "Oreo MilkShake", price: 5.0, image: "assets/oreo_Milkshake.jpeg" },
 53: { id: 53, name: "Çiyələk Ice Tea", price: 4.0, image: "assets/çiyələk_ice_tea_bar.jpeg" },
 54: { id: 54, name: "Grenadine Ice Tea", price: 4.0, image: "assets/grenadine_ice.jpeg" },
 55: { id: 55, name: "Kivi Ice Tea", price: 4.0, image: "assets/kivi_ice.jpeg" },
 56: { id: 56, name: "Passion Fruit Ice Tea", price: 4.0, image: "assets/passion_fruit_ice.jpeg" },
 57: { id: 57, name: "Ananas Ice Tea", price: 4.0, image: "assets/ananas_ice_tea.jpeg" },
 58: { id: 58, name: "Mango Ice Tea", price: 4.0, image: "assets/mango_ice_tea.jpeg" },
 59: { id: 59, name: "Blue Cracao Ice Tea", price: 4.0, image: "assets/blue_cracao_ice_tea.jpeg" },
 60: { id: 60, name: "Marqarita", price: 7.0, image: "assets/pizza_marqarita.jpeg" },
 61: { id: 61, name: "Fungi", price: 7.5, image: "assets/pizza_fungi.jpeg" },
 62: { id: 62, name: "Polo Fungi (toyuqlu)", price: 9.0, image: "assets/pizza_polo_fungi_toyuqlu.jpeg" },
 63: { id: 63, name: "Pizza qarışıq", price: 10.5, image: "assets/pizza_qarışıq.jpeg" },
 64: { id: 64, name: "Peperoni", price: 9.0, image: "assets/pizza_peperoni.jpeg" },
 65: { id: 65, name: "Sucuklu", price: 10.9, image: "assets/pizza_sucuklu.jpeg" },
 66: { id: 66, name: "Sezar", price: 8.9, image: "assets/pizza_sezar.jpeg" },
 67: { id: 67, name: "Chicken BBQ", price: 8.9, image: "assets/pizza_chicken_bbq.jpeg" },
 68: { id: 68, name: "Miks BBQ", price: 7.9, image: "assets/pizza_miks_bbq.jpeg" },
 69: { id: 69, name: "Vegetarian", price: 8.9, image: "assets/pizza_vegetarian.jpeg" },
 70: { id: 70, name: "Italyano", price: 8.9, image: "assets/pizza_italyano.jpeg" },
 71: { id: 71, name: "Kaşarlı", price: 7.0, image: "assets/pide_kaşarlı.jpeg" },
 72: { id: 72, name: "Toyuqlu", price: 8.3, image: "assets/pide_tavuklu.jpeg" },
 73: { id: 73, name: "Kuş başı", price: 9.0, image: "assets/pide_kuş_başı.jpeg" },
 74: { id: 74, name: "Kuş başı kaşarlı", price: 9.5, image: "assets/pide_kuş_baş_kaşarlı.jpeg" },
 75: { id: 75, name: "Sucuklu", price: 9.9, image: "assets/pide_sucuklu.jpeg" },
 76: { id: 76, name: "Qıymalı", price: 8.0, image: "assets/pide_qıymalı.jpeg" },
 77: { id: 77, name: "Qıymalı kaşarlı", price: 8.5, image: "assets/pide_qıymalı_kaşarlı.jpeg" },
 78: { id: 78, name: "Paytaxt salatı", price: 3.5, image: "assets/paytaxt_salat.jpeg" },
 79: { id: 79, name: "Didmə salatı", price: 3.5, image: "assets/didme_salat.jpeg" },
 80: { id: 80, name: "Çoban salatı", price: 2.5, image: "assets/coban_salati.jpeg" },
 81: { id: 81, name: "Kiçik sendviç", price: 2.5, image: "assets/kicik_sendvic.jpeg" },
 82: { id: 82, name: "Böyük sendviç", price: 3.5, image: "assets/boyuk_sendvic.jpeg" },
 83: { id:83, name:"Aypara", price:1.5, image:"assets/aypara.jpeg" },
 84: { id:84, name:"Baunti (ev üsul)", price:1.5, image:"assets/baunti.jpeg" },
 85: { id:85, name:"Saray sarma", price:2, image:"assets/saray_sarma.jpeg" },
 86: { id:86, name:"Rulet", price:2, image:"assets/rulet.jpeg" },
 87: { id:87, name:"İslak kek", price:2.5, image:"assets/islaq_kek.jpeg" },
 88: { id:88, name:"Ballı tort (ənənəvi)", price:2.5, image:"assets/balli_tort.jpeg" },
 89: { id:89, name:"Spartak tort", price:2.5, image:"assets/spartak_tort.jpeg" },
 90: { id:90, name:"Anjelika tort", price:2.5, image:"assets/anjelika_tort.jpeg" },
 91: { id:91, name:"Maqnoliya", price:3, image:"assets/maqnoliya.jpeg" },
 92: { id:92, name:"Trifle", price:3, image:"assets/trifle.jpeg" },
 93: { id:93, name:"Sponful", price:3.5, image:"assets/sponful.jpeg" },
 94: { id:94, name:"Snickers", price:2.0, image:"assets/snickers.jpeg" },
 95: { id:95, name:"Twix", price:3.0, image:"assets/twix.jpeg" },
 96: { id:96, name:"Bounty", price:3.0, image:"assets/bounty.jpeg" },
 97: { id:97, name:"Alpen Gold", price:3.5, image:"assets/alpen_gold.jpeg" },



};



let cart = [];

document.addEventListener("click", function (e) {
  /* CATEGORY SCROLL */
const catBtn = e.target.closest(".cat-btn");
if (catBtn) {
  const targetId = catBtn.dataset.target;
  if (targetId) {
    document.getElementById(targetId)?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
  catBtn.classList.add("active");
  return;
}


  if (e.target.classList.contains("add-btn")) {
    const id = e.target.dataset.id;
    addToCart(products[id]);
  }

  if (e.target.closest("#openCart")) {
    cartPanel.classList.add("active");
    overlay.classList.add("active");
    document.body.classList.add("cart-open");
  }

  if (e.target.id === "overlay" || e.target.closest(".close-cart")) {
    cartPanel.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("cart-open");
  }

  const id = e.target.dataset.id;
  if (!id) return;

  const item = cart.find(p => p.id == id);
  if (!item) return;

  if (e.target.classList.contains("plus")) item.qty++;
  if (e.target.classList.contains("minus")) {
    item.qty--;
    if (item.qty <= 0) cart = cart.filter(p => p.id != id);
  }
  /* REMOVE ITEM */
if (e.target.classList.contains("trash-btn")) {
  const id = e.target.dataset.id;
  cart = cart.filter(p => p.id != id);
  renderCart();
  return;
}
if (cart.length === 0) {
  cartItems.innerHTML = `<div class="empty-cart">Səbət boşdur</div>`;
}



  renderCart();
});

function addToCart(product) {
  const item = cart.find(p => p.id === product.id);
  item ? item.qty++ : cart.push({ ...product, qty: 1 });
  renderCart();
}

function renderCart() {
  const cartItems = document.getElementById("cartItems");
  const totalPrice = document.getElementById("totalPrice");
  const subTotalEl = document.getElementById("subTotal");
  const cartTotalEl = document.getElementById("cartTotal");

  let total = 0;
  cartItems.innerHTML = "";

  cart.forEach(item => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;

    cartItems.innerHTML += `
      <div class="cart-card">
        <img src="${item.image}" class="cart-card-img" />

        <div class="cart-card-body">
          <div class="cart-card-top">
            <strong class="cart-title">${item.name}</strong>
            <button class="trash-btn" data-id="${item.id}">🗑</button>
          </div>

          <div class="cart-price">${itemTotal.toFixed(2)} ₼</div>

          <div class="cart-qty">
            <button class="qty-btn minus" data-id="${item.id}">−</button>
            <span>${item.qty}</span>
            <button class="qty-btn plus" data-id="${item.id}">+</button>
          </div>
        </div>
      </div>
    `;
  });

  /* Səbət boşdursa mesaj */
 if (cart.length === 0) {
  cartItems.innerHTML = `
    <div class="empty-cart">
      <div class="empty-icon">🧺</div>
      <div class="empty-text">Səbətiniz boşdur</div>
    </div>
  `;
}


  /* Bottom bar – Ümumi */
  if (totalPrice) {
    totalPrice.textContent = total.toFixed(2);
  }

  /* Cart panel – Ara cəmi & Cəmi */
  if (subTotalEl) {
    subTotalEl.textContent = total.toFixed(2);
  }

  if (cartTotalEl) {
    cartTotalEl.textContent = total.toFixed(2);
  }
}
function syncCatSpacer() {
  const wrap = document.getElementById("categoriesWrap");
  const spacer = document.getElementById("catSpacer");
  if (!wrap || !spacer) return;
  spacer.style.height = wrap.getBoundingClientRect().height + 20 + "px"; // 20px padding rahatlıq
}

window.addEventListener("resize", syncCatSpacer);
setTimeout(syncCatSpacer, 50);

document.addEventListener("click", function(e){
  const btn = e.target.closest(".scroll-top-btn");
  if (!btn) return;

  const categories = document.querySelector(".categories-wrap");
  if (categories) {
    categories.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
});

function openLangModal(){
  document.body.classList.add("modal-open");
  document.getElementById("langOverlay")?.setAttribute("aria-hidden", "false");
}

function closeLangModal(){
  document.body.classList.remove("modal-open");
  document.getElementById("langOverlay")?.setAttribute("aria-hidden", "true");
}

document.addEventListener("click", function(e){
  if (e.target.closest("#openLang")) {
    openLangModal();
    return;
  }

  if (e.target.id === "langOverlay" || e.target.closest("#closeLang")) {
    closeLangModal();
    return;
  }
});

document.addEventListener("keydown", function(e){
  if (e.key === "Escape") closeLangModal();
});

const infoPanel = document.getElementById("infoPanel");
const infoOverlay = document.getElementById("infoOverlay");

document.addEventListener("click", function(e){

  /* OPEN INFO */
  if (e.target.closest("#openInfo")) {
    infoPanel.classList.add("active");
    infoOverlay.classList.add("active");
    return;
  }

  /* CLOSE INFO (overlay or X) */
  if (e.target === infoOverlay || e.target.closest(".close-info")) {
    infoPanel.classList.remove("active");
    infoOverlay.classList.remove("active");
    return;
  }

});

// 1) Sayt açılarkən localStorage-dan tema yüklə
(function initTheme(){
  const saved = localStorage.getItem("theme");
  if (saved === "dark") document.body.classList.add("dark");

  // ikonun düz görünməsi üçün (düymə sonradan da gələ bilər)
  updateThemeIcon();
})();

function updateThemeIcon(){
  const btn = document.getElementById("themeToggle");
  if (!btn) return; // topbar hələ yüklənməyibsə, problem deyil
  btn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
}

// 2) Click event delegation (düymə sonradan gəlsə belə işləyir)
document.addEventListener("click", function(e){
  const btn = e.target.closest("#themeToggle");
  if (!btn) return;

  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
  updateThemeIcon();
});

/* ========= SEARCH (guaranteed) ========= */

// kartların və adların selector-ları (lazım olsa dəyişərik)
const CARD_SELECTOR = ".product-card";
const NAME_SELECTOR = ".product-name";

function filterProducts(qRaw){
  const q = (qRaw || "").toLowerCase().trim();

  const cards = document.querySelectorAll(CARD_SELECTOR);

  // ✅ kateqoriya bar-ı tap və axtarış zamanı gizlət
  const categoriesWrap =
    document.querySelector(".categories-wrap") ||
    document.getElementById("categories"); // ehtiyat

  if (categoriesWrap) {
    // q boş deyilsə => gizlət
    categoriesWrap.classList.toggle("is-hidden-area", q !== "");
  }

  console.log("[search] query:", q, "| cards:", cards.length);

  cards.forEach(card => {
    const nameEl = card.querySelector(NAME_SELECTOR);
    const name = (nameEl ? nameEl.textContent : "").toLowerCase();

    const match = q === "" || name.includes(q);
    card.classList.toggle("is-hidden", !match);
  });
}


// input sonradan gəlsə də işləsin deyə delegation
document.addEventListener("input", (e) => {
  const inp = e.target.closest("#searchInput");
  if (!inp) return;
  filterProducts(inp.value);
});

// səhifə açılan kimi də yoxla
window.addEventListener("DOMContentLoaded", () => {
  const inp = document.getElementById("searchInput");
  if (inp) filterProducts(inp.value);
}

);
