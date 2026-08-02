# stock-web-app

Website for **InvestNITII** — SEBI Registered Research Analyst (INH000023454).
Live at https://www.investnitii.in

Plain HTML and CSS, no build step. Every push to `main` is deployed to GitHub
Pages automatically by `.github/workflows/static.yml`.

### 📄 Publishing a research post

**→ [CHATGPT-PROMPT.md](CHATGPT-PROMPT.md)** — copy this into ChatGPT with your
write-up. It returns the finished page plus your instructions.

**→ [PUBLISHING.md](PUBLISHING.md)** — the full walk-through, step by step.
No coding needed.

### Layout

| Path | What it is |
|---|---|
| `index.html` | Homepage |
| `research/` | Research posts — one folder per post, the folder name is the web address |
| `research/_TEMPLATE/` | Blank post to copy when writing a new one |
| `pages/` | Privacy policy, complaint data |
| `css/`, `js/`, `assets/` | Styles, scripts, images |
| `sitemap.xml` | List of pages given to Google |
