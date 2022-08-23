import styled from "styled-components";

export const CastItem = styled.ul`
    list-style: none;
`;

export const CastItemLi = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

export const CastItemImage = styled.img`
    width: 185px;
    height: 278px;
    margin-right: 40px;
`;

export const CastItemText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const CastItemTextP = styled.p`
    font-size: 1.2rem;
    margin-bottom: 10px;
    margin-top: 0;
    font-weight: bold;
`;