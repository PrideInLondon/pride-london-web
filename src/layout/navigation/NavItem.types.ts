import { Dispatch, SetStateAction } from 'react'
import { SubMenuSection } from './SubMenu.types'

export interface NavItemProps {
  backgroundColor: string
  setNavOpen?: Dispatch<SetStateAction<boolean>>
  item?: {
    submenu?: SubMenuSection[]
    title: string
    url: string
    desc?: string
    id: string
  }
}
