import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0 40px;
    height: 60px;
    background-color: #90b4ce;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    width: 100%;
    margin: 0;
`;

export const NavLinkStyled = styled(NavLink)`
    text-decoration: none;
    font-size: 1.2rem;
    color: #fffffe;

    &:not(:last-child) {
        margin-right: 15px;
    }

    &.active {
        color: #ed2e52;
        font-weight: bolder;
    }
`;

export const Content = styled.div`
    padding: 20px;
`;