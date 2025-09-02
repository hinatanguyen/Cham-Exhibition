        document.addEventListener('DOMContentLoaded', function() {
            loadProjectData();
        });

        function loadProjectData() {
            const projectCards = document.querySelectorAll('.project-card');
            
            projectCards.forEach((card, index) => {
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
                    }
                }
            });
        }