import React from "react"

export default function GlobalStyles() {
  return (
    <style jsx global>
      {`
        :root {
          --imgSize: 85vh;
          --baseline: 1.5rem;
          --darkGray: #222;
          --lightGray: #aaa;
          --foreground: var(--darkGray);
          --background: var(--lightGray);
        }

        @media (prefers-color-scheme: dark) {
          :root {
            --foreground: var(--lightGray);
            --background: var(--darkGray);
          }
        }

        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
          position: relative;
        }

        html {
          -webkit-text-size-adjust: none;
          background-color: var(--background);
          color: var(--foreground);
          font: 90%/1.5 system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
          font-weight: 500;
          height: 100%;
          overflow: hidden;
          transition: 0.3s ease;
          transition-property: color, background-color;
        }

        body {
          display: flex;
          height: 100%;
          align-items: center;
          overflow: scroll;
          -webkit-overflow-scrolling: touch;
        }

        @media (orientation: portrait) {
          html {
            overflow: initial;
          }

          body {
            height: auto;
          }
        }

        a {
          color: inherit;
          text-decoration-color: rgba(255, 255, 255, 0.5);
          text-decoration-skip-ink: auto;
          transition: 0.2s ease;
          transition-property: color, text-decoration-color;
        }

        a:hover,
        a:focus {
          text-decoration-color: currentColor;
        }

        p {
          margin-bottom: calc(var(--baseline) / 2);
        }

        .frac {
          font-variant-numeric: diagonal-fractions;
        }

        .site-title {
          font-weight: 600;
          font-size: 1rem;
        }

        #__next {
          display: flex;
          flex-flow: column nowrap;
          padding-bottom: var(--baseline);
        }

        .site-content {
          flex: 1 0 auto;
          display: grid;
          max-height: var(--imgSize);
          grid-auto-flow: column;
          align-items: stretch;
        }

        .pane {
          flex: 1 0 auto;
          width: auto;
          vertical-align: top;
          padding: calc(var(--baseline) / 2);
          display: flex;
          flex-direction: column;
        }

        @media (orientation: portrait) {
          .site-root {
            flex-flow: column wrap;
            max-width: 100%;
            max-height: unset;
          }

          .site-content {
            grid-auto-flow: row;
            grid-auto-row: min-content;
          }

          .pane {
            height: auto;
            width: auto;
            margin: auto;
          }
        }

        .pane--text {
          align-self: flex-start;
          width: 35rem;
          max-width: 100%;
        }

        @media (orientation: portrait) {
          .pane--text {
            flex-basis: auto;
          }
        }

        .placeholder,
        .image__img.ssr {
          --aspect-ratio: 1;
          background-color: rgba(0, 0, 0, 0.1);
          max-height: var(--imgSize);
          height: var(--imgSize);
          width: calc(var(--imgSize) * var(--aspect-ratio));
        }

        @media (orientation: portrait) {
          .placeholder,
          .image__img.ssr {
            --width: calc(100vw - var(--baseline));
            width: var(--width);
            height: calc(var(--width) / var(--aspect-ratio));
          }
        }
      `}
    </style>
  )
}
