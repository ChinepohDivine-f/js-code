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

function Post(title, body, author) {
    
    this.title = "a";
    this.body = "b";
    this.author = "c";
    this.views = 0;
    this.comments = [];
    this.isLive = true;
    
}

let newPost = new Post('a', 'b', 'c');
console.log(newPost);