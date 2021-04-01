import rocketIcon from '../assets/icons/rocket-icon.png'
import tftIcon from '../assets/icons/tft-icon.png'
import leagueIcon from '../assets/icons/lol-icon.png'

const events = [
  {
    title: 'rocket league',
    day: 'Quinta-Feira 01/04',
    hour: 'A partir das 20:00',
    eventName: '3v3',
    vacancies: 8,
    bgColor: 'rocketBg',
    icon: rocketIcon,
    button: '',
    callToAction: 'https://forms.gle/iTfhAPXnuemooKAZ8',
  },
  {
    title: 'tft',
    day: 'Sexta-Feira 02/04',
    hour: 'A partir das 18:00',
    eventName: 'Pontos Corridos',
    vacancies: 16,
    bgColor: 'tftBg',
    icon: tftIcon,
    button: 'primary',
    callToAction: 'https://forms.gle/dNUMYswapgrcPL598',
  },
  {
    title: 'rocket league',
    day: 'Sábado 03/04',
    hour: 'A partir das 21:00',
    eventName: '5x5 da Zoeira',
    vacancies: 10,
    bgColor: 'leagueBg',
    icon: leagueIcon,
    button: '',
    callToAction: 'https://forms.gle/hxqMxcnjXskwWDaC6',
  }
]

export default events;