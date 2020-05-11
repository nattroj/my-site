import styled from 'styled-components';
import { Link } from 'react-scroll';
import { backgrounds } from '../../util/colors';

export const StyledSrollLink = styled(Link)`
    &:hover {
        cursor: pointer;
    }
`

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

    @media screen and (max-width: 800px) {
        padding: 10px;
    }
`