const openMenuBtn = document.getElementById('menu-btn');
const closeMenuBtn = document.getElementById('close-btn');
const mobileMenu = document.getElementById('menu-content');
const form = document.getElementById('form');

const messageData = {};

const validationMessage = {
    'empty': 'This field is required',
    'invalid': 'Please enter a valid :attribute'
}

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

const validateInputs = () => {
    const inputs = document.querySelectorAll('input, textarea')

    inputs.forEach(input => {
        messageData[input.name] = input.value;

        if (input.value === '') {
            hasError(input, validationMessage.empty)
        } else {
            hasNoError(input)
        }
    })

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