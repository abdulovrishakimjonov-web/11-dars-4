const API_URL = "https://68fa1f53ef8b2e621e7ed891.mockapi.io/api/users";

const productList = document.getElementById("product-list");
const loader = document.getElementById("loader");

if (productList) {
  async function loadProducts() {
    loader.style.display = "block";
    const res = await fetch(API_URL);
    const data = await res.json();
    loader.style.display = "none";

    productList.innerHTML = "";
    data.forEach(item => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <strong>${item.price}$</strong>
      `;
      productList.appendChild(card);
    });
  }

  loadProducts();
}

const addBtn = document.getElementById("add-btn");
const adminProducts = document.getElementById("admin-products");

if (addBtn) {
  async function getProducts() {
    adminProducts.innerHTML = "<p>Yuklanmoqda...</p>";
    const res = await fetch(API_URL);
    const data = await res.json();
    renderAdminProducts(data);
  }

  async function addProduct() {
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const image = document.getElementById("image").value;
    const description = document.getElementById("description").value;

    if (!name || !price || !image || !description) {
      alert("Iltimos, barcha maydonlarni to‘ldiring!");
      return;
    }

    const newProduct = { name, price, image, description };

    await fetch(API_URL, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newProduct),
    });

    alert("✅ Yangi mahsulot qo‘shildi!");
    getProducts();
  }

  window.deleteProduct = async function(id) {
    if (confirm("Haqiqatan ham o‘chirmoqchimisiz?")) {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      alert("🗑️ Mahsulot o‘chirildi!");
      getProducts();
    }
  };

  window.editProduct = async function(id) {
    const newName = prompt("Yangi nom kiriting:");
    if (!newName) return;

    await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ name: newName }),
    });

    alert("✏️ Mahsulot nomi yangilandi!");
    getProducts();
  };

  function renderAdminProducts(data) {
    adminProducts.innerHTML = "";
    data.forEach(p => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${p.image}" alt="">
        <h3>${p.name}</h3>
        <p>${p.price}$</p>
        <div class="actions">
          <button onclick="editProduct('${p.id}')">✏️</button>
          <button onclick="deleteProduct('${p.id}')">🗑️</button>
        </div>
      `;
      adminProducts.appendChild(card);
    });
  }

  addBtn.addEventListener("click", addProduct);
  getProducts();
}
