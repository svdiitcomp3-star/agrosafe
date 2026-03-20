fetch("products.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("products");

    data.forEach(p => {
      container.innerHTML += `
        <div class="card">
          <h2>${p.name}</h2>
          <p>${p.description}</p>
          <p>₹${p.price}</p>
          <button onclick="order('${p.name}')">Order</button>
        </div>
      `;
    });
  });

function order(productName) {
  alert("Order placed for " + productName);

  // Simulated notification
  console.log("Order:", productName);
}
