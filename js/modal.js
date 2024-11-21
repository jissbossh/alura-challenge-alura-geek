
const modal = document.getElementById("myModal");

function openModal(modalTitle, modalMessage, closeAfter = 8000) {

    const modalContent = `
        <div class="modal-content">
            <span id="closeModalBtn" class="close">&times;</span>
            <h2 id="modalTitle">${modalTitle}</h2>
            <p id="modalMessage">${modalMessage}</p>
        </div>
    `;

    modal.innerHTML = modalContent;

    modal.style.display = "block";

    const closeButton = document.getElementById("closeModalBtn");
    closeButton.onclick = closeModal;


    setTimeout(function() {
        closeModal();
    }, closeAfter);
}


function closeModal() {
    modal.style.display = "none";
}


window.onclick = function (event) {
    if (event.target === modal) {
        closeModal();
    }
};


export const modalShow = {
    openModal,
    closeModal
}
