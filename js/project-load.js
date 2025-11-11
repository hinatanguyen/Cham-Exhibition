document.addEventListener('DOMContentLoaded', function() {
    loadProjectData();
});

function loadProjectData() {
    // Load data for all layouts
    loadCardsData(document.querySelectorAll('.projects-grid-desktop .project-card'));
    loadCardsData(document.querySelectorAll('.projects-grid-tablet .project-card'));
    loadCardsData(document.querySelectorAll('.projects-grid-mobile .project-card'));
}

function loadCardsData(cards) {
    cards.forEach((card, index) => {
        const projectId = index + 1;
        const project = projectData[projectId];
        
        if (!project) return;
        
        const titleElement = card.querySelector('.project-title');
        const imageElement = card.querySelector('.project-image');
        
        if (titleElement) {
            titleElement.textContent = project.title;
        }
        
        if (imageElement && project.mainImage) {
            imageElement.style.backgroundImage = `url(${project.mainImage})`;
            imageElement.style.backgroundSize = 'cover';
            imageElement.style.backgroundPosition = 'center';
            imageElement.style.backgroundRepeat = 'no-repeat';
        }
    });
}