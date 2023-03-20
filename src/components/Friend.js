import React from 'react';
import styled, {keyframes} from 'styled-components';


const kf = keyframes`
  50% {
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`

const StyledFriend = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  padding: 8px;
  border-bottom: 2px solid white;
  
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.white}; 

  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${props => props.theme.secondaryColor};
  }

  &::before {
    content: "${props => props.besty ? "❤️" : "😀"}"
  }   

  // &::after {
  //   content: "${props => props.besty ? "❤️" : "😀"}"
  // }   

  button {
    background-color: ${props => props.theme.terciaryColor};
    &:hover {
      transform: scale(1.2);
    }
  }
  // --------- transitions and animations
  transform: scale(2); // start of animation
  opacity: 0; // start of animation
  animation: ${kf} 0.3s ease-in-out forwards;
`

export default function Friend({ info, action }) {
  return (

    <StyledFriend besty={info.id % 2 === 0}>
      {info.name}
      <button onClick={() => action(info.id)}>
        See details
      </button>
    </StyledFriend>
  )
}
