import React from 'react';
import styled from 'styled-components';

import { fonts } from '../../util/colors';
import { Comment, InnerComment } from '../Styled/Text'
import { tablet } from '../../util/screens';

const ProjectContainer = styled('div')`
    margin-right: 35px;
    margin-top: 35px;
    width: 45%;

    ${tablet} {
        width: 100%; 
    }

    .project_name {
        font-size: 1.7rem;
    }

    .repositories {
        display: flex;

        ${tablet} {
            flex-direction: column;
        }
    }

    .link {
        color: ${fonts.blue};
        border-right: 2px solid ${fonts.faded};

        margin-left: 15px;

        padding-right: 15px;

        ${tablet} {
            &:first-of-type {
                margin-left: 0px;
            }
        }

        &:last-child {
            border-right: none;
        }

        &:hover {
            text-decoration: underline;
        }
    }

    div {
        margin-bottom: 25px;
    }

`;

const Project = props => {
    return (
        <ProjectContainer>
            <Comment>{'/*'}</Comment>
            <InnerComment>
                <div className='project_name'>{props.name}</div>
                <div className='job_title'>{props.title}</div>
                <div className='repositories'>
                    <span>Repositories:</span>
                    <div className='repo_links'>
                        {
                            props.links.map(link => (
                                <a key={link.location} className='link' href={link.location} target='_blank' rel='noopener noreferrer'>{link.name}</a>
                            ))
                        }
                    </div>
                </div>

                <div >Stack: {props.stack.join(', ')}</div>
                <div>{!!props.APIs.length && `APIs: ${props.APIs.join(', ')}`}</div>
                <div>Role: {props.role}</div>
                <div>Description: {props.description}</div>
            </InnerComment>
            <Comment>{'*/'}</Comment>
        </ProjectContainer> 
    );
}

export default Project;