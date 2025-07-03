# 🧙‍♀️ Harry Potter Birthday Card ✨

An interactive, magical birthday card inspired by the Harry Potter universe! This web-based card features enchanting animations, sound effects, and interactive elements that will make any birthday celebration truly magical.

## ✨ Features

- **Interactive Envelope**: Click the wax seal to open your magical letter
- **Animated Elements**: Floating sparkles, magical particles, and smooth transitions
- **Sound Effects**: Magical audio feedback using Web Audio API
- **Interactive Gifts**: Click on magical items to reveal special birthday messages
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Magical Effects**: Cursor trails, confetti, and particle systems
- **Hogwarts Theme**: Beautiful design inspired by the wizarding world

## 🎨 Customization

### Personalizing the Card

1. **Names**: Replace `[Her Name]` and `[Your Name]` in `index.html` with actual names
2. **Messages**: Customize the birthday message in the card body
3. **Gifts**: Modify the gift content in `script.js` under the `giftContent` object
4. **Colors**: Adjust the color scheme in `styles.css` to match your preferences

### Example Customization

In `index.html`, find and replace:
```html
<h2>Dear [Her Name],</h2>
<!-- ... -->
<p class="signature-name">[Your Name]</p>
```

In `script.js`, customize the gifts:
```javascript
const giftContent = {
    gift1: {
        title: "📚 Magical Book of Spells",
        description: "Your personalized message here...",
        image: "📚"
    },
    // ... more gifts
};
```

## 🚀 Hosting on GitHub Pages

### Method 1: Simple Repository (Recommended)

1. **Create a new repository** on GitHub
   - Name it something like `harry-potter-birthday-card`
   - Make it public
   - Don't initialize with README (we already have one)

2. **Upload your files** to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Harry Potter Birthday Card"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/harry-potter-birthday-card.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click "Settings" tab
   - Scroll down to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

4. **Your card will be available at**:
   `https://YOUR_USERNAME.github.io/harry-potter-birthday-card/`

### Method 2: Using GitHub Desktop

1. Download and install [GitHub Desktop](https://desktop.github.com/)
2. Create a new repository through GitHub Desktop
3. Copy all the files to the repository folder
4. Commit and push the changes
5. Follow steps 3-4 from Method 1 to enable GitHub Pages

## 📱 Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ⚠️ Internet Explorer (limited support)

## 🎵 Audio Features

The card includes magical sound effects that work in modern browsers. Users may need to interact with the page first (click anywhere) to enable audio due to browser autoplay policies.

## 🎨 Design Features

- **Hogwarts Color Scheme**: Gryffindor red and gold, with magical accents
- **Typography**: Cinzel for headings (elegant serif), Crimson Text for body text
- **Animations**: Smooth CSS transitions and JavaScript-powered effects
- **Responsive**: Adapts beautifully to all screen sizes
- **Accessibility**: Keyboard navigation support (ESC to close modals)

## 🔧 Technical Details

- **HTML5**: Semantic markup with proper accessibility
- **CSS3**: Modern styling with gradients, animations, and responsive design
- **Vanilla JavaScript**: No external dependencies, pure web technologies
- **Web Audio API**: For magical sound effects
- **CSS Animations**: For smooth, performant visual effects

## 🎁 Gift Ideas

The card comes with three interactive gifts by default:
1. **Magical Book of Spells** 📚
2. **Chocolate Frog** 🍫
3. **Personalized Wand** 🪄

You can customize these or add more gifts by modifying the `giftContent` object in `script.js`.

## 🌟 Special Effects

- **Magical Particles**: Sparkles that burst from interactive elements
- **Floating Sparkles**: Background animation for atmosphere
- **Cursor Trail**: Golden trail following mouse movement
- **Confetti**: Celebration effect when the card is first opened
- **Glowing Elements**: Animated highlights on spell sections

## 📝 License

This project is open source and available under the MIT License. Feel free to use, modify, and share!

## 🎉 Happy Birthday!

This card was created with love and magic. May it bring joy and wonder to your special someone's birthday! 🧙‍♀️✨

---

*"It does not do to dwell on dreams and forget to live." - Albus Dumbledore* 