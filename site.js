fetch('/navbar.html')
    .then(res => res.text())
    .then(data => document.getElementById('navbar').innerHTML = data);

fetch('contact-footer.html')
    .then(res => res.text())
    .then(html => {
    document.getElementById('contact-footer').innerHTML = html;

    const subheading = window.contactSubheading;
    const subEl = document.querySelector('[data-subheading]');
    if (subheading && subEl) {
        subEl.textContent = subheading;
    }

    const bgClass = window.contactBgClass;
    const section = document.querySelector('[data-bg]');
    if (bgClass && section) {
        section.classList.remove('bg-light', 'bg-white');
        section.classList.add(bgClass);
    }
    document.getElementById('current-year').textContent = new Date().getFullYear();
    });