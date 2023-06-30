import { GetElement } from "../utils/getElement";
import { eventEmitter } from "../utils/event";

class ClickUnit {
  constructor(targetUnit) {
    this.targetUnit = targetUnit
    this.run()
  }

  run() {
    this.targetUnit.addEventListener('mousedown', this._clickEvent.bind(this))
  }

  _clickEvent(event) {
    const currentSelectUnit = GetElement.getSelectedUnit()
    if (this.targetUnit != currentSelectUnit) {
      currentSelectUnit?.classList.remove(GetElement.selectedClass)
      this.targetUnit?.classList.add(GetElement.selectedClass)
    }
  }
}

eventEmitter.on('createNewUnit', unitDom => {
  new ClickUnit(unitDom)
})