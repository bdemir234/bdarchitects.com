function setLanguage(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-en], [data-tr]').forEach(element => {
        if (element.dataset[lang]) {
            element.innerText = element.dataset[lang];
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setLanguage(document.documentElement.lang);
});

