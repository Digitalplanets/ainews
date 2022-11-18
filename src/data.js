// mock api for article content
import batonRougeGrad from './assets/baton-rouge-grad.webp'
import newBorn from './assets/new-born.webp'
import rashadAndTroy from './assets/rashad-troy.jpeg'
import playingDominoes from './assets/playing-dominoes.webp'
import iddrisSandu from './assets/iddris-sandu.jpeg'
import nineteen_keys from './assets/19keys.webp'

function capitalizeFirstLetter(title) {
    let capStr = title[0].toLowerCase() + title.slice(1).toLowerCase();
    let capArr = capStr.split(' ');
    let capWords = capArr.map((capArr) => capArr[0].toUpperCase() + capArr.slice(1))
    return capWords.join(' ');
  }

export const articleData = [
    {
        articleId: 1,
        img: iddrisSandu,
        category: 'technology',
        title: capitalizeFirstLetter('Tech Founder Iddris Sandu Launches LNQ Marketplace Where Fashion Accesses The Blockchain'),
        previewText: 'Spatial Labs founder Iddris Sandu explores the possibilities of Web3, immersive technology and the role hip-hop plays in designing the new...'
    },
    {   articleId: 2,
        img: newBorn,
        category: 'health',
        title: capitalizeFirstLetter('black Women At 53% Higher Risk Of death in childbirth than white women.'),
        previewText: 'Researchers examined data from 9.5 million deliveries in hospitals between 2007 and 2018...'
    },
    {   articleId: 3,
        img: nineteen_keys,
        category: 'culture',
        title: capitalizeFirstLetter('19keys is focused on leading by example: "You gotta inspire people by what you do"'),
        previewText: `This year's REVOLT Summit x AT&T was more than just a star-studded event. In fact, panelist 19keys says the event was everything...`
    },
    {
        articleId: 4,
        img: rashadAndTroy,
        category: 'business',
        title: `“Earn Your Leisure” sold out its inaugural Invest Fest Euro in London`,
        previewText: 'The “Earn Your Leisure” international launch was successful as the duo Rashad Bilal and Troy Milling held their sold-out two-day Invest Fest...'
    },
    {   articleId: 5,
        img: batonRougeGrad,
        category: 'education',
        title: capitalizeFirstLetter('This Black Female Engineer Broke through the Double Bind of Racism and Sexism.'),
        previewText: `Yvonne Y. Clark, or Y.Y., taught at Tennessee State University, a historically Black university, for 55 years...`
    },
    {
        articleId: 6,
        img: playingDominoes,
        category: 'occult',
        title: capitalizeFirstLetter('Using Dominoes for Divination and Fortune Telling.'),
        previewText: 'Domino is a simple and convenient tool for divination, one of the easiest ways to learn the future or get the answer to the question...'
    }
]
