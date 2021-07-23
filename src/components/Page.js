import styled from "styled-components"

import Header from "components/Header"

const Wrapper = styled.div`
    width: 670px;
    height: 90%;
    background: white;
    padding: 20px;
`

const Page = ({ config }) => {
    const { name, _class, level, race, alignment, exp } = config;

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
        </Wrapper>
    )
}

export default Page;