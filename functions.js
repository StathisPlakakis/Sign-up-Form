const inputt = document.querySelector("#Number");

inputt.addEventListener("input", (e) => {
    const value = e.target.value.trim();
    if (isNaN(value) || value.length < 10 || value.length > 10) {
        e.target.classList.add('invalid');
        
    } else {
        e.target.classList.remove('invalid');
    }
    
})

const pass1 = document.querySelector("#Password");
const pass2 = document.querySelector("#CPassword");

pass1.addEventListener("input", (e) => {
    const length = e.target.value.length;
    if (length < 8) {
        e.target.classList.add('invalid')
    } else {
        e.target.classList.remove('invalid');
    }

    if (e.target.value !== pass2.value) {
        pass2.classList.add("invalid");
    }
})

pass2.addEventListener("input", (e) => {
    const conf = e.target.value;
    if (conf !== pass1.value) {
        e.target.classList.add("invalid")
    } else {
        e.target.classList.remove('invalid');
    }
})

const button = document.querySelector("#button");

button.addEventListener("click", (e) => {
    if (document.querySelector("#FirstName").value.length !== 0 && document.querySelector("#LastName").value.length !== 0 && document.querySelector("#Email").value.length !== 0 && document.querySelector("#Number").value.length !== 0 && document.querySelector("#Password").value.length !== 0 && document.querySelector("#CPassword").value.length !== 0 && document.querySelector("#Email").validity.valid) {
            e.preventDefault();
            const invalids = Array.from(document.querySelectorAll(".invalid"));
            if (invalids.length === 0) {
                document.querySelector('.myForm').submit();
            } else {
                alert("Fill all the inputs")
            }
        }

})

