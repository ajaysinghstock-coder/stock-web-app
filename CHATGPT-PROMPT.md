# The ChatGPT prompt

This is the only thing you need to turn a research write-up into a live page.
Everything ChatGPT needs — the rules, the page template, and the steps you'll
follow afterwards — is inside the one box below.

### How to use it

1. Hover over the box below and click the **copy** icon in its top-right corner.
2. Open ChatGPT and paste it.
3. Before sending, scroll to **MY DETAILS** near the bottom of what you pasted
   and fill in the six lines, then paste your write-up under
   **MY RESEARCH WRITE-UP** (or attach the document and type "see attached file").
4. Send. ChatGPT replies with three files and your step-by-step instructions.

If you forget something, ChatGPT will ask you for it before writing anything.

> **Check before you publish.** ChatGPT is told never to invent a number, but you
> are the SEBI Registered Research Analyst — read the page it produces and make
> sure every figure and claim is yours, and that the holdings line is correct.

Full walk-through with screenshots of where each block goes:
**[PUBLISHING.md](PUBLISHING.md)**

---

```text
You are helping me publish a research post on my website, www.investnitii.in.
I am NOT a developer. I will give you my research write-up. You will give me
finished files to copy and paste, plus the exact steps to follow afterwards.

════════════════════════════════════════════════════════════════════
FIRST — CHECK YOU HAVE EVERYTHING
════════════════════════════════════════════════════════════════════
Before you generate anything, make sure you have all seven items below.
If any is missing or unclear, ASK ME for it and STOP. Do not guess.

  1. Title of the post
  2. Folder name for the web address
     (lower case, hyphens instead of spaces, letters/numbers/hyphens only.
      If I did not give one, suggest one from the title and ask me to confirm.)
  3. Category — exactly one of: Equity Research / Investment Note / Long-Term Idea
  4. Sub-category shown under the title, e.g. "Defence · Small Cap"
  5. Publication date in YYYY-MM-DD form
  6. Whether I hold a position: "do hold" or "do not hold"
  7. My research write-up (pasted below or attached as a file)
  8. A Google Drive link to the full PDF report — OPTIONAL for a short post,
     but if my write-up runs longer than about 2 pages (roughly 1,000 words)
     you must ASK ME for it before you generate anything, because a long report
     belongs on the page as a readable PDF as well as text.
     The link must look like:
       https://drive.google.com/file/d/FILE_ID/view?usp=sharing
     If I give you a link in any other form, ask me to re-share the file with
     "Anyone with the link — Viewer" and send it again. Never guess a FILE_ID.

════════════════════════════════════════════════════════════════════
RULES — FOLLOW EXACTLY
════════════════════════════════════════════════════════════════════
1.  Start from the template at the bottom of this message. Keep its structure,
    all class names, all <link rel="stylesheet"> lines, the header and the
    footer EXACTLY as they are. Change only what these rules say to change.

2.  Use ONLY the content I provide. Do not invent, estimate, extrapolate or
    "fill in" any figure, date, price target, ratio or fact — not even an
    obvious-looking one. If something needed is missing, put the visible
    marker [TO BE FILLED] there and list it for me at the end.
    This is a SEBI-regulated site. A made-up number is a serious problem.

3.  In the <head>, replace with my details:
      - <title>  →  "My title — InvestNITII Research"
      - <meta name="description">  →  my summary, 1-2 sentences, under 160 characters
      - <link rel="canonical">  →  must end with /research/MY-FOLDER-NAME/
      - every og: and twitter: tag (title, description, url)
      - article:published_time and article:section
      - inside the JSON-LD block: headline, description, datePublished,
        dateModified, articleSection, and BOTH URLs that contain the folder name
    Every URL you write must end with my exact folder name.

4.  DELETE the two-line comment starting "DRAFT:" and the line
    <meta name="robots" content="noindex, follow" /> underneath it.

5.  DELETE the comment "DELETE THIS BANNER..." and the whole
    <p class="draft-banner"> ... </p> paragraph.

6.  In the visible page, replace: the breadcrumb's last <span>, the
    <span class="insight-tag">, the <h1>, the <time> tag (BOTH the datetime="..."
    attribute and the text a reader sees), the "Category · Sub-category" text,
    and <p class="research-lead"> (use the same summary as the meta description).

7.  Replace every <p class="placeholder">...</p> with my real content, and remove
    the class="placeholder" part. Change the <h2> headings to match my actual
    sections — add or delete sections as my write-up requires. Format using only:
      <h2> section heading      <h3> sub-heading
      <p> paragraph             <ul><li> bullets
      <strong> for emphasis     <blockquote> for a pulled-out line
      tables as: <div class="table-scroll"><table>...</table></div>
    Do not add inline styles, <div>s, JavaScript, or classes that are not
    already used in the template.

8.  Fill <aside class="key-points"> with 3 to 5 real takeaways drawn from my
    content. Delete the "Placeholder —" lines.

9.  Delete the big comment block that starts "Handy blocks to copy while writing".

10. In the Disclosures section change ONLY this: replace <em>[do / do not]</em>
    with the wording I gave you ("do" or "do not"), and remove the
    "EDIT: state the actual position" comment. Leave every other sentence in
    that section word for word as it is. Do not reword the disclaimer.

11. IF MY WRITE-UP IS LONGER THAN ABOUT 2 PAGES (roughly 1,000 words):
    a. Add "<h2>Executive summary</h2>" as the FIRST section, directly under the
       Key takeaways box, followed by 5 to 8 sentences (or short bullets) that
       cover the thesis, the evidence and the conclusion. Draw every word from
       my write-up — do not add anything that is not in it.
    b. If I gave you a Google Drive link, put the report embed straight after the
       Executive summary, using this exact markup with FILE_ID replaced in BOTH
       places by the id from my link (the part between /d/ and /view):

       <div class="report-embed">
         <iframe src="https://drive.google.com/file/d/FILE_ID/preview"
                 title="Full research report" loading="lazy"></iframe>
       </div>
       <p class="report-actions">
         <a class="btn btn-outline" target="_blank" rel="noopener"
            href="https://drive.google.com/file/d/FILE_ID/view">Open the full report (PDF)</a>
         <span class="report-note">Opens in Google Drive.</span>
       </p>

    c. Still write the full text of the post below it. The PDF is in addition to
       the write-up, never a replacement for it.
    If my write-up is 2 pages or shorter, skip all of rule 11 — no Executive
    summary, no embed — unless I explicitly gave you a Drive link anyway, in
    which case include only the embed block.

12. Keep the whole file as one plain HTML file. No frameworks, no markdown.

13. FILE 1 must contain the site header EXACTLY ONCE and the site footer EXACTLY
    ONCE. Never repeat the <header class="site-header"> block or the
    <footer class="site-footer"> block, and never append a second copy of the
    page. Before you answer, count them: one <header class="site-header">, one
    <footer class="site-footer">, one </body>, one </html>. If your draft has
    two of any of these, delete the extra one before showing me the file.

════════════════════════════════════════════════════════════════════
WHAT TO GIVE ME BACK — in this order, each in its own code block
════════════════════════════════════════════════════════════════════

FILE 1 — the complete HTML file, from <!DOCTYPE html> to </html>.

FILE 2 — the card, exactly this shape with my details filled in:

<article class="insight-card">
  <span class="insight-tag">MY CATEGORY</span>
  <h3><a class="insight-card__link" href="/research/MY-FOLDER-NAME/">MY TITLE</a></h3>
  <p>My summary in one sentence, 25 words maximum.</p>
  <span class="insight-meta">MY SUB-CATEGORY</span>
  <span class="insight-card__more">READ-LABEL</span>
</article>

where READ-LABEL is "Read the report" for Equity Research,
"Read the note" for Investment Note, "Read the idea" for Long-Term Idea.

FILE 3 — the sitemap entry:

<url>
  <loc>https://www.investnitii.in/research/MY-FOLDER-NAME/</loc>
  <lastmod>MY-DATE</lastmod>
  <changefreq>yearly</changefreq>
  <priority>0.8</priority>
</url>

THEN — write out my steps, with my real folder name already filled in, in
exactly this form (replace the CAPITALS, and pick the correct tab id in step 3
from my category: Equity Research → tab-reports, Investment Note → tab-notes,
Long-Term Idea → tab-ideas):

  YOUR STEPS — do these on github.com/ajaysinghstock-coder/stock-web-app

  1. Click "Add file" → "Create new file".
     In the file name box type exactly:
         research/MY-FOLDER-NAME/index.html
     The big box must be COMPLETELY EMPTY before you paste — this is a brand
     new file, so never paste FILE 1 into a page that already has content,
     or the header and footer will appear twice.
     Paste FILE 1. Click "Commit changes".

  2. Open index.html and click the pencil icon.
     Press Ctrl+F and search for:  id="TAB-ID"
     Directly under it is a line:  <div class="insights-grid">
     Paste FILE 2 on a new line straight after that line.
     Paste ONLY the card block — never FILE 1 here, it would duplicate the
     whole page including the footer.
     Click "Commit changes".

  3. Open research/index.html and click the pencil icon.
     Press Ctrl+F and search for:  <div class="insights-grid">
     Paste FILE 2 on a new line straight after it.
     Click "Commit changes".

  4. Open sitemap.xml and click the pencil icon.
     Paste FILE 3 just above the line that starts:  <!-- ═════
     Click "Commit changes".

  5. Open the "Actions" tab and wait for the green tick (about 2 minutes),
     then check your post is live at:
         https://www.investnitii.in/research/MY-FOLDER-NAME/
     and that the card shows on https://www.investnitii.in and opens the post.

FINALLY — list anything you marked [TO BE FILLED], and confirm in one line that
you did not add any number or fact that was not in my write-up. If you used a
Drive embed, remind me in one line to check the file is shared as "Anyone with
the link — Viewer", or the embed will show an access-denied box to visitors. If there is
nothing to report, say "Nothing invented, nothing missing."

════════════════════════════════════════════════════════════════════
MY DETAILS
════════════════════════════════════════════════════════════════════
Title:
Folder name (web address):
Category (Equity Research / Investment Note / Long-Term Idea):
Sub-category:
Publication date (YYYY-MM-DD):
Do I hold a position in this security? (do hold / do not hold):
Google Drive link to the full PDF (leave blank if there isn't one):

════════════════════════════════════════════════════════════════════
MY RESEARCH WRITE-UP
════════════════════════════════════════════════════════════════════
(paste it here, or attach the document and write "see attached file")



════════════════════════════════════════════════════════════════════
THE TEMPLATE — start from this
════════════════════════════════════════════════════════════════════
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- Primary SEO -->
  <title>Post title goes here — InvestNITII Research</title>
  <meta name="description" content="One or two sentences that describe the post. This text is reused as the meta description, the social preview, and the card blurb on the homepage." />
  <meta name="author" content="Ajay Singh (InvestNITII)" />
  <link rel="canonical" href="https://www.investnitii.in/research/SLUG-GOES-HERE/" />
  <meta name="theme-color" content="#0e0f12" />
  <!-- DRAFT: delete the next line when the write-up below is finished, so the
       page can be indexed by search engines. -->
  <meta name="robots" content="noindex, follow" />

  <!-- Open Graph -->
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="InvestNITII" />
  <meta property="og:title" content="Post title goes here" />
  <meta property="og:description" content="One or two sentences that describe the post. This text is reused as the meta description, the social preview, and the card blurb on the homepage." />
  <meta property="og:url" content="https://www.investnitii.in/research/SLUG-GOES-HERE/" />
  <meta property="og:image" content="https://www.investnitii.in/assets/InvestNITII.png" />
  <meta property="article:published_time" content="2026-08-02" />
  <meta property="article:author" content="Ajay Singh" />
  <meta property="article:section" content="Equity Research" />

  <!-- Twitter / X -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Post title goes here" />
  <meta name="twitter:description" content="One or two sentences that describe the post. This text is reused as the meta description, the social preview, and the card blurb on the homepage." />
  <meta name="twitter:image" content="https://www.investnitii.in/assets/InvestNITII.png" />

  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

  <link rel="stylesheet" href="/css/styles.css" />
  <link rel="stylesheet" href="/css/logo.css" />
  <link rel="stylesheet" href="/css/research.css" />

  <!-- Structured data: Article + breadcrumb -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Post title goes here",
        "description": "One or two sentences that describe the post. This text is reused as the meta description, the social preview, and the card blurb on the homepage.",
        "image": "https://www.investnitii.in/assets/InvestNITII.png",
        "datePublished": "2026-08-02",
        "dateModified": "2026-08-02",
        "inLanguage": "en-IN",
        "articleSection": "Equity Research",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.investnitii.in/research/SLUG-GOES-HERE/" },
        "author": {
          "@type": "Person",
          "name": "Ajay Singh",
          "jobTitle": "SEBI Registered Research Analyst",
          "url": "https://www.investnitii.in/#team"
        },
        "publisher": {
          "@type": "Organization",
          "name": "InvestNITII",
          "logo": { "@type": "ImageObject", "url": "https://www.investnitii.in/assets/InvestNITII.png" }
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.investnitii.in/" },
          { "@type": "ListItem", "position": 2, "name": "Research", "item": "https://www.investnitii.in/research/" },
          { "@type": "ListItem", "position": 3, "name": "Post title goes here", "item": "https://www.investnitii.in/research/SLUG-GOES-HERE/" }
        ]
      }
    ]
  }
  </script>
</head>
<body class="dark">
  <!-- Header / Navigation -->
  <header class="site-header">
    <div class="container nav-wrap">
      <a href="/" class="brand">
        <span class="logo-badge">
          <img src="/assets/InvestNITII.png" alt="InvestNITII Logo" class="logo-badge__img" width="38" height="38" decoding="async" />
        </span>
        <span class="brand-text">InvestNITII</span>
      </a>
      <nav class="main-nav" aria-label="Main">
        <ul>
          <li><a href="/#about">About</a></li>
          <li><a href="/#strategy">Strategy</a></li>
          <li><a href="/#fees">Fees</a></li>
          <li><a href="/research/">Research</a></li>
          <li><a href="/#team">Team</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>
      </nav>
      <div class="nav-actions">
        <a href="tel:+917551199974" class="btn btn-ghost">+91 75511 99974</a>
        <a href="https://www.investnitii.in" target="_blank" rel="noopener" class="btn btn-ghost">www.investnitii.in</a>
        <button id="themeToggle" class="theme-toggle" aria-label="Toggle theme">Dark</button>
      </div>
    </div>
  </header>

  <article class="research-post">
    <div class="container">

      <nav class="breadcrumb" aria-label="Breadcrumb">
        <a href="/">Home</a>
        <span aria-hidden="true">/</span>
        <a href="/research/">Research</a>
        <span aria-hidden="true">/</span>
        <span aria-current="page">Post title goes here</span>
      </nav>

      <header class="research-head">
        <span class="insight-tag">Equity Research</span>
        <h1>Post title goes here</h1>
        <p class="research-meta">
          <!-- EDIT: set the real publication date in both places -->
          <time datetime="2026-08-02">2 August 2026</time>
          <span aria-hidden="true">·</span> Category · Sub-category
          <span aria-hidden="true">·</span> Ajay Singh, SEBI RA INH000023454
        </p>
        <p class="research-lead">One or two sentences that describe the post. This text is reused as the meta description, the social preview, and the card blurb on the homepage.</p>
      </header>

      <!-- DELETE THIS BANNER once the sections below hold the real write-up -->
      <p class="draft-banner">
        <strong>Draft.</strong> This page is a scaffold. Replace the placeholder
        sections below with the write-up, delete this banner, and remove the
        <code>noindex</code> meta tag in the &lt;head&gt;.
      </p>

      <div class="research-content">
        <!-- ▼▼▼ WRITE THE REPORT HERE ▼▼▼ -->

        <aside class="key-points">
          <h2>Key takeaways</h2>
          <ul>
            <li>Placeholder — the first thing a reader should remember.</li>
            <li>Placeholder — the second.</li>
            <li>Placeholder — the third.</li>
          </ul>
        </aside>

        <h2>Business overview</h2>
        <p class="placeholder">What the company does, how it earns, and which segments matter.</p>

        <h2>Industry &amp; competitive position</h2>
        <p class="placeholder">Market structure, share, moat, and who it competes with.</p>

        <h2>Financial analysis</h2>
        <p class="placeholder">Revenue, margins, cash flow, balance sheet, and return ratios.</p>

        <h2>Valuation</h2>
        <p class="placeholder">Method used, assumptions, and the range it produces.</p>

        <h2>Key risks</h2>
        <p class="placeholder">What would break the thesis.</p>

        <h2>Conclusion</h2>
        <p class="placeholder">Where the analysis lands, and what to watch next.</p>

        <!-- Handy blocks to copy while writing:

             Full report from Google Drive — only when a shareable link exists.
             Replace FILE_ID in BOTH places with the id from the share link:
             https://drive.google.com/file/d/FILE_ID/view?usp=sharing

             <div class="report-embed">
               <iframe src="https://drive.google.com/file/d/FILE_ID/preview"
                       title="Full research report" loading="lazy"></iframe>
             </div>
             <p class="report-actions">
               <a class="btn btn-outline" target="_blank" rel="noopener"
                  href="https://drive.google.com/file/d/FILE_ID/view">Open the full report (PDF)</a>
               <span class="report-note">Opens in Google Drive.</span>
             </p>

             <h3>A sub-heading</h3>
             <ul><li>A bullet</li></ul>
             <blockquote>A pulled-out quote or key number.</blockquote>
             <figure>
               <img src="/assets/your-chart.png" alt="Describe the chart" />
               <figcaption>Source: company filings.</figcaption>
             </figure>
             <div class="table-scroll">
               <table>
                 <thead><tr><th>Metric</th><th>FY25</th><th>FY26</th></tr></thead>
                 <tbody><tr><td>Revenue</td><td>—</td><td>—</td></tr></tbody>
               </table>
             </div>
        -->

        <!-- ▲▲▲ END OF REPORT ▲▲▲ -->
      </div>

      <!-- ────────────────────────────────────────────────────────────────
           SEBI disclosures. Check every line before publishing — the
           holding disclosure in particular must reflect reality.
           ──────────────────────────────────────────────────────────────── -->
      <section class="disclosures" id="disclosures">
        <h2>Disclosures &amp; Disclaimer</h2>
        <p>
          <strong>Analyst certification.</strong> The views expressed above accurately
          reflect the personal views of the research analyst about the subject
          securities or issuers. No part of the analyst's compensation was, is, or
          will be directly or indirectly related to the specific recommendations or
          views expressed here.
        </p>
        <p>
          <strong>Registration.</strong> InvestNITII (Ajay Singh) is a Research Analyst
          registered with the Securities and Exchange Board of India, registration
          number <strong>INH000023454</strong>.
        </p>
        <p>
          <!-- EDIT: state the actual position before publishing -->
          <strong>Disclosure of interest.</strong> The analyst and/or their relatives
          <em>[do / do not]</em> hold a position in the securities discussed in this
          report as on the date of publication.
        </p>
        <p>
          <strong>Disclaimer.</strong> All content published here is for educational
          purposes only and does not constitute investment advice. SEBI Registration
          does not guarantee performance. Registration granted by SEBI and
          certification from NISM in no way guarantee performance of the intermediary
          or provide any assurance of returns to investors. Investments in securities
          are subject to market risks. Please read all related documents carefully
          before investing.
        </p>
        <p>
          <strong>Grievances.</strong> Write to
          <a href="mailto:ajaysingh.stock@gmail.com">ajaysingh.stock@gmail.com</a> or
          call <a href="tel:+917551199974">+91 75511 99974</a>. See our
          <a href="/pages/complaint-data.html">complaint data</a> and
          <a href="/pages/privacy-policy.html#ra-disclosure">full disclosures</a>.
        </p>
      </section>

      <p class="research-back"><a href="/research/">&larr; All research</a></p>
    </div>
  </article>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <div class="brand">
          <span class="logo-badge logo-badge--up">
            <img src="/assets/InvestNITII.png" alt="InvestNITII Logo" class="logo-badge__img" width="38" height="38" decoding="async" loading="lazy" />
          </span>
          <span class="brand-text">InvestNITII</span>
        </div>
        <p class="footer-blurb">
          SEBI Registered Research Analyst. Research-backed equity investing
          grounded in quality, value, and an ownership mindset.
        </p>
      </div>
      <div>
        <h5>Navigate</h5>
        <ul>
          <li><a href="/#about">About</a></li>
          <li><a href="/#strategy">Strategy</a></li>
          <li><a href="/#fees">Fees</a></li>
          <li><a href="/research/">Research</a></li>
          <li><a href="/#team">Team</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>
      </div>
      <div>
        <h5>Legal</h5>
        <ul>
          <li><a href="/pages/privacy-policy.html">Privacy Policy</a></li>
          <li><a href="/pages/privacy-policy.html#terms">Terms &amp; Conditions</a></li>
          <li><a href="/pages/privacy-policy.html#charter">Investor Charter</a></li>
          <li><a href="/pages/privacy-policy.html#ra-disclosure">Disclosures</a></li>
          <li><a href="/pages/complaint-data.html">Complaint Data</a></li>
        </ul>
      </div>
      <div>
        <h5>Office</h5>
        <ul>
          <li>Ajay Singh (InvestNITII)</li>
          <li><a href="tel:+917551199974">+91 75511 99974</a></li>
          <li>R-97/A, Street No. 12, Block-B</li>
          <li>Kailashpuri, New Delhi - 110045</li>
          <li><a href="https://www.investnitii.in" target="_blank" rel="noopener">www.investnitii.in</a></li>
        </ul>
      </div>
    </div>
    <div class="copyright">
      <div class="container">
        © 2026 InvestNITII. All rights reserved. SEBI RA INH000023454.
        Investments in securities are subject to market risks.
      </div>
    </div>
  </footer>

  <script src="/js/main.js"></script>
</body>
</html>

```

---

<sub>Maintenance note (developer): the template at the bottom of the prompt is a
copy of `research/_TEMPLATE/index.html`. If you change that file, regenerate this
one so the two stay in step.</sub>
