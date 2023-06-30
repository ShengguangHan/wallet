import { GetElement } from "../utils/getElement";
import { DragBasic } from "./dragBasic";

class DragContainer extends DragBasic {
  static self = null
  constructor(dargBar, moveContainer) {
    // super 在有变量的时候，必须要上来就要用
    super(dargBar, moveContainer)

    if (DragContainer.self) {
      return
    }

    DragBasic.self = this

    this.run()

  }

  run() {
    console.log('DragContainer');
    super.run()
  }
}

new DragContainer(GetElement.getBar(), GetElement.getContainer())