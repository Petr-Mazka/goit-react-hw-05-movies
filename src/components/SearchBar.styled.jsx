import styled from "styled-components";

export const SearchForm = styled.form`
    display: flex;
    align-items: center;
    width: 100%;
    margin: 0;
`;

export const Input = styled.input`
    width: 300px;
    height: 42px;
    padding: 5px 10px;
    border: 2px solid #094067;
    font-size: 1.2rem;
    color: #094067;
    border-radius: 4px;
    outline: none;
    box-sizing: border-box;
    margin-right: 10px;

    &:focus {
        border: 3px solid #0485e9;
        color: #0485e9;
    }
`;

export const Button = styled.button`
    width: 70px;
    height: 42px;
    border: 2px solid #094067;
    background-color: #90b4ce;
    color: #094067;
    border-radius: 4px;
    font-size: 17px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
        border: 3px solid #0485e9;
        color: #0485e9;
    }
`;