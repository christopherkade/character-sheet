import styled from "styled-components"

import Stats from "components/elements/Stats"
import SavingThrows from "components/elements/SavingThrows"
import GeneralInformation from "components/elements/GeneralInformation"
import Traits from "components/elements/Traits"
import Skills from "components/elements/Skills"
import Attacks from "components/elements/Attacks"
import Features from "components/elements/Features"

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 100px repeat(3, 1fr);
    grid-template-rows: repeat(2, minmax(300px, 1fr));
    gap: 1rem;

    grid-template-areas:
        'stats throws general traits' 
        'stats skills attacks features';
`

const CharacterFeatures = styled.article`
    grid-area: features;
`

const Content = ({ stats }) => {
    return (
        <Wrapper>
            <Stats {...stats} />
            <SavingThrows />
            <Skills />
            <GeneralInformation />
            <Attacks />
            <Traits />
            <Features />
        </Wrapper>
    )
}

export default Content