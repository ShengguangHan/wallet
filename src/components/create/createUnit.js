import { GetElement } from "../utils/getElement";
import { eventEmitter } from "../utils/event";

export class CreateUnit {
  constructor(info = {}) {
    this.info = info
    this.init()
    this.create()
  }

  init() {
    this.info.currency = this.info.currency || 'BTC'
    this.info.num = this.info.num || 69
    this.info.symbol = this.info.symbol || '%'
  }

  create() {
    this.unitDom = document.createElement('div')
    this.unitDom.classList.add(GetElement.oneUnitClass)
    this.unitDom.innerHTML = `
      <span class="currency">${this.info.currency}</span>
      <div>
        <span class="num">${this.info.num}</span>
        <span class="symbol">${this.info.symbol}</span>
      </div>
    `

    GetElement.getAddUnit().insertAdjacentElement('beforebegin', this.unitDom)

    eventEmitter.emit('createNewUnit', this.unitDom)
  }
}