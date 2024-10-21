const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

tabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
        if(e.target.textContent === "Tab 1") {
            contents[0].classList.add("active");
            contents[1].classList.remove("active");
            contents[2].classList.remove("active");
        }
        if(e.target.textContent === "Tab 2") {
            contents[1].classList.add("active");
            contents[0].classList.remove("active")
            contents[2].classList.remove("active")
        }
        if(e.target.textContent === "Tab 3") {
            contents[2].classList.add("active");
            contents[1].classList.remove("active");
            contents[0].classList.remove("active")
        }
    });
});