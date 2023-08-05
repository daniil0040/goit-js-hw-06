const form = document.querySelector(".login-form")

form.addEventListener("submit", handleSubmit)
function handleSubmit(evt) {
    evt.preventDefault();
    const { email, password } = evt.currentTarget.elements
    if (email.value === "" || password.value === "") {
      return  alert("All field must be fill")
    }
    
    console.log({
        email: email.value,
        password: password.value
    });
    form.reset()
}