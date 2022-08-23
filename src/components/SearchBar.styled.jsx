import styled from "styled-components";

export const SearchForm = styled.form`
    display: flex;
    align-items: center;
    width: 100%;
    margin: 0;
`;

export const Input = styled.input`
    width: 200px;
    padding: 5px 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    margin-right: 10px;
`;

export const Button = styled.button`
    width: 70px;
    height: 27px;
    border: 1px solid #ccc;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
        border: 1px solid #000;
    }
`;