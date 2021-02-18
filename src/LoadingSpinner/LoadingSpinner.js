import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const FallbackContainer = styled.div`
    position: fixed;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: 30%;
  `

const LoadingSpinner = () => (
    <FallbackContainer>
    <Loader
      type="MutatingDots"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={500}
    />
    </FallbackContainer>
  )



export default LoadingSpinner;
