import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Section } from '../Styled/Containers';
import { SectionTitle } from '../Styled/Titles';
import { Comment } from '../Styled/Text';
import { fonts } from '../../util/colors';

const ContactTextContainer = styled('address')`
    margin-top: 15vh;
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
    }

    div {
        margin-bottom: 35px;
    }

    @media screen and (max-width: 800px) {
        font-size: 1rem;
    }
`

const Instructions = styled('span')`
    color: ${fonts.organge};
`

const ContactText = styled('span')`
    &:hover {
        cursor: pointer;
    }
`

const Snackbar = styled('div')`
    min-width: 20vw;
    background-color: #333;
    color: #fff;
    text-align: center;
    border-radius: 2px;
    padding: 20px;
    position: fixed;
    z-index: 1;
    left: 95%;
    transform: translateX(-100%);
    bottom: 2vh;
    font-size: 1rem;
    line-height: 1.5rem;

    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
    animation: fadein 0.5s, fadeout 0.5s 2.5s;

    @-webkit-keyframes fadein {
        from {bottom: 0; opacity: 0;} 
        to {bottom: 2vh; opacity: 1;}
    }

    @keyframes fadein {
        from {bottom: 0; opacity: 0;}
        to {bottom: 2vh; opacity: 1;}
    }

    @-webkit-keyframes fadeout {
        from {bottom: 2vh; opacity: 1;} 
        to {bottom: 0; opacity: 0;}
    }

    @keyframes fadeout {
        from {bottom: 2vh; opacity: 1;}
        to {bottom: 0; opacity: 0;}
    }
`

const Contact = () => {
    const [email] = useState('n.rojanasupya@gmail.com');
    const [phone] = useState('562.316.9560');
    const [showToast ,setShowToast] = useState(false);
    const [toastText, setToastText] = useState('');

    const copyText = (value) => {
        window.navigator.clipboard.writeText(value);
        setShowToast(true);
        setToastText(`${value} copied to the clipboard.`);
    }

    useEffect(() => {
        if (showToast) {
            setTimeout(() => setShowToast(false), 2500)
        }
    }, [showToast, setShowToast]);

    return (
        <Section id='contact'>
            <SectionTitle>Contact</SectionTitle>
            <Comment>{"// Don't you hate when you click an email address and it takes 3 years to launch the wrong mail client?"}</Comment>
            <br />
            <Comment>
                {"// Same... None of that happening here! "} 
                <Instructions>You can click on the phone number to call me, or click on the email to copy it to your clipboard</Instructions>
                .
            </Comment>
            <ContactTextContainer>
                <div>
                    <span className='const'>const&nbsp;</span>
                    <span className='var_name'>firstName&nbsp;</span>
                    <span className='special_char'>=&nbsp;</span>
                    <span className='string'>"Nattajohn"</span>
                    <span className='special_char'>;</span>
                </div>
                <div>
                    <span className='const'>const&nbsp;</span>
                    <span className='var_name'>lastName&nbsp;</span>
                    <span className='special_char'>=&nbsp;</span>
                    <span className='string'>"Rojanasupya"</span>
                    <span className='special_char'>;</span>
                </div>
                <div>
                    <span className='const'>const&nbsp;</span>
                    <span className='var_name'>location&nbsp;</span>
                    <span className='special_char'>=&nbsp;</span>
                    <span className='string'>"Lakewood, CA"</span>
                    <span className='special_char'>;</span>
                </div>
                <div>
                    <span className='const'>const&nbsp;</span>
                    <span className='var_name'>email&nbsp;</span>
                    <span className='special_char'>=&nbsp;</span>
                    <ContactText className='string' onClick={() => copyText(email)}>"{email}"</ContactText>
                    <span className='special_char'>;</span>
                </div>
                <div>
                    <span className='const'>const&nbsp;</span>
                    <span className='var_name'>phone&nbsp;</span>
                    <span className='special_char'>=&nbsp;</span>
                    <a href='tel:5623169560' className='string' onClick={() => copyText(phone)}>"{phone}"</a>
                    <span className='special_char'>;</span>
                </div>
                {showToast && <Snackbar>{toastText}</Snackbar>}
            </ContactTextContainer>
        </Section>
    )
}

export default Contact;