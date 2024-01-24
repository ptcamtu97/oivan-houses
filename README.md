# OivanHouses

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

///////////

## Requirements

Problem: A Housing company wants to have a simple webpage to display list of houses they
want to sell so anyone can access the house list page and check available house & housing
design model. At the same time, the company also wants to have 1 account to add more
houses and update house availability.

## User stories:

- As an anonymous user, I can visit a house list page and filter for houses that match filter
  criteria. The house list page is grouped by each house design model.
- As an anonymous user, I can Login, once provide the password, after login I will
  authorized as Admin
- As an Admin, I should be able to
  o View the house list same as anonymous users
  o Create a house
  o Update house
  o Assign house to House model
  o Logout
  Please follow ALL the instructions below very closely and check-mark each to be sure you
  have followed them before submission:

1. Implementation of login pages
   A user can login to management page with provided credentials, once a user is
   successful login, the user will be redirected to 2-A. Display a message to user if they are
   entering incorrect username / password.
   Login account is: admin / p@ssw0rd

2. Implementation of House listing page
   A. Display a list of houses, group them into house model, if house is not available or
   does not have model, it should not show in the list.
   B. A combination of filter house by house_number, block_number, land_number, min
   price, max price. (API will just return all houses at once and will not support any
   filtering or paging, you will need to process filter at client side).

3. Implementation of management pages (Please refer to Postman for model definition
   and API requests).
   A. Display a list of houses, group them into house model, (reuse 2-A).
   B. Reuse filter in house listing pages (2-B).
   C. Admin can click on the create button to create a new house.
   D. Admin can click on each house and update house properties

4. [Optional] Implementation of unit test / e2e test using Cypress
   Implementation of unit tests / e2e testing is not required for ALL functionalities listed or
   for all algorithms used but you must show us some aspects of unit testing skills for some
   of the core functionalities/algorithms as you choose. The more the better! We do not
   require testing for all in the interest of time but would like to see some implementation
   samples showing that you can handle this aspect of programming.

5. Security requirements
   Make sure that the user cannot view managements page without login. Even by tricking
   or conducting unusual interactions with the app!
   Considering where to store the access token for more secure.

6. Required technology / framework
   A. Frontend: Typescript with Angular version 14+, css kits, Angular widgets built from
   the ground up such as ng-bootstrap are recommended to use to save-up your time.
   B. Unit test / E2E test: Cypress

7. How to turn in the results
   A. Test your Implementation First: please test your application thoroughly for all the
   functionalities as instructed to make sure it all works according to the instructions
   before submitting or providing the link. Note that your application may run perfectly
   on a local machine setting but end up with errors or issues when deployed or viewed
   as a user on the web, so we encourage you to test your app locally and as deployed
   on the web.
   B. Push all your code to public repository in Bitbucket (do not use GitHub)
   C. Deploy the application and provide us server link that will run the entire application
   so that we can test it as practical user.
