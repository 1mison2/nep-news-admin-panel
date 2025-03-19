document.addEventListener("DOMContentLoaded", function () {
    // Open and Close Modal Functions
    function openModal(modalId) {
        document.getElementById(modalId).classList.remove("hidden");
    }
    
    function closeModal(modalId) {
        document.getElementById(modalId).classList.add("hidden");
    }

    // Add News Function
    function addNews() {
        let title = document.getElementById("newsTitle").value.trim();
        if (title === "") {
            alert("Please enter a news title.");
            return;
        }

        let newsList = document.getElementById("newsList");
        let listItem = document.createElement("li");
        listItem.className = "news-item"; // Keep styles clean
        
        let titleSpan = document.createElement("span");
        titleSpan.textContent = title;
        titleSpan.className = "news-title";
        
        let actionsDiv = document.createElement("div");
        
        let editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.className = "edit-btn";
        editBtn.onclick = function () {
            let newTitle = prompt("Edit News Title:", titleSpan.textContent);
            if (newTitle) {
                titleSpan.textContent = newTitle;
            }
        };
        
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";
        deleteBtn.onclick = function () {
            newsList.removeChild(listItem);
            updateNewsCount(-1);
        };
        
        actionsDiv.appendChild(editBtn);
        actionsDiv.appendChild(deleteBtn);
        listItem.appendChild(titleSpan);
        listItem.appendChild(actionsDiv);
        newsList.appendChild(listItem);
        
        document.getElementById("newsTitle").value = "";
        closeModal("newsModal");
        updateNewsCount(1);
    }

    // Update News Count
    function updateNewsCount(change) {
        let newsCount = document.getElementById("newsCount");
        newsCount.textContent = parseInt(newsCount.textContent) + change;
    }

    // Add Event Listeners
    document.querySelector("button[onclick='addNews()']").addEventListener("click", addNews);

    document.querySelectorAll("button[onclick^='openModal']").forEach(button => {
        button.addEventListener("click", function () {
            let modalId = this.getAttribute("onclick").match(/'([^']+)'/)[1];
            openModal(modalId);
        });
    });

    document.querySelectorAll("button[onclick^='closeModal']").forEach(button => {
        button.addEventListener("click", function () {
            let modalId = this.getAttribute("onclick").match(/'([^']+)'/)[1];
            closeModal(modalId);
        });
    });
});
