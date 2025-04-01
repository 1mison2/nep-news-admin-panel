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

// Load News
function loadNews() {
    let newsContainer = document.getElementById("newsContainer");
    newsContainer.innerHTML = "";

    let newsData = JSON.parse(localStorage.getItem("news")) || [];

    newsData.forEach((news, index) => {
        let newsItem = document.createElement("div");
        newsItem.classList.add("news-item");
        newsItem.innerHTML = `
            <img src="${news.image}" class="news-img">
            <div>
                <h3>${news.title}</h3>
                <p>${news.category} | ${news.date}</p>
            </div>
            <div>
                <button class="delete-btn" onclick="deleteNews(${index})">Delete</button>
                <button class="post-btn" onclick="postNews(${index})">Post</button>
            </div>
        `;
        newsContainer.appendChild(newsItem);
    });
}

// Add News
function addNews() {
    let newsData = JSON.parse(localStorage.getItem("news")) || [];
    let newTitle = prompt("Enter news title:");
    let newCategory = prompt("Enter category:");
    let newDate = new Date().toLocaleDateString();
    let newImage = prompt("Enter image URL:");

    if (newTitle) {
        newsData.push({ title: newTitle, category: newCategory, date: newDate, image: newImage });
        localStorage.setItem("news", JSON.stringify(newsData));
        logAction(`News added: ${newTitle}`);
        loadNews();
    }
}

// Delete News
function deleteNews(index) {
    let newsData = JSON.parse(localStorage.getItem("news")) || [];
    logAction(`News deleted: ${newsData[index].title}`);
    newsData.splice(index, 1);
    localStorage.setItem("news", JSON.stringify(newsData));
    loadNews();
}

// Approve or Reject Ad
function approveAd(index) {
    logAction(`Advertisement approved.`);
}
function rejectAd(index) {
    logAction(`Advertisement rejected.`);
}

// System Logs
function logAction(action) {
    let logs = JSON.parse(localStorage.getItem("logs")) || [];
    logs.push({ action: action, timestamp: new Date().toLocaleString() });
    localStorage.setItem("logs", JSON.stringify(logs));
}
function loadLogs() {
    let logContainer = document.getElementById("logContainer");
    logContainer.innerHTML = JSON.parse(localStorage.getItem("logs")).map(log => `<p>${log.timestamp}: ${log.action}</p>`).join("");
}
