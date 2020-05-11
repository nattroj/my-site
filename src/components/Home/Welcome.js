import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { fonts } from '../../util/colors';

const ConsoleLogContainer = styled('div')`
  padding-top: 40vh;
`

const ConsoleLog = styled('span')`
  @keyframes blinkingBeam {
      0% {
          border-right: 0px solid ${fonts.light};
      }
      50% {
          border-right: 0px solid ${fonts.light};
      }
      100% {
          border-right: 1px solid ${fonts.light};
      }
  }

  animation-name: blinkingBeam;
  animation-iteration-count: infinite;
  animation-duration: 1s;
  font-size: 2rem;
  font-weight: bold;

  .function {
    color: ${fonts.red};
  }

  .method {
    color: ${fonts.purple};
  }

  .spec_char {
    color: ${fonts.light};
  }

  .string {
    color: ${fonts.green};
    word-wrap: break-word;
  }
`


const WelcomeMessage = () => {
	const consoleLogMessage = `console.log("Hello world! I'm Nattajohn, a full stack developer.");`
  const [message, setMessage] = useState('');
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    if (messageIndex < consoleLogMessage.length) {
      setTimeout(() => {
        setMessage(m => m + consoleLogMessage[messageIndex]);
        setMessageIndex(messageIndex + 1);
      }, 70);
    } else {
      console.log("Hello world! I'm Nattajohn, a full stack developer.");
    }
  }, [messageIndex, setMessage, consoleLogMessage])


  return (
    <ConsoleLogContainer>
      <ConsoleLog>
        <span className='function'>{message.slice(0,7)}</span>
        <span className='spec_char'>{message.slice(7,8)}</span>
        <span className='method'>{message.slice(8,11)}</span>
        <span className='spec_char'>{message.slice(11,12)}</span>
        <span className='string'>{message.slice(12,65)}</span>
        <span className='spec_char'>{message.slice(65,67)}</span>
      </ConsoleLog>
    </ConsoleLogContainer>
  );
}

export default WelcomeMessage;