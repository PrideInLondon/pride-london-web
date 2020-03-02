import { useMemo } from 'react'
import { space, layout } from 'styled-system'
import { IndexSignature, pick, reject } from '../utils/iteration-utils'
/**
 * Split out styled-system's space/layout props
 *
 * @param props - an object of properties
 * @returns {object[]} - an object of styled-system's space/layout props, and an object of the remaining props.
 */
export const useSpaceLayoutProps = (props: IndexSignature) =>
  useMemo(() => {
    const keys = [...(space.propNames || []), ...(layout.propNames || [])]
    const pickedProps = pick(props, keys)
    const rejectedProps = reject(props, keys)

    return [pickedProps, rejectedProps]
  }, [props])
