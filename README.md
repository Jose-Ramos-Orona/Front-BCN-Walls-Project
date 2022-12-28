[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=isdi-coders-2022_Jose-Ramos_Front-Final-Project-202209-BCN&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=isdi-coders-2022_Jose-Ramos_Front-Final-Project-202209-BCN)

# BCN WALLS✨

# Data layer

## userSlice

- login
- logout

## graffitiSlice

- load graffiti
- create graffiti
- delete graffiti
- update graffiti

## uiSlice

- show loading
- hide loading
- show modal
- hide modal

# Component list

## Header component

### show data

- the title of app "BCN WALLS"

## Navigation component

### show data

- a link with "Home"
- a link with "Register"
- a button with "Login"

### get actions

- navigate to home when clicking the link home
- navigate to register page when clicking the link register
- logout and navigate to the login page when clicking in to the login button

## Register form component

### show data

- the text "Create an account"
- one input with the label username
- one input with the laber email
- one input with the label password
- the text "Do you have an account?"
- a button with the received text and the received action

### get actions

- send the form data when clicking the button

## Login form component

### show data

- the text "Login"
- one input with the label username
- one input with the label password
- a button with the received text
- the text "You don't have an account?"
- the link that says "Register here"

### get actions

- do the received action when clicking the button
- navigate to register page when clicking the login link

## Graffiti card list

### show data

- a Filter component
- a graffitiCard with image and title
- a pagination with two buttons

## Filter component

### show data

- the text received
- the select with the options received

### get actions

- the received action on select

## Pagination

### show data

- a button with text previous
- a button with text next

### get actions

- loadmore graffitiCard on demand when clicking the button

## CreateForm component

### show data

- An image
- the input with the label "add image"
- the input with the label "title"
- the input with the label "authot"
- the input with the label "address"
- the input with the label "theme"
- the input with the label "description"
- a button with the text "create"

### get actions

- the received action when clicking the create button

## Detail graffitiCard

### show data

- the text "title" with the received text
- image of graffiti
- the text "author" with the received text
- the text "adres" with the received text
- the text "them" with the received text
- the text "description" with the received text

## Loader component

### show data

- animatet image of colored ice-cream

## 404 Error component

### show data

- the text "404 - Page not found"
- the text "There are no graffitis in this wall, try finding it in our navigation links"
- image of brick wall

## Modal component

### show data

- the text received
- the icon received
- the color received

## My Wall

### show data

- a list of graffitiCard that you have created
- a button with the text "delete"
- a button with the text "modify"

### get actions

- the received action when clicking the "delete" button
- the received action when clicking the "modify" button
