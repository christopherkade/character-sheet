import styled from "styled-components"

import Header from "components/Header"
import Content from "components/Content"

const Wrapper = styled.div`
    width: 670px;
    height: 90%;
    background: white;
    padding: 20px;
    max-height: 100%;
`

const Page = ({ config }) => {
    const { name, _class, level, race, alignment, exp, stats } = config;

    return (
        <Wrapper>
            <Header
                name={name}
                _class={_class}
                level={level}
                race={race}
                alignment={alignment}
                exp={exp}
            />

            <Content stats={stats} />
        </Wrapper>
    )
}

export default Page;