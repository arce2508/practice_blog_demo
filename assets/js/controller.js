$(document).ready(() => {
  const liteCardFactory = (post) => {
    const card = document.createElement("div");
    const body = document.createElement("div");
    const title = document.createElement("h5");
    const content = document.createElement("p");
    const author = document.createElement("div");

    card.classList.add("card");
    body.classList.add("card-body");
    title.classList.add("card-title");
    content.classList.add("card-text");
    content.classList.add("pink-text");

    title.appendChild(document.createTextNode(post.title));
    content.appendChild(document.createTextNode(post.text));
    content.appendChild(document.createTextNode(`${post.author} ${post.date}`));
    body.appendChild(title);
    body.appendChild(content);
    body.appendChild(author);
    card.appendChild(body);

    return card;
  };

  // const cardFactory = (cardData) => {};

  const posts = getPosts();
  const liteCardParent = document.getElementById("lite-card-container");

  posts
    .map(liteCardFactory)
    .forEach((element) => liteCardParent.appendChild(element));
});
