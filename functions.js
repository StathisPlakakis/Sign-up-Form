const inputt = document.querySelector("#phone");
inputt.addEventListener("input", (e) => {
    const value = e.target.value.trim();
    if (isNaN(value) || value.length < 7 || value.length > 12) {
        e.target.classList.add('invalid');
    } else {
        e.target.classList.remove('invalid');
    }
    
})