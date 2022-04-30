import React from 'react'
import { Element } from '../types/element'

export interface StateReducer {
    items: Element[]
}

export type ActionReducer =
    | { type: 'set'; payload: { items: Element[] } }
    | { type: 'add'; payload: { item: Element } }
    | { type: 'remove'; payload: { item: Element } }
    | { type: 'update'; payload: { item: Element } }

export const initState: StateReducer = {
  items: [
    { id: 1, description: 'fare la spesa', isDone: false },
    { id: 2, description: 'andare al barbiere', isDone: true }
  ]
}

export const reducer: React.Reducer<StateReducer, ActionReducer> = (
  state,
  action
) => {
  switch (action.type) {
    case 'set':
      return {
        items: action.payload.items
      }
    case 'add':
      return {
        items: [...state.items, action.payload.item]
      }
    case 'remove':
      return {
        items: state.items.filter((i) => i.id !== action.payload.item.id)
      }
    case 'update': {
      const index = state.items.indexOf(action.payload.item)
      if (index >= 0) {
        state.items[index] = action.payload.item
      }
      return {
        ...state
      }
    }
    default:
      return {
        ...state
      }
  }
}
