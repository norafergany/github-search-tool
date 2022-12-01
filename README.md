# GitHub User Search Tool

## Run the app (Development Mode)
1. ```git clone```
2. ```npm install```
3. ```npm start```

## Run Tests
```npm test```

## Libraries, Frameworks, & Tools
- [Create React App](https://create-react-app.dev/)
- [React-Bootstrap](https://react-bootstrap.github.io/)
- [Styled-Components](https://styled-components.com/)
- [Axios](https://axios-http.com/)
- [React-Form-Hooks](https://react-hook-form.com/)
- [React-Resting-Library](https://testing-library.com/docs/react-testing-library/intro/)
- [date-fns](https://date-fns.org/)


## Implementation Process
- Create a grid layout
- Render a component ```SearchResults``` that displays the default user's GitHub profile
- Write a test for the ```SearchResults``` component
- Implement a search form component ```Search``` that allows users to search for a GitHub profile, and validates user input according to GitHub username rules (max length of 39 characters, alphanumeric characters and hyphens only)
- Implement Dark Mode
- Refactor - Lift State Up: isolate state management and data processing logic to a parent component (```Search```)
- Update tests to reflect refactoring
- Clean-up code (use inline variables, remove unused variables and imports, remove log statements)
- Enhance `Search` component: remove typos and improve form validation


## Decisions & TradeOffs
I spent time setting up a (relatively) responsive, accessible user interface. User friction inhibits user adoption and engagement, and a majority of web traffic comes from mobile devices.

### Libraries & Tools
- Axios: has convenient features out of the box (e.g. automatic data transformation, fuller browser compatibility, HTTP interceptors) and produces clean code
- React-Bootstrap:
    - Applies Bootstrap functionality to the virtual DOM (instead of jQuery directly manipulating the DOM)
    - Uses React components that are easier to read and style given a React application
- Styled-Components:
    - Co-locating CSS and JS produces code that is easier to maintain
    - Use conditional logic to style components at render time
- React-Form-Hooks: seamless way to implement forms with built-in validation
- React Function Components: produce code that is more declarative, easier to read and maintain
- date-fns: a more performant date library (e.g. compared to Moment)


## Improvements
### Design & UX
- Improve the layout/responsive
    - the avatar image is slightly distorted
    - profile data isn't laid out correctly
    - content is not evenly spaced on mobile devices
- Add hover properties and transparency to GitHub profile data, placeholder content, and icons where required
- Display the error message inside the search bar, instead of underneath it
- Cleanup the grid layout of search results
- Eliminate the content flash that occurs after a search for a user that doesn't exist
- Eliminate the flash when the page first renders in Dark Mode (use CSS variables to set colors before JS loads)


### Code
- Use a single strategy to define CSS styles (currently declared via a mix of styled components, pure CSS, and React-Bootstrap)
- Improve search coverage: Write tests that isolate each component, cover more cases, evaluate user interaction rather than code implementation, and serve as documentation
- Learn TypeScript (to leverage its enhanced features like static typing, etc)
- Set a timeout to limit the time we wait for an API response
- Improve search coverage - add detailed tests so that tests serve as documentation for the app


### Features

- Better search validation: GitHub usernames cannot start with hyphens and cannot contain consecutive hyphens. Currently, the form only checks that the username contains only alphanumeric characters and hyphens, with a max of 39 letters (per GitHub username rules)
- Update the URL with the query parameters to facilitate link sharing
- Implement a button in the search bar to clear input
- Improve error handling: display unique messages for different errors (eg. "API rate limit" vs "No results")


