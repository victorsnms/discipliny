import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    :root{
        --font-text:'Rosario', sans-serif;
        --font-titles:'Oleo Script', cursive;
        --white: #fff;
        --cream: #FEF2EC;
        --gray: #cdcdcd;
        --blue-light: #55CFE0;
        --blue: #33658A;
        --blue-dark: #2F4858;
        --yellow:#F6AE2D;
        --orange: #F26419;
        --black: #191919;
        --linear-orange:linear-gradient(to bottom, #F26419, #F6AE2D);
    }
    
    body{
        font-family: var(--font);
    }

    button{
        cursor: pointer;
        border: none;
    }
`