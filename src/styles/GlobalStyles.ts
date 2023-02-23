import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    h1{
        color:black;
    }
    *, button, input{
        border:0;
        outline:0;
        font-family: 'Roboto', sans-serif;
        font-size: 1em;
        font-weight: 400;
    }
    button, input, div, p, h1,h2,h3,h4,h5,h6,span {
        color:#707070;
    }

    button{
        cursor:pointer;
    }
`;