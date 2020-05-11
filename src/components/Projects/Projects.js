import React from 'react';
import styled from 'styled-components';
import { Section } from '../Styled/Containers';
import { SectionTitle } from '../Styled/Titles';
import { Comment } from '../Styled/Text';

import Project from './Project';

import projectData from './projectData';

const ProjectsContainer = styled('div')`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 800px) {
        flex-wrap: wrap;
    }
`


const Projects = () => {
    return (
        <Section id='projects'>
            <SectionTitle>Projects</SectionTitle>
            <Comment>{'// Here are some of my recent projects'}</Comment>
            <ProjectsContainer>
                {
                    projectData.map(project => <Project key={project.name} {...project} />)
                }
            </ProjectsContainer>
        </Section>
    )
}

export default Projects;