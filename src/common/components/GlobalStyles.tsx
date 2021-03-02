import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
/* RESET START */
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default padding */
ul[class],
ol[class] {
  padding: 0;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* Remove list styles on ul, ol elements with a class attribute */
ul[class],
ol[class] {
  list-style: none;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img {
  max-width: 100%;
  display: block;
}

/* Natural flow and rhythm in articles by default */
article > * + * {
  margin-top: 1em;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations and transitions for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
/* RESET END */

:root {
  --bg-primary: #202225;
  --bg-secondary: #2f3136;
  --bg-tertiary: #484c52;
  --text-primary: #eeeeee;
}

html {
  font-size: 62.5%;
}

body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-family: 'Open Sans', 'sans-serif', Arial;
  font-size: 1.6rem
}

button, select {
    font-family: 'Quicksand', Arial;
}

h1 {
  font-size: 3.2rem;
  font-weight: 700;
}

h2 {
  font-size: 2.4rem;
  font-weight: 700;
}
`;

export default GlobalStyles;
