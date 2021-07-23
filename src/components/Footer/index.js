import React from 'react';
import styled from 'styled-components';
import {
  SiDiscord,
  SiYoutube,
  SiTwitch,
  SiInstagram,
  SiGithub,
} from 'react-icons/si';
import { AiFillHeart } from 'react-icons/ai';

const FooterContainer = styled.main`
  display: flex;
  flex-direction: column;
  background-color: #00091a;
  width: 100%;
  padding: 48px 0;
  border-top: 100px red;
`;

const FooterText = styled.h1`
  padding: 0;
  margin: 8px 0;
  font-family: 'Roboto';
  font-size: 0.8rem;
  font-weight: 400;
  color: #f5f5f5;
  text-align: center;
`;
const SocialContainer = styled.section`
  margin: 0 auto;
  padding: 24px 0 0;
  display: flex;
`;
const SocialIcons = styled.div`
  fill: #f5f5f5;
  background-color: #35ff69;
  border-radius: 50%;
  cursor: pointer;
  padding: 8px;
  margin: 0 8px;
`;

const Footer = () => {
  const socialMedia = [
    {
      title: 'discord',
      icon: <SiDiscord size="24" />,
      link: 'https://discord.gg/dfpM4Cj3gb',
    },
    {
      title: 'twitch',
      icon: <SiTwitch size="24" />,
      link: 'https://www.twitch.tv/kevinhocn',
    },
    {
      title: 'youtube',
      icon: <SiYoutube size="24" />,
      link: 'https://www.youtube.com/channel/UCvVgDhL3r2If2CxdnJcaiwQ',
    },
    {
      title: 'instagram',
      icon: <SiInstagram size="24" />,
      link: '',
    },
    {
      title: 'github',
      icon: <SiGithub size="24" />,
      link: 'https://github.com/abgodeghesi/team-hub-web',
    },
  ];
  return (
    <FooterContainer>
      <FooterText>
        Made with <AiFillHeart /> by abgodeghesi
        <FooterText>Encontre o Team Hub nas redes sociais:</FooterText>
      </FooterText>
      <SocialContainer>
        {socialMedia.map(item => (
          <SocialIcons
            alt={item.title}
            onClick={() => {
              window.open(item.link);
            }}
          >
            {item.icon}
          </SocialIcons>
        ))}
      </SocialContainer>
    </FooterContainer>
  );
};

export default Footer;
