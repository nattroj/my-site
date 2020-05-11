import React from 'react';
import styled from 'styled-components';
import { NavLink } from '../Styled/Link';
import { backgrounds, fonts } from '../../util/colors';

const StyledHeader = styled('header')`
    position: fixed;
    top: 0;
    left: 0;
    font-weight: bold;
    background-color: ${backgrounds.light};
    display: flex;
    width: 100%;
    justify-content: space-between;
`

const StyledNav = styled('nav')`
    display: flex;
    justify-content: flex-end;
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

        .fa-linkedin {
            color: ${fonts.light};            
        }
    }


`

const Navbar = () => {
    return (
        <StyledHeader>
            <StyledNav>
                <NavLink to='home' activeClass='active' spy={true} smooth={true}>Home</NavLink>
                <NavLink to='projects' activeClass='active' spy={true} smooth={true}>Projects</NavLink>
                <NavLink to='about' activeClass='active' spy={true} smooth={true}>About</NavLink>
                <NavLink to='contact' activeClass='active' spy={true} smooth={true}>Contact</NavLink>
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