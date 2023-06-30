export class DragBasic {
  constructor(dragBar, moveContainer) {
    this.bar = dragBar
    this.container = moveContainer
    // 初始化数据
    this.init()
    // 运行
    // this.run()
  }

  init = () => {
    console.log('init');
    // 鼠标按下时的位置
    this.mouseDownPosition = { x: 0, y: 0 }

    // 计算 X Y 偏移的距离的
    this.moveDistance = { x: 0, y: 0 }

    // 保存上一次移动的偏移量
    this.originalMoveDistance = { x: 0, y: 0 }

    // moveBar 是否被按下
    this.moveBarMouseDown = false
  }

  run() {
    console.log('run');
    // 功能挂载区域
    this.mousedown()
    this.moveBar()
    this.mousemove()
    this.mouseup()
  }

  mousedown = () => {
    document.body.addEventListener('mousedown', this._mouseDownOnBody.bind(this))
  }

  mouseup = () => {
    document.body.addEventListener('mouseup', this._mouseUpOnBody.bind(this))
  }

  mousemove = () => {
    document.body.addEventListener('mousemove', this._mouseMoveOnBody.bind(this))
  }

  moveBar = () => {
    this.bar.addEventListener('mousedown', () => {
      this.moveBarMouseDown = true
      console.log(`mousedown`);
    })
    this.bar.addEventListener('mouseup', () => {
      this.moveBarMouseDown = false
      console.log(`mouseup`);
    })
  }

  _mouseDownOnBody(event) {
    console.log('x:', event.clientX);
    console.log('y:', event.clientY);
    this.mouseDownPosition.x = event.clientX
    this.mouseDownPosition.y = event.clientY
  }

  _mouseMoveOnBody(event) {
    if (this.moveBarMouseDown) {
      this.moveDistance.x = event.clientX - this.mouseDownPosition.x + this.originalMoveDistance.x
      this.moveDistance.y = event.clientY - this.mouseDownPosition.y + this.originalMoveDistance.y

      this.container.style.transform = `translate(${this.moveDistance.x}px, ${this.moveDistance.y}px)`
    }
  }

  _mouseUpOnBody(event) {
    this.originalMoveDistance.x = this.moveDistance.x
    this.originalMoveDistance.y = this.moveDistance.y
  }
}