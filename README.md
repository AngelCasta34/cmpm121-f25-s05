# Section 5 – Refactoring Code Smells in Practice

File: src/main.ts

## Summary

Improved a counter program by removing code smells and organizing the logic. The new version is clear, short, and easy to maintain. It works the same but reads faster and is easier to extend.

## Before Refactoring

The original code mixed setup, logic, and updates in one long function. The same update logic appeared in three places. A global variable controlled the counter. Variable names used single letters. The background color and title updated in repeated blocks.

## Main Problems

Duplicated code made maintenance harder.

One long function handled multiple jobs.

Global state risked hidden bugs.

Poor naming reduced readability.

Hardcoded strings made changes slow.

## Refactoring Patterns Used

Extract Function to move display updates into one clear method.

Extract Class to group related logic and data inside CounterApp.

Encapsulate Variable to hide the counter from global scope.

Rename Variable to make purpose clear.

Replace Conditional with one handler using button data attributes.

Centralize DOM references to reduce repetition.

## After Refactoring

The new version uses one class to manage all behavior. All buttons share a single event handler. The counter is private and updates through one path. The structure supports new features like extra buttons without copying code.
