import Image from 'next/image'
import Link from 'next/link'

import EvenOdd from './EvenOdd';

export default function FooPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <EvenOdd />
        <Link href="/">Go back home</Link>
    </main>
  )
}
