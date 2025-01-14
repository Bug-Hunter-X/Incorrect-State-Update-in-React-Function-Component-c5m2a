# Incorrect State Update in React Function Component

This repository demonstrates a common mistake when updating state in React function components.  The issue arises from directly modifying the state variable instead of using the setter function provided by the `useState` hook.

## Problem

The provided code attempts to increment a state variable directly using the increment operator (++). This approach doesn't trigger a re-render, resulting in the UI not reflecting the updated state.

## Solution

The correct way to update state is to always use the setter function (`setCount` in this case) to update the state.  This ensures that React's state management mechanisms work correctly, triggering a re-render and updating the UI.