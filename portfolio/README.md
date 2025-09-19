# Jaydev Semwal - Web Developer Portfolio

A modern, responsive portfolio website built with HTML, CSS, and JavaScript, featuring animations powered by Anime.js.

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations using Anime.js
- Interactive sections: About, Skills, Projects, and Contact
- Custom cursor effects
- Project filtering functionality
- Animated skill bars
- Contact form with validation
- Scroll animations for enhanced user experience

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Anime.js for animations
- Font Awesome for icons
- Google Fonts

## Getting Started

### Prerequisites

- A modern web browser
- Basic knowledge of HTML, CSS, and JavaScript (for customization)

### Installation

1. Clone the repository or download the files

```bash
git clone https://github.com/yourusername/portfolio.git
```

2. Navigate to the project directory

```bash
cd portfolio
```

3. Open `index.html` in your browser to view the website locally

## Deployment

This portfolio website can be easily deployed using various hosting services:

### GitHub Pages

1. Create a GitHub repository
2. Push your code to the repository
3. Go to Settings > Pages
4. Select the branch you want to deploy (usually `main` or `master`)
5. Your site will be published at `https://yourusername.github.io/repository-name/`

### Netlify

1. Sign up for a Netlify account
2. Drag and drop your project folder to the Netlify dashboard
3. Your site will be deployed with a Netlify subdomain
4. You can configure a custom domain in the Netlify settings

### Vercel

1. Sign up for a Vercel account
2. Install Vercel CLI: `npm i -g vercel`
3. Navigate to your project directory and run: `vercel`
4. Follow the prompts to deploy your site

## Customization

### Personal Information

Update your personal information in the `index.html` file:

- Name
- Contact details
- About section
- Skills
- Projects

### Styling

Customize the look and feel by modifying the `styles.css` file:

- Colors: Update the CSS variables in the `:root` selector
- Fonts: Change the Google Font import and font-family properties
- Layout: Adjust padding, margins, and grid layouts as needed

### Projects

Add your own projects by modifying the project cards in the HTML:

```html
<div class="project-card" data-category="your-category">
    <div class="project-img">
        <img src="path/to/your/image.jpg" alt="Project Name">
    </div>
    <div class="project-info">
        <h3>Project Name</h3>
        <p>Project description goes here.</p>
        <div class="project-tags">
            <span>Tag1</span>
            <span>Tag2</span>
        </div>
        <div class="project-links">
            <a href="#" class="btn small-btn"><i class="fas fa-external-link-alt"></i> Live</a>
            <a href="#" class="btn small-btn"><i class="fab fa-github"></i> Code</a>
        </div>
    </div>
</div>
```

### Animations

Customize animations by modifying the `script.js` file. The animations are powered by Anime.js.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Jaydev Semwal - semwaljavdev01@gmail.com

---

Feel free to use this portfolio template for your own projects! If you have any questions or suggestions, please reach out.