function printNewsByKeyword(data, keyword) {
  let result = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].news.toLowerCase().includes(keyword.toLowerCase())) {
      result.push(data[i]);
    }
  }
  return result;
}
console.log(printNewsByKeyword(data, "minning"));
