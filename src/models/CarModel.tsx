export class CarModel {
    #id: number
    #carName: string
    #value: number
    #year: number
    #inclusion: string
    #picture: string

    constructor(id : number, carName: string, value: number, year: number, inclusion: string, picture: string) {
        this.#id = id
        this.#carName = carName
        this.#value = value
        this.#year = year
        this.#inclusion = inclusion
        this.#picture = picture
    
    }

    get id () {
        return this.#id
    }

    get carName() {
        return this.#carName
    }

    get value () {
        return this.#value
    }

    get year () {
        return this.#year
    }

    get inclusion () {
        return this.#inclusion
    }
    get picture () {
        return this.#picture
    }
}