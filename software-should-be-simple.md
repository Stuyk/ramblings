# Software Should be Simple

I believe that good software should be written with simplicity in mind. There's a set of checkboxes that I think most startups should try to check off when they're building their applications.

## 1. MVPs are Simple

The MVP should be defined within a very tight box without any additional room for improvement or iteration beyond what needs to be created to attract investment opportunities, or further demonstrate that their product works.

Additionally, frameworks like Next and Nuxt can potentially create more work further down the line for uncoupling tightly coupled logic as a single application. I think these two frameworks are bad choices for applications that need to scale rapidly in the future.

Most MVPs can be done within a 3-6 month timespan depending on the complexity of it all.

It's also very important to not have too many engineers or ownership over the initial product.

A dream team for an MVP would be:

1. Designer / Frontend
2. Fullstack
3. Architect

## 2. Separation of Responsibility

While I was working with [Nathan T.](https://www.linkedin.com/in/nathan-toups/) we discussed the why when it came to designing software. There is some nuance to all of it but effectively the best way to build most modern applications is to separate your database read / write into an API and have your business logic push to the API.

The client should also push to the API and read from it as well. Obviously some security practices are put into place to prevent the client from calling API endpoints they should not be calling.

With this separation of responsibility it allows for the API to rapidly scale horizontally with load balancers.

Another important detail is that when you separate this logic the API now defines what the data models look like when it comes to pushing data into the database. Which makes it so that the business logic can be redefined to fit into the predefined box determined by the API.

## 3. Lean Deployment

When starting the application for the first time it should be ran on a single instance. I've had another engineer whose name is also [Nathan J.](https://www.linkedin.com/in/nathan-s-james/) (not the same Nathan) state that he ran a majority of his stuff of a single Digital Ocean VPS for roughly $20/m. It was more than sufficient for the projects he built.

When you think about the above sentence a little bit, he is right. Most companies do not need insane scaling until they take on thousands of customers.

The application stack above allows for the entire stack to be deployed as a single Docker instance with auto-restart built in.

## 4. The Limelight

When it comes time to scale there are so many different ways to skin a cat (please don't skin cats).

If your APIs are performing poorly you can simply rewrite them into another language such as golang or rust.

You can also just purchase a better machine to increase the vertical.

All in all, with the previous steps it ensures that when you need to scale up to a better process it's simple.

That's because you made sure that you didn't bind yourselves to a convenient framework like Next or Nuxt.

You separated your responsibilities so you can hire people for specific work on specific systems.

You were prepared, and you were logical about your approach.

You didn't put all your eggs into a bad basket, the basket was just compartmentalized.
