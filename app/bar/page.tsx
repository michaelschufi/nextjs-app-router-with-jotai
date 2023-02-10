import Image from 'next/image'
import Link from 'next/link'

import Double from './Double';

export default function BarPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Double />
        <Link href="/">Go back home</Link>
    </main>
  )
}
