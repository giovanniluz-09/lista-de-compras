const input = document.querySelector("input");
const button = document.getElementById("button");
const list = document.getElementById("list");

function adicionar() {
    const itemValue = input.value.trim();

    // Verifica se o campo de entrada não está vazio
    if (itemValue !== "") {
        // Cria os elementos
        const newLi = document.createElement("li");
        newLi.classList.add("itens");

        const newCheckbox = document.createElement("input");
        newCheckbox.type = "checkbox";
        newCheckbox.classList.add("checkbox");

        const newSpan = document.createElement("span");
        newSpan.textContent = itemValue;

        // Cria a imagem de excluir
        const deleteImg = document.createElement("img");
        deleteImg.src = "./Icons/delete-01-stroke-rounded (1).svg"; // Caminho da imagem
        deleteImg.alt = "Deletar item";
        deleteImg.classList.add("delete-img"); // Adiciona uma classe para estilizar a imagem

        // Adiciona a imagem de excluir à lista
        deleteImg.addEventListener("click", function() {
            newLi.remove(); // Remove o item da lista
        });

        // Adiciona os elementos ao <li>
        newLi.appendChild(newCheckbox);
        newLi.appendChild(newSpan);
        newLi.appendChild(deleteImg);

        // Adiciona o <li> à lista
        list.appendChild(newLi);

        // Limpa o campo de entrada após adicionar
        input.value = "";

        // Exibe a lista (caso esteja oculta)
        list.style.display = "block";
    }
}
