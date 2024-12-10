const input = document.querySelector("input");
const button = document.getElementById("button");
const list = document.getElementById("list");
const itens = document.getElementById("itens");
const footer = document.getElementById("alert");



function adicionar() {
    
    if (input.value !== "") {
    
    const newLi = document.createElement("li")
    newLi.classList.add("itens")

    const newCheckbox = document.createElement("input")
    newCheckbox.type = "checkbox"
    newCheckbox.classList.add("checkbox")

    newCheckbox.addEventListener("click", () => {
        if (newSpan.style.textDecoration == "line-through") {
            newSpan.style.textDecoration = "none"
        } else {
            newSpan.style.textDecoration = "line-through"
        }
    })
    
    const newSpan = document.createElement("span")
    newSpan.textContent = input.value

    const deleteIcon = document.createElement("img");
    deleteIcon.src = "./Icons/delete-02-stroke-rounded.svg"
    deleteIcon.classList.add("delete")

    deleteIcon.addEventListener("click", () => {
        newLi.remove();
        footer.style.display = "flex"
    })

    newLi.appendChild(newCheckbox)
    newLi.appendChild(newSpan)
    newLi.appendChild(deleteIcon)

    list.appendChild(newLi)

    input.value = ""

    list.style.display = "block"
    }

    
    
    const excluirIcon = document.getElementById("excluir")
    
    excluirIcon.addEventListener("click", () => {
        footer.style.display = "none"

    })
    
}    

