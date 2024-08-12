import { CardContainer, ContainerBox, GetStartedContainer,Image } from "./styledComponents"
import signUp from '../../assets/signup.svg'
import promote from '../../assets/promote.svg'
import group from '../../assets/Drive Traffic.svg'
import earn from '../../assets/Earn.svg'

const GetStarted=()=>{
return(
    <GetStartedContainer>
        <div>
            <h2>How to get started</h2>
        </div>
        <ContainerBox>
        <CardContainer>
            <Image src={signUp} alt="signUp"/>
            <h2 style={{fontSize:"24px", lineHeight:"28px",margin:"12px 0 0", color:"#424242"}}>SignUp</h2>
            <p style={{fontSize:"14px", fontWeight:"400",marginTop:"8px", color:"#616161"}}>Join Coding Ninjas affiliate program. Joining is fast, easy, and free</p>
        </CardContainer>
        <CardContainer>
            <Image src={promote} alt="signUp"/>
            <h2 style={{fontSize:"24px", lineHeight:"28px",margin:"12px 0 0", color:"#424242"}}>Promote</h2>
            <p style={{fontSize:"14px", fontWeight:"400",marginTop:"8px", color:"#616161"}}>Choose from our tracked assets (links and banners) or create custom links and implement on your website.</p>
        </CardContainer>
        <CardContainer>
            <Image src={group} alt="signUp"/>
            <h2 style={{fontSize:"24px", lineHeight:"28px",margin:"12px 0 0", color:"#424242"}}>Drive Traffic</h2>
            <p style={{fontSize:"14px", fontWeight:"400",marginTop:"8px", color:"#616161"}}>Incentivize your users to land on Coding Ninjas through contextual placements of banners and links</p>
        </CardContainer>
        <CardContainer>
            <Image src={earn} alt="signUp"/>
            <h2 style={{fontSize:"24px", lineHeight:"28px",margin:"12px 0 0", color:"#424242"}}>Earn</h2>
            <p style={{fontSize:"14px", fontWeight:"400",marginTop:"8px", color:"#616161"}}>Earn competitive commission on eligible purchases that your users make on Coding Ninjas</p>
        </CardContainer>
        </ContainerBox>
    </GetStartedContainer>
)
}

export default GetStarted