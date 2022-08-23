import styled from "styled-components";

export const MovieCardContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 20px;
`;

export const MovieCardImage = styled.img`
    width: 290px;
    height: 460px;
    margin-right: 50px;
`;

export const MovieCardContent = styled.div`
    height: 460px;
`;

export const MovieCardTitle = styled.h3`
    font-size: 3rem;
    margin-bottom: 40px;
    margin-top: 0;
`;

export const MovieCardDescription = styled.p`
    font-size: 1.5rem;
    margin-bottom: 40px;
    width: 900px;
`;

export const MovieCardGenres = styled.ul`
    list-style: none;
    display: flex;
    padding: 0;
`;

export const MovieCardGenre = styled.li`
    font-size: 1.2rem;
    font-weight: bold;

    &:not(:last-child) {
        margin-right: 6px;
        border-right: 2px solid #000;
        padding-right: 6px;
    }
`;