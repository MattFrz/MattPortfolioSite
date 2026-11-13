import { navigate } from '../router'

export function Link({ to, children, ...props }) {
  const onClick = (event) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    const url = new URL(to, window.location.origin)
    if (url.pathname === window.location.pathname && url.hash) return // let the browser scroll
    event.preventDefault()
    navigate(to)
  }
  return <a href={to} onClick={onClick} {...props}>{children}</a>
}
