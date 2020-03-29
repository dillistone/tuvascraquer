import React from "react"
import styled from "styled-components"
import { differenceInDays } from "date-fns"

import { RESULTS, THEMES, START_DATE } from "src/helpers/constants"
import { isBrowser } from "src/helpers/window"
import NextButton from "./NextButton"

const Title = styled.h1``
const Subtitle = styled.h1`
  color: ${THEMES.red.color};
  margin-bottom: 50px;
`
const Bottom = styled.div`
  svg {
    display: block;
    margin: 50px auto;
    height: 80px;
    :first-of-type {
      height: 90px;
      vertical-align: -3px;
    }
    :last-of-type {
      height: 110px;
    }
  }
  @media (min-width: 900px) {
    svg {
      display: inline;
    }
  }
`

interface Props {
  start: () => void
}

const Home: React.FC<Props> = ({ start }) => {
  return (
    <>
      <Title>Confinement{isBrowser() ? ` J+${differenceInDays(new Date(), START_DATE)}` : ""}</Title>
      <Subtitle>Quand vas-tu craquer ?</Subtitle>
      <NextButton onClick={start}>
        Démarrer
        <span />
      </NextButton>
      <Bottom>
        {RESULTS.map(({ Character }, index) => (
          <Character key={index} />
        ))}
      </Bottom>
    </>
  )
}

export default Home
