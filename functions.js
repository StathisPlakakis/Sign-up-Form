const inputt = document.querySelector("#phone");

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
})

pass2.addEventListener("input", (e) => {
    const conf = e.target.value;
    if (conf !== pass1.value) {
        e.target.classList.add("invalid")
    } else {
        e.target.classList.remove('invalid');
    }
})



