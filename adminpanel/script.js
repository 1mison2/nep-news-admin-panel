function navigate(page) {
    let content = document.getElementById("content");

    if (page === "dashboard") {
        content.innerHTML = `<h2>Dashboard</h2><p>Welcome to the News Admin Panel!</p>`;
    }

    else if (page === "news") {
        content.innerHTML = `
            <h2>Manage News</h2>
            <button class="add-btn" onclick="addNews()">+ Add News</button>
            <div id="newsContainer"></div>
        `;
        loadNews();
    }

    else if (page === "categories") {
        content.innerHTML = `
            <h2>News Categories</h2>
            <button class="add-btn" onclick="addCategory()">+ Add Category</button>
            <div id="categoryContainer"></div>
        `;
        loadCategories();
    }

    else if (page === "ads") {
        content.innerHTML = `
            <h2>Manage Advertisements</h2>
            <button class="add-btn" onclick="addAd()">+ Add Advertisement</button>
            <div id="adsContainer"></div>
        `;
        loadAds();
    }

    else if (page === "logs") {
        content.innerHTML = `<h2>System Logs</h2><div id="logContainer"></div>`;
        loadLogs();
    }
}

/* ---------------- NEWS ---------------- */

function loadNews() {
    const container = document.getElementById("newsContainer");
    container.innerHTML = "";
    const news = JSON.parse(localStorage.getItem("news") || "[]");

    news.forEach((item, index) => {
        container.innerHTML += `
            <div class="card">
                <h3>${item.title}</h3>
                <p>Category: ${item.category}</p>
                <p>Date: ${item.date}</p>
                ${item.image ? `<img src="${item.image}" alt="News Image">` : ''}
                <br>
                <button class="edit-btn" onclick="editNews(${index})">Edit</button>
                <button class="delete-btn" onclick="deleteNews(${index})">Delete</button>
                <button onclick="postNews(${index})">Post</button>
            </div>
        `;
    });
}

function addNews() {
    const title = prompt("Enter news title:");
    const category = prompt("Enter category:");
    const image = prompt("Enter image URL:");
    const date = new Date().toLocaleDateString();

    const news = JSON.parse(localStorage.getItem("news") || "[]");
    news.push({ title, category, date, image });
    localStorage.setItem("news", JSON.stringify(news));
    logAction(`Added news: ${title}`);
    loadNews();
}

function editNews(index) {
    const news = JSON.parse(localStorage.getItem("news"));
    const updatedTitle = prompt("Edit Title", news[index].title);
    const updatedCategory = prompt("Edit Category", news[index].category);
    const updatedImage = prompt("Edit Image URL", news[index].image);

    news[index] = {
        ...news[index],
        title: updatedTitle,
        category: updatedCategory,
        image: updatedImage
    };

    localStorage.setItem("news", JSON.stringify(news));
    logAction(`Edited news: ${updatedTitle}`);
    loadNews();
}

function deleteNews(index) {
    const news = JSON.parse(localStorage.getItem("news"));
    logAction(`Deleted news: ${news[index].title}`);
    news.splice(index, 1);
    localStorage.setItem("news", JSON.stringify(news));
    loadNews();
}

function postNews(index) {
    const news = JSON.parse(localStorage.getItem("news"));
    alert(`News posted: ${news[index].title}`);
    logAction(`Posted news: ${news[index].title}`);
}


/* ---------------- CATEGORIES ---------------- */

function loadCategories() {
    const container = document.getElementById("categoryContainer");
    container.innerHTML = "";
    const categories = JSON.parse(localStorage.getItem("categories") || "[]");

    categories.forEach((item, index) => {
        container.innerHTML += `
            <div class="card">
                <p>${item}</p>
                <button class="edit-btn" onclick="editCategory(${index})">Edit</button>
                <button class="delete-btn" onclick="deleteCategory(${index})">Delete</button>
            </div>
        `;
    });
}

function addCategory() {
    const name = prompt("Enter category name:");
    const categories = JSON.parse(localStorage.getItem("categories") || "[]");
    categories.push(name);
    localStorage.setItem("categories", JSON.stringify(categories));
    logAction(`Added category: ${name}`);
    loadCategories();
}

function editCategory(index) {
    const categories = JSON.parse(localStorage.getItem("categories"));
    const updated = prompt("Edit category", categories[index]);
    categories[index] = updated;
    localStorage.setItem("categories", JSON.stringify(categories));
    logAction(`Edited category to: ${updated}`);
    loadCategories();
}

function deleteCategory(index) {
    const categories = JSON.parse(localStorage.getItem("categories"));
    logAction(`Deleted category: ${categories[index]}`);
    categories.splice(index, 1);
    localStorage.setItem("categories", JSON.stringify(categories));
    loadCategories();
}


/* ---------------- ADS ---------------- */

function loadAds() {
    const container = document.getElementById("adsContainer");
    container.innerHTML = "";
    const ads = JSON.parse(localStorage.getItem("ads") || "[]");

    ads.forEach((ad, index) => {
        container.innerHTML += `
            <div class="card">
                <h3>${ad.title}</h3>
                <p>Revenue: $${ad.revenue}</p>
                <button class="edit-btn" onclick="editAd(${index})">Edit</button>
                <button class="delete-btn" onclick="deleteAd(${index})">Remove</button>
                <button onclick="trackAd(${index})">Track Performance</button>
            </div>
        `;
    });
}

function addAd() {
    const title = prompt("Enter ad title:");
    const revenue = parseFloat(prompt("Enter revenue amount:")) || 0;
    const ads = JSON.parse(localStorage.getItem("ads") || "[]");
    ads.push({ title, revenue });
    localStorage.setItem("ads", JSON.stringify(ads));
    logAction(`Added ad: ${title}`);
    loadAds();
}

function editAd(index) {
    const ads = JSON.parse(localStorage.getItem("ads"));
    const title = prompt("Edit ad title", ads[index].title);
    const revenue = parseFloat(prompt("Edit revenue", ads[index].revenue));
    ads[index] = { title, revenue };
    localStorage.setItem("ads", JSON.stringify(ads));
    logAction(`Edited ad: ${title}`);
    loadAds();
}

function deleteAd(index) {
    const ads = JSON.parse(localStorage.getItem("ads"));
    logAction(`Removed ad: ${ads[index].title}`);
    ads.splice(index, 1);
    localStorage.setItem("ads", JSON.stringify(ads));
    loadAds();
}

function trackAd(index) {
    const ads = JSON.parse(localStorage.getItem("ads"));
    alert(`Ad "${ads[index].title}" earned $${ads[index].revenue}`);
    logAction(`Tracked ad: ${ads[index].title}`);
}


/* ---------------- LOGS ---------------- */

function logAction(action) {
    const logs = JSON.parse(localStorage.getItem("logs") || "[]");
    logs.push({ action, timestamp: new Date().toLocaleString() });
    localStorage.setItem("logs", JSON.stringify(logs));
}

function loadLogs() {
    const container = document.getElementById("logContainer");
    const logs = JSON.parse(localStorage.getItem("logs") || "[]");
    container.innerHTML = logs.map(log => `<p>${log.timestamp}: ${log.action}</p>`).join('');
}
