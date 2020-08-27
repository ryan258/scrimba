let emailCollectorForm = document.getElementById("Email-Collector");
console.log(emailCollectorForm);
emailCollectorForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // console.log("event is firing!");
  // get the form data
  let ourFormData = new FormData(event.target);
  // console.log(ourFormData.get("firstName"));
  let userFirstName = ourFormData.get("firstName");
  console.log(userFirstName);
  let updatedHTMLContent = `
        <div class="container">
        <h2>Congratulations ${userFirstName}</h2>
        <p>
          You're on your way to becoming a BBQ master!
        </p>
        
        <p class="fine-print">
          We'll never share your information without your permission
        </p>
      </div>
        `;
  let ourMainContent = document.getElementById("Main-Content");
  ourMainContent.innerHTML = updatedHTMLContent;
});
