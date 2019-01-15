import Api from './Api'
// import json from '../Tests/waste.json'

export const get = async () => (await Api.get(`/swm_waste_wizard_APR?limit=1000`)).data