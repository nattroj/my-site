import styled from 'styled-components';
import { backgrounds, fonts } from '../../util/colors';
import { tablet } from '../../util/screens';

export const SectionTitle = styled('h2')`
    font-size: 2rem;
    font-weight: bold;
    color: ${fonts.yellow};
    margin-bottom: 5vh;

    &::selection {
        background-color: ${backgrounds.lightest};
    }

    ${tablet} {
        text-align: center;
    }
`