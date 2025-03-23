// Open Modal
function openModal(id) {
    document.getElementById(id).classList.remove("hidden");
}

// Close Modal
function closeModal(id) {
    document.getElementById(id).classList.add("hidden");
}

// Add News
function addNews() {
    let title = document.getElementById("newsTitle").value;
    let content = document.getElementById("newsContent").value;

    if (title && content) {
        let newsList = document.getElementById("newsList");
        let item = document.createElement("div");
        item.innerHTML = `${title} - ${content} 
            <button onclick="deleteItem(this)">Delete</button>`;
        newsList.appendChild(item);
        
        // Update Count
        let count = document.getElementById("newsCount");
        count.textContent = parseInt(count.textContent) + 1;

        closeModal("newsModal");
    }
}

// Add Category
function addCategory() {
    let name = document.getElementById("categoryName").value;

    if (name) {
        let categoryList = document.getElementById("categoryList");
        let item = document.createElement("div");
        item.innerHTML = `${name} <button onclick="deleteItem(this)">Delete</button>`;
        categoryList.appendChild(item);
        
        // Update Count
        let count = document.getElementById("categoryCount");
        count.textContent = parseInt(count.textContent) + 1;

        closeModal("categoryModal");
    }
}

// Delete Item
function deleteItem(btn) {
    btn.parentElement.remove();
}
