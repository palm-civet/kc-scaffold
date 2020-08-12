import React from 'react'

export type WrapperOptions = {
  name: string
}

export function withWrapper (Component, options: WrapperOptions): React.FC {
  const Wrapper: React.FC = () => {
    return Component
  }
  return Wrapper
}