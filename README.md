# StarWars

## Description
This application is about a collectible album where you can open packs that will give you cards based on the Star Wars saga. Each card is categorized as either Special or Regular. You will have a space where you can view your album and the cards you have obtained so far.

In conclusion, the application is built with React and Vite. You can check the demo version [here](https://master.d37hnrskqvbr75.amplifyapp.com/).

## Prerequisites
Make sure you have Node.js and npm installed on your machine before running the application.

## Installation
1. Clone this repository:
    ```bash
    git clone https://github.com/alejor64/credit-card-payment.git
    ```
2. Navigate to the application directory: ``credit-card-payment``
    ```bash
    cd credit-card-payment
    ```
3. Install dependencies:
    ```bash
    yarn install
    ```
## Running Locally
To run the application in your local environment, use the following command:
```bash
yarn dev
```

This will start the application at http://localhost:5173.

## Testing
Unit tests are configured with Jest. You can run the tests in watch mode using the following command:
```bash
yarn test
```

## Folder Structure
```
src
├── domain/
│   ├── application/
│   │   ├── selectors/
│   │   ├── slices/
│   │   ├── constants.js
│   │   ├── helpers.js
│   ├── infrastructure/
│   │   ├── routes.js
│   ├── presentation/
│   │   ├── assets/
│   │   ├── component/
│   │   ├── pages/
├── router/
│   ├── AppRotuer.jsx
│   ├── routes.js
├── shared/
│   ├── application/
│   │   ├── theme/
│   │   │     ├── color.scss
│   │   │     ├── constants.scss
├── store/
│   ├── index.js
│   ├── store.js
├── tests/
│   ├── domain/
```
