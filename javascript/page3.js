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

nextPageButton.addEventListener("click", () => {
  // Get input field values
  const firstName = document.querySelector("#first-name").value.trim();
  const lastName = document.querySelector("#last-name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();
  const checkbox = document.querySelector("#checkbox").checked;

  // Check if all required fields are filled
  if (firstName === "" || lastName === "" || email === "" || password === "") {
    alert("Please fill in all required fields.");
    return;
  }

  // Check if checkbox is checked
  if (!checkbox) {
    alert("Please agree to the terms and conditions.");
    return;
  }

  // If all conditions are met, redirect to the next page
  window.location.href = "page5.html";
});
