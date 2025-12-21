/* ================== DATA ================== */

const products = [
    {
        id:1,name:"dumbbel",
        price:1600000,
        desc:"یک دمبل مناسب تمرینات روزانه",
        image:"./images/3d-icon-gym-dumbbell-png.png"
    },
    {
        id:2,
        name:"football ball",
        price:2500000,
        desc:"یک توپ فوتبال مناسب بازی های حرفه ای روی چمن",
        image:"./images/vecteezy_realistic-soccer-ball-with-blue-and-white-pattern_53348812.png"
    },
    {
        id:3,
        name:"basketball ball",
        price:2100000,
        des:"یک توپ بسکتبال مناسب بازی ذر سالن و بسیار با دوام",
        image:"./images/basketball-ball-on-transparent-background-png.png"
    },
    {
        id:4,
        name:"skate",
        price:4880000,
        desc:"اسکیت حرفه ای مناسب مناسب مسابقات",
        image:"./images/skateboard-icon-3d-render-for-ui-icon-website-games-app-free-png.png"
    },
    {
        id:5,
        name:"swiming goggles",
        price:56000,
        desc:"عینک شنا مناسب استخر",
        image:"./images/front-view-of-blue-tinted-swim-goggles-with-transparent-lenses-on-transparent-background-ideal-for-swimming-and-water-sports-enthusiasts-png.png"
    },
    {
        id:6,
        name:"dart",
        price:350000,
        desc:"دارت مناسب اوقات فراغت",
        image:"./images/dart-on-target-medium-view-at-90-degrees-free-png.png"
    },
    {
        id:7,
        name:"volley ball ball",
        price:650000,
        desc:"توپ مناسب برای والیبال",
        image:"./images/ai-generated-volleyball-ball-isolated-on-transparent-background-free-png.png"
    },
    {
        id:8,
        name:"rocket tennis",
        price:780000,
        desc:"راکت هایی حرفه ای برای ورزش تنیس",
        image:"./images/close-up-of-tennis-racket-and-bright-yellow-ball-in-motion-perfect-for-sports-and-activity-themes-png.png"
    },
    {
        id:9,
        name:"boxing gloves",
        price:100000,
        desc:"دستکش هایی مخصوص ورزش بوکس",
        image:"./images/boxing-gloves-on-isolated-transparent-background-png.png"
    },
    {
        id:10,
        name:"baseball ball",
        price:300000,
        desc:"توپ بیسبال حرفه ای با قیمت مناسب",
        image:"./images/classic-brown-american-football-with-crisp-white-laces-free-png.png"
    },
    {
        id:11,
        name:"bag sport",
        price:1100000,
        desc:"ساک ورزشی جا دار و حرفه‌ای",
        image:"./images/duffel-bag-with-straps-and-a-zipper-free-png.png"
    },
    {
        id:12,
        name:"bicycle",
        price:17200000,
        desc:"دوچرخه با کیفیت و قدرتمند",
        image:"./images/fat-cycle-fat-bike-fat-bicycle-fat-tire-cycle-fat-tire-bike-transparent-background-ai-generated-png.png"
    },
    {
        id:13,
        name:"stocks",
        price:300000,
        desc:"کفش های استوک ورزشی مناسب بازی فوتبال",
        image:"./images/orange-soccer-boot-isolated-on-transparent-background-png.png"
    },
    {
        id:14,
        name:"punching bag",
        price:339000,
        desc:"یک کیسه بوکس مقاوم با طراحی حرفه ای",
        image:"./images/vecteezy_ai-generated-punching-bag-isolated-on-transparent-background_41918092.png"
    },
    {
        id:15,
        name:"rope fittness",
        price:930000,
        desc: "یک ظناب ورزشی مقاوم با جنس خوب",
        image:"./images/vecteezy_red-jump-rope-fitness-exercise-workout-equipment_57530568..png"
    }
];

/* ================== STATE ================== */

let cartItemsData = [];
let selectedProduct = null;

/* ================== ELEMENTS ================== */

const productList = document.getElementById("productList");
const cartElement = document.getElementById("cart");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const totalPrice = document.getElementById("totalPrice");

const productModal = document.getElementById("productModal");
const modalBox = document.getElementById("modalBox");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalPrice = document.getElementById("modalPrice");
const modalImage = document.getElementById("modalImage");

/* ================== RENDER PRODUCTS ================== */

products.forEach(p => {
    productList.innerHTML += `
        <div onclick="openModal(${p.id})"
             class="bg-gray-800 rounded-xl p-4 shadow
                    hover:shadow-xl hover:-translate-y-1
                    transition cursor-pointer">
            <img src="${p.image}" class="h-36 mx-auto mb-3">
            <h3 class="font-bold">${p.name}</h3>
            <p class="text-green-500">${p.price.toLocaleString()} تومان</p>
        </div>
    `;
});

/* ================== MODAL ================== */

function openModal(id) {
    selectedProduct = products.find(p => p.id === id);

    modalTitle.innerText = selectedProduct.name;
    modalDesc.innerText = selectedProduct.desc;
    modalPrice.innerText = selectedProduct.price.toLocaleString() + " تومان";
    modalImage.src = selectedProduct.image;

    productModal.classList.remove("hidden");
    productModal.classList.add("flex");

    setTimeout(() => {
        modalBox.classList.remove("scale-90", "opacity-0");
        modalBox.classList.add("scale-100", "opacity-100");
    }, 10);
}

function closeModal() {
    modalBox.classList.add("scale-90", "opacity-0");
    setTimeout(() => {
        productModal.classList.add("hidden");
        productModal.classList.remove("flex");
    }, 300);
}

/* ================== CART ================== */

function addToCartFromModal() {
    const item = cartItemsData.find(i => i.id === selectedProduct.id);

    if (item) {
        item.qty++;
    } else {
        cartItemsData.push({...selectedProduct, qty: 1});
    }

    updateCart();
    closeModal();
}

function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;

    cartItemsData.forEach(item => {
        total += item.qty * item.price;

        cartItems.innerHTML += `
            <div class="flex items-center gap-3 bg-gray-700 p-3 rounded-lg">
                <img src="${item.image}" class="w-12 h-12 object-contain">
                <div class="flex-1">
                    <p class="font-bold">${item.name}</p>
                    <p class="text-sm text-gray-300">${item.price.toLocaleString()} تومان</p>
                </div>
                <div class="flex items-center gap-2">
                    <button class="px-2 bg-gray-600 rounded"
                            onclick="decreaseQty(${item.id})">-</button>
                    <span>${item.qty}</span>
                    <button class="px-2 bg-gray-600 rounded"
                            onclick="increaseQty(${item.id})">+</button>
                </div>
            </div>
        `;
    });

    cartCount.innerText = cartItemsData.reduce((s,i)=>s+i.qty,0);
    totalPrice.innerText = total.toLocaleString();
}

function increaseQty(id) {
    cartItemsData.find(i => i.id === id).qty++;
    updateCart();
}

function decreaseQty(id) {
    const item = cartItemsData.find(i => i.id === id);
    item.qty--;
    if (item.qty === 0) {
        cartItemsData = cartItemsData.filter(i => i.id !== id);
    }
    updateCart();
}

/* ================== CART TOGGLE (ANIMATION) ================== */

function toggleCart() {
    cartElement.classList.toggle("-translate-x-full");
}