import Logo from "../components/Logo/index";
import Header from "../components/Header/index";
import Icon from "../components/Icon/index";
import Hero from "../components/Hero/index";
import HeroContainer from "../components/HeroContainer/index";
import Title from "../components/Title/index";
import Paragraph from "../components/Paragraph/index";
import Highlight from "../components/Highlight/index";
import FeatureContainer from "../components/FeatureContainer/index";
import FeatureContent from "../components/FeatureContainer/FeatureContent/index";
import FeatureImage from "../components/FeatureContainer/FeatureImage/index";
import FeatureTitle from "../components/FeatureContainer/FeatureTitle/index";
import FeatureText from "../components/FeatureContainer/FeatureText/index";
import MiddleContainer from "../components/MiddleContainer";

export default function Home() {
  return (
    <>
      <Header>
        <Logo img="./assets/logo.svg" />
      </Header>
      <Hero>
        <HeroContainer>
          <Title>
            Get paid for the work you <Highlight>love </Highlight>
            to do.
          </Title>
          <Paragraph>
            The 9-5 grind is so last century. We believe in living life on your
            own terms. Whether you’re looking to escape the rat race or set up a
            side hustle, we’ve got you covered.
          </Paragraph>
          <Icon img="./assets/icon-scroll.svg" />
        </HeroContainer>
      </Hero>
      <FeatureContainer>
        <FeatureImage img="/assets/illustration-passions.svg" />
        <FeatureContent>
          <FeatureTitle>Indulge your passions</FeatureTitle>
          <FeatureText>
            Your passions shouldn't be just for the weekend. Earn a living doing
            what you love.
          </FeatureText>
        </FeatureContent>
      </FeatureContainer>
      <FeatureContainer>
        <FeatureImage img="/assets/illustration-financial-freedom.svg" />
        <FeatureContent>
          <FeatureTitle>Gain financial freedom</FeatureTitle>
          <FeatureText>
            Start making money work for you. There’s nothing quite like earning
            while you sleep.
          </FeatureText>
        </FeatureContent>
      </FeatureContainer>
      <FeatureContainer>
        <FeatureImage img="/assets/illustration-lifestyle.svg" />
        <FeatureContent>
          <FeatureTitle>Choose your lifestyle</FeatureTitle>
          <FeatureText>
            Own your daily schedule. Fancy a lie-in? Go for it! Take charge of
            your week.
          </FeatureText>
        </FeatureContent>
      </FeatureContainer>
      <FeatureContainer>
        <FeatureImage img="/assets/illustration-work-anywhere.svg" />
        <FeatureContent>
          <FeatureTitle>Work from anywhere</FeatureTitle>
          <FeatureText>
            Selling online means not being pinned down. Want to work AND travel?
            Go for it!
          </FeatureText>
        </FeatureContent>
      </FeatureContainer>
    </>
  );
}
