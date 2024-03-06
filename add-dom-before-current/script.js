const container = document.getElementById("list");

new Array(20).fill(0).map((item, index) => {
  const el = document.createElement("div");
  el.className = "item";
  el.innerText = index;
  container.appendChild(el);
});

const addMore = () => {
  new Array(20).fill(0).map((item, index) => {
    const el = document.createElement("div");
    el.className = "item";
    el.innerText = "new" + index;
    container.insertBefore(el, container.childNodes[0]);
  });
  window.scrollTo(0, 400);
};

const button = document.getElementById("button");
button.onclick = addMore;
