DB.init();

document.getElementById("txnDate").value =
  new Date().toISOString().split("T")[0];

document.getElementById("accountForm").addEventListener("submit", e => {
  e.preventDefault();
  const data = DB.get();

  data.accounts.push({
    id: Date.now(),
    name: accName.value,
    type: accType.value,
    balance: parseFloat(accBalance.value || 0)
  });

  DB.save(data);
  e.target.reset();
  UI.renderAll();
});

document.getElementById("categoryForm").addEventListener("submit", e => {
  e.preventDefault();
  const data = DB.get();

  data.categories.push({
    id: Date.now(),
    name: catName.value
  });

  DB.save(data);
  e.target.reset();
  UI.renderAll();
});

document.getElementById("txnForm").addEventListener("submit", e => {
  e.preventDefault();
  const data = DB.get();

  const txn = {
    id: Date.now(),
    type: txnType.value,
    date: txnDate.value,
    description: txnDesc.value,
    amount: parseFloat(txnAmount.value),
    account: txnAccount.value,
    category: txnCategory.value,
    subcategory: txnSubcategory.value
  };

  data.transactions.push(txn);

  DB.save(data);
  e.target.reset();
  UI.renderAll();
});

UI.renderAll();
