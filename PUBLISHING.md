# Publishing a research post

Every post is one folder under `research/`. The folder name **is** the URL slug:

```
research/gravita-india-deep-dive/index.html   →   https://www.investnitii.in/research/gravita-india-deep-dive/
```

No build step, no CMS. You add files, commit, push — the GitHub Actions workflow
in `.github/workflows/static.yml` deploys the whole repo to GitHub Pages on every
push to `main`.

---

## Slug rules

The folder name shows up in the URL and in Google, so keep it:

- **lower case**, words joined by hyphens — `apollo-micro-systems-q4-fy26`
- **short but descriptive** — company or theme first, qualifier after
- **no dates, no spaces, no `&`, no capitals, no underscores**
- **never renamed after publishing** — the old URL would 404 and lose its search
  ranking. If a title changes, leave the slug alone.

---

## Steps

### 1. Copy the template

```bash
cp -r research/_TEMPLATE research/your-new-slug
```

`research/_TEMPLATE/` is the blank post. Never edit it directly — copy it.

### 2. Fill in the page

Open `research/your-new-slug/index.html`. Everything you must change is marked
with an `EDIT:` comment or sits between the `▼▼▼ WRITE THE REPORT HERE ▼▼▼`
markers. In order, top to bottom:

| Where | What to change |
|---|---|
| `<title>` | `Post title — InvestNITII Research` |
| `<meta name="description">` | One or two sentences. This is the Google snippet. |
| `<link rel="canonical">` | Must end with your slug: `…/research/your-new-slug/` |
| Open Graph + Twitter tags | Same title, description, and URL |
| JSON-LD block | `headline`, `description`, `datePublished`, `dateModified`, and both `@id`/`item` URLs |
| `<h1>` and the tag chip | The visible title and category |
| `<time datetime="…">` | The publication date, in both the attribute and the visible text |
| `.research-lead` | The intro paragraph (reuse the meta description) |
| `.research-content` | The actual write-up |
| `.disclosures` | **Check every line.** The holdings disclosure must state your real position. |

Delete the `.draft-banner` paragraph and the `.placeholder` paragraphs as you
replace them.

### 3. Let search engines see it

The template ships with this in `<head>`:

```html
<meta name="robots" content="noindex, follow" />
```

That keeps half-written drafts out of Google. **Delete that line** when the post
is finished. If you forget, the page still works for anyone with the link — it
just won't rank.

### 4. Add the card to the two listing pages

**`index.html`** — inside the matching tab (`tab-reports`, `tab-notes`, or
`tab-ideas`), copy an existing `<article class="insight-card">` block and change
the tag, title, `href`, blurb, and meta line:

```html
<article class="insight-card">
  <span class="insight-tag">Equity Research</span>
  <h3><a class="insight-card__link" href="/research/your-new-slug/">Post title</a></h3>
  <p>The one-line blurb.</p>
  <span class="insight-meta">Category · Sub-category</span>
  <span class="insight-card__more">Read the report</span>
</article>
```

**`research/index.html`** — same block, in the single grid on that page.

### 5. Add it to the sitemap

In `sitemap.xml`, copy the commented block near the top, paste it above the
comment, and set the slug and today's date.

### 6. Commit and push

```bash
git add research/your-new-slug index.html research/index.html sitemap.xml
git commit -m "Publish research: post title"
git push
```

Give the Actions run a minute, then check
`https://www.investnitii.in/research/your-new-slug/`.

---

## Checklist before pushing

- [ ] Slug is lower-case, hyphenated, and final
- [ ] Canonical, Open Graph, and JSON-LD URLs all end with that same slug
- [ ] Publication date set in `<time>` and in the JSON-LD
- [ ] Draft banner deleted
- [ ] `noindex` meta tag deleted
- [ ] Placeholder paragraphs all replaced
- [ ] Disclosures section reviewed — especially the holdings line
- [ ] Card added on `index.html` **and** `research/index.html`
- [ ] `sitemap.xml` updated

---

## Images

Put them in `assets/` and reference them absolutely, so the path works from any
page depth:

```html
<figure>
  <img src="/assets/gravita-revenue-split.png" alt="Gravita revenue split by segment, FY22–FY26" />
  <figcaption>Source: company annual reports.</figcaption>
</figure>
```

Resize charts to about 1200px wide before committing — full-resolution exports
make the page slow to load.

---

## Files involved

| File | Role |
|---|---|
| `research/_TEMPLATE/` | Blank post. Copy, never edit. |
| `research/<slug>/index.html` | One published post. |
| `research/index.html` | The `/research/` hub listing every post. |
| `css/research.css` | Styling for post pages and the clickable cards. |
| `index.html` | Homepage cards in the Insights tabs. |
| `sitemap.xml` | Tells Google which URLs exist. |
