document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signupForm");

    if (signupForm) {
        signupForm.onsubmit = function (e) {
            e.preventDefault();
            let valid = true;

            document.querySelectorAll(".required").forEach(el => el.style.display = "none");

            const firstName = document.getElementById("firstName").value.trim();
            const lastName = document.getElementById("lastName").value.trim();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();
            const reason = document.getElementById("reason").value.trim();
            const sexRadio = document.querySelector('input[name="sex"]:checked');
            const sex = sexRadio ? sexRadio.value : "";

            if (!firstName) {
                document.querySelector("#firstName + .required").style.display = "inline";
                valid = false;
            }
            if (!lastName) {
                document.querySelector("#lastName + .required").style.display = "inline";
                valid = false;
            }
            if (!sex) {
                document.querySelector(".sex-error").style.display = "inline";
                valid = false;
            }
            if (!email) {
                document.querySelector("#email + .required").style.display = "inline";
                valid = false;
            }
            if (!password) {
                document.querySelector("#password + .required").style.display = "inline";
                valid = false;
            }
            if (!reason) {
                document.querySelector("#reason + .required").style.display = "inline";
                valid = false;
            }

            if (valid) {
                localStorage.setItem("firstName", firstName);
                localStorage.setItem("lastName", lastName);
                localStorage.setItem("email", email);
                localStorage.setItem("sex", sex);
                localStorage.setItem("reason", reason);
                window.location.href = "Project Profile.html";
            }
        };
    } else {
        
        document.getElementById("displayFirstName").innerText = localStorage.getItem("firstName") || "";
        document.getElementById("displayLastName").innerText = localStorage.getItem("lastName") || "";
        document.getElementById("displayEmail").innerText = localStorage.getItem("email") || "";
        document.getElementById("displaySex").innerText = localStorage.getItem("sex") || "";
        document.getElementById("displayReason").innerText = localStorage.getItem("reason") || "";
    }
});
