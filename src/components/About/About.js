import React from 'react';
import styled from 'styled-components';

import { StyledSrollLink } from '../Styled/Link';
import { Section } from '../Styled/Containers';
import { SectionTitle } from '../Styled/Titles';
import { Comment, InnerComment } from '../Styled/Text';
import { fonts } from '../../util/colors';
import { tablet } from '../../util/screens';


const AboutContainer = styled('div')`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .link {
        color: ${fonts.blue};

        &:hover {
            text-decoration: underline;
        }
    }

    ${tablet} {
        flex-direction: column-reverse;
        flex-wrap: wrap;
    }

`

const ImageContainer = styled('div')`
    height: 30%;
    width: 30%;
    margin-left: 10vw;

    img {
        border: 5px solid ${fonts.purple};
        border-radius: 100%;
        height: 100%;
        width: 100%;
    }

    ${tablet} {
        margin-left: 0;;
        height: 50%;
        width: 50%;
    }

`

const AboutText = styled('div')`
    width: 50%;

    ${tablet} {
        width: 100%;
    }
`

const GetInTouchLink = styled(StyledSrollLink)`
    color: ${fonts.blue};

    &:hover {
        text-decoration: underline;
    }
`;

const About = () => {

    return (
        <Section id='about'>
            <SectionTitle>About</SectionTitle>
            <AboutContainer>
                <AboutText>
                    <Comment>{'/*'}</Comment>
                    <InnerComment>
                        Hiya! You can call me Nattajohn, Nate, or John. Take your pick.
                        You can blame my Thai descent for my really long name (I can also speak the language).
                        In my free time, you'll typically find me enjoying some kind of strategy game or watching anime.
                    </InnerComment>
                    <InnerComment>
                        I've been coding professionally (mostly in Python and Javascript) for around 2 years, 
                        but I've been honing my problem solving skills my whole life (thank you, Detective Conan and Professor Layton!).
                        I'm currently looking for my next opportunity as a software developer; if I seem like a match for your needs, take a peek at my&nbsp;
                        <a href="/assets/nattajohn_rojanasupya_resume.pdf" className='link' target='_blank' rel='noopener noreferre'>resume</a>
                        .
                    </InnerComment>
                    <InnerComment>
                        Would you like to&nbsp;
                        <GetInTouchLink
                            to='contact'
                            activeClass='active'
                            spy={true} 
                            smooth={true}
                        >
                            get in touch
                        </GetInTouchLink>
                        ? Please feel free to reach out!
                    </InnerComment>
                    <Comment>{'*/'}</Comment>
                </AboutText>
                <ImageContainer>
                    <img src='/images/self.jfif' alt='Nattajohn Rojanasupya' title='Nattajohn Rojanasupya' />
                </ImageContainer>
            </AboutContainer>
        </Section>
    )
}

export default About;