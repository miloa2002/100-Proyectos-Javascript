const cart = document.querySelector("#carrito");
const cartContainer = document.querySelector("#lista-carrito tbody");
const emptyCartBtn = document.querySelector("#vaciar-carrito");
const coursesList = document.querySelector("#lista-cursos");
const total = document.querySelector(".total");
let cartItems = [];

loadEventListeners();
function loadEventListeners() {
    coursesList.addEventListener("click", addCourse);
    cart.addEventListener("click", removeCourse);
    emptyCartBtn.addEventListener("click", () => {
        cartItems = [];
        clearHTML();
        updateTotal();
    });
}

function addCourse(e) {
    e.preventDefault();
    
    if (e.target.classList.contains('agregar-carrito')) {
        const selectedCourse = e.target.parentElement.parentElement;
        readCourseData(selectedCourse);
    }
}

function removeCourse(e) {
    if (e.target.classList.contains("borrar-curso")) {
        const courseId = e.target.getAttribute("data-id");

        cartItems = cartItems.filter(course => course.id !== courseId);
        renderCartHTML();
        updateTotal();
    }
}

function readCourseData(course) {
    const courseInfo = {
        image: course.querySelector("img").src,
        title: course.querySelector("h4").textContent,
        price: course.querySelector(".precio span").textContent,
        id: course.querySelector("a").getAttribute("data-id"),
        quantity: 1
    };

    const exists = cartItems.some(item => item.id === courseInfo.id);
    if (exists) {
        cartItems.map(item => {
            if (item.id === courseInfo.id) {
                return item.quantity++;
            } else {
                return item;
            }
        });
    } else {
        cartItems = [...cartItems, courseInfo];
    }
    
    updateTotal();
    renderCartHTML();
}

function updateTotal() {
    const totalPrice = cartItems.reduce((acc, item) => acc + (parseFloat(item.price) * parseFloat(item.quantity)), 0);
    total.textContent = totalPrice;
}

function renderCartHTML() {
    clearHTML();

    cartItems.forEach(course => {
        const { image, title, price, quantity, id } = course;
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>
                <img src="${image}" width="100" />
            </td>
            <td>${title}</td>
            <td>${price}</td>
            <td>${quantity}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}" >X</a>
            </td>
        `;

        cartContainer.appendChild(row);
    });
}

function clearHTML() {
    while (cartContainer.firstChild) {
        cartContainer.removeChild(cartContainer.firstChild);
    }
}
