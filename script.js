document.addEventListener('DOMContentLoaded', () => {
    const emailSpan = document.getElementById('contact-email');
    const showEmailBtn = document.getElementById('show-email-btn');

    if (showEmailBtn && emailSpan) {
        showEmailBtn.addEventListener('click', () => {
            emailSpan.textContent = 'contact@example.com'; // Địa chỉ email ví dụ
            showEmailBtn.style.display = 'none'; // Ẩn nút sau khi hiện email
        });
    }
});