        document.addEventListener('DOMContentLoaded', function() {
            loadProjectData();
        });

        function loadProjectData() {
            // Load data for desktop layout
            const desktopCards = document.querySelectorAll('.projects-grid-desktop .project-card');
            loadCardsData(desktopCards);
            
            // Load data for tablet layout
            const tabletCards = document.querySelectorAll('.projects-grid-tablet .project-card');
            loadCardsData(tabletCards);
            
            // Load data for mobile layout
            const mobileCards = document.querySelectorAll('.projects-grid-mobile .project-card');
            loadCardsData(mobileCards);
        }

        function loadCardsData(cards) {
            cards.forEach((card, index) => {
                const projectId = index + 1;
                const project = projectData[projectId];
                
                if (project) {
                    const titleElement = card.querySelector('.project-title');
                    if (titleElement) {
                        titleElement.textContent = project.title;
                    }
                    
                    const imageElement = card.querySelector('.project-image');
                    if (imageElement && project.mainImage) {
                        imageElement.style.backgroundImage = `url(${project.mainImage})`;
                        imageElement.style.backgroundSize = 'cover';
                        imageElement.style.backgroundPosition = 'center';
                        imageElement.style.backgroundRepeat = 'no-repeat';
                    }
                }
            });
        }