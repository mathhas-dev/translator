import { observable } from 'mobx'
import * as modules from 'modulos'

export default observable({
    get modulos() {
        return ({ ...modules })
    }
})