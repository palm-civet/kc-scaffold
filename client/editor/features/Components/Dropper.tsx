import React , { useState }from 'react'
import { useDrop } from 'react-dnd'


function getStyle(backgroundColor: string): React.CSSProperties {
  return {
    border: '1px solid rgba(0,0,0,0.2)',
    minHeight: '80px',
    minWidth: '80px',
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
  greedy?: boolean
}

export const Dropper: React.FC<DroperProps> = ({ greedy, children }) => {
  const [hasDropped, setHasDropped] = useState(false)
  const [hasDroppedOnChild, setHasDroppedOnChild] = useState(false)

  const [{ isOver, isOverCurrent }, drop] = useDrop({
    accept: 'dragger',
    drop(item, monitor) {
      const didDrop = monitor.didDrop()
      console.log("didDrop", didDrop)
      if (didDrop) {
        return
      }
      setHasDropped(true)
      setHasDroppedOnChild(didDrop)
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      isOverCurrent: monitor.isOver({ shallow: true }),
    }),
  })

  const text = greedy ? 'greedy' : 'not greedy'
  let backgroundColor = 'rgba(0, 0, 0, .2)'

  if (isOverCurrent || (isOver && greedy)) {
    backgroundColor = 'green'
  }

  return (
    <div ref={drop} className='drop-wrap' style={getStyle(backgroundColor)}>
      Drop Target
      {text}
      <br />
      {hasDropped && <span>dropped {hasDroppedOnChild && ' on child'}</span>}
      <div>{children}</div>
    </div>
  )
}
