import { MouseEvent } from "react"
import Router from "next/router"

export function redirectsWithEventStopPropagation(
  event: MouseEvent,
  href: string
) {
  event.stopPropagation()

  Router.push(href)
}
