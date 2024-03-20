let post = {
  title: "a",
  body: "b",
  author: "c",
  views: 10,
  comments: [ // array of objects
    {
      author: "a",
      body: "b",
    },
    {
      author: "c",
      body: "d",
    },
  ],
  isLive: true,
};

console.log(post);
