const users = getUsers();

async function getUsers() {
  try {
    const response = await fetch(
      "https://randomuser.me/api/?nat=fr&results=50"
    );

    const data = await response.json();
    if (!response.ok) {
      throw new Error("Fetch data issue");
    }
    console.log(data.results);
    lastElement(data);
    filterhigherAge(data);
    sexe(data);
    getNewArrayObject(data.results);
    getArrayAdult(data.results);
    getMessageAdress(data.results);
  } catch (error) {
    console.log(error);
  }
}

// a. afficher le dernier élément du tableau

function lastElement(data) {
  console.log(data.results[data.results.length - 1]);
}

// b. afficher l'age le plus élevé

function filterhigherAge(data) {
  let filterAge = data.results.sort((a, b) => b.dob.age - a.dob.age);
  console.log(filterAge[0]);
}

// c. afficher le nombre d'homme et le nombre de femmes

function sexe(data) {
  let men = [];
  let female = [];
  data.results.forEach((element) => {
    //operation de comparaison terniaire//
    // ou element.gender === "female" ? female.push(element) : male.push(element)

    if (element.gender === "male") {
      men.push(element);
    }
    if (element.gender === "female") {
      female.push(element);
    }
  });
  console.log("men:" + men.length + "female:" + female.length);
}

// 1. afficher un tableau d'objet au format {name : Daphne Durand, age: 61}

function getNewArrayObject(arr) {
  const result = arr.map((el) => {
    return { name: `${el.name.first} ${el.name.last}`, age: el.dob.age };
  });
  console.log(result);
}

// 2. afficher un tableau d'objet au format {name : Daphne Durand, adult: true}

function getArrayAdult(arr) {
  const result1 = arr.map((el) => {
    return {
      name: `${el.name.first} ${el.name.last}`,
      ageInferiorityThirty: el.dob.age < 30,
    };
  });
  console.log(result1);
}

// 3. afficher un tableau de messages au format {mail: 'd.durand@example.com', message: 'Bonjour Daphné, votre adresse "21 rue Voltaire, 33400 Talence" est-elle correcte ?'}

function getMessageAdress(arr) {
  const result2 = arr.map((el) => {
    return {
      mail: `${el.email}`,
      message: `Bonjour ${el.name.first}, votre adresse ${el.location.street.number} ${el.location.street.name}, ${el.location.postcode} ${el.location.city} est-elle correcte ?`,
    };
  });
  console.log(result2);
}
