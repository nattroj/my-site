import styled from 'styled-components';
import { fonts } from '../../util/colors';

export const Comment = styled('div')`
    font-size: 1.2rem;
    color: ${fonts.faded};
    line-height: 1.8rem;
`

export const InnerComment = styled(Comment)`
    margin: 30px 0 30px 30px;
`