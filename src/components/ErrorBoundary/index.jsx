import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Erro capturado:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Algo deu errado. Tente recarregar a página.</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
