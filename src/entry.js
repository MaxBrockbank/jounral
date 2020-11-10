export default function Post (title, body) {
  this.title = title;
  this.body = body; 
}

Post.prototype.countLetters = function() {
  let count = 0;

  return count;
}

let post1 = new Post("My Favorite Items", "They are apples, and grapes");
console.log(post1);