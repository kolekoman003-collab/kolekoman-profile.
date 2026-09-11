// مدیریت و ذخیره‌سازی نیتیو تم (Dark / Light)
const themeToggle = document.getElementById('themeToggle');
if (localStorage.getItem('theme') === 'light-theme') {
    document.documentElement.classList.add('light-theme');
    if(themeToggle) themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
}
if(themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('light-theme');
        let theme = document.documentElement.classList.contains('light-theme') ? 'light-theme' : 'dark-theme';
        themeToggle.innerHTML = theme === 'light-theme' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', theme);
    });
}

// حل باگ ناوبری صفحات در موبایل و انیمیشن منوی همبرگری
const hamburger = document.getElementById('hamburgerMenu');
const navbar = document.querySelector('.navbar');
if(hamburger && navbar) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        navbar.classList.toggle('active');
    });

    // بستن خودکار منو در صورت کلیک روی لینک‌ها
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('open');
            navbar.classList.remove('active');
        });
    });
}

// سیستم و منطق سبد خرید تعاملی فرانت‌اند
let cart = JSON.parse(localStorage.getItem('cartData')) || [];
const cartBadge = document.getElementById('cartBadge');
const cartModal = document.getElementById('cartModal');
const cartTrigger = document.getElementById('cartTrigger');
const closeCart = document.getElementById('closeCart');
const cartItemsList = document.getElementById('cartItemsList');
const totalPriceEl = document.getElementById('totalPrice');

function updateCartUI() {
    if(cartBadge) cartBadge.innerText = cart.length;
    if(!cartItemsList) return;
    
    cartItemsList.innerHTML = '';
    let total = 0;
    
    if(cart.length === 0) {
        cartItemsList.innerHTML = '<p style="text-align:center; opacity:0.6; padding: 1rem 0;">سبد خرید شما خالی است.</p>';
    } else {
        cart.forEach((item, index) => {
            total += item.price;
            cartItemsList.innerHTML += `
                <div class="cart-item-row">
                    <div>
                        <strong style="font-size:0.9rem; display:block; margin-bottom:0.2rem;">${item.name}</strong>
                        <div style="font-size:0.85rem; color:var(--neon-color); font-weight:700;">${item.price.toLocaleString()} تومان</div>
                    </div>
                    <i class="fas fa-trash-alt" style="cursor:pointer; color:#ff7675; font-size:1.1rem;" onclick="removeItem(${index})"></i>
                </div>
            `;
        });
    }
    if(totalPriceEl) totalPriceEl.innerText = total.toLocaleString() + ' تومان';
}

if(cartTrigger) cartTrigger.addEventListener('click', () => cartModal.classList.add('open'));
if(closeCart) closeCart.addEventListener('click', () => cartModal.classList.remove('open'));

document.addEventListener('click', function(e) {
    if(e.target && e.target.classList.contains('add-btn')) {
        const card = e.target.closest('.prod-card');
        const name = card.querySelector('h4').innerText;
        const price = parseInt(card.getAttribute('data-price')) * 1000000;
        
        cart.push({ name, price });
        localStorage.setItem('cartData', JSON.stringify(cart));
        updateCartUI();

        const iconBtn = document.getElementById('cartTrigger');
        if(iconBtn) {
            iconBtn.style.transform = 'translateY(2px) scale(1.1)';
            setTimeout(() => iconBtn.style.transform = 'translateY(-3px) scale(1)', 150);
        }
    }
});

window.removeItem = function(index) {
    cart.splice(index, 1);
    localStorage.setItem('cartData', JSON.stringify(cart));
    updateCartUI();
};

const checkoutForm = document.getElementById('checkoutForm');
if(checkoutForm) {
    checkoutForm.addEventListener('submit', function(e) {
        e.preventDefault();
        if(cart.length === 0) {
            alert('ابتدا محصولی را به سبد خرید اضافه کنید!');
            return;
        }
        const fullName = document.getElementById('fullName').value;
        alert(`جناب ${fullName}، سفارش شما ثبت نهایی شد. به‌زودی با شما تماس می‌گیریم.`);
        cart = [];
        localStorage.removeItem('cartData');
        updateCartUI();
        cartModal.classList.remove('open');
    });
}

// سیستم فیلتر زنده پیشرفته بخش شاپ
const searchProduct = document.getElementById('searchProduct');
const categorySelect = document.getElementById('categorySelect');
const typeSelect = document.getElementById('typeSelect');
const priceRange = document.getElementById('priceRange');
const priceText = document.getElementById('priceText');
const cards = document.querySelectorAll('.prod-card');

function performFilter() {
    if(!categorySelect) return;
    const searchVal = searchProduct.value.toLowerCase().trim();
    const catVal = categorySelect.value;
    const typeVal = typeSelect.value;
    const maxPrice = parseInt(priceRange.value);
    
    priceText.innerText = maxPrice + ' میلیون تومان';

    cards.forEach(card => {
        const title = card.querySelector('h4').innerText.toLowerCase();
        const cat = card.getAttribute('data-category');
        const type = card.getAttribute('data-type');
        const price = parseInt(card.getAttribute('data-price'));

        if(title.includes(searchVal) && (catVal === 'all' || cat === catVal) && (typeVal === 'all' || type === typeVal) && (price <= maxPrice)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}
if(categorySelect) {
    categorySelect.addEventListener('change', performFilter);
    typeSelect.addEventListener('change', performFilter);
    priceRange.addEventListener('input', performFilter);
    searchProduct.addEventListener('input', performFilter);
}

// انیمیشن شمارشگر اعداد
const counters = document.querySelectorAll('.counter-num');
if(counters.length > 0) {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        let count = 0;
        const speed = target / 40;
        const updateCount = () => {
            if(count < target) {
                count += speed;
                counter.innerText = Math.ceil(count);
                requestAnimationFrame(updateCount);
            } else {
                counter.innerText = target + ' +';
            }
        };
        updateCount();
    });
}

updateCartUI();


// فعال‌سازی انیمیشن‌های ظهور نرم به محض بارگذاری کامل صفحه
window.addEventListener('DOMContentLoaded', () => {
    // پیدا کردن تمام المان‌هایی که کلاس انیمیشن دارند
    const animatedElements = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-up');
    
    // یک تاخیر بسیار کوچک برای نرم‌تر شدن شروع اجرا
    setTimeout(() => {
        animatedElements.forEach(element => {
            element.classList.add('reveal-active');
        });
    }, 100);
});