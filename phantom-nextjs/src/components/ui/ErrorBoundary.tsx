/**
 * ERROR BOUNDARY COMPONENT
 * =======================
 * 
 * PURPOSE: Catch and handle React errors gracefully
 * CREATED: July 13, 2025 (performance optimizations)
 * 
 * FEATURES:
 * - Catches JavaScript errors in child components
 * - Provides fallback UI when errors occur
 * - Logs error information for debugging
 * - Prevents entire app from crashing
 * 
 * USAGE:
 * <ErrorBoundary fallback={<ErrorFallback />}>
 *   <YourComponent />
 * </ErrorBoundary>
 */

'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error information
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // You can also log the error to an error reporting service here
    // Example: logErrorToService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback || (
        <div className="error-boundary p-4 text-center">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <i className="fa fa-exclamation-triangle text-4xl text-red-500 mb-4"></i>
            <h2 className="text-xl font-semibold text-red-800 mb-2">
              Something went wrong
            </h2>
            <p className="text-red-600 mb-4">
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Default error fallback component
export const ErrorFallback = () => (
  <div className="error-fallback p-4 text-center">
    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
      <i className="fa fa-exclamation-circle text-4xl text-yellow-500 mb-4"></i>
      <h2 className="text-xl font-semibold text-yellow-800 mb-2">
        Component Error
      </h2>
      <p className="text-yellow-600">
        This component encountered an error. Please try again later.
      </p>
    </div>
  </div>
); 