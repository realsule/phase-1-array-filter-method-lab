// FIND MATCHING
function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}
//FUZZY MATCH
function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
}
//MATCHNAME
function matchName(drivers, name) {
  return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
}

//Example usage

const drivers = ['Suleiman', 'Mumbi', 'Chris', 'Alea', 'Abdul']

const driversObject = [
  {name: "Suleiman", hometown: "Nairobi"},
  { name: "Mumbi", hometown: "Kiambu" },
  { name: "Chris", hometown: "Kisii" },
  { name: "Alea", hometown: "Kisumu" },
  { name: "Abdul", hometown: "Turkana" }
]

console.log(findMatching(drivers, 'Suleiman'));
