let animalArray = [];
let codeArray = [];
let code;
let animalName;
let option;
while (option != 0) {
  
  option = Number(
    prompt(`
  Hello!
  Please choose an option:
  [1] - Search animal by code.
  [2] - Search animal by name.
  [3] - Add animal.
  [4] - Delete animal.
  [0] - Exit.
  
  `)
  );

  switch (option) {
    case 1:
      if(codeInput()){
        searchByCode(code);
      }
      break;

    case 2:
    
    if(nameInput()){
       searchByName(animalName);
     }
      break;

    case 3:
      if(nameInput() && codeInput()){
        addAnimal(animalName, code); 
      }
      break;
    case 4:
      if(codeInput()){
        deleteAnimal(code);
      }
      break;
    case 0:
      console.log("Program cancelled successfully.");
      break;
    default:
      console.log("This option dosen't exist");
  }
}

function addAnimal(animalName, code) {
  if (codeArray.includes(code)) {
    console.log("Error! Animal Code is already exist!");
  } else {
    animalArray.push(animalName);
    codeArray.push(code);
    console.log(`Animal: "${animalName}" code:${code} was added successfully`);
  }
}

function deleteAnimal(code) {
  let index = codeArray.indexOf(code);
  if (index != -1) {
    codeArray.splice(index, 1);
    animalArray.splice(index, 1);
  } else {
    console.log(`code "${code}" is not exist.`);
  }
}

function searchByName(str) {
  let numOfRes = 0;
  let i;
  let results = "";
  for (i = 0; i < animalArray.length; i++) {
    if (animalArray[i].includes(str)) {
      results += `
${++numOfRes}.
Animal Code: ${codeArray[i]}
Animal Name: ${animalArray[i]}
-----------------------------  `;
    }
  }

  if (results != "") {
    console.log(`
    You searched: "${str}"
    results:
    ${results}`);
  } else {
    console.log("There is 0 results to your search: " + str);
  }
}
function searchByCode(code) {
  let index = codeArray.indexOf(code);
  if (index != -1) {
    console.log(`
  
  Animal Code: ${codeArray[index]}
  Animal Name: ${animalArray[index]}`);
  } else {
    console.log("Code is not exist");
  }
}

function nameInput() {
  animalName = prompt("Please insert animal name: ");
  if (animalName == "") {
    console.log("You didn't type anything");
    return false;
  }
  if (animalName == null) {
    console.log("cancelled done");
    return false;
  }
  return true;
}

function codeInput() {
  code = prompt("Please insert animal code: ");
  if (code == "") {
    console.log("You didn't type anything");
    return false;
  }
  if (code == null) {
    console.log("cancelled done");
    return false;
  }
  code = Number(code);
  if(isNaN(code)){
    console.log("You have to type a number");
    return false;
  }
  return true;
}

// addAnimal("dog", 123);
// addAnimal("dog", 123);

// addAnimal("monkey", 12);
// searchByCode(1);
// // addAnimal("lion",12);
