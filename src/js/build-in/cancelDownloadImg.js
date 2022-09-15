export default function cancelDownloadImg() {
    const images = document.querySelectorAll('img');
    images.forEach(img => img.addEventListener('contextmenu', e => e.preventDefault()))
}

window.initCancelDownloadImg = cancelDownloadImg;