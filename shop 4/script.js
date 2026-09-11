document.addEventListener("DOMContentLoaded", function () {
    // ایجاد یک Intersection Observer برای کنترل افکت ورود نرم المان‌ها
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                // بعد از یکبار اجرا شدن، المان را آن‌ابزرو می‌کنیم تا پرفورمنس حفظ شود
                observer.unobserve(entry.target);
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
        root: null,
        threshold: 0.1, // سکشن وقتی ۱۰٪ وارد صفحه شد انیمیشن اجرا می‌شود
        rootMargin: "0px 0px -50px 0px"
    });

    // تارگت قرار دادن تمام سکشن‌های دارای کلاس .reveal
    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
});