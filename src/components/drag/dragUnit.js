import { GetElement } from "../utils/getElement";
import { DragBasic } from "./dragBasic";
import { eventEmitter } from "../utils/event";

class DragUnit extends DragBasic {

  constructor(unit) {
    // super 在有变量的时候，必须要上来就要用
    super(unit, unit)

    this.unit = unit

    // 保存原始的过渡效果
    this.transition = this.unit.style.transition

    // 保存我们的层级
    this.zIndex = this.unit.style.zIndex

    this.run()
  }

  run() {
    console.log('DragUnit');
    super.run()
  }

  _mouseDownOnBody(event) {
    super._mouseDownOnBody(event)

    if (this.moveBarMouseDown) {
      this.unit.style.transition = 'none'
      this.unit.style.zIndex = 999
    }
  }

  _mouseUpOnBody(event) {
    super._mouseUpOnBody(event)

    if (!this.moveBarMouseDown) {
      this.unit.style.transition = this.transition
      this.unit.style.zIndex = this.zIndex
    }
  }
}

// GetElement.getUnits().forEach(unit => {
//   new DragUnit(unit)
// });

eventEmitter.on('createNewUnit', (unitDom) => {
  console.log('createNewUnit');
  new DragUnit(unitDom)
})