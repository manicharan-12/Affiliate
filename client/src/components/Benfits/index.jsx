import {
  BenefitsContainer,
  Section1,
  Section2,
  CardContainer,
  Cards,
  Heading,
  Paragraph,
  FinalSection,
  CircuitSection,
} from "./styledComponents";

import commission from "../../assets/commission1.svg";
import tracking from "../../assets/Tracking.svg";
import gradient from "../../assets/gradient.svg";
import circuit from "../../assets/circuit.svg";

const Benefits = () => {
  return (
    <BenefitsContainer>
      <Section1>
        <h2 style={{ lineHeight: "40px", fontSize: "32px" }}>
          What are the benefits of the affiliate program?
        </h2>
      </Section1>
      <Section2>
        <CardContainer>
          <Cards>
            <img src={commission} alt="Celebrate" />
            <Heading>Commissions</Heading>
            <Paragraph>
              Get competitive commission on any purchase made with your
              affiliate code.
            </Paragraph>
          </Cards>
          <Cards>
            <img src={tracking} alt="tracking" />
            <Heading>Tracking Dashboard</Heading>
            <Paragraph>
              Track clicks and purchases made with your affiliate code in real
              time.
            </Paragraph>
          </Cards>
          <Cards>
            <img src={tracking} alt="tracking" />
            <Heading>Dedicated Account Manager</Heading>
            <Paragraph>
              Get instant help with your integration and to answer any
              questions.
            </Paragraph>
          </Cards>
          <Cards>
            <img src={tracking} alt="tracking" />
            <Heading>Monthly Newsletter</Heading>
            <Paragraph>
              Learn about special promotions, deals and great courses to
              feature.
            </Paragraph>
          </Cards>
          <Cards>
            <img src={tracking} alt="tracking" />
            <Heading>Advertising Assets</Heading>
            <Paragraph>
              Use our professionally designed ad banners in standard IAB sizes.
            </Paragraph>
          </Cards>
          <Cards>
            <img src={tracking} alt="tracking" />
            <Heading>30 Day Cookie</Heading>
            <Paragraph>
              Get credit for any valid purchases made within 30 days of the
              initial referral.
            </Paragraph>
          </Cards>
        </CardContainer>
      </Section2>
      <CircuitSection>
        <img src={circuit} alt="circuit" style={{ width: "80%" }} />
      </CircuitSection>
      <FinalSection>
        <img src={gradient} alt="gradient" />
      </FinalSection>
    </BenefitsContainer>
  );
};

export default Benefits;
