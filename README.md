# The Viraaj Farm & Villa - Project Structure

## 📁 Folder Organization

This project is organized into separate, manageable files for easy customization and maintenance.

```
project/
├── index.html              # Main HTML file
├── css/
│   └── styles.css         # All styling
├── js/
│   └── script.js          # All JavaScript (menu, forms, animations)
└── images/                # Image assets folder
    ├── hero-bg.jpg        # Hero section background
    ├── about-main.jpg     # About section main image
    ├── about-accent.jpg   # About section accent image
    ├── gallery-1.jpg      # Gallery images (1-6)
    ├── gallery-2.jpg
    ├── gallery-3.jpg
    ├── gallery-4.jpg
    ├── gallery-5.jpg
    ├── gallery-6.jpg
    ├── hillview-villa.jpg # Accommodation images
    ├── farm-cottage.jpg
    └── group-villa.jpg
```

## 🖼️ How to Add Your Own Images

1. **Hero Section Background** (`hero-bg.jpg`)
   - Recommended size: 1920x1080px or larger
   - Should be a landscape image of your property/scenery

2. **About Section**
   - `about-main.jpg`: Main image (3:4 aspect ratio, ~800px wide)
   - `about-accent.jpg`: Accent image (4:3 aspect ratio, ~600px wide)

3. **Gallery Section** (`gallery-1.jpg` to `gallery-6.jpg`)
   - Mixed aspect ratios work best for dynamic layouts
   - Minimum 400px width recommended

4. **Accommodation Cards**
   - `hillview-villa.jpg`
   - `farm-cottage.jpg`
   - `group-villa.jpg`
   - Recommended: ~700px wide, 260px-400px height

**To add your images:**
1. Replace the placeholder JPG files in the `images/` folder with your own
2. Keep the same filenames, or update the `src` attributes in `index.html`
3. Supported formats: JPG, PNG, WebP

## 📝 File Descriptions

### `index.html`
- Main HTML structure
- Contains all semantic sections (hero, about, gallery, etc.)
- Links to external CSS and JavaScript files
- Image paths reference the `images/` folder

### `css/styles.css`
- Complete styling for all elements
- CSS variables for easy color customization
- Responsive design (mobile, tablet, desktop)
- Animations and transitions

### `js/script.js`
- Navigation scroll effects
- Mobile menu toggle
- Scroll reveal animations
- Booking form submission (connects to Google Apps Script)
- Date validation for check-in/check-out

## ⚙️ Customization Tips

### Colors
Edit the CSS variables at the top of `styles.css`:
```css
:root {
  --earth: #2c2318;
  --clay: #8b5e3c;
  --sand: #c9a97a;
  /* ...etc */
}
```

### Contact Information
Update these in `index.html`:
- Phone number (WhatsApp link, contact info)
- Email address
- Address
- Google Maps embed

### Booking Form
The form connects to Google Apps Script. To set it up:
1. Create a Google Form or Apps Script
2. Replace the `SCRIPT_URL` in `js/script.js` with your Google Apps Script URL

## 🚀 Quick Start

1. Open `index.html` in a browser to preview
2. Add your images to the `images/` folder
3. Customize text, colors, and contact info as needed
4. Deploy to any web hosting service

## 📱 Responsive Design

The site is fully responsive and works on:
- Desktop (1024px+)
- Tablet (768px-1024px)
- Mobile (320px-768px)

All breakpoints and media queries are in `styles.css`.

## 🎨 Features Included

✅ Smooth scrolling navigation
✅ Mobile hamburger menu
✅ Image gallery with hover effects
✅ Booking form with validation
✅ WhatsApp integration (floating button)
✅ Scroll reveal animations
✅ Responsive design
✅ Performance optimized

---

**Need help?** Check the inline comments in each file for additional details.
