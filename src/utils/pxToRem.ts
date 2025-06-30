/**
* Converter pixels para rem
* @param pixels - Numero em pixels para ser convertito
* @returns Valor em rem convertido
*/

export function pxToRem(pixels: number): string {
    return `${pixels/16}rem`
}