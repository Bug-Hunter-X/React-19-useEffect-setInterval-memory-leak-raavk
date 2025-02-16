# React 19 useEffect setInterval memory leak
This repository demonstrates a common error in React 19 applications involving the useEffect hook and setInterval.  The problem lies in the improper use of setInterval without a cleanup function to clear the interval when the component unmounts.  This leads to a memory leak as the interval continues to run even after the component is no longer needed. The solution shows how to properly use setInterval with cleanup in useEffect.

## Bug
The `bug.js` file shows the incorrect implementation. `setInterval` is called within `useEffect`, but there's no mechanism to stop it when the component unmounts.

## Solution
The `bugSolution.js` file presents the correct solution.  The `setInterval` is assigned to a variable, and the cleanup function uses `clearInterval` to stop the interval when the component is unmounted. 