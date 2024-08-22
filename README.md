# Age of Empires Unit Details Viewer

## Overview
This project is a React-based application designed to display detailed information about units from the game "Age of Empires." It features a dynamic filtering system and a detailed view for each unit. The application utilizes Redux for state management and Redux-Saga for handling side effects. The UI is styled using SCSS.

## Features
- **Unit Filtering**: Filter units based on age and cost using a combination of buttons and sliders.
- **Unit Detail View**: Displays detailed information about selected units, including their cost, build time, attack stats, and more.
- **State Management**: The application uses Redux to manage the state and Redux-Saga to handle asynchronous operations like data fetching.

## Installation
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/age-of-empires-units.git
   cd age-of-empires-units
2. **Install Dependencies:**
   ```bash
   npm install
3. **Start the Application:**
   ```bash
   npm start
4. **Test the Application:**
   ```bash
   npm test

## Usage
1. **List Page:**
The main page where you can filter units by age and cost.
Click on a unit to view its detailed information.
2. **Detail Page:**
Displays detailed stats and information about the selected unit.
Accessible by clicking on a unit from the list page.


## Testing
1. **Component Rendering:**
Tests to ensure components render correctly based on different states (loading, error, data).
2. **Redux-Saga Testing:**
Tests to validate that Sagas handle actions and API responses as expected.
3. **Custom Hooks:**
Tests to verify the correct functionality of custom hooks.

## Folder Structure
src/
│
├── assets/
│ └── img/
│
├── components/
│ ├── common/
│ ├── detail/
│ │ └── DetailTable/
│ └── list/
│ ├── ButtonFilter/
│ ├── ListTable/
│ └── SliderFilter/
│
├── config/
├── hooks/
├── layouts/
├── mock/
├── store/
│
└── views/
├── DetailPage/
├── Homepage/
└── ListPage/