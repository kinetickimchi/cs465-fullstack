# CS-465
CS-465 Full Stack Development with MEAN

## Architecture
Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
- The use of Express.js in combination with Handlebars allows us handle URL routing and helps make our web application more modular. The SPA was built using Angular, where we were able to use its component system to modularize parts of the interface (such as separate views for customers and administrators). JavaScript helps tie all of these components together with Node.js.

Why did the backend use a NoSQL MongoDB database?
- MongoDB provided a simple, flexible way for our data to be stored- its formatting was directly compatible with the data we needed to store, and its schema flexibility was an advantage for this specific use case (such as storage of trip data or users, which might have varying attributes).

## Functionality
How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
- JSON serves as the data format used throughout the application. While JavaScript executes actions, JSON serves as the "structure" for the data that passes through its different components.

Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.
- The first thing I think of in terms of refactoring was the introduction of using Handlebars to replace static HTML with views/elements that could be individually built. This began with replacing headers and footers on the Travel page, but grew into modularizing entire page elements based on user access later in the project.

## Testing
Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.
- The primary method used for API testing throughout the class was through Postman. This allowed me to specify an HTTP method (such as GET or POST), and use an endpoint (such as /trips, /register, or /login) to manipulate or otherwise access stored data. Additionally, security layers were added through methods for authentication and authorization, where users could register for an account or log in to an existing one, validated against access controls using JWT. A challenge during implementation of the security methods came during the testing process, where I often found myself having to jump back and forth in my work while following the guide, as once I reached certain points (such as after fully implementing login) I would not be able to test certain functionality without ensuring authorization was 100% working as intended.

## Reflection
How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?
- Of all the courses I have taken so far, I felt CS-465 was by far the one where I will be leaving with the most knowledge gained. As someone who primarily has experience on the hardware side, going hands-on with the process of tying together individual components from a static webpage to full web application helped me truly feel like I was putting together everything I have learned in the CS program so far. While most of my previous projects have revolved around single-purpose applications or more in-depth analysis, this course felt more realistic to going through a live development process right up to deployment.