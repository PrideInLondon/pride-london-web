export type InputProps = {
  type: string
  label: string
  id: string
  required?: boolean
  onChange?: ((value: string) => void) | null
  className?: string
}

export type LabelProps = {
  empty: boolean
  focused: boolean
}
