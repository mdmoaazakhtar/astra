function findNewsById(id) {
  const result = data.find((item) => item.id === id);

  if (result) {
    console.log("News Found:");
    console.log(result);
  } else {
    console.log("No News Found");
  }
}
