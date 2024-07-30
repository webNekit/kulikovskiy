const preview = document.getElementById('preview');
const previewImg = document.getElementById('preview-img');
const links = document.querySelectorAll('a[data-type="project"]');

links.forEach(link => {
    link.addEventListener('mouseenter', function (e) {
        const imageUrl = link.getAttribute('data-image-source');
        previewImg.style.backgroundImage = `url(${imageUrl})`;
        gsap.to(preview, { scale: 1, duration: 0.5 });
    });

    link.addEventListener('mouseleave', function (e) {
        gsap.to(preview, { scale: 0, duration: 0.5 });
    });

    link.addEventListener('mousemove', function (e) {
        const offsetX = -50; // отступ от курсора по оси X
        const offsetY = -50; // отступ от курсора по оси Y
        const previewWidth = preview.offsetWidth;
        const previewHeight = preview.offsetHeight;

        let x = e.clientX + offsetX;
        let y = e.clientY + offsetY;

        // Проверка, чтобы превью не выходило за пределы окна справа
        if (x + previewWidth > window.innerWidth) {
            x = e.clientX - previewWidth - offsetX;
        }

        // Проверка, чтобы превью не выходило за пределы окна снизу
        if (y + previewHeight > window.innerHeight) {
            y = e.clientY - previewHeight - offsetY;
        }

        // Установка координат с помощью GSAP
        gsap.to(preview, {
            left: x,
            top: y,
            duration: 0.5
        });
    });
});