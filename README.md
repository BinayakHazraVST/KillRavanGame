# 👹 Kill Ravan Game — Ramayan Reflex: The Final War

> A fast-paced browser-based reflex game inspired by the epic mythology of Ramayana. Your mission: slay as many Ravans as possible before the battle clock runs out!

---

## 🎮 Gameplay

Ravan (👹) moves randomly across the battlefield arena. Your task is simple — **click on Ravan as many times as possible** within the chosen time limit.

### How to Play

1. **Select a Battle Duration** — Choose from 15s, 30s, 45s, or 60s. You can also enter a custom duration.
2. **Enter the Battlefield** — Click the "Enter Battlefield" button to begin.
3. **Attack!** — Click the Ravan emoji (👹) every time it appears. Each successful click scores one point and moves Ravan to a new random position.
4. **Win the War** — When the timer runs out, your final score (Demons Slain) and attack speed (Arrow Speed) are displayed.

### Game States

| State      | Description                                              |
|------------|----------------------------------------------------------|
| `menu`     | Select battle duration and start                         |
| `waiting`  | Game ready — click Ravan to begin the timer              |
| `playing`  | Timer running — score as many hits as you can            |
| `finished` | Battle over — view results, play again, or retreat       |

---

## 📊 Stats Tracked

- **Demons Slain** — Total number of times you clicked Ravan
- **Dharma Time** — Remaining time displayed in `MM:SS` format
- **Arrow Speed** — Hits per second (calculated at game end)

---

## 🗂️ Project Structure

```
KillRavanGame/
├── index.html   # Main HTML file — structure & script linkage
├── style.css    # All styling — layout, colors, animations
├── app.js       # React game logic — state management & UI
└── README.md    # Project documentation (you're reading it!)
```

---

## ⚙️ Tech Stack

| Technology      | Purpose                                      |
|-----------------|----------------------------------------------|
| **HTML5**       | Page structure and semantic markup           |
| **CSS3**        | Styling, animations (`@keyframes pulse`), layout |
| **React 18**    | UI component & state management (via CDN)    |
| **Babel**       | In-browser JSX transpilation (via CDN)       |
| **Google Fonts**| `Cinzel` font for a mythological theme       |

> ℹ️ No build step required. The project runs entirely in the browser using CDN-loaded React and Babel.

---

## 🚀 How to Run

Since this is a pure frontend project with no build step:

1. **Clone or download** this repository.
2. **Open `index.html`** in any modern web browser (Chrome, Firefox, Edge, Safari).
3. That's it — the game loads instantly!

```bash
# Optional: serve locally using a simple HTTP server
npx serve .
# or
python3 -m http.server 8080
```

Then open `http://localhost:8080` in your browser.

---

## 🎨 Design Theme

The game uses a **Ramayana-inspired color palette**:

| Color         | Hex       | Represents              |
|---------------|-----------|-------------------------|
| Saffron       | `#FF9933` | Valor & Dharma          |
| Deep Red      | `#8B0000` | Maroon / Blood of battle|
| Parchment     | `#FFF8DC` | Ancient scrolls         |
| Goldenrod     | `#DAA520` | Divine gold             |
| Saddle Brown  | `#8B4513` | Earthy wood/teak        |

---

## 🛠️ Customization

- **Ravan Speed** — Change the `transition` duration on `.main-box` in `style.css`.
- **Game Arena Size** — Adjust `MAX_WIDTH` and `MAX_HEIGHT` constants in `app.js`.
- **Add Sound Effects** — Hook into `handleBoxClick()` in `app.js` to trigger audio.
- **New Difficulty Levels** — Add a speed multiplier that increases as score grows.

---

## 👨‍💻 Author

Made with ❤️ and devotion by **Binayak Hazra**

---

## 📜 License

This project is open-source and free to use under the [MIT License](https://opensource.org/licenses/MIT).

---

*"जय श्री राम! — Jai Shri Ram!"* 🙏
