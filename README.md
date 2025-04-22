# Hamilton Storage - Self Storage Website

A modern, responsive website for Hamilton Self Storage, featuring a clean and professional design. This website is built with HTML, CSS, and JavaScript, with a Python server for local development.

## Features

- Responsive design that works on all devices
- Modern and clean UI with smooth transitions
- Interactive hero section with parallax scrolling
- Smooth scrolling navigation
- Interactive animations for service and location cards
- Contact form with validation
- Mobile-friendly navigation with hamburger menu
- CSS Grid and Flexbox layouts
- Font Awesome icons
- Google Fonts integration
- Python server with live reload for development

## Getting Started

1. Clone or download this repository
2. Install the required Python packages:
   ```
   pip install livereload
   ```
3. Start the Python server:
   ```
   python server.py
   ```
4. Open `http://localhost:8000` in your web browser
5. The server will automatically reload when you make changes to HTML, CSS, or JavaScript files

## Project Structure

- `index.html` - Main HTML file
- `css/style.css` - Stylesheet
- `js/main.js` - JavaScript functionality
- `images/` - Directory containing all images
- `server.py` - Python server for local development

## Customization

### Colors
The color scheme can be modified by changing the CSS variables in the `:root` selector in `style.css`:

```css
:root {
    --primary-color: #1a1a1a;
    --secondary-color: #333333;
    --accent-color: #666666;
    --text-color: #1a1a1a;
    --light-text: #666666;
    --background: #ffffff;
    --section-bg: #f8f8f8;
    --transition: all 0.3s ease;
    --border-color: #e0e0e0;
}
```

### Images
Replace the placeholder images in the `images` directory with your own:
- Add your logo as `hamiltonStoragLogo.png`
- Replace `southavenStorage.jpg` with your facility image
- Add any additional images you need

### Content
Edit the content in `index.html` to match your business:
- Update the hero section text
- Modify services and their descriptions
- Add your company information in the about section
- Update location information
- Modify contact information
- Update footer links and social media

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Dependencies

- Font Awesome 6.0.0
- Google Fonts (Poppins)
- Python with livereload package
- No other external dependencies required

## License

This template is available for personal and commercial use.

## Credits

- Font Awesome for icons
- Google Fonts for typography
- Colorlib for inspiration 
