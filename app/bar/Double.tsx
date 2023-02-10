'use client';

import {useAtomValue} from 'jotai'
import {doubleAtom} from '../atoms'

const Double = () => {
    const double = useAtomValue(doubleAtom);
    return <div>double: {double}</div>
}
export default Double;