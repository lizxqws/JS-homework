import menuTempletes from "./templates/list.hbs";
console.log(menuTempletes);

const obj = {
  name: "Австралія1111",
  capital: "Канберра",
  currency: "Австралійский доллар (AUD)",
  language: "Англійска",
  population: 24970200,
  flag: "https://wikiway.com/upload/iblock/742/800pxFlagofAustraliasvg.png",
  infected: false,
};

document.getElementById("app").innerHTML = menuTempletes(obj);
