import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col gap-4">
      <a href="/before">-> useHydrateAtoms before derived (broken)</a>
      <a href="/after">-> useHydrateAtoms after derived (working)</a>
    </main>
  )
}
