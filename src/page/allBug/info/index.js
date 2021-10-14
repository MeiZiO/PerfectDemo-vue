import viewBugs from './viewBugs'
import nodeBugs from './nodeBugs'
import frameBugs from './frameBugs'
import jsBugs from './jsBugs'
import elemntBugs from './elemntBugs'
import configuration from './configuration'

let bugInfo = [
    ...frameBugs,
    ...viewBugs,
    ...nodeBugs,
    ...jsBugs,
    ...elemntBugs,
    ...configuration,
]
export default bugInfo