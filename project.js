/* getting the html elments of h1, the hero header img, tech used, summary and the previews */
const projectName = document.getElementById('project-name');
const projectSummary = document.getElementById('project-summary');
const techUsed = document.getElementById('tech');
const projectBg = document.getElementById('project-bg');
const previewsDiv = document.getElementById('img-previews');
const projectHeroImg = document.getElementById('project-hero-img');
/* getting the el that contains the text for the previous and next button
will be updating them based on the project that is displayed */
const nextProjectName = document.getElementById('next-project');
const prevProjectName = document.getElementById('prev-project');

// retrieving the project index from the session storage
let currentProjectIndex = parseInt(sessionStorage.getItem('selectedProject'));

const updateProjectPage = (project) => {
    // removing all existing text and images;
    projectName.innerText = '';
    projectSummary.innerText = '';
    techUsed.innerText = '';
    projectBg.innerText = '';
    previewsDiv.innerHTML = '';
    projectHeroImg.innerHTML = '';

    // creating img elements for the previews
    const imgPreview1 = document.createElement('img');
    const imgPreview2 = document.createElement('img');
    const heroImg = document.createElement('img');

    
    const screenWidth = window.innerWidth
    
    if (screenWidth >= 1440) { // desktop screens
        console.log('hello')
    } else if (screenWidth >= 768) /* tablet screens */ {
        console.log('hello')
    } else { /* mobile screens */
        imgPreview1.src = projectsData[project].mobile["src-1"]
        imgPreview2.src = projectsData[project].mobile["src-2"]
        heroImg.src = projectsData[project].mobile["hero-src"]
    }

    
    projectName.innerText = projectsData[project]["project name"];
    projectSummary.innerText = projectsData[project]["project summary"];
    techUsed.innerText = projectsData[project].technologies;
    projectBg.innerText = projectsData[project]["project background"];
    
    projectHeroImg.append(heroImg);
    previewsDiv.append(imgPreview1, imgPreview2);

    /* each time updateProjectPage is called, it will be called with a different project index
    for example when using the naviation in the projects page and clicking next and previous
    w/o this it would load the first page but not the subsequent pages */
    currentProjectIndex = project
}

const projectNavigation = (direction) => {
    let newIndex

    if (direction === 'next') {
        newIndex = currentProjectIndex + 1
        console.log(newIndex)
    } else if (direction === 'previous') {
        newIndex = currentProjectIndex - 1
        console.log(newIndex)
    }

    updateProjectPage(newIndex)
}

const updateProjectNavBtn = (project) => {
    nextProjectName.innerText = projectsData[project + 1]?.["project name"];
    prevProjectName.innerText = projectsData[project - 1]?.["project name"];
}

/* getting the prev and next buttons for navigation on the projects page 
adding event listeners*/
document.getElementById('next').addEventListener('click', () => {
    projectNavigation('next')
})

document.getElementById('previous').addEventListener('click', () => {
    projectNavigation('previous')
})

updateProjectNavBtn(currentProjectIndex);
updateProjectPage(currentProjectIndex)

/* window.addEventListener('DOMContentLoaded', () => {

    if (currentProjectIndex !== null) {
    } else {
        console.error('No project selected or project index is invalid')
    }
}) */