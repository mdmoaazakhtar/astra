function printNewsBottom(data, number) {
  return data.slice(-number); //for(let i = data.length - number; i < data.length; i++)
}
console.log(printNewsBottom(data, 5));
