import { useMemo } from 'react'
import { IndexSignature, pick, reject } from '../utils/iteration-utils'
/**
 * @param props - an object of properties
 * @returns {object[]} - an object of picked props, and an object of the remaining props.
 */
export const usePickedProps = (props: IndexSignature, keys: string[]) =>
  useMemo(() => {
    const pickedProps = pick(props, keys)
    const rejectedProps = reject(props, keys)

    return [pickedProps, rejectedProps]
  }, [props, keys])
