# Random-password

A small browser app that generates random passwords and random hex colors.

## Features

- **Password generator**: 16-character passwords with lowercase, uppercase, numbers and symbols.
- **Color generator**: random hex color codes (e.g. `#3FA2C1`); hover the word "Color" to preview it.
- **Light/dark theme**: click the icon in the top corner to switch.

## Running it

No build step or dependencies. Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

then visit http://localhost:8000.

## Files

| File | Purpose |
|---|---|
| `index.html` | Page layout |
| `styles.css` | Styling and light/dark themes |
| `main.js` | Password, color and theme logic |
| `Dark.png`, `Light.png` | Theme toggle icons |
