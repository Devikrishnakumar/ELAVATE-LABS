\# Node.js Demo App - CI/CD Pipeline



A simple Node.js Task Management API created to demonstrate an automated CI/CD pipeline using GitHub Actions and Docker.



\## Objective



The project demonstrates the following automated workflow:



GitHub Push → Run Tests → Build Docker Image → Push Image to Docker Hub



\## Technologies Used



\- Node.js

\- Express.js

\- Jest

\- Supertest

\- Docker

\- GitHub

\- GitHub Actions

\- Docker Hub



\## Application Features



The Task Management API provides:



\- Application information

\- Health check

\- List all tasks

\- Get a task by ID

\- Create a new task

\- Automated API testing



\## API Endpoints



| Method | Endpoint | Description |

|---|---|---|

| GET | `/` | Application information |

| GET | `/health` | Health check |

| GET | `/api/tasks` | Get all tasks |

| GET | `/api/tasks/:id` | Get a task by ID |

| POST | `/api/tasks` | Create a new task |



\## Project Structure



```text

nodejs-demo-app/

├── .github/

│   └── workflows/

│       └── main.yml

├── tests/

│   └── app.test.js

├── .dockerignore

├── .gitignore

├── Dockerfile

├── app.js

├── package.json

├── package-lock.json

└── README.md

