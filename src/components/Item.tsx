import React from 'react'
import '../App.css'
import { Col, Row, Button } from 'react-bootstrap'
import { Context } from '../context/useContext'
import { Element } from '../types/global'

export interface ItemProps {
  className?: string;
  item: Element;
}

const Item: React.FC<ItemProps> = (props) => {
  const { dispatch } = React.useContext(Context)
  const [item, setItem] = React.useState<Element>({
    id: 0,
    description: '',
    isDone: false
  })

  React.useEffect(() => {
    setItem(props.item)
    console.log(props.item)
  }, [props.item])

  const remove = () => {
    dispatch({ type: 'remove', payload: { item } })
  }

  const done = () => {
    const newItem = item
    newItem.isDone = !newItem.isDone
    dispatch({ type: 'update', payload: { item } })
    setItem(newItem)
  }

  return (
    <Row className={props.className ? props.className + ' divItem' : 'divItem'}>
      <Col md={10}>
        <p className={item.isDone ? "colorGreen": "colorRed"}>
          {item.isDone && (
            <span>
              <del>
                {item.id} - {item.description}
              </del>
            </span>
          )}
          {!item.isDone && (
            <span>
              {item.id} - {item.description}
            </span>
          )}
        </p>
      </Col>
      <Col md={1}>
        <Button
          variant={item.isDone ? 'success' : 'warning'}
          onClick={() => done()}
        >
          {item.isDone ? 'SI' : 'NO'}
        </Button>
      </Col>
      <Col md={1}>
        <Button variant="danger" onClick={() => remove()}>
          Rimuovi
        </Button>
      </Col>
    </Row>
  )
}

export default Item
