# Getting Started

- Please read the INSTRUCTIONS.md first
- For any questions around Create React App (CRA), reference
  CRA_DOCUMENTATION.md

# Code and Design Decisions

<!-- Please document your code & design decisions here. -->

## 1. Property Listing screen components

- Header
- Property List
  - Property List Item
    - Property List Item Details
    - Property Favorites

## 2. Created a context to manage global state

- State
  - Properties
  - Favorites
- Functions
  - getProperties - returns properties from API call
  - toggleFavorites - takes a listingId as param and adds or removes listingId from local storage favorite list
  - getFavorites - returns list of listingIds from local storage

## 3. Created a utility file with misc functions

## 4. Styling combination of Bootstrap and custum css

## 5. Testing (Thought process)

- Testing is not my stength

1. Header Component
   1. Component Renders
   2. Passed in Title Text renders
2. Property List Component
   1. Mock Context
      - Get Properties
      - Get Favorites
   2. Test Child Components Rendering Correctly
   3. Test Image Display
   4. Test Util Functions and Data Returned
3. Properety Favorites Component
   1. Fire Event to toggleFavorites
   2. Renders Fill or Unfilled SVG
