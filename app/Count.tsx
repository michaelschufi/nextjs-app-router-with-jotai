'use client'

import {useAtom} from 'jotai'
import {countAtom} from './atoms'

export default function Count() {
  const [count, setCount] = useAtom(countAtom)
  return (
    <div>
      <div>{count}</div>
      <button onClick={()=>setCount(c => c + 1)}>count up</button>
    </div>
  )
}
