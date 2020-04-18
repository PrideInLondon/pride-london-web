declare module 'uuid-encoder' {
  interface UuidEncoderInstance {
    encode(arg: string): string
    decode(arg: string): string
  }

  interface UuidEncoderClass {
    new (arg: string): UuidEncoderInstance
  }

  declare const UuidEncoder: UuidEncoderClass
  // eslint-disable-next-line import/no-default-export
  export default UuidEncoder
}
