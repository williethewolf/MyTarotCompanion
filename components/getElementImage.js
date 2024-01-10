import fireElement from '../assets/elements/fireelement.svg'
import earthElement from '../assets/elements/earthelement.svg'
import airElement from '../assets/elements/airelement.svg'
import waterElement from '../assets/elements/waterelement.svg'

const getElementImage = (element) => {
    switch(element) {
        case 'Fire': return fireElement;
        case 'Earth': return earthElement;
        case 'Air': return airElement;
        case 'Water': return waterElement;
    }
}

export default getElementImage