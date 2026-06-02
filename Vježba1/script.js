let brojKlikova = 0
const broj = document.getElementById("broj");
const gumbKlikni = document.getElementById("klikni");
const gumbReset = document.getElementById("reset");

gumbKlikni.addEventListener("click", () => {

brojKlikova++;
broj.textContent = brojKlikova;
});

gumbReset.addEventListener("click", () => {
brojKlikova = 0;
broj.textContent = brojKlikova;
    
});