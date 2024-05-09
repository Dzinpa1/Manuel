# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

> 💡 These are just the design sizes. Ensure content is responsive and meets WCAG requirements by testing the full range of screen sizes from 320px to large screens.

## Colors

### Primary

- Gradient: hsl(6, 100%, 80%) to hsl(335, 100%, 65%)

### Neutral

- Pale Blue: hsl(243, 100%, 93%)
- Grayish Blue: hsl(229, 7%, 55%)
- Dark Blue: hsl(228, 56%, 26%)
- Very Dark Blue: hsl(229, 57%, 11%)

## Typography

### Body Copy

- Font size: 14px

### Font

- Family: [Raleway](https://fonts.google.com/specimen/Raleway)
- Weights: 400, 700

> 💎 [Upgrade to Pro](https://www.frontendmentor.io/pro?ref=style-guide) for design file access to see all design details and get hands-on experience using a professional workflow with tools like Figma.



.bubble {
    background-color: hsl(0, 0%, 100%);
    width: 150px;
    padding: 1rem;
    border-radius: 10px 10px 0 10px;
    position: relative;
    bottom: 40px;
    left: 82%;
    transform: translateX(-50%);
}
.bubble::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: -20%;
    width: 0;
    height: 0;
    border: 16px solid transparent;
    border-right-color: hsl(0, 0%, 100%);
}
.range-value span {
    font-size: 12px;
    font-weight: 700;
    color: hsl(229, 7%, 55%);
}
.range-value{
    font-weight: 700;
    font-size: 2rem;
    color: hsl(229, 57%, 11%);
}
