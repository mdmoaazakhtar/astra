const age = 32;
if (age < 18) {
  console.log("Not Approved");
} else if (age >= 18 && age <= 60) {
  console.log("Approved");
} else if (age >= 61 && age <= 150) {
  console.log("License will not be given");
} else {
  console.log("you will be dead");
}
