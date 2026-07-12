import roseMediumRed from '../assets/bouquet.jpg'
import roseMediumPink from '../assets/bouquet.jpg'
import roseMediumYellow from '../assets/bouquet.jpg'

import roseLargeRed from '../assets/bouquet.jpg'
import roseLargeMaroon from '../assets/bouquet.jpg'

import sunflowerYellow from '../assets/bouquet.jpg'

import tulipPink from '../assets/bouquet.jpg'
import tulipPurple from '../assets/bouquet.jpg'

import daisyWhite from '../assets/bouquet.jpg'
import daisyCream from '../assets/bouquet.jpg'

import lavenderPurple from '../assets/bouquet.jpg'

const flowersData = [
  {
    id: 'rose-medium',
    name: 'Medium rose',
    price: 199,
    description: 'Not too big, not too small — the classic crochet rose.',
    colorOptions: [
      { id: 'red', name: 'Red', hex: '#B7264F', image: roseMediumRed },
      { id: 'pink', name: 'Pink', hex: '#ED93B1', image: roseMediumPink },
      { id: 'yellow', name: 'Yellow', hex: '#FAC775', image: roseMediumYellow }
    ]
  },
  {
    id: 'rose-large',
    name: 'Large rose',
    price: 250,
    description: 'A bold, statement-piece rose in full bloom.',
    colorOptions: [
      { id: 'red', name: 'Red', hex: '#D4302F', image: roseLargeRed },
      { id: 'maroon', name: 'Maroon', hex: '#7B1E1E', image: roseLargeMaroon }
    ]
  },
  {
    id: 'sunflower',
    name: 'Sunflower',
    price: 450,
    description: '15cm wide, cheerful and never wilts.',
    colorOptions: [
      { id: 'yellow', name: 'Yellow', hex: '#EF9F27', image: sunflowerYellow }
    ]
  },
  {
    id: 'tulip',
    name: 'Tulip',
    price: 175,
    description: 'Soft petals in a gentle cup shape.',
    colorOptions: [
      { id: 'pink', name: 'Pink', hex: '#D4537E', image: tulipPink },
      { id: 'purple', name: 'Purple', hex: '#7F77DD', image: tulipPurple }
    ]
  },
  {
    id: 'daisy',
    name: 'Daisy',
    price: 120,
    description: 'Simple, delicate, and endlessly stackable.',
    colorOptions: [
      { id: 'white', name: 'White', hex: '#FAF3E8', image: daisyWhite },
      { id: 'cream', name: 'Cream', hex: '#FAEEDA', image: daisyCream }
    ]
  },
  {
    id: 'lavender',
    name: 'Lavender sprig',
    price: 150,
    description: 'A calming purple accent stem.',
    colorOptions: [
      { id: 'purple', name: 'Purple', hex: '#7F77DD', image: lavenderPurple }
    ]
  }
]

export const WRAPPING_FEE = 90

export default flowersData