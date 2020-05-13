import React from 'react';
import styled from 'styled-components';
import { Section } from '../Styled/Containers';
import { SectionTitle } from '../Styled/Titles';
import { Comment } from '../Styled/Text';
import { fonts } from '../../util/colors';
import { tablet } from '../../util/screens';

const ArrayContainer = styled('div')`
    margin-top: 5vh;
    font-size: 1.5rem;

    .const {
        color: ${fonts.purple};
    }

    .var_name {
        color: ${fonts.blue};
    }

    .special_char {
        color: ${fonts.light};
    }

    .string {
        color: ${fonts.green};
        word-wrap: break-word;
    }

    .skill {
        margin: 10px 0;
        margin-left: 35px;
    }

    ${tablet} {
        font-size: 1rem;
    }
`

const Skills = () => {

    return (
        <Section id='skills'>
            <SectionTitle>Skills</SectionTitle>
            <Comment>{"// Technologies and languages I have been recently using"}</Comment>
            <ArrayContainer>
                <span className='const'>const&nbsp;</span>
                <span className='var_name'>technologies&nbsp;</span>
                <span className='special_char'>=&nbsp;</span>
                <span className='special_char'>[</span>
                {['React', 'Redux', 'Express', 'Knex', 'Node.Js', 'Docker'].map(skill => {
                    return (
                        <>
                            <div className='skill'>
                                <span className='string'>"{skill}"</span>
                                <span>,</span>
                            </div>
                        </>
                    )}
                )}
                <span className='special_char'>]</span>
                <span className='special_char'>;</span>
            </ArrayContainer>
            <ArrayContainer>
                <span className='const'>const&nbsp;</span>
                <span className='var_name'>languages&nbsp;</span>
                <span className='special_char'>=&nbsp;</span>
                <span className='special_char'>[</span>
                {['Python', 'JavaScript', 'HTML', 'CSS', 'SQL'].map(skill => {
                    return (
                        <>
                            <div className='skill'>
                                <span className='string'>"{skill}"</span>
                                <span>,</span>
                            </div>
                        </>
                    )}
                )}
                <span className='special_char'>]</span>
                <span className='special_char'>;</span>
            </ArrayContainer>
        </Section>
    )
}

export default Skills;