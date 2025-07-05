/// <reference types="react" />

declare module 'react' {
  export = React;
  export as namespace React;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
} 