'use client';

import {useAtomValue} from 'jotai'
import {evenOddAtom} from '../atoms'

const EvenOdd = () => {
    const evenOdd = useAtomValue(evenOddAtom);
    return <div>{evenOdd}</div>
}

export default EvenOdd;