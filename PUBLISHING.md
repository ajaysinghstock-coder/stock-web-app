# How to publish a new research post

**You never write code.** ChatGPT writes the HTML, you paste it into GitHub.
About 10 minutes per post.

Every post lives in its own folder inside `research/`. The folder name becomes
the web address:

```
research/gravita-india-deep-dive/index.html
        └─────────┬─────────┘
   https://www.investnitii.in/research/gravita-india-deep-dive/
```

---

## Before you start

Have these ready:

1. **The write-up** — your finished research, in a Word doc or plain text.
2. **A short title** — e.g. `Tata Motors — FY27 Outlook`
3. **A folder name (the web address)** — the title in lower case with hyphens:
   `tata-motors-fy27-outlook`
4. **For a long report (more than about 2 pages): the PDF on Google Drive.**
   Upload it to Drive, click **Share**, set **General access** to
   **"Anyone with the link — Viewer"**, then **Copy link**. It looks like
   `https://drive.google.com/file/d/1AbC…/view?usp=sharing`.
   The PDF gets embedded in the page so readers can page through it, with a
   button to open it in Drive — and ChatGPT also writes an **Executive summary**
   at the top. If the report is short, skip this; ChatGPT will ask if it needs it.

Folder-name rules — get these right, they can't be changed later:

- all lower case
- hyphens instead of spaces
- letters, numbers and hyphens only — no `&`, no dots, no capitals
- **never rename it after publishing.** The old address would break and lose its
  Google ranking.

---

## Step 1 — Get the HTML from ChatGPT

Everything ChatGPT needs is in one file: **[CHATGPT-PROMPT.md](CHATGPT-PROMPT.md)**

1. Open that file and click the **copy icon** at the top-right of the big box.
2. Open ChatGPT and paste it.
3. Before sending, scroll down inside what you pasted to **MY DETAILS** and fill
   in the six lines (title, folder name, category, sub-category, date, and
   whether you hold a position).
4. Under **MY RESEARCH WRITE-UP**, paste your write-up — or attach the document
   and type "see attached file".
5. Send it.

If you leave something out, ChatGPT will ask you for it before writing anything.

ChatGPT replies with:

- **FILE 1** — the complete page
- **FILE 2** — the card that goes on the website
- **FILE 3** — the sitemap line
- **YOUR STEPS** — steps 2 to 5 below, already filled in with your folder name
- A note listing anything it could not fill in

> ⚠️ Read the page it produces before publishing. It is told never to invent a
> number, but you are the one publishing under SEBI registration INH000023454 —
> check the figures are yours and that the holdings line is right.

---

## Step 2 — Create the page on GitHub

1. Go to your repository on **github.com**
2. Click **Add file** → **Create new file**
3. In the file-name box, type — replacing the folder name with yours:
   ```
   research/tata-motors-fy27-outlook/index.html
   ```
   *(Typing the `/` characters automatically creates the folder.)*
4. Paste **FILE 1** (the full HTML file) into the big box — it must be empty
   before you paste, which it always is for a new file
5. Scroll down, click **Commit changes**

> Only ever paste **FILE 1** into a brand-new, empty file. Pasting it into a page
> that already has content gives you two headers and two footers.

---

## Step 3 — Add the card in two places

The same card block goes in two files, so the post shows up on the homepage
**and** on the Research page.

**3a. Homepage** — open `index.html` → click the **pencil** ✏️ icon:

- Use `Ctrl+F` (`Cmd+F` on Mac) to find the tab ChatGPT named in YOUR STEPS:
  - "Research Reports" → find `id="tab-reports"`
  - "Investment Notes" → find `id="tab-notes"`
  - "Long-Term Ideas" → find `id="tab-ideas"`
- Just below it you'll see `<div class="insights-grid">`
- Paste **FILE 2** (the card) on a new line straight after that `<div class="insights-grid">` line
- Click **Commit changes**

**3b. Research page** — open `research/index.html` → pencil ✏️ icon:

- Find `<div class="insights-grid">` (there is only one)
- Paste the same **FILE 2** straight after it
- Click **Commit changes**

---

## Step 4 — Add it to the sitemap

Open `sitemap.xml` → pencil ✏️ icon → paste **FILE 3** just above the line that
reads `<!-- ══════…  PUBLISHING A RESEARCH POST` → **Commit changes**.

This tells Google the page exists. The post works without it, but it gets found
slower.

---

## Step 5 — Check it

Wait about 2 minutes (the site rebuilds itself after every commit — watch the
**Actions** tab, a green tick ✅ means it's live), then open:

```
https://www.investnitii.in/research/your-folder-name/
```

Also check the homepage — your new card should be there, and clicking it should
open the post.

---

## If something goes wrong

| What you see | What it means | Fix |
|---|---|---|
| Page shows **404** | Folder name and link don't match | Compare the folder name in GitHub with the `href` in the card — they must be identical |
| Card is there but not clickable | The `<a …>` part got lost | Re-paste FILE 2 exactly as ChatGPT gave it |
| Card appears in the wrong tab | Pasted under the wrong grid | Cut it and paste it under the right `id="tab-…"` |
| Page looks unstyled (plain text, no colours) | A `<link rel="stylesheet">` line got deleted from the top | Re-paste FILE 1 from ChatGPT |
| Page never appears on Google | The `noindex` line is still in the file | Open the file, delete the line containing `noindex`, commit |
| Yellow "Draft" box on the live page | The draft banner wasn't removed | Delete the paragraph with `class="draft-banner"` |
| PDF box says "you need access" | The Drive file isn't shared publicly | In Drive: **Share** → General access → **Anyone with the link — Viewer** |
| PDF box is empty or grey | The link wasn't the `/preview` form, or the id is wrong | Re-copy the Drive link and ask ChatGPT to redo the embed block |
| **Footer (or menu) appears twice** | FILE 1 was pasted into a file that already had content, instead of a new empty one | Open the file's **History**, restore the version before your change, then redo Step 2 with **Add file → Create new file** |

Nothing you do here can break the live site permanently — every change is a
commit, and GitHub keeps every previous version. To undo: open the file's
**History**, open the version before your change, and restore it.

---

## Reference

| File | What it is |
|---|---|
| `CHATGPT-PROMPT.md` | The prompt you paste into ChatGPT. Start here. |
| `research/_TEMPLATE/index.html` | The blank post. Copy it; never edit it. |
| `research/<folder>/index.html` | One published post. |
| `research/index.html` | The `/research/` page listing every post. |
| `index.html` | Homepage, including the Insights cards. |
| `sitemap.xml` | The list of pages given to Google. |
| `css/research.css` | Styling for post pages. Don't edit. |

The three category tabs are fixed: **Research Reports**, **Investment Notes**,
**Long-Term Ideas**. Adding a new tab needs a developer.
