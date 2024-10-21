# Frontend Mentor - Minimalist portfolio website solution

This is a solution to the [Minimalist portfolio website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/minimalist-portfolio-website-LMy-ZRyiE). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- Click the "About Me" call-to-action on the homepage and have the screen scroll down to the next section
- Receive an error message when the contact form is submitted if:
  - The `Name`, `Email Address` or `Message` fields are empty should show "This field is required"
  - The `Email Address` is not formatted correctly should show "Please use a valid email address"

### Screenshot

![](./screenshots/desktop%20about.png)
![](./screenshots/desktop%20contact.png)
![](./screenshots/desktop%20home.png)
![](./screenshots/desktop%20project.png)
![](./screenshots/mobile%20contact%20error.png)
![](./screenshots/mobile%20home.png)
![](./screenshots/mobile%20menu.png)
![](./screenshots/mobile%20project%202.png)
![](./screenshots/mobile%20project.png)
![](./screenshots/tablet%20about.png)
![](./screenshots/tablet%20contact.png)
![](./screenshots/tablet%20home.png)
![](./screenshots/tablet%20project%202.png)
![](./screenshots/tablet%20project%20index.png)
![](./screenshots/tablet%20project.png)

### Links

- Solution URL: [Github](https://github.com/mroungou/minimalist-portfolio-website)
- Live Site URL: [Portfolio Website](https://mroungou.github.io/minimalist-portfolio-website/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

```html
```

```scss
.nav-link[aria-current="page"]  {
  color: c.$desaturaredCyan !important;
}
```
```js
// storing the selected project in the session storage
sessionStorage.setItem('selectedProject', index)

let currentProjectIndex = parseInt(sessionStorage.getItem('selectedProject'));

document.querySelectorAll('.nav-link').forEach(link => {
    /* this makes sure that the portfolio link remains active if user is on the portfolio page
    or on any of the project pages
    
    -> checks first if the link includes portfolio and the current url has project in it
    if that's the case it'll then set the aria-current
    
    -> for else state it will look for exact matches i.e. home, contact and portfolio as they look
    for exact matches*/
    if (link.href.includes('portfolio') && window.location.href.includes('project')) {
        link.setAttribute('aria-current', 'page');
    } else if (link.href === window.location.href) {
        link.setAttribute('aria-current', 'page')
    }
});
```
In JS I learned about session storage. I was aware of local storage but didn't know session storage existed.


### Continued development

I would like to add transitions to the opening and closing of the nav menu on the mobile version and when the images and texts are updated using JS. I would also like to modify the the website and use it as my own.

To use it as my own I would make sure that the message that the user inputs would be sent to me 

### Useful resources

- [Maintaining an alternating pattern across a responsive grid](https://dev.to/thedamon/maintaining-a-pattern-across-a-responsive-grid-4j2b) - this helped me out using the nth child selector for the alternating grid layout for the portfolio page instead of hard coding
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.



## Author
- Twitter - [@mroungou](https://x.com/mroungou)
