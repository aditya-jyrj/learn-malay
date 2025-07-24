# Learn Malay – Agape School of Education
Static marketing site for Malay language courses offered by Agape School of Education, Singapore.

**Live:** https://learnmalay.com.sg/

---
## 🚀 Quick Start

```bash
# Clone

git clone https://github.com/aditya-jyrj/learn-malay.git
cd learn-malay

# Serve locally (any static server works)
python3 -m http.server 8080
# or
npx serve .
```

Open the URL printed, commonly `http://localhost:3000` or `http://localhost:8000`.

Since parts of the site are loaded with `fetch()`, opening the pages via the filesystem (`file://`) can trigger CORS blocks. Serve them through a local server instead.

## 🛠️ Tech Stack
- HTML5 and CSS3
- Bootstrap 5.3 + Bootstrap Icons
- Vanilla JS `fetch()` to inject shared partials (`navbar.html`, `contact-footer.html`)
- Google Maps Embed for location

## 📁 Repository Structure
```bash
.
├── index.html                     # Landing page
├── courses-adults.html            # Adults' courses
├── courses-adults-beginners.html  # Adults' beginner course curriculum
├── courses-children.html          # Children’s/playgroup courses
├── navbar.html                    # Shared top navigation (loaded via fetch)
├── contact-footer.html            # Contact section + footer (loaded via fetch)
├── styles.css                     # Custom brand theme (magenta/teal palette)
├── site.js                        # Injects partials + dynamic year/subheadings
└── images/                        # All images used across pages
```

## 🌐 Deployment
This site is static. Typical options:
1. **GitHub Pages**
	- Push to `main` (or any other branch of choice) and enable Pages in repo settings.
	- For a **custom .sg domain**, create `CNAME` with the domain, then point your DNS (A/ALIAS or CNAME) to your GitHub Pages' IP Address.
2. **Any Static Host** (Netlify, Vercel, Cloudflare Pages, etc.)
	- Drop the folder, set build command to "none".
> After DNS propagation, verify that HTTPS is enabled.

## 📄 License
All website content © Agape School of Education.

## ✉️ Contact
For site issues or updates, please reach out to me at aditya.jyrj@gmail.com or to the Agape School of Education admin at admin@agapeschool.edu.sg.