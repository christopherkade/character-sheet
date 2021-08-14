import styled from "styled-components"

const Wrapper = styled.article`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr;
    grid-row: span 2;
    grid-area: stats;
`

const StatBox = styled.div`
    position: relative;
    border:solid 2px #41403E;
    box-shadow: 20px 38px 34px -26px hsla(0,0%,0%,.2);
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    background-color: white;
`

const BonusCircle = styled.div`
    position: absolute;
    bottom: -10px;
    z-index: 2;
    background-color: white;
    width: 50px;
    height: 25px;
    font-size: 1rem;
    text-align: center;
    border:solid 2px #41403E;
    box-shadow: 20px 38px 34px -26px hsla(0,0%,0%,.2);
    border-radius: 100px / 50px;
`

const StatName = styled.h2`
    position: absolute;
    top: -5px;
    font-size: 0.6rem;
`

const calculateModifier = (statValue) => {
    const mod = Math.floor(statValue / 2) - 5;

    return mod > 0 ? `+${mod}` : mod
}

const Stats = ({ str, dex, cons, intel, wis, char }) => {
    const stats = [{
        name: "STRENGTH",
        modifier: calculateModifier(str),
        value: str
    }, {
        name: "DEXTERITY",
        modifier: calculateModifier(dex),
        value: dex
    }, {
        name: "CONSTITUTION",
        modifier: calculateModifier(cons),
        value: cons
    }, {
        name: "INTELLIGENCE",
        modifier: calculateModifier(intel),
        value: intel
    }, {
        name: "WISDOM",
        modifier: calculateModifier(wis),
        value: wis
    }, {
        name: "CHARISMA",
        modifier: calculateModifier(char),
        value: char
    }]

    return (
        <Wrapper>
            {stats.map(({ name, modifier, value }) => {
                return (
                    <StatBox>
                        <StatName>{name})</StatName>
                        {value}
                        <BonusCircle>
                            {modifier}
                        </BonusCircle>
                    </StatBox>
                )
            })}
        </Wrapper>
    )
}

export default Stats