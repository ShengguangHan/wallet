import './click'
import './drag'
import './create'

import data from '/data/db.json'

import { CreateUnit } from './create/createUnit'
import { GetElement } from './utils/getElement'

data.units.forEach(info => {
  new CreateUnit(info)
})

GetElement.getAddUnit().addEventListener('click', () => {
  new CreateUnit()
})