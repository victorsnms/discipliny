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
        --purple:#b55dc6;
        --green:#51a957;
        --red:#e73f36;
        --pink: #eb7eed;
        --brown:#b17c6a;
        --linear-orange:linear-gradient(to bottom, #F26419, #F6AE2D);
        --light-blue-gradient: linear-gradient(180deg, rgba(85, 207, 224, 0.66) 0%, rgba(12, 70, 78, 0.66) 100%);
        --dark-yellow-gradient: linear-gradient(180deg, #EFA92D 0%, #A97922 100%);
        --orange-gradient: linear-gradient(180deg, #F26419 0%, #9C4110 100%);
        --dark-blue-gradient: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(180deg, #417FAD 0%, #2F4858 100%);
        --orange-gradient-background: linear-gradient(0deg, #F26419 0%, #F6AE2D 100%);
        --background-cards:linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(180deg, rgba(85, 207, 224, 0.66) 0%, rgba(23, 126, 140, 0.66) 100%);
        --cream-gradient: linear-gradient(224.61deg,#978983 0%, #FEF2EC 55.17%, #978983 100%);
        --border-radius: 8px;
    }
    
    body{
        font-family: var(--font-text);
    }

    button{
        cursor: pointer;
        border: none;
    }

    // MODAL STYLES

    section.chakra-modal__content{
        border-radius: 1rem;
        margin: 0 16px;
    }

    button.chakra-modal__close-btn{
        color: var(--white);
    }
`;
