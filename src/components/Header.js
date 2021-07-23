import styled from "styled-components"

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 15%;
`

const NameWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40%;
    height: 100%;
`

const StyledName = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50%;
    border:solid 2px #41403E;
    box-shadow: 20px 38px 34px -26px hsla(0,0%,0%,.2);
    border-radius: 220px 27px 225px 25px/25px 225px 15px 255px;
    font-size: 2rem;
`

const InformationWrapper = styled.div`
    display: grid;
    grid-template-areas:
        "class race"
        "alignment exp";
    grid-template-columns: 50%;
    width: 60%;
    height: 100%;
    background-color: white;

    border:solid 2px #41403E;
    box-shadow: 20px 38px 34px -26px hsla(0,0%,0%,.2);
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
`

const StyledBox = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 8px;
`

const StyledText = styled.span`
    border-bottom: 1px dotted black;
    font-size: 1.5rem;
`

const StyledLabel = styled.label`
    font-size: 0.6rem;
`

const Header = ({ name, _class, level, race, alignment, exp }) => {
    return (
        <HeaderWrapper>
            <NameWrapper>
                <StyledName className="handwritten">
                    {name}
                </StyledName>

                <StyledLabel>
                    CHARACTER NAME
                </StyledLabel>
            </NameWrapper>

            <InformationWrapper>
                <StyledBox className="class">
                    <StyledText className="handwritten">
                        Level {level} {_class}
                    </StyledText>
                    <StyledLabel>
                        CLASS AND LEVEL
                    </StyledLabel>
                </StyledBox>
                <StyledBox className="race">
                    <StyledText className="handwritten">
                        {race}
                    </StyledText>
                    <StyledLabel>
                        RACE
                    </StyledLabel>
                </StyledBox>
                <StyledBox className="alignment">
                    <StyledText className="handwritten">
                        {alignment}
                    </StyledText>
                    <StyledLabel>
                        ALIGNMENT
                    </StyledLabel>
                </StyledBox>
                <StyledBox className="exp">
                    <StyledText className="handwritten">
                        {exp}
                    </StyledText>
                    <StyledLabel>
                        EXPERIENCE POINTS
                    </StyledLabel>
                </StyledBox>
            </InformationWrapper>
        </HeaderWrapper >
    )
}

export default Header;