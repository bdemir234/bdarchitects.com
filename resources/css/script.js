/**
 * Dil Değiştirici
 * Bu fonksiyon, seçilen dildeki metinlerin görünür olmasını sağlar.
 * @param {string} lang - Seçilen dil (örnek: 'en' veya 'tr')
 */
function changeLanguage(lang) {
    // Sayfadaki tüm [lang] özniteliği olan elemanları seç
    const elements = document.querySelectorAll('[lang]');
    
    // Elemanları kontrol et
    elements.forEach((el) => {
        // Elemanın dili seçili dil mi?
        if (el.getAttribute('lang') === lang) {
            el.style.display = 'block'; // Görünür yap
        } else {
            el.style.display = 'none'; // Gizle
        }
    });
}

// Varsayılan dil: Türkçe
document.addEventListener('DOMContentLoaded', () => {
    changeLanguage('tr');
});
