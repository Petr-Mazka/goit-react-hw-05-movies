import styled from "styled-components";

export const ReviewList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    list-style: none;
    width: 1300px;
`;

export const ReviewItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    padding: 20px;

    &:not(:last-child) {
        margin-bottom: 20px;
    }
`;