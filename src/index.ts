import { API } from 'homebridge'

import { ACCESSORY_NAME } from './settings'
import { LedAccessory } from './ledAccessory'

export = (api: API) => {
	api.registerAccessory(ACCESSORY_NAME, LedAccessory)
}