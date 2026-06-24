// Đợi cho trang web tải xong toàn bộ cấu trúc dữ liệu
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navLinksContainer = document.getElementById('navLinks');
    const navLinks = document.querySelectorAll('.nav-links a');

    // 1. Bắt sự kiện Click vào nút 3 gạch để Mở/Đóng Menu trên điện thoại
    menuToggle.addEventListener('click', function() {
        // Xoay nút 3 gạch thành dấu X hoặc ngược lại
        this.classList.toggle('active');
        
        // Trượt menu ra ngoài màn hình hoặc rút gọn lại
        navLinksContainer.classList.toggle('active');
    });

    // 2. Tự động đóng menu lại sau khi người dùng click chọn 1 trang (đã sửa lỗi)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinksContainer.classList.remove('active');
        });
    });
});

javascript
// Hiệu ứng xuất hiện so le (Stagger) cho 3 khối công dụng khi cuộn trang tới
gsap.from('.card-box', {
    opacity: 0,
    y: 60,                     /* Đẩy nhẹ từ dưới lên */
    stagger: 0.25,             /* Mỗi hình xuất hiện cách nhau 0.25 giây */
    duration: 1.0,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '.features-section', /* Chạy hiệu ứng khi cuộn tới vùng này */
        start: 'top 85%',             /* Kích hoạt khi vùng này chạm 85% màn hình */
        toggleActions: 'play none none none'
    }
});
window.addEventListener('load', function () {
    // Khi toàn bộ dữ liệu, hình ảnh nặng đã tải xong
    // Chờ thêm 400ms - 600ms để thanh loading kết thúc một chu kỳ trượt tự nhiên
    setTimeout(function () {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.classList.add('loaded'); // Đẩy mượt màn hình lên trên (-100vh)
        }
    }, 500); 
});
// Đảm bảo GSAP và ScrollTrigger đã được khai báo thành công
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // 1. Hiệu ứng cho phần "Về Chúng Tôi" (About Section)
    // Khối chữ chạy từ trái sang
    gsap.from('.animate-left', {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.about-section',
            start: 'top 75%', // Kích hoạt khi vùng chạm 75% màn hình
            toggleActions: 'play none none none'
        }
    });

    // Khối ảnh chạy từ phải sang
    gsap.from('.animate-right', {
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.about-section',
            start: 'top 75%',
            toggleActions: 'play none none none'
        }
    });

    // 2. Hiệu ứng cho phần "Chi Tiết Sản Phẩm" (Product Detail)
    // Ảnh sản phẩm zoom nhẹ xuất hiện lên
    gsap.from('.animate-scale', {
        scale: 0.85,
        opacity: 0,
        duration: 1.0,
        ease: 'back.out(1.7)',
        scrollTrigger: {
            trigger: '.product-detail-section',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });

    // Khối thông tin sản phẩm trượt nhẹ từ dưới lên
    gsap.from('.animate-fade-up', {
        y: 50,
        opacity: 0,
        duration: 1.0,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.product-detail-section',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });
}