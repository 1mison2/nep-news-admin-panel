function showSection(sectionId) {
    document.querySelectorAll("main section").forEach(section => {
        section.classList.add("hidden");
    });
    document.getElementById(sectionId).classList.remove("hidden");
}

function openModal(modalId) {
    document.getElementById(modalId).classList.remove("hidden");
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.add("hidden");
}

function addNews() {
    let title = document.getElementById('newsTitle').value;
    if (title) {
        let newsList = document.getElementById('newsList');
        let newItem = document.createElement('li');
        newItem.innerHTML = `${title} 
            <button onclick="editNews(this)">Edit</button>
            <button onclick="deleteItem(this)">Delete</button>
            <button onclick="postNews(this)">Post</button>`;
        newsList.appendChild(newItem);
        document.getElementById('newsCount').textContent++;
        closeModal('newsModal');
    }
}

function addCategory() {
    let category = document.getElementById('categoryName').value;
    if (category) {
        let categoryList = document.getElementById('categoryList');
        let newItem = document.createElement('li');
        newItem.innerHTML = `${category} 
            <button onclick="editCategory(this)">Edit</button>
            <button onclick="deleteItem(this)">Delete</button>`;
        categoryList.appendChild(newItem);
        document.getElementById('categoryCount').textContent++;
        closeModal('categoryModal');
    }
}

function addAd() {
    let adTitle = document.getElementById('adTitle').value;
    if (adTitle) {
        let adList = document.getElementById('adList');
        let newItem = document.createElement('li');
        newItem.innerHTML = `${adTitle} 
            <button onclick="approveAd(this)">Approve</button>
            <button onclick="removeAd(this)">Remove</button>
            <button onclick="trackAdPerformance()">Track Performance</button>`;
        adList.appendChild(newItem);
        document.getElementById('adRevenue').textContent = 
            (parseFloat(document.getElementById('adRevenue').textContent) + 50).toFixed(2);
        closeModal('adModal');
    }
}

function deleteItem(button) {
    button.parentElement.remove();
}

function editNews(button) {
    let newTitle = prompt("Edit News Title:", button.parentElement.firstChild.textContent);
    if (newTitle) button.parentElement.firstChild.textContent = newTitle;
}

function postNews(button) {
    alert("News posted successfully!");
}

function editCategory(button) {
    let newCategory = prompt("Edit Category Name:", button.parentElement.firstChild.textContent);
    if (newCategory) button.parentElement.firstChild.textContent = newCategory;
}

function approveAd(button) {
    alert("Ad approved!");
}

function removeAd(button) {
    button.parentElement.remove();
}

function trackAdPerformance() {
    alert("Tracking ad performance...");
}
