import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`

  :root{
    --color-text: #1c140d;
    --color-back: #f2e9e1;
    --color-white: #eee;
    --color-primary: #cbe86b;
    --color-opacity: darken(--color-primary, 25%);

  }
  html, body, div, span,
  h1, h2, h3, h4, h5, h6,  img,  ul, li,
  form, label, footer, header, section{
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
  }
  
  article, aside,footer, header, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    font-family: 'Poppins', sans-serif;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }`;
