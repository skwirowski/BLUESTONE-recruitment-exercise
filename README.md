# Bluestone recruitment exercise

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn install`

Installs all dependencies for a project.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Objectives

### Product list application
Create a basic prototype that will have the following parts:
 - List of all Products (home page) - A simple vertical list of products. Each product name can be clicked which will take the user to a “Product Detail” screen for the clicked item.
 - Product Detail Screen - place where you can view and edit all the details about the product.

Technical requirements:
 - you can use any bootstrap project/toolkit/framework you want, however, usage of React is preferred.
 - all products must be persisted, so that they are available on next user visit (including updates). For that you can use any technique.
 - you are not expected to implement Delete or Create functionalities.

Extra points for:
 - use of promises
 - use of ES2015 or TypeScript
 - use of any state management framework

**Don’t spend too much time on styling - functionality first!**  
Acceptance Criteria:
It is important that you stick to what you know and what you’re good at.  
However, this is the minimum you must provide:
1. Working list of Products (as specified above).
2. Working display functionality of the Product Detail Screen. We will accept a submission with update not fully functional, but obviously this will have an impact on your final result.

## Description

1. Application built using `React` library.
2. Products list saved to `Firebase` Realtime Database.
3. Communication with Database through HTTP methods - Firebase Realtime Database URL used as a REST endpoint.
4. Product data edition functionality is implemented.
5. Used `async/await` functions.
6. Used ECMAScript 2015.
7. For state management used `Redux` and `Redux-Saga` for async operations.
