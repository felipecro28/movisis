import { car } from "../interfaces/car"


export function orderArray (select: string, orderedArray: car[]): car[] {
    select === 'menor-valor' ? orderedArray.sort((car1: car, car2: car) => {
    if (car1.value > car2.value) return 1
    if (car1.value < car2.value) return 0
    return 0
  }) : select === 'maior-valor' ? orderedArray.sort((car1: car, car2: car) => {
    if (car1.value > car2.value) return 0
    if (car1.value < car2.value) return 1
    return 0
  }) : select === 'menos-recente' ? orderedArray.sort((car1: car, car2: car) => {
    if (car1.inclusion > car2.inclusion) return 1
    if (car1.inclusion < car2.inclusion) return 0
    return 0
  }) : select === 'mais-recente' ? orderedArray.sort((car1: car, car2: car) => {
    if (car1.inclusion > car2.inclusion) return 0
    if (car1.inclusion < car2.inclusion) return 1
    return 0
  }) : ''

  return orderedArray
}