import styled from 'styled-components';
import { fonts } from '../../util/colors';

export const Page = styled('div')`
    color: ${fonts.light};
    padding: 0 35px;
    font-family: 'Fira Code', monospace;
`

export const Section = styled('section')`
    margin-bottom: 20vh;
    padding-top: 10vh;
    height: ${({ height }) => height || '100vh'};
`