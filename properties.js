const movie = {
  title: "John Wick",
  releaseYear: 2019,
  rating: 4.5,
  director: "Chinepoh Divine-favour",
};

showProperties(movie);

function showProperties(obj) {
    for (let key in obj)
        // check if the ojects value is a string
        if (typeof obj[key] === 'string') console.log(key, obj[key]);
}

// function showProperties(movie) {
//   for (let key in movie) {
//     const keys = ["title", "director"];
//     let i = 0;
//     while (i < keys.length) {
//       if (key === keys[i]) console.log(key, movie[key]);
//       i++;
//     }
//   }
// }
