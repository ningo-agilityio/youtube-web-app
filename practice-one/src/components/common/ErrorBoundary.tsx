import React from 'react';

interface IState {
  error: any;
  errorInfo: any;
}

class ErrorBoundary extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    const { error, errorInfo } = this.state;
    const { children } = this.props;
    if (error || errorInfo) {
      return (
        <div>
          <h2>Something went wrong.</h2>
        </div>
      );
    }
    return children;
  }
}

export default ErrorBoundary;
