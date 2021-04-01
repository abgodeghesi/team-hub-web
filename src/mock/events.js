import rocketIcon from '../assets/icons/rocket-icon.png'
import tftIcon from '../assets/icons/tft-icon.png'
import leagueIcon from '../assets/icons/lol-icon.png'

const events = [
  {
    title: 'rocket league',
    day: 'quinta-feira 01/04',
    hour: 'a partir das 20:00',
    eventName: '3 vs 3',
    vacancies: 8,
    bgColor: 'rocketBg',
    icon: rocketIcon,
    button: '',
    callToAction: 'https://forms.gle/iTfhAPXnuemooKAZ8',
  },
  {
    title: 'teamfight tactics',
    day: 'sexta-feira 02/04',
    hour: 'a partir das 18:00',
    eventName: 'pontos corridos',
    vacancies: 16,
    bgColor: 'tftBg',
    icon: tftIcon,
    button: 'primary',
    callToAction: 'https://forms.gle/dNUMYswapgrcPL598',
  },
  {
    title: 'league of legends',
    day: 'sábado 03/04',
    hour: 'a partir das 21:00',
    eventName: '5x5 da Zoeira',
    vacancies: 10,
    bgColor: 'leagueBg',
    icon: leagueIcon,
    button: '',
    callToAction: 'https://forms.gle/hxqMxcnjXskwWDaC6',
  }
]

export default events;