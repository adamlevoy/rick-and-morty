import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root {
  --dark: #3a4767;
  --grey: #bee5fd;
  --blue: #01b4c6;
  --green: #97ce4c;
  --yellow: #fff874;
  --pink: #f675da;
  --brown: #44281d;
  --lightBrown: #f8d3ac;
  --red: #e64358;
}

* {
  box-sizing: border-box;
  margin: 0;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--green);
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

.App {
  text-align: center;
}

.App-logo {
  height: 20vmin;
  pointer-events: none;
  position: absolute;
  top: 0;
}

.Rick-logo {
  height: 12vmin;
  pointer-events: none;
  ${'' /* position: absolute;
  top: 10px; */}
}

@media (prefers-reduced-motion: no-preference) {
  .Rick-logo {
    animation: Rick-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes Rick-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.buttonWrapper {
  display: flex;
  gap: 1rem;
  margin-block: 2rem;
}

button {
  width: 10em;
  padding: 0.75em 1em;
  background: var(--grey);
  border-radius: 5px;
  color: var(--dark);
  font-weight: bold;
  border: 3px solid var(--dark);

  :hover {
  opacity: .8;
  }

  :active {
    outline: 2px solid var(--dark);
  }
}

`;