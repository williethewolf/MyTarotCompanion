import ariesSign from '../assets/signs/symbol/aries.svg'
import taurusSign from '../assets/signs/symbol/taurus.svg'
import geminiSign from '../assets/signs/symbol/gemini.svg'
import cancerSign from '../assets/signs/symbol/cancer.svg'
import leoSign from '../assets/signs/symbol/leo.svg'
import virgoSign from '../assets/signs/symbol/virgo.svg'
import libraSign from '../assets/signs/symbol/libra.svg'
import scorpioSign from '../assets/signs/symbol/scorpio.svg'
import sagittariusSign from '../assets/signs/symbol/sagittarius.svg'
import capricornSign from '../assets/signs/symbol/capricorn.svg'
import aquariusSign from '../assets/signs/symbol/aquarius.svg'
import piscesSign from '../assets/signs/symbol/pisces.svg'

const getZodiacImage = (sign) => {
    switch(sign) {
        case 'Aries': return ariesSign;
        case 'Taurus': return taurusSign;
        case 'Gemini': return geminiSign;
        case 'Cancer': return cancerSign;
        case 'Leo': return leoSign;
        case 'Virgo': return virgoSign;
        case 'Libra': return libraSign;
        case 'Scorpio': return scorpioSign;
        case 'Sagittarius': return sagittariusSign;
        case 'Capricorn': return capricornSign;
        case 'Aquarius': return aquariusSign;
        case 'Pisces': return piscesSign;
    }
}

export default getZodiacImage