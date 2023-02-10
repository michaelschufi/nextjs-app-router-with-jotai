import Image from 'next/image'
import Link from 'next/link'

import Count from './Count'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Count />
      <Link href="/foo">Go to Foo page</Link>
      <Link href="/bar">Go to Bar page</Link>
    </main>
  )
}
