## About this app

Client side of the online-store-app-example was created in the Create-React-App and the server side was created in Node.js with Express.

My main goal during creating this app was to build simple version of the online store app with basic functions like: <br />

• registration,<br />
• confirmation email,<br />
• changing or resetting password,<br />
• signing-in,<br />
• possibility of adding and removing items from the basket,<br />
• viewing transaction history and details related to the shopping list,<br />
• searching items by genre or category,<br />
• from an admin account you can set user informations, view details related to transactions of each user, add and remove items from the store.<br />
<br />

## Technologies and libraries

**On the client side of my app I used the following technologies:**<br />
• Typescript,<br />
• redux to manage state,<br />
• redux-saga to handle asynchronous actions (i.e. data fetching),<br />
• react-router and react-router-dom to navigate the components,<br />
• axios to fetch the data,<br />
• styled components to design the layout,<br />
• query-string to parse query string into an object,<br />
• react-reveal to add basic animations,<br />
• react-toastify to add notifications to the app,<br />
• react-drop-zone in order to add items to the sore,<br />
• react-infinite-scroll-component to add the infinite loading effect,<br />
• react-loader-spinner to add the spinner animation during loading,<br />
• react-paypal-express-checkout to give users possibility to pay for the products,<br />
• react-image-gallery to add the image galleries and carousels.<br />
<br />

**On the server side I used:**<br />
• express,<br />
• express-validator,<br />
• cors,<br />
• jsonwebtoken,<br />
• sharp to change the resolution of uploaded images on the server side,<br />
• nodemailer to send e-mails to the users with activation link,<br />
• mongoose.<br />
<br />

## How to run this app?
1. Clone repository with `git clone https://github.com/rafalzzz/online-store-app-example.git`<br />
2. Fetch all dependencies on the server side using `npm install` or `yarn install` and then go to the client - `./client` and fetch all dependiences using also `npm` or `yarn`.<br />
3. Paste .env files on server and client side.<br />
4. Run app using `npm run dev` or `yarn dev`.<br />
5. Open http://localhost:3000 to view it in the browser.<br />
