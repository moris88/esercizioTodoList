import * as React from 'react'
import { Row, Col } from 'react-bootstrap'
import Item from './Item'
import Input from './Input'
import cls from 'classnames'
import { Context } from '../context/useContext'
import { Element } from '../types/element'

export interface PropsList {
  className?: string;
}

const Items: React.FC<PropsList> = (props) => {
  const { state } = React.useContext(Context)

  return (
    <Row className={props.className ? props.className : ''}>
      <h1 className={cls('text-center')}>ToDo List</h1>
      <Col md={12} className={cls('mt-2')}>
        <Input />
      </Col>
      <Col md={12} className={cls('mt-2')}>
        {state.items.map((e: Element) => (
          <Item key={e.id} item={e} />
        ))}
      </Col>
    </Row>
  )
}

export default Items
