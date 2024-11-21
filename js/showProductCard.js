import { connectApi } from "./connectApi.js";
import { modalShow } from "./modal.js"

const list = document.querySelector("[data-list]");
const productExists = document.querySelector(".product__message");

function buildCard(image, name, price, id) {
    const card = document.createElement("div");
    card.className = "card__product";
    card.innerHTML = `<img class="card__image" src="${ image }" alt="product">
                <h2 class="product__name">${ name }</h2>
                <div class="card__content--buttons">
                <h3 class="product__price">${ price }</h3>
                <a class="btn__delete">
                <img class="btn__delete__img" src="./assets/delete_icon.png" alt="delete_icon">
                </a>
                </div>
                `;
    const btnDelete = card.querySelector(".btn__delete");
    btnDelete.addEventListener("click", async () => {
        await connectApi.deleteCard(id);
        card.remove();
        checkListEmpty();
        modalShow.openModal("Producto Eliminado", "Se ha eliminado el producto");
    });

    return card;
}

async function listCard() {
    const listApi = await connectApi.listCards();

    const fileInput = document.getElementById('product-image');
    const label = document.getElementById('product-image-label');
    const btnClear = document.getElementById('button-clear');

    if (listApi.length === 0) {
        console.log("No se encontraron productos");
        productExists.style.display = "block";
    } else {
        productExists.style.display = "none";
        console.log("Se encontraron productos");
        listApi.forEach(elemento => {
            list.appendChild(buildCard(elemento.image, elemento.name, elemento.price, elemento.id));
        });
    }

    fileInput.addEventListener('change', function (event) {
        const fileName = event.target.files[0] ? event.target.files[0].name : 'Carga una imagen del producto';
        label.textContent = fileName;
    });

    btnClear.addEventListener("click", function (event) {
        fileInput.value = '';
        label.textContent = 'Carga una imagen del producto';
    });
}

function checkListEmpty() {
    const remainingCards = document.querySelectorAll(".card__product");
    if (remainingCards.length === 0) {
        productExists.style.display = "block";
    }
}

listCard();
