import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`

    ${reset}
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table, textarea, input{
        font-family: 'Noto Sans KR', sans-serif;
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 16px;
        vertical-align: baseline;
        list-style: none;
    }
    body{
        line-height: 1.5;
        font-family: 'Noto Sans KR', sans-serif;
        background-color: ${({ theme }) => theme.colors.backgroundColor};
        margin-bottom: 100px;
        color:${({ theme }) => theme.colors.black};
    }
    ol, ul{
        list-style: none;
    }
    button {
        font-family: 'Noto Sans KR', sans-serif;
        border: 0;
        background: transparent;
        cursor: pointer;
    }
`;

export default GlobalStyles;
