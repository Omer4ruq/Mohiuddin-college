import districts from "../data/bd-districts.json"
import divisions from "../data/bd-divisions.json"
import upzillas from "../data/bd-upazilas.json"

export function getUpzillaName(upzillaId) {
   const upzilla = upzillas?.upazilas?.find(upzilla => upzilla.id === upzillaId)
   return upzilla?.bn_name
}

export function getDistrictName(districtId) {
   const district = districts?.districts?.find(district => district.id === districtId)
   return district?.bn_name
}

export function getDivisionName(divisionId) {
   const division = divisions?.divisions?.find(division => division.id === divisionId)
   return division?.bn_name
}