import React from 'react'
import { logger } from '../../infra'

type ErrorBoundaryProps = {
  children: React.ReactNode
}

type ErrorBoundaryState = {
  error: Error | null
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = {
      error: null,
    }
  }

  componentDidCatch(error: Error) {
    this.setState({ error })

    logger.error('ErrorBoundary', error)
  }

  handleReload = () => {
    window.location.reload()
  }

  handleReportBug = () => {
    // report bug
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <p>Something unexpected happened</p>
        </div>
      )
    }

    return this.props.children
  }
}
