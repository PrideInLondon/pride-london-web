import { Dispatch, SetStateAction } from 'react'

export interface SubMenuProps {
  setNavOpen?: Dispatch<SetStateAction<boolean>>
  setNavItemOpen: Dispatch<{ type: string }>
  isOpen: boolean
  item: SubMenuItem
  backgroundColor: string
}

export interface SubMenuSection {
  heading: string
  links: SubMenuLink[]
}

interface SubMenuLink {
  title: string
  url: string
}

export interface SubMenuItem {
  submenu?: SubMenuSection[]
  title: string
  url: string
  desc?: string
  id: string
}
