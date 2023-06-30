class GetElement {
  static oneUnitClass = 'one-unit'
  static addUnitClass = 'add-unit'
  static moveBarClass = 'moveBar'
  static containerClass = 'container'
  static selectedClass = 'selected-unit'

  static getUnits() {
    return [...document.querySelectorAll('.' + GetElement.oneUnitClass)].filter(el => !el.classList.contains(GetElement.addUnitClass))
  }

  static getAddUnit() {
    return document.querySelector('.' + GetElement.addUnitClass)
  }

  static getBar() {
    return document.querySelector('.' + GetElement.moveBarClass)
  }

  static getContainer() {
    return document.querySelector('.' + GetElement.containerClass)
  }

  static getSelectedUnit() {
    return document.querySelector('.' + GetElement.selectedClass)
  }

}

export { GetElement }