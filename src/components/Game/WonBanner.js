import React from 'react'
import Banner from './Banner'

const WonBanner = ({numOfGuesses}) => {
  return (
    <Banner status="happy">
      <p>
        <strong>congratulations</strong>Got it in{" "}
        <strong>{numOfGuesses} guesses</strong>
      </p>
    </Banner>
  );
}

export default WonBanner