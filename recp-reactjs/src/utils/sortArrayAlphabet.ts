import { Country } from "../pages/countries"

export function sortArrayAlphabet(arr: Country[]) {
  const sortedArray = arr.sort((a, b) => a.name.localeCompare(b.name))

  return sortedArray
}
