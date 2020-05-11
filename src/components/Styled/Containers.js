import styled from 'styled-components';
import { fonts } from '../../util/colors';
import { tablet, mobile } from '../../util/screens';

export const Page = styled('div')`
    color: ${fonts.light};
    padding: 0 35px;
    font-family: 'Fira Code', monospace;

    ${mobile} {
        padding: 0 20px;
    }
`

export const Section = styled('section')`
    margin-bottom: 20vh;
    padding-top: 10vh;
    height: ${({ height }) => height || '100vh'};

    ${tablet} {
        height: 100%; 
    }
`