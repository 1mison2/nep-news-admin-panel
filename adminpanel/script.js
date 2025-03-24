function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

function openModal(modalId) {
    document.getElementById(modalId).classList.remove('hidden');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
}

function addNews() {
    let title = document.getElementById('newsTitle').value;
    if (title) {
        let newsList = document.getElementById('newsList');
        let li = document.createElement('li');
        li.textContent = title;
        newsList.appendChild(li);
        
        let newsCount = document.getElementById('newsCount');
        newsCount.textContent = parseInt(newsCount.textContent) + 1;
        
        closeModal('newsModal');
    }
}

function addAd() {
    let title = document.getElementById('adsTitle').value;
    if (title) {
        let adsList = document.getElementById('adsList');
        let li = document.createElement('li');
        li.textContent = title;
        adsList.appendChild(li);
        
        let adsCount = document.getElementById('adsCount');
        adsCount.textContent = parseInt(adsCount.textContent) + 1;
        
        closeModal('adsModal');
    }
}
