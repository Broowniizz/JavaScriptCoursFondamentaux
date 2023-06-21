const row = document.querySelector(".row");
const newDiv = document.createElement("div");

async function fetchData(event) {
  try {
    const response = await fetch(`https://fakestoreapi.com/products`);

    if (!response.ok) {
      throw new Error("Erreur: ${response.status}");
    }

    const data = await response.json();
    displayData(data);
    console.log(data);
  } catch (error) {
    // btnChange("reset");
    // errorMsg.textContent = `${error}`;
  }
}

fetchData();

function displayData(data) {
  row.textContent = "";
  data.forEach((element) => {
    const card = document.createElement("div");
    card.innerHTML = `<div class="col-md-4">
    <div class="card">
        <div class="first-element"><img class="" src="${element.image}" width="110">
            <div class=""><div class="custom-margin"><h5>${element.title}</h5><span class="">${element.category}</span><div class=""><i class=""></i><i class=""></i><i class=""></i><i class=""></i><i class=""></i> <span class="rate">${element.rating}</span></div></div></div>
        </div>
        <div class = "description">${element.description}</div>
        <div class="last-element"><h6>${element.price}$</h6><span class="">View<i class=""></i></span></div>
    </div>`;

    row.appendChild(card);

    card.addEventListener("click", (e) => {
      console.log(e.currentTarget);
    });
  });
}
