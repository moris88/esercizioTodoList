import React from 'react'
import { ActionReducer, initState, reducer, StateReducer } from '../hooks/useReducer'

export const Context = React.createContext<{
    state: StateReducer
    dispatch: React.Dispatch<ActionReducer>
}>({
  state: initState,
  dispatch: () => undefined
})

export interface ProviderProps {
    children: React.ReactNode
}

export const Provider: React.FC<ProviderProps> = (props) => {
  const { children } = props
  const [state, dispatch] = React.useReducer(reducer, initState)

  return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
  )
}

export default Provider
