import styled from "styled-components";
import { Link } from "react-router-dom";

export const DetailsContainer = styled.div`
    padding: 20px;
`;

export const BackButton = styled(Link)`
    text-decoration: none;
    color: #3da9fc;
    font-size: 1.2rem;
    font-weight: bold;

    &:hover {
        color: #0485e9;
    }
`;

export const LinkContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    padding: 20px 10px;
    border-bottom: 4px double #3da9fc;
    border-top: 4px double #3da9fc;
`;

export const LinkItemCast = styled(Link)`
    text-decoration: none;
    color: #094067;
    margin-right: 100px;
    font-size: 1.7rem;
    font-weight: bold;

    &:hover {
        color: #0485e9;
    }
`;

export const LinkItemReview = styled(Link)`
    text-decoration: none;
    color: #094067;
    font-size: 1.9rem;
    font-weight: bold;

    &:hover {
        color: #0485e9;
    }
`;