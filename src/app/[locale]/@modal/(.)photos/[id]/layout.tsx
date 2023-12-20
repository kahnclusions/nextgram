"use client"

import { usePathname } from "next/navigation"
import { PropsWithChildren } from "react"

export default function Layout({ children }: PropsWithChildren) {
  const pathname = usePathname()
  return <>{pathname.endsWith("view") ? children : null}</>
}
