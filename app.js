const form = document.getElementById('expense-form');
const listEl = document.getElementById('expense-list');
const totalEl = document.getElementById('total-spend');
const currentMonthEl = document.getElementById('current-month');
const filterCategoryEl = document.getElementById('filter-category');
const filterMonthEl = document.getElementById('filter-month');

let expenses = [];

function saveExpenses() {
  localStorage.setItem('expenses', JSON.stringify(expenses));
}

function loadExpenses() {
  const stored = JSON.parse(localStorage.getItem('expenses') || '[]');
  expenses = Array.isArray(stored) ? stored : [];
}

function calculateTotal(filtered = expenses) {
  const total = filtered.reduce((sum, exp) => sum + Number(exp.amount || 0), 0);
  totalEl.textContent = `$${total.toFixed(2)}`;
}

function renderList(filtered = expenses) {
  listEl.innerHTML = '';
  filtered.forEach(exp => {
    const card = document.createElement('div');
    card.className = 'expense-card';
    card.innerHTML = `
      <div>
        <div class="name">${exp.name}</div>
        <div class="date">${exp.date}</div>
      </div>
      <span class="badge ${exp.category}">${exp.category}</span>
      <div class="amount">$${Number(exp.amount).toFixed(2)}</div>
      <button class="delete-btn" data-id="${exp.id}">Delete</button>
    `;
    listEl.appendChild(card);
  });
  calculateTotal(filtered);
}

function applyFilters() {
  const category = filterCategoryEl.value;
  const month = filterMonthEl.value; // YYYY-MM

  const filtered = expenses.filter(exp => {
    const matchesCategory = category === 'all' || exp.category === category;
    const matchesMonth = !month || (exp.date && exp.date.startsWith(month));
    return matchesCategory && matchesMonth;
  });

  renderList(filtered);
}

function setCurrentMonth() {
  const now = new Date();
  const label = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(now);
  currentMonthEl.textContent = label;
}

form.addEventListener('submit', e => {
  e.preventDefault();

  const name = document.getElementById('item-name').value.trim();
  const date = document.getElementById('purchase-date').value;
  const amount = document.getElementById('amount').value;
  const category = document.getElementById('category').value;

  if (!name || !date || !amount || !category) return;

  const expense = {
    id: Date.now().toString(),
    name,
    date,
    amount: Number(amount),
    category
  };

  expenses.unshift(expense);
  saveExpenses();
  form.reset();
  applyFilters();
});

listEl.addEventListener('click', e => {
  const btn = e.target.closest('.delete-btn');
  if (!btn) return;
  const id = btn.getAttribute('data-id');
  expenses = expenses.filter(exp => exp.id !== id);
  saveExpenses();
  applyFilters();
});

filterCategoryEl.addEventListener('change', applyFilters);
filterMonthEl.addEventListener('change', applyFilters);

loadExpenses();
setCurrentMonth();
applyFilters();