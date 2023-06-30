import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const testEnv = process.env.NEXT_PUBLIC_TEST || ""

export default function Home() {
  
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      Another deployment {testEnv}
    </main>
  )
}
