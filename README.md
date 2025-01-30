# Detect Multiple Monitors in JavaScript

## Introduction

This repository provides a reusable JavaScript function and a React hook to detect if a user has multiple monitors connected. This can be useful for online assessment platforms, gaming applications, and workspace optimizations.

## Features

- Works with standard JavaScript (`window.screen` properties)
- Uses multiple detection methods for better accuracy
- Includes a **React Hook** for easy integration in React projects
- Cross-browser support (limited for experimental features)

## Usage

### JavaScript Function

You can use the JavaScript function to detect multiple monitors.

```javascript
import { detectMultipleMonitors } from "./detect-multiple-monitors";

console.log(detectMultipleMonitors());
```

### React Hook

For React applications, use the `useMultiMonitor` hook:

```javascript
import useMultiMonitor from "./detect-multiple-monitors";

const MultiMonitorCheck = () => {
  const isMultiMonitor = useMultiMonitor();
  return <div>Multiple Monitors: {isMultiMonitor ? "Yes" : "No"}</div>;
};

export default MultiMonitorCheck;
```

## How It Works

The detection logic is based on multiple methods:

1. **`window.screen.availWidth` vs. `window.screen.width`** - If `availWidth` is greater, a second screen is likely present.
2. **`window.screenLeft` and `window.screenTop`** - If the window is not at `(0,0)`, it's likely on another screen.
3. **`window.matchMedia('(display-mode: extended)')`** - Checks for extended display mode (experimental).
4. **`window.screen.isExtended`** - A newer Chromium API for detecting multiple monitors (experimental).

## Browser Support

| Feature                                | Chrome           | Firefox | Safari | Edge            |
| -------------------------------------- | ---------------- | ------- | ------ | --------------- |
| `screen.availWidth`                    | ✅               | ✅      | ✅     | ✅              |
| `screenLeft / screenTop`               | ✅               | ✅      | ✅     | ✅              |
| `matchMedia('display-mode: extended')` | ⚠️ Experimental  | ❌      | ❌     | ⚠️ Experimental |
| `screen.isExtended`                    | ⚠️ Chromium-only | ❌      | ❌     | ❌              |

## Contributing

We welcome contributions! If you’d like to improve the detection logic or add additional features, feel free to submit a pull request.

## Stay Updated

For more frontend development insights, check out: [https://advancedwebdev.substack.com/](https://advancedwebdev.substack.com/)
