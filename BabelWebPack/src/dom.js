console.log("dom file");

const body = document.querySelector("body");

const styleBody = () => {
  body.style.background = "pink";
};

const addTitle = (text) => {
  const title = document.createElement("h1");
  title.textContent = text;
  body.appendChild(title);
};

const contact = "mario@thenetninja.co.uk";
// addTitle("hello world from the DOM file");

export { styleBody, addTitle, contact };
