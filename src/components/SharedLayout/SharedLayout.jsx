import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { NavContainer, Nav, NavLinkStyled, Content } from "./SharedLayout.styled";

const SharedLayout = () => {
    return (
        <div>
            <NavContainer>
                <Nav>
                    <NavLinkStyled to="/" >Home</NavLinkStyled>
                    <NavLinkStyled to="/movies">Movies</NavLinkStyled>
                </Nav>
            </NavContainer>
            <Suspense fallback={<div>Loading...</div>}>
                <Content>
                    <Outlet />
                </Content>
            </Suspense>
        </div>
    );
}

export default SharedLayout;