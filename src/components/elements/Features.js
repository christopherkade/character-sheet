import styled from "styled-components"

const Wrapper = styled.article`
    grid-area: features;
    border:solid 2px #41403E;
    box-shadow: 20px 38px 34px -26px hsla(0,0%,0%,.2);
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
`

const Features = () => {
    return (
        <Wrapper>
            Features
        </Wrapper>
    )
}

export default Features