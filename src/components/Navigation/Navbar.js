import React from 'react';
import styled from 'styled-components';
import { StyledSrollLink } from '../Styled/Link';
import { backgrounds } from '../../util/colors';
import { tablet, mobile } from '../../util/screens';

export const NavLink = styled(StyledSrollLink) `
    width: 100%;
    padding: 15px 35px;
    background-color: ${backgrounds.light};

    &.active {
        background-color: ${backgrounds.dark};
    }
    &:hover {
        background-color: ${backgrounds.lightest};
    }

    ${tablet} {
        padding: 10px;
    }

    ${mobile} {
        width: 100%;
    }
`

const StyledHeader = styled('header')`
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    font-weight: bold;
    background-color: ${backgrounds.light};
    width: 100%;
    justify-content: space-between;

    ${mobile} {
        padding: 5px 0;
    }
`

const StyledNav = styled('nav')`
    display: flex;
    justify-content: flex-end;

    ${mobile} {
        display: none;
        position: fixed;
        width: 100%;
        left: 0%;
        top: 45px;
        margin-top: -100%;
        overflow: hidden;

        &.show {
            display: flex;
            flex-direction: column;
            margin-top: 0px;
            transition: all 1s;
        }
    }
`

const SocialContainer = styled('div')`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 30%;
    margin-right: 20px;

    a {
        font-size: 1.5rem;
        margin: 0 20px;
        color: inherit;
        text-decoration: none;

        ${tablet} {
            margin: 0 10px;
        }
    }

    ${tablet} {
        margin-right: 0px;
    }
`

const DropDown = styled('div')`
    display: none;
    margin-left: 10px;
    padding: 10px;
    border-radius: 2px;
    border: 1px solid ${backgrounds.lightest};

    &:hover {
        cursor: pointer;
    }


    ${mobile} {
        display: flex;
        align-items: center;

        &.open {

            background: ${backgrounds.lightest};

        }
    }
`

const Navbar = () => {
    const navbarRef = React.createRef();
    const dropDownButtonRef = React.createRef();

    const showNavbar = () => {
        navbarRef.current.classList.toggle('show');
        dropDownButtonRef.current.classList.toggle('open');
    }

    return (
        <StyledHeader>
            <DropDown ref={dropDownButtonRef} onClick={showNavbar}>
                <i className="fas fa-bars"></i>
            </DropDown>
            <StyledNav ref={navbarRef}>
                <NavLink onClick={showNavbar} to='home' activeClass='active' spy={true} smooth={true}>Home</NavLink>
                <NavLink onClick={showNavbar} to='skills' activeClass='active' spy={true} smooth={true}>Skills</NavLink>
                <NavLink onClick={showNavbar} to='projects' activeClass='active' spy={true} smooth={true}>Projects</NavLink>
                <NavLink onClick={showNavbar} to='about' activeClass='active' spy={true} smooth={true}>About</NavLink>
                <NavLink onClick={showNavbar} to='contact' activeClass='active' spy={true} smooth={true}>Contact</NavLink>
            </StyledNav>
            <SocialContainer>
                <a href='https://github.com/nattroj' target='_blank' rel='noopener noreferrer'>
                    <i className="fab fa-github"></i>
                </a>
                <a href='https://www.linkedin.com/in/nattajohn' target='_blank' rel='noopener noreferrer'>
                    <i className="fab fa-linkedin"></i>
                </a>
            </SocialContainer>
        </StyledHeader>
    )
}

export default Navbar;