const getSum = () => {
  const priceElements = document.querySelectorAll(".price");
  let totalPrice = 0;

  priceElements.forEach((priceElement) => {
    const price = parseFloat(priceElement.textContent);
    if (!isNaN(price)) {
      totalPrice += price;
    }
  });

  const table = document.querySelector("table");
  const newRow = table.insertRow(table.rows.length);
  newRow.innerHTML = `<td>Total Price:</td><td>${totalPrice.toFixed(2)}</td>`;
};

const getSumBtn = document.createElement("button");
getSumBtn.id = 'ans';
getSumBtn.textContent = "Calculate Total";
getSumBtn.addEventListener("click", getSum);

document.body.appendChild(getSumBtn);
