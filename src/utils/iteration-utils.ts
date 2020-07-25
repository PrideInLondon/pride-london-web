export interface IndexSignature {
  [key: string]: any
}

/**
 * Pick out matching keys of object
 *
 * @param obj - object of properties
 * @param keys - array of keys to pick out of the object
 * @returns {object} - an object of matching keys only
 */
export function pick(obj: IndexSignature, keys: string[]): IndexSignature {
  return keys
    .map(k => (k in obj ? { [k]: obj[k] } : {}))
    .reduce((res, o) => Object.assign(res, o), {})
}

/**
 * Filters matching keys out of object
 *
 * @param obj - object of properties
 * @param keys - array of keys to pick out of the object
 * @returns {object} - an object without matching keys
 */
export function reject(obj: IndexSignature, keys: string[]): IndexSignature {
  const vkeys = Object.keys(obj).filter(k => !keys.includes(k))

  return pick(obj, vkeys)
}

export const shuffle = <T>(array: T[]): T[] =>
  array.sort(() => Math.random() - 0.5)
