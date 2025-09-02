        function getProjectId() {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get('id') || '1';
        }

        function loadProject() {
            const projectId = getProjectId();
            const project = projectData[projectId];

            if (project) {
                document.getElementById('projectTitle').textContent = project.title;
                document.getElementById('authorName').textContent = project.author;
                document.getElementById('authorBio').textContent = project.authorBio;
                document.getElementById('projectCategory1').textContent = project.category1;
                document.getElementById('projectCategory2').textContent = project.category2 || '';
                document.getElementById('projectDescription').textContent = project.description;
                document.getElementById('authorAvatar').src = project.avatar;
                document.getElementById('authorEmail').href = project.email;
                document.getElementById('authorPortfolio').href = project.portfolio;
                document.getElementById('mainProjectImage').src = project.mainImage;
                document.getElementById('galleryImage1').src = project.galleryImage1;
                document.getElementById('galleryImage2').src = project.galleryImage2;
                document.getElementById('fullWidthImage').src = project.fullWidthImage;
                
                if (!project.category2) {
                    document.getElementById('projectCategory2').style.display = 'none';
                }
                
                document.title = `${project.title} - Chấm. Exhibition`;
            } else {
                document.getElementById('projectTitle').textContent = 'Project Not Found';
                document.getElementById('authorName').textContent = 'Unknown';
                document.getElementById('authorBio').textContent = 'Project information not available.';
                document.getElementById('projectCategory1').textContent = 'N/A';
                document.getElementById('projectDescription').textContent = 'The requested project could not be found.';
            }
        }

        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        document.addEventListener('DOMContentLoaded', loadProject);