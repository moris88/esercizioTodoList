import React from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'
import { Context } from '../context/useContext'
import { Element } from '../types/element'

export interface InputItemProps {
  className?: string;
}

export type FormControlElement = HTMLInputElement | HTMLTextAreaElement;

const Input: React.FC<InputItemProps> = (props) => {
  const [item, setItem] = React.useState<Element>({
    id: 0,
    description: '',
    isDone: false
  })
  const { state, dispatch } = React.useContext(Context)

  const onClick = () => {
    if (item.description !== '') {
      dispatch({ type: 'add', payload: { item } })
    } else {
      alert('Inserisci una descrizione!')
    }
  }

  const onKeyPress = (e: React.KeyboardEvent<FormControlElement>) => {
    if (e.key === 'Enter') {
      onClick()
    }
  }

  const onChange = (event: React.ChangeEvent<FormControlElement>) => {
    const len: number = state.items.length - 1
    const ultimoId: number = len === -1 ? 1 : state.items[len].id + 1
    const newItem: Element = {
      id: ultimoId,
      description: event.currentTarget.value,
      isDone: false
    }
    setItem(newItem)
  }

  return (
    <InputGroup className={props.className ? props.className : ''}>
      <FormControl
        placeholder="Inserisci descrizione"
        onChange={onChange}
        onKeyPress={onKeyPress}
        value={item.description}
      />
      <Button variant="outline-primary" onClick={onClick}>
        Aggiungi
      </Button>
    </InputGroup>
  )
}

export default Input
