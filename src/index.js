import _ from 'lodash'
import * as utilities from './utilities'

console.log(utilities.nijou(100), utilities.NAME)

function component() {
    const element = document.createElement('div')
    const array = ['Hello', 'webpack', '!!!!!!']
    element.innerHTML = _.join(array, ' ')
    return element
}

document.body.appendChild(component())
