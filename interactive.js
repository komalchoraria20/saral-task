const messageSpan = document.querySelector("span");

document.forms[0].addEventListener("submit", function(e) {
    e.preventDefault();

    messageSpan.textContent = `Hi ${this.username.value}! Welcome to my page.`;
    messageSpan.classList.add("show");

    this.reset();
});

document.forms[0].username.addEventListener("focus", function() {
    messageSpan.classList.remove("show");
});
