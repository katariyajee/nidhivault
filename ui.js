const UI = {

  showTab(tabId) {
    document.querySelectorAll(".tab").forEach(t => t.classList.add("hidden"));
    document.getElementById(tabId).classList.remove("hidden");
    UI.renderAll();
  },

  renderAll() {
    UI.renderAccounts();
    UI.renderCategories();
    UI.renderTransactions();
    UI.renderSummary();
  },

  renderAccounts() {
    const data = DB.get();
    const list = document.getElementById("accountList");
    list.innerHTML = "";

    data.accounts.forEach(a => {
      list.innerHTML += `<div class="card">${a.name} — ₹${a.balance}</div>`;
    });

    const select = document.getElementById("txnAccount");
    select.innerHTML = data.accounts.map(a =>
      `<option value="${a.id}">${a.name}</option>`
    ).join("");
  },

  renderCategories() {
    const data = DB.get();
    const list = document.getElementById("categoryList");
    list.innerHTML = "";

    data.categories.forEach(c => {
      list.innerHTML += `<div class="card">${c.name}</div>`;
    });

    const catSelect = document.getElementById("txnCategory");
    catSelect.innerHTML = data.categories.map(c =>
      `<option value="${c.id}">${c.name}</option>`
    ).join("");

    const parent = document.getElementById("parentCategory");
    parent.innerHTML = catSelect.innerHTML;
  },

  renderTransactions() {
    const data = DB.get();
    const list = document.getElementById("txnList");
    list.innerHTML = "";

    data.transactions.forEach(t => {
      list.innerHTML += `
        <div class="card">
          ${t.date} — ${t.description} — ₹${t.amount}
        </div>
      `;
    });
  },

  renderSummary() {
    const data = DB.get();
    let income = 0, expense = 0;

    data.transactions.forEach(t => {
      if (t.type === "income") income += t.amount;
      if (t.type === "expense") expense += t.amount;
    });

    document.getElementById("summary").innerHTML =
      `Income: ₹${income} | Expense: ₹${expense} | Net: ₹${income-expense}`;
  }

};
