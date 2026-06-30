# Seenons Full-Stack Assignment

Hello there!

At Seenons, we are building a platform to support a circular economy. This encompasses collection, transportation, and
re-purposing of different waste streams. The assignment you're about to undertake directly addresses two core aspects of
our platform, which are integral to our mission:

- **Finding service providers for waste collection**:
  Enabling our customers to locate service providers who can collect their waste on a specified date.
- **Registering a waste pickup**:
  Allowing our customers to schedule a waste pickup with a service provider.

These business cases form the basis of the use cases you will be implementing in this assignment.

## The Assignment

### General Requirements

For both use cases, certain validation rules apply universally:

- Postal codes: Must be within the 0000 to 9999 range.
- The application does not need to consider timezones for simplicity.
- Waste streams: Must correspond to a predefined record in the list of valid streams.
- Service provider: Must correspond to a predefined record in a list of service providers.

### Specific Use Case Requirements

1. **Service Partners Availability**
   Ensure the date for waste pickup is not before tomorrow, accounting for a next-day service policy.
2. **Register Waste Pickup**
   The selected date must be within the service provider's scheduling constraints and waste stream availability.

### What You Need to Build

You are tasked with building a **full-stack application** that brings these use cases to life. The repository provides
you with the domain models, seed data, and empty use case stubs as a starting point. Everything else is up to you.

#### Backend

- **API Server** — Expose the two use cases via a REST API (Express, Fastify, NestJS, or your framework of choice).
- **Repository Layer** — Define interfaces for data access and provide in-memory implementations (the seed data in
  `src/domain/dataset/` is your starting point). Add any missing seed data (e.g., customers) as needed.
- **Business Logic** — Implement the two use cases in `src/usecases/availability/` and `src/usecases/pickup/`.
- **Validation** — Validate all inputs (postal codes, dates, entity references) before executing business logic.
- **OpenAPI Spec (recommended)** — Document your API with an OpenAPI specification so the frontend can consume it.
- **Tests** — Unit and integration tests covering the business logic and API endpoints.

#### Frontend

A **Vue 3** application bootstrapped in the `frontend/` directory with Vite, TypeScript, Tailwind CSS, Pinia, and
Vue Router pre-configured. You need to build:

- **Schedule Pickup flow** — A multi-step or single-page form where the user:
  1. Selects a waste stream
  2. Enters their postal code and desired pickup date
  3. Views available service providers
  4. Confirms the pickup registration
- **My Pickups view** — A list of registered pickups with their details.
- **Home view** — An introduction/dashboard page.
- **API Client** — Connect to your backend (we recommend generating a typed client from your OpenAPI spec, e.g. with
  `openapi-typescript`).
- **Tests** — Component or view-level tests for the frontend.

You are free to extend or restructure the frontend however you see fit — the scaffold is just a starting point.

## AI-Assisted Development

This assignment is designed to be completed **with the help of AI tools** (ChatGPT, Claude, GitHub Copilot, Cursor,
or any other LLM-based assistant). We want to see how you collaborate with AI as a development partner.

### Why?

The way software is built is changing. Engineers who can effectively leverage AI — while maintaining full understanding
and ownership of their work — will be the most effective. This assignment gives you a chance to demonstrate that skill.

### Guidance

- Use AI to generate boilerplate, write tests, refactor code, debug errors, or explain patterns you're unfamiliar with.
- Treat the AI as a **pair programmer**: review everything it produces, understand it, and modify it when needed.
- The goal is not to produce the most code with the least effort. The goal is to **ship a well-architected, tested
  application** while learning how to use AI effectively as a tool.

### Required: REPORT.md

Alongside your code, submit a `REPORT.md` file that covers:

1. **Architecture decisions** — Why did you structure the backend and frontend the way you did?
2. **AI tools used** — Which tools did you use and how?
3. **Example prompts** — Share 3–5 prompts you gave to the AI and what they produced.
4. **What worked well / what didn't** — Where was AI most and least helpful?
5. **Manual vs. delegated** — What did you choose to write manually vs. delegate to AI, and why?
6. **AI output changes** — Describe changes you made to AI-generated code and your reasoning.
7. **Lessons learned** — What would you do differently next time?

## Domain Models

**Customer**: A business entity or individual that generates waste and requires collection services. They initiate the
request for waste pickup at a specified location and time.

**Service Provider**: A business or organization that specializes in the collection and processing of waste. They have
specific capabilities and coverage areas, determining where and what types of waste they can handle.

**Waste Stream**: A category of waste, identified by characteristics like material type (e.g., paper, metal, glass) and
disposal method (e.g., recyclable, non-recyclable). It's what the customer needs to dispose of and the service provider
agrees to collect.

**Registered Waste Pickups**: The scheduled event where a service provider collects a specific waste stream from the
customer at a predetermined date and location. It's a record of the service agreement between the customer and the
service provider.

**Summary**
In essence, our domain models create a framework for managing waste collection and processing. Customers looking to
dispose of waste connect with service providers capable of handling their specific waste streams. Registered waste
pickups are the logistical manifestation of this connection, representing the planned collection events based on the
mutual agreement between the customer and the service provider.

If you wish to read the much longer and detailed version of the domain models,
see: [DOMAIN.md](./DOMAIN.md)

## What We Are Looking For

### Implementation (required)

Your implementation should fulfill the specified use cases, demonstrating a clear understanding of the business logic
and the domain model interactions.

Key aspects we will assess include:

- Accuracy in meeting use case requirements.
- Code quality and structure (both backend and frontend).
- API design and frontend user experience.
- Scalability and maintainability.

### Test Coverage (required)

We value thorough test coverage that ensures your implementation behaves as expected.
You might also be able to find edge cases that were not added by us.

### AI Collaboration (evaluated)

We will evaluate not just the final code, but your ability to effectively leverage AI as a tool while maintaining
understanding and ownership of the result. The quality of your `REPORT.md` is a key part of this assessment.

### Bonus Points (not required but a nice to have)

Opportunities include:

- Database and caching (PostgreSQL, SQLite, Redis, etc.).
- Design patterns and architecture (clean architecture, DDD, etc.).
- Containerization (Docker, docker-compose).
- CI/CD pipeline.
- Authentication / authorization.
- Advanced frontend features (filtering, sorting, calendar picker, etc.).

## Technologies Used

This project is pre-configured with the following technologies:

- **Backend**: Node.js, TypeScript, Jest
- **Frontend**: Vue 3, Vite, TypeScript, Tailwind CSS, Pinia, Vue Router

Although experience with these technologies is not a requirement to join our team, we are looking for people who will be
able to work and feel comfortable with this ecosystem, so we recommend you to use them.

If you are not familiar with them and you would rather do it in another language or stack, please let us know beforehand!
Don't worry, we are flexible and versatile.

## The Delivery

1. Create a **private** copy of this repository. Do not fork it.
2. Implement the assignment (backend + frontend + tests + REPORT.md).
3. Include a section in your `REPORT.md` that explains your thought process and any other information relevant to the review.
4. Invite <tech-assignments@seenons.com> as a collaborator to your private repository.

## Getting Started

```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd frontend && npm install && cd ..

# Start both backend and frontend in dev mode
npm run dev
```

The backend will start on port 3000 and the frontend on port 5173 (with API requests proxied to the backend).

## Disclaimer

Please note that this assignment is not a direct representation of how Seenons built its software.

The assignment is meant for all levels of seniority in mind, so the concepts, patterns, domain models and tools have
been simplified to ensure fairness.

## FAQ

> Do I have to strictly follow the provided project structure and naming conventions?

No, you have the flexibility to structure your project in a way that makes sense for your solution. However, please
ensure your report clearly explains any significant deviations to help reviewers follow your thought process.

> Is it okay to implement additional features not outlined in the requirements?

Oh yes! We encourage innovation and exploring new ideas.

> How should I handle any assumptions I need to make during the implementation?

You can document assumptions in your project's `REPORT.md`.

> What happens after I submit my assignment?

We will review your submission and provide feedback. You can expect the review to happen within a week of submission,
but it usually doesn't take that long.

> Are there any specific coding standards or practices I should follow?

While we have no strict requirements, we recommend following industry best practices for code quality, testing, and
documentation. This includes clear naming conventions, modular design, and comprehensive unit tests.

> Can I include third-party libraries or frameworks in my solution?

Yes, third-party libraries are allowed.

> Do I have to use the provided frontend scaffold?

No — you can replace it entirely if you prefer a different setup. The scaffold is provided to save setup time.

> Can I add memes and ASCII Art?

Please do, here's our toady lucky friend.

```
           .--._.--.
          ( O     O )
          /   . .   \
         .`._______.'.
        /(           )\
      _/  \  \   /  /  \_
   .~   `  \  \ /  /  '   ~.
  {    -.   \  V  /   .-    }
_ _`.    \  |  |  |  /    .'_ _
>_       _} |  |  | {_       _<
 /. - ~ ,_-'  .^.  `-_, ~ - .\
         '-'|/   \|`-`
```
