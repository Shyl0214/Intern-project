const nextPageButton = document.querySelector("#btn");

nextPageButton.addEventListener("click", () => {
  const firstName = document.querySelector("#first-name").value.trim();
  const lastName = document.querySelector("#last-name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();
  const checkbox = document.querySelector("#checkbox").checked;

  if (firstName === "" || lastName === "" || email === "" || password === "") {
    alert("Please fill in all required fields.");
    return;
  }

  if (!checkbox) {
    alert("Please agree to the terms and conditions.");
    return;
  }

  if (
    firstName !== "" &&
    lastName !== "" &&
    email !== "" &&
    password !== "" &&
    checkbox
  ) {
    window.location.href = "page5.html";
  }
});
