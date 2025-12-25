let cartCount = 0;
let currentProduct = 0;
const products = [
{
    title: "دمبل",
    desc: "یک دمبل ورزشی مناسب تمرینات روزانه",
    price: 750000,
    images: [
    "images/3d-icon-gym-dumbbell-png.png",
    "images/vecteezy_dumbbell-clipart-design-illustration_9342594.png",
    "images/vecteezy_dumbbell-clipart-design-illustration_9400377.png",
    ]
},
{
    title: "توپ والیبال",
    desc: "یک توپ والیبال مناسب بازی در سالن",
    price: 1000000,
    images: [
    "images/ai-generated-volleyball-ball-isolated-on-transparent-background-free-png.png",
    "images/images (1).jpg",
    "images/images (2).jpg",

    ]
},
{
    title: "توپ بسکتبال",
    desc: "یک توپ بسکتبال حرفه ای و با دوام",
    price: 1500000,
    images: [
    "images/basketball-ball-on-transparent-background-png.png",
    "images/1120281.jpg",
    "images/1001990.jpg",
    ]
},
{
    title: "دستکش بوکس",
    desc: "یک دستکش بوکس برای مبارزه حرفه ای",
    price: 900000,
    images: [
    "images/boxing-gloves-on-isolated-transparent-background-png.png",
    "images/images (3).jpg",
    "images/images (4).jpg",

    ]

},
{
    title: "توپ بیسبال",
    desc: "یک توپ بیسبال باکیفیت",
    price: 500000,
    images: [
    "images/classic-brown-american-football-with-crisp-white-laces-free-png.png",
    "images/images.jpg",
    "images/images (5).jpg",
    ]
},
{
    title: "راکت تنیس",
    desc: "یک راکت تنیس خوش دست  و با کیفیت",
    price: 2000000,
    images: [
    "images/close-up-of-tennis-racket-and-bright-yellow-ball-in-motion-perfect-for-sports-and-activity-themes-png.png",
    "images/vecteezy_tennis-clipart-design-illustration_9354906.png",
    "images/vecteezy_tennis-clipart-design-illustration_9384115.png",
    ]
},
{
    title: "دارت",
    desc: "یک دارت  فانتزی مناسب بازی های تفننی و تفریحی",
    price: 700000,
    images: [
    "images/dart-on-target-medium-view-at-90-degrees-free-png.png",
    "images/dart-115309793675pjy0mbmfe.png",
    "images/c4d-black-dart-board-interior-poster-decorative-element-dart-board-11563332303zat5jyqgrn.png",
    ]


},
{
    title: "ساک ورزشی",
    desc: "یک ساک ورزشی جادارومناسب باشگاه",
    price: 900000,
    images: [
    "images/duffel-bag-with-straps-and-a-zipper-free-png.png",
    "images/travel-bag-png-11553995576qjli4b7prv.png",
    "images/image-library-download-bag-vector-duffel-nike-duffle-bag-transparent-11563578404i37ygal1vk.png",
    ]
},
{
    title: "دوچرخه",
    desc: "یک دوچرخه مقاوم مناسب برای کوهستان",
    price: 20000000,
    images: [
   "images/fat-cycle-fat-bike-fat-bicycle-fat-tire-cycle-fat-tire-bike-transparent-background-ai-generated-png.png",
   "images/vintage-electric-bike-115497463742wjrfldrzw.png",
   "images/full-carbon-fiber-mountain-bike-11549763841rl7st4zvje.png",

    ]

},
{
    title: "عینک شنا",
    desc: "یک عینک شنای با دوام با قیمت به صرفه",
    price: 300000,
    images: [
    "images/front-view-of-blue-tinted-swim-goggles-with-transparent-lenses-on-transparent-background-ideal-for-swimming-and-water-sports-enthusiasts-png.png",
     "images/3d-glass-115501912947tdkchcqyi.png",
      "images/kiefer-junior-sprinter-anti-fog-swim-goggle-11562914273wp1uj1t28o.png",
    ]

},
{
    title: "استوک های ورزشی",
    desc: "استوک های ورزشی مناسب بازی فوتبال در چمن",
    price: 600000,
    images: [
    "images/orange-soccer-boot-isolated-on-transparent-background-png.png",
    "images/pngimg.com - football_boots_PNG37.png",
    "images/pngimg.com - football_boots_PNG15.png",
    ]

},
{
    title: " اسکیت",
    desc: "یک تخته اسکیت با کیفیت مناسب مسابقات حرفه ای",
    price: 3000000,
    images: [
    "images/skateboard-icon-3d-render-for-ui-icon-website-games-app-free-png.png",
     "images/pngimg.com - skateboard_PNG102692.png",
      "images/pngimg.com - skateboard_PNG102697.png",

    ]

},
{
    title: "کیسه بوکس",
    desc: "یک کیسه بوکس فوق الغاده برای تمرین مشت زنی",
    price: 400000,
    images: [
    "images/vecteezy_ai-generated-punching-bag-isolated-on-transparent-background_41918092.png",
    "images/pngimg.com - punching_bag_PNG62.png",
    "images/pngimg.com - punching_bag_PNG63.png",
    ]
},
{
    title: "توپ فوتبال",
    desc: "یک توپ فوتبال مناسب بازی حرفه ای در چمن",
    price: 1500000,
    images: [
    "images/vecteezy_realistic-soccer-ball-with-blue-and-white-pattern_53348812.png",
    "images/adidas-finale-18-is-official-match-ball-of-champions-champions-league-final-2019-ball-11562968831dj3kcjvh1s.png",
    "images/soccer-ball-hk1099-premier-league-winter-ball-2018-19-11563421364hwhip7iy4d.png",

    ]

},

];
const cartProducts = [];

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const closeBtn = document.querySelector(".close");
    const addBtn = document.getElementById("addToCartBtn");
    const cartCountEl = document.getElementById("cartCount");
    const thumbsContainer = document.getElementById("thumbs");
    const mainImg = document.getElementById("mainImg");
    const titleEl = document.getElementById("title");
    const descEl = document.getElementById("desc");
    const priceEl = document.getElementById("price");
    const searchInput = document.getElementById("searchInput");
    const cards = document.querySelectorAll(".card");

    const cartModal = document.getElementById("cartModal");
    const closeCartBtn = document.getElementById("closeCart");
    const cartItemsEl = document.getElementById("cartItems");
    const totalPriceEl = document.getElementById("totalPrice");
    const checkoutBtn = document.getElementById("checkoutBtn");

    window.openModal = function (index) {
        currentProduct = index;
        const p = products[index];
        modal.classList.remove("hidden");
        titleEl.innerText = p.title;
        descEl.innerText = p.desc;
        priceEl.innerText = p.price + " تومان";
        mainImg.src = p.images[0];

        thumbsContainer.innerHTML = "";
        p.images.forEach(img => {
            const t = document.createElement("img");
            t.src = img;
            t.onclick = () => mainImg.src = img;
            thumbsContainer.appendChild(t);
        });
    };

    closeBtn.addEventListener("click", function () {
        modal.classList.add("hidden");
    });

    addBtn.addEventListener("click", function () {
        cartCount++;
        cartCountEl.innerText = cartCount;
        cartProducts.push(products[currentProduct]);
        document.getElementById("cart").classList.remove("hidden");
        modal.classList.add("hidden");
    });

    searchInput.addEventListener("keyup", function () {
        const value = searchInput.value.toLowerCase();
        cards.forEach(card => {
            const title = card.dataset.title.toLowerCase();
            card.style.display = title.includes(value) ? "block" : "none";
        });
    });

    document.getElementById("cart").addEventListener("click", function () {
        cartItemsEl.innerHTML = "";
        let total = 0;
        cartProducts.forEach(p => {
            const li = document.createElement("li");
            li.innerText = p.title + " - " + p.price + " تومان";
            cartItemsEl.appendChild(li);
            total += p.price;
        });
        totalPriceEl.innerText = total;
        cartModal.classList.remove("hidden");
    });

    closeCartBtn.addEventListener("click", function () {
        cartModal.classList.add("hidden");
    });

    checkoutBtn.addEventListener("click", function () {
        alert("پرداخت انجام نمی‌شود. این فقط نمونه است.");
    });
});