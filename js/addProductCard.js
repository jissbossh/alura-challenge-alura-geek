import { connectApi } from "./connectApi.js"
import { modalShow } from "./modal.js"

const formulario = document.querySelector("[data-form]");


async function addCard(evento) {
    try {
        evento.preventDefault();
        const name = document.querySelector("[data-name]").value;
        const price = document.querySelector("[data-price]").value;
        const imageInput = document.querySelector("[data-image]").files[0];
        const reader = new FileReader();

        const priceFormatado = parseFloat(price).toLocaleString('co-CO', {
            style: 'currency',
            currency: 'COP'
        });

        reader.onloadend = async () => {
            modalShow.openModal("Producto Guardado", "Se ha guardado el producto");
            const imagemBase64 = reader.result;
            await connectApi.addCard(imagemBase64, name, priceFormatado);
        }
        reader.readAsDataURL(imageInput);
    } catch (e) {
        console.error("Error al crear la tarjeta:", e);
        alert("Error al crear la tarjeta de producto. Por favor inténtalo de nuevo.");
    }
}
formulario.addEventListener("submit", evento => addCard(evento));
