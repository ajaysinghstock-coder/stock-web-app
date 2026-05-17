const SHEET_ID = "1p5ttSxMLX0rhddkpCZLrRZmc4-XPVV4wt-rkDQ1s3e0";
const EXPORT_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=xlsx`;

let allSheets = {};

async function loadSheets() {
  const body = document.getElementById("sheetBody");
  const tabsEl = document.getElementById("sheetTabs");
  if (!body || !tabsEl) return;

  try {
    const res = await fetch(EXPORT_URL);
    if (!res.ok) throw new Error(`Failed to fetch (HTTP ${res.status}). Ensure the sheet is set to "Anyone with the link can view".`);

    const buffer = await res.arrayBuffer();
    const wb = XLSX.read(buffer, { type: "array" });

    wb.SheetNames.forEach(name => {
      const ws = wb.Sheets[name];
      const rows = XLSX.utils.sheet_to_json(ws, { header: 1, defval: "" });

      // Find the real header row — first row where more than 1 cell is non-empty
      let headerRowIdx = 0;
      for (let i = 0; i < rows.length; i++) {
        const nonEmpty = rows[i].filter(c => c !== "" && c !== null && c !== undefined);
        if (nonEmpty.length > 1) { headerRowIdx = i; break; }
      }

      // Title is any row above the header
      const title = rows
        .slice(0, headerRowIdx)
        .map(r => r.find(c => c !== "" && c !== null))
        .filter(Boolean)
        .join(" — ");

      const headers = rows[headerRowIdx];
      const dataRows = rows.slice(headerRowIdx + 1);

      // Keep only rows that have at least one non-empty cell
      const data = dataRows
        .filter(row => row.some(c => c !== "" && c !== null && c !== undefined))
        .map(row => Object.fromEntries(headers.map((h, i) => [h, row[i] ?? ""])));

      allSheets[name] = { title, headers, data };
    });

    renderTabs(wb.SheetNames);
    switchTab(wb.SheetNames[0]);
  } catch (err) {
    body.innerHTML = `<div class="sheet-error"><strong>Could not load data.</strong><br>${err.message}</div>`;
  }
}

function renderTabs(names) {
  const tabsEl = document.getElementById("sheetTabs");
  tabsEl.innerHTML = names.map(name =>
    `<button class="sheet-tab" data-sheet="${name}">${name}</button>`
  ).join("");
  tabsEl.addEventListener("click", e => {
    const btn = e.target.closest(".sheet-tab");
    if (btn) switchTab(btn.dataset.sheet);
  });
}

function cellDisplay(value) {
  // Render numeric 0 as a green "0" badge to highlight clean record
  if (value === 0 || value === "0") {
    return `<span class="zero-badge">0</span>`;
  }
  if (value === "" || value === null || value === undefined) {
    return `<span class="cell-dash">—</span>`;
  }
  return String(value);
}

function switchTab(name) {
  document.querySelectorAll(".sheet-tab").forEach(btn =>
    btn.classList.toggle("active", btn.dataset.sheet === name)
  );

  const { title, headers, data } = allSheets[name];
  const body = document.getElementById("sheetBody");

  if (!headers.length || !data.length) {
    body.innerHTML = `<p class="sheet-empty">This sheet has no data yet.</p>`;
    return;
  }

  // Filter empty-header columns
  const visibleHeaders = headers.filter(h => h !== "" && h !== null);

  const headHtml = visibleHeaders.map(h => `<th>${h}</th>`).join("");

  const rowsHtml = data.map(row => {
    const cells = visibleHeaders.map(h => `<td>${cellDisplay(row[h])}</td>`).join("");
    return `<tr>${cells}</tr>`;
  }).join("");

  body.innerHTML = `
    ${title ? `<div class="sheet-title">${title}</div>` : ""}
    <div class="sheet-table-wrap">
      <table class="sheet-table">
        <thead><tr>${headHtml}</tr></thead>
        <tbody>${rowsHtml}</tbody>
      </table>
    </div>
    <p class="sheet-count">${data.length} record${data.length !== 1 ? "s" : ""}</p>
  `;
}

loadSheets();
