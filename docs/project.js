/* getting the html elments of h1, the hero header img, tech used, summary and the previews */
const projectName = document.getElementById('project-name');
const projectSummary = document.getElementById('project-summary');
const techUsed = document.getElementById('tech');
const projectBg = document.getElementById('project-bg');
const previewsDiv = document.getElementById('img-previews');
const projectHeroImg = document.getElementById('project-hero-img');
const projectWebsiteLink = document.getElementById('project-website-link')
/* getting the el that contains the text for the previous and next button
will be updating them based on the project that is displayed */
const nextProjectName = document.getElementById('next-project');
const prevProjectName = document.getElementById('prev-project');

// retrieving the project index from the session storage
let currentProjectIndex = parseInt(sessionStorage.getItem('selectedProject'));

const updateProjectPage = (project = 0) => {
    // removing all existing text and images;
    projectName.innerText = '';
    projectSummary.innerText = '';
    techUsed.innerText = '';
    projectBg.innerText = '';
    previewsDiv.innerHTML = '';
    projectHeroImg.innerHTML = '';
    projectWebsiteLink.href = '';

    // creating img elements for the previews
    const imgPreview1 = document.createElement('img');
    const imgPreview2 = document.createElement('img');
    const heroImg = document.createElement('img');

    
    const screenWidth = window.innerWidth
    
    if (screenWidth >= 1440) { // desktop screens
        imgPreview1.src = projectsData[project].desktop["src-1"]
        imgPreview2.src = projectsData[project].desktop["src-2"]
        heroImg.src = projectsData[project].desktop["hero-src"]
    } else if (screenWidth >= 768) /* tablet screens */ {
        imgPreview1.src = projectsData[project].tablet["src-1"]
        imgPreview2.src = projectsData[project].tablet["src-2"]
        heroImg.src = projectsData[project].tablet["hero-src"]
    } else { /* mobile screens */
        imgPreview1.src = projectsData[project].mobile["src-1"]
        imgPreview2.src = projectsData[project].mobile["src-2"]
        heroImg.src = projectsData[project].mobile["hero-src"]
    }
     
    projectName.innerText = projectsData[project]["project name"];
    projectSummary.innerText = projectsData[project]["project summary"];
    techUsed.innerText = projectsData[project].technologies;
    projectBg.innerText = projectsData[project]["project background"];
    projectWebsiteLink.href = projectsData[project]["project website"];
    
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
        /* currentProjectIndex + 1 increases the currentProjectIndezx by 1 to go to the next
        project

        %projetsData.length ensureses that if you reach the end of the project list, you wrap
        to the beginning 
        
        e.g. projectsData.length is 4. if current project index is 3 and then click next currentProjectIndex
        becomes 4 -> then 4 % 4 = 0 wrapping back to the first project in the projectsDataArray*/
        newIndex = (currentProjectIndex + 1) % projectsData.length
    } else if (direction === 'previous') {
        /* same as the next but we are adding projectData.length to keep the indices positive
        currentProject - 1 decreases by 1 to go to the previous project

        e.g. projectsData.length is 4 if you are at the last project then currentProjectIndex is 0

        (0 - 1 + projectsData.length) = -1 + 4 -> 3

        effectively going back to the last project
        */
        newIndex = (currentProjectIndex - 1 + projectsData.length) % projectsData.length;
    }

    /* scroll to the top of the page once the user clicks either next or prev */
    
    updateProjectPage(newIndex)
    updateProjectNavBtn(newIndex)

    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
}

const updateProjectNavBtn = (project = 0) => {
    /* to update the text of the buttons as the user is clicking around using the same logic
    as the projectNavigation function */
    nextProjectName.innerText = projectsData[(project + 1) % projectsData.length]?.["project name"];
    prevProjectName.innerText = projectsData[(project - 1 + projectsData.length) % projectsData.length]?.["project name"];
}

/* getting the prev and next buttons for navigation on the projects page 
adding event listeners*/
document.getElementById('next').addEventListener('click', () => {
    projectNavigation('next')
})

document.getElementById('previous').addEventListener('click', () => {
    projectNavigation('previous')
})

window.addEventListener('resize', () => {
    updateProjectPage(currentProjectIndex);
})

window.addEventListener('DOMContentLoaded', () => {
    
    if (currentProjectIndex !== null) {
        updateProjectNavBtn(currentProjectIndex);
        updateProjectPage(currentProjectIndex)
    } else {
        console.error('No project selected or project index is invalid')
    }
})