/**
 * PERFORMANCE MONITORING UTILITIES
 * ===============================
 * 
 * PURPOSE: Track Core Web Vitals and performance metrics
 * CREATED: July 13, 2025 (performance optimizations)
 * 
 * FEATURES:
 * - Core Web Vitals tracking (LCP, FID, CLS)
 * - Custom performance metrics
 * - Error tracking
 * - Performance reporting utilities
 * 
 * USAGE:
 * - Import and use in components for performance monitoring
 * - Send data to analytics services
 * - Monitor user experience metrics
 */

export interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
  fcp?: number;
  customMetrics?: Record<string, number>;
}

export interface ErrorData {
  message: string;
  stack?: string;
  component?: string;
  timestamp: number;
  userAgent: string;
}

/**
 * Track Core Web Vitals
 */
export const trackWebVitals = (metric: any) => {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Web Vital:', metric);
  }

  // Send to analytics service in production
  if (process.env.NODE_ENV === 'production') {
    // Example: send to Google Analytics, Sentry, etc.
    // gtag('event', metric.name, {
    //   event_category: 'Web Vitals',
    //   event_label: metric.id,
    //   value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
    //   non_interaction: true,
    // });
  }
};

/**
 * Track custom performance metrics
 */
export const trackCustomMetric = (name: string, value: number, category?: string) => {
  const metric = {
    name,
    value,
    category: category || 'custom',
    timestamp: Date.now(),
  };

  if (process.env.NODE_ENV === 'development') {
    console.log('Custom Metric:', metric);
  }

  // Send to analytics service
  // sendToAnalytics(metric);
};

/**
 * Track component render performance
 */
export const trackComponentRender = (componentName: string, renderTime: number) => {
  trackCustomMetric(`${componentName}_render_time`, renderTime, 'component');
};

/**
 * Track API call performance
 */
export const trackApiCall = (endpoint: string, duration: number, status: number) => {
  trackCustomMetric(`${endpoint}_api_call`, duration, 'api');
  
  if (status >= 400) {
    trackError({
      message: `API call failed: ${endpoint}`,
      component: 'API',
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
    });
  }
};

/**
 * Track errors with context
 */
export const trackError = (errorData: ErrorData) => {
  if (process.env.NODE_ENV === 'development') {
    console.error('Tracked Error:', errorData);
  }

  // Send to error reporting service
  // sendToErrorReporting(errorData);
};

/**
 * Performance monitoring hook
 */
export const usePerformanceMonitoring = () => {
  const startTimer = (name: string) => {
    const start = performance.now();
    return () => {
      const duration = performance.now() - start;
      trackCustomMetric(`${name}_duration`, duration, 'timer');
    };
  };

  const measureComponent = (componentName: string) => {
    const start = performance.now();
    return () => {
      const duration = performance.now() - start;
      trackComponentRender(componentName, duration);
    };
  };

  return {
    startTimer,
    measureComponent,
    trackCustomMetric,
    trackError,
  };
};

/**
 * Intersection Observer for lazy loading
 */
export const useIntersectionObserver = (
  callback: (isIntersecting: boolean) => void,
  options: IntersectionObserverInit = {}
) => {
  const defaultOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '50px',
    ...options,
  };

  return (element: Element | null) => {
    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        callback(entry.isIntersecting);
      });
    }, defaultOptions);

    observer.observe(element);

    return () => observer.disconnect();
  };
};

/**
 * Debounce utility for performance
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Throttle utility for performance
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}; 