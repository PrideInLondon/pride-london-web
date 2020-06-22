import React, { useRef } from 'react'
import { ReactTypeformEmbed } from 'react-typeform-embed'
import { TypeformProps, TypeformRef } from './Typeform.types'

export const Typeform: React.FC<TypeformProps> = ({ id, children }) => {
  const typeform = useRef<TypeformRef | null>(null)
  return (
    <>
      <ReactTypeformEmbed
        popup
        autoOpen={false}
        url={`https://prideinlondon.typeform.com/to/${id}`}
        style={{ zIndex: -1 }}
        hideHeaders
        hideFooter
        mode="drawer_left"
        ref={(tf: TypeformRef) => {
          typeform.current = tf
        }}
        autoClose={5}
      />
      {React.cloneElement(children as React.ReactElement<any>, {
        onClick: () =>
          typeform &&
          typeform.current &&
          typeform.current.typeform &&
          typeform.current.typeform.open(),
      })}
    </>
  )
}
