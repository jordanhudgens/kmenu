import { useCallback, useContext } from 'react'
import { MenuContext } from '../MenuProvider'
import { UseKmenuReturnType } from '../types'

/**
 * Utilities for using kmenu.
 *
 * @returns {string} The current input in the active command menu
 * @returns {Dispatch<SetStateAction<string>>} The setter function for setting the text in the command menu
 * @returns {number} The index of the currently active command menu
 * @returns {Dispatch<SetStateAction<number>>} The setter function for setting the open menu index
 * @returns {() => void} A function for toggling the state of the palette
 */
export const useKmenu = (): UseKmenuReturnType => {
  const context = useContext(MenuContext)

  if (!context)
    throw new Error('useKmenu must be called inside the MenuProvider')

  const toggle = useCallback(() => {
    context.setOpen((open: number) => (open === 0 ? 1 : 0))
  }, [])

  return [
    context.query,
    context.setQuery,
    context.open,
    context.setOpen,
    toggle
  ]
}
