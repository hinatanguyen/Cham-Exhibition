function getProjectId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id') || '1';
}

function setElementContent(id, content) {
    const element = document.getElementById(id);
    if (element) element.textContent = content;
}

function setElementAttribute(id, attribute, value) {
    const element = document.getElementById(id);
    if (element) element[attribute] = value;
}

function loadProject() {
    const projectId = getProjectId();
    const project = projectData[projectId];

    if (!project) {
        setElementContent('projectTitle', 'Project Not Found');
        setElementContent('authorName', 'Unknown');
        setElementContent('authorBio', 'Project information not available.');
        setElementContent('projectCategory1', 'N/A');
        setElementContent('projectDescription', 'The requested project could not be found.');
        return;
    }

    // Desktop author section
    setElementContent('projectTitle', project.title);
    setElementContent('authorName', project.author);
    setElementContent('authorBio', project.authorBio);
    setElementContent('projectCategory1', project.category1);
    setElementContent('projectCategory2', project.category2 || '');
    setElementContent('projectDescription', project.description);
    setElementAttribute('authorAvatar', 'src', project.avatar);
    setElementAttribute('authorEmail', 'href', project.email);
    setElementAttribute('authorPortfolio', 'href', project.portfolio);
    
    // Mobile author section
    setElementContent('authorNameMobile', project.author);
    setElementContent('authorBioMobile', project.authorBio);
    setElementAttribute('authorAvatarMobile', 'src', project.avatar);
    setElementAttribute('authorEmailMobile', 'href', project.email);
    setElementAttribute('authorPortfolioMobile', 'href', project.portfolio);
    
    // Gallery images
    setElementAttribute('mainProjectImage', 'src', project.mainImage);
    setElementAttribute('galleryImage1', 'src', project.galleryImage1);
    setElementAttribute('galleryImage2', 'src', project.galleryImage2);
    
    // Hide empty category
    if (!project.category2) {
        const category2Element = document.getElementById('projectCategory2');
        if (category2Element) category2Element.style.display = 'none';
    }
    
    document.title = `${project.title} - Chấm. Exhibition`;
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

document.addEventListener('DOMContentLoaded', loadProject);