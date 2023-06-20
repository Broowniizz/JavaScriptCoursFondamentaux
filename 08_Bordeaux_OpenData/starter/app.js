const btn = document.querySelector(".btn");
const errorMsg = document.querySelector(".errorMsg");
const placeName = document.querySelectorAll(".place-name");
const placeInfo = document.querySelectorAll(".place-infos");
const placeCapacity = document.querySelectorAll(".capacity");
const placeVisitors = document.querySelectorAll(".visitors");

btn.addEventListener("click", onBtnClick);

async function fetchData(event) {
  try {
    const response = await fetch(
      `https://opendata.bordeaux-metropole.fr/api/records/1.0/search/?dataset=bor_frequentation_piscine_tr&q=`
    );

    if (!response.ok) {
      throw new Error("Erreur: ${response.status}");
    }

    const data = await response.json();
    poolInfo(data);
    btnChange("reset");
  } catch (error) {
    btnChange("reset");
    errorMsg.textContent = `${error}`;
  }
}

function btnChange(stateBtn) {
  if (stateBtn === "fetching") {
    btn.textContent = "...";
    btn.classList.add("searching");
  } else if (stateBtn === "reset") {
    btn.textContent = "Refresh";
    btn.classList.remove("searching");
  }
}

function onBtnClick() {
  btnChange("fetching");
  fetchData();
}

function poolInfo(data) {
  data.records.sort((a, b) => {
    if (a.fields.fmicourante < b.fields.fmicourante) return +1;
    if (a.fields.fmicourante > b.fields.fmicourante) return -1;
    return 0;
  });

  for (let i = 0; i < data.records.length; i++) {
    placeName[i].textContent =
      data.records[i].fields.etablissement_etalib +
      " " +
      data.records[i].fields.fmizonlib;

    placeInfo[i].textContent =
      data.records[i].fields.fmicourante +
      "/" +
      data.records[i].fields.fmizonmax;

    placeCapacity[i] = data.records[i].fields.fmizonmax;

    placeVisitors[i].style.transform = `scaleX(${
      data.records[i].fields.fmicourante / data.records[i].fields.fmizonmax
    }`;
  }
}
