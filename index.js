const openMenuBtn = document.getElementById('menu-btn');
const closeMenuBtn = document.getElementById('close-btn');
const mobileMenu = document.getElementById('menu-content');
/* queries the view project btns from the portfolio page
they will be used to dynamically put the content of the project */
const viewProjectBtn = document.querySelectorAll('.view-project');
const form = document.getElementById('form');
// when the user submits the form, their name, email and text message is saved in the obj
// used for the validation as well
let messageData = {};
// the messages to be displayed when a user inputs invalid info
const validationMessage = {
    'empty': 'This field is required',
    'invalid': 'Please enter a valid :attribute'
}
/* this array of objs contains the details of each project, including imgs, headers
and description - to be dynamically added to the DOM when user clicks on the view website btn from
the portfolio page */
const projectsData = [
    {
        'project name': 'Manage',
        'project summary': "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.",
        'technologies': 'HTML / CSS / JS',
        'project background': 'This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.',
        'project website': "https://www.google.com/",

        'mobile': {
            'hero-src': "./images/detail/mobile/image-manage-hero@2x.jpg",
            'src-1': './images/detail/mobile/image-manage-preview-1@2x.jpg',
            'src-2': './images/detail/mobile/image-manage-preview-2@2x.jpg',
        },

        'tablet': {

        },
        
        'desktop': {

        }
    },

    {
        'project name' : 'Bookmark',
        'project summary': "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.",
        'technologies': 'HTML / CSS / JS',
        'project background': 'This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.',
        'project website': "https://www.google.com/",

        'mobile': {
            'hero-src': "./images/detail/mobile/image-bookmark-hero@2x.jpg",
            'src-1': './images/detail/mobile/image-bookmark-preview-1@2x.jpg',
            'src-2': './images/detail/mobile/image-bookmark-preview-2@2x.jpg',
        },

        'tablet': {

        },
        
        'desktop': {

        }
    },

    {
        'project name' : 'Insure',
        'project summary': "This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.",
        'technologies': 'HTML / CSS / JS',
        'project background': 'This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.',
        'project website': "https://www.google.com/",

        'mobile': {
            'hero-src': "./images/detail/mobile/image-insure-hero@2x.jpg",
            'src-1': './images/detail/mobile/image-insure-preview-1@2x.jpg',
            'src-2': './images/detail/mobile/image-insure-preview-2@2x.jpg',
        },

        'tablet': {

        },
        
        'desktop': {

        }
    },

    {
        'project name' : 'Fylo',
        'project summary': "This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.",
        'technologies': 'HTML / CSS',
        'project background': 'This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.',
        'project website': "https://freecodecamp.org",

        'mobile': {
            'hero-src': "./images/detail/mobile/image-fylo-hero@2x.jpg",
            'src-1': './images/detail/mobile/image-fylo-preview-1@2x.jpg',
            'src-2': './images/detail/mobile/image-fylo-preview-2@2x.jpg',
        },

        'tablet': {

        },
        
        'desktop': {

        }
    },
]

// regex used to test email provided
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

const validateInputs = () => {
    // gets the name, email, and text area
    const inputs = document.querySelectorAll('input, textarea')
    /* loops through the nodelist and retrieves their values and saving them into the messageData
    object using their name as the key
     */
    inputs.forEach(input => {
        messageData[input.name] = input.value;
        // if the input is an empty string call hasError
        if (input.value === '') {
            hasError(input, validationMessage.empty)
        } else {
            // no errors call hasNoError
            hasNoError(input)
        }
    })
    /* creating an array from inputs and finding the input with the name of email
    the email is then tested to make sure it's a valid email using the regex
    isEmail returns a boolean */
    const emailInput = Array.from(inputs).find(input => input.name === 'email');
    const isEmail = emailRegex.test(messageData.email)

    // checking for emailInput in case it returns null or undefined.
    if (!isEmail && emailInput) {
        hasError(emailInput, validationMessage.invalid.replace(':attribute', 'email'));
    }

    console.log(messageData)
}

const hasError = (element, message) => {
    const parentElement = element.parentElement;
    parentElement.classList.add('has-error');

    // prevents from adding multiple error divs
    if (!parentElement.querySelector('.error-div')) {
        const errorDiv = document.createElement('div');
        errorDiv.textContent = message;
        errorDiv.className = 'error-div';
    
        parentElement.appendChild(errorDiv);
    }
}

const hasNoError = (element) => {
    const parentElement = element.parentElement
    const errorDiv = parentElement.querySelector('.error-div')

    if (errorDiv) {
        parentElement.classList.remove('has-error')
        errorDiv.remove()
    }
}


viewProjectBtn?.forEach((btn, index) => {
    btn.addEventListener('click', () => {

        // storing the selected project in the session storage
        sessionStorage.setItem('selectedProject', index)

        // updateProjectPage(projectIndex);
        // updating the url without reloding page
/*         const newUrl = `project.html?project-${index}`
        window.history.pushState({path : newUrl}, '', newUrl) */

        // goes to the project bookmark.html
        window.location.href = `./project.html`;
    })

})

openMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
})

closeMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('active')
})

form?.addEventListener('submit', (e) => {
    e.preventDefault()

    validateInputs();
})