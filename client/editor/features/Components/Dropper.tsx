import React , { useState, useRef}from 'react'
import { useDrag, useDrop } from 'react-dnd'

interface DraggerProps {
  id?: string,
  index: number,
  acceptItem: AcceptItem
}

interface AcceptItem {
  type: string
}

function getStyle(backgroundColor: string): React.CSSProperties {
  return {
    border: '1px solid rgba(0,0,0,0.2)',
    minHeight: '200px',
    minWidth: '60%',
    color: 'white',
    backgroundColor,
    padding: '20px',
    paddingTop: '10px',
    margin: '10px',
    textAlign: 'center',
    float: 'left',
    fontSize: '10px',
  }
}

export interface DustbinState {
  hasDropped: boolean
  hasDroppedOnChild: boolean
}

export interface DroperProps {
  greedy?: boolean,
  dropEvent: (any) => void,
  canDrop?: (any) => void,
}

export const Dropper: React.FC<DroperProps> = ({ children,  dropEvent, canDrop}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [hasDropped, setHasDropped] = useState(false)
  const [hasDroppedOnChild, setHasDroppedOnChild] = useState(false)

  const [{ isOver, isOverCurrent }, drop] = useDrop({
    accept: 'dragger',
    drop(item, monitor) {
      dropEvent(item)
      const didDrop = monitor.didDrop()
      if (didDrop) {
        return
      }
      setHasDropped(true)
      setHasDroppedOnChild(didDrop)
    },
    canDrop(){
      return true
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      isOverCurrent: monitor.isOver({ shallow: true }),
    }),
  })

  let greedy = null
  const text = greedy ? 'greedy' : 'not greedy'
  let backgroundColor = 'rgba(0, 0, 0, .2)'

  if (isOverCurrent || (isOver && greedy)) {
    backgroundColor = 'green'
  }

  drop(ref)

  return (
    <div ref={ref} className='drop-wrap' style={getStyle(backgroundColor)}>
      Drop Target{text}
      <br />
      {hasDropped && <span>dropped {hasDroppedOnChild && ' on child'}</span>}
      <div>{children}</div>
    </div>
  )
}
