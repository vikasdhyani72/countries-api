import React from 'react'
import { useRouteError } from 'react-router-dom'

function ErrorPage() {
  const error = useRouteError()
  return <div>something went wrong</div>
}

export default ErrorPage
