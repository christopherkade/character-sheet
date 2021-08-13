import styled from "styled-components"

import Stats from "components/elements/Stats"

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 100px repeat(3, 1fr);
    grid-template-rows: repeat(2, minmax(300px, 1fr));
    gap: 1rem;

    grid-template-areas:
        'stats throws general traits' 
        'stats skills attacks features';
`

const SavingThrows = styled.article`
    grid-area: throws;
`

const Skills = styled.article`
    grid-area: skills;
`

const GeneralInformation = styled.article`
    grid-area: general;
`

const Attacks = styled.article`
    grid-area: attacks;
`

const CharacterTraits = styled.article`
    grid-area: traits;
`

const CharacterFeatures = styled.article`
    grid-area: features;
`

const Content = ({ stats }) => {
    return (
        <Wrapper>
            <Stats {...stats} />
            <SavingThrows>Saving Throws</SavingThrows>
            <Skills>Skills</Skills>
            <GeneralInformation>General info</GeneralInformation>
            <Attacks>Attacks</Attacks>
            <CharacterTraits>Traits</CharacterTraits>
            <CharacterFeatures>Right Bottom</CharacterFeatures>
        </Wrapper>
    )
}

export default Content