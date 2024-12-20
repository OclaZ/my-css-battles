# CSS Battles App

A web application for showcasing daily CSS challenges and creative solutions. View, interact with, and learn from various CSS battle implementations organized by date.

## App Overview

![App Sketch](./Sketch.svg)

The app features a simple, intuitive layout:

- Left sidebar: Chronological list of battles
- Main content: Interactive preview of selected battle
- Bottom panel: Source code viewer
- Clean, minimal interface for distraction-free learning

## Features

- Browse CSS battles chronologically
- Interactive preview of each battle solution
- Clean, responsive user interface
- Easy-to-follow organizational structure

## Getting Started

### Prerequisites

- A modern web browser
- Basic understanding of HTML/CSS

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/yourusername/css-battles-app.git
   ```

2. Navigate to the project directory

   ```bash
   cd css-battles-app
   ```

3. Open `index.html` in your browser to start exploring the battles

## Project Structure

```
css-battles-app/
├── battles/
│   └── YYYY-MM-DD.html
├── src/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── assets/
│   └── sketch.svg
└── README.md
```

## Adding New Battles

1. Create a new file in the `battles` directory using the date format: `YYYY-MM-DD.html`
2. Add your CSS battle solution to the new file
3. Update the battles registry in `script.js`:
   ```javascript
   {
     date: 'YYYY-MM-DD',
     path: 'battles/YYYY-MM-DD.html'
   }
   ```

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by [CSS Battle](https://cssbattle.dev/)
- Thanks to all contributors who participate in daily CSS challenges

---

For questions or suggestions, please open an issue in the repository.
