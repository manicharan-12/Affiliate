import { ButtonContainer, HomeContainer, TextContainer } from "./styledComponents"


const Home=()=>{
    return(
        <HomeContainer>
            <TextContainer>
                <h1>Join Our Affiliate Program</h1>
            </TextContainer>
            <TextContainer>
            <p>Help students learn, code and upskill by giving them access to quality coding courses.</p>
            <p>Promote Coding Ninjas courses and earn a competitive commission.</p>
            <ButtonContainer>
            <button>Join For Free</button>
            </ButtonContainer>
            </TextContainer>
        </HomeContainer>
    )
}

export default Home