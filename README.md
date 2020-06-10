# Would You Rather Project

This is the starter code for the final assessment project for Udacity's React & Redux course.

Select users, answer questions, create a new question, see the leader board and do logout.

## Installation

To get started right away:

- clone the repository
- cd reactnd-project-would-you-rather-starter
- install all project dependencies with npm install
- start the development server with npm start

### What You're Getting

```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html
└── src
    ├── App.css # Styles for your app.
    ├── App.js # This is the root of the app.
    ├── serviceWorker.js
    ├── index.css # Global styles.
    ├── index.js
    ├── actions # Actions for Redux
    │   ├── authedUser.js
    │   ├── questions.js
    │   ├── shared.js
    │   ├── users.js
    ├── Components
    │   ├── App.js #Principal component
    │   ├── Graph.js #Grafic of results of questions
    │   ├── Header.js #Nav and authed user
    │   ├── Loggin.js #Home before loggin
    │   ├── NewQuestion.js #Create a new question
    │   ├── PageNotFound.js #Page 404
    │   ├── Question.js #Generic viewe for a question
    │   ├── QuestionOptionsForm.js #Form to create new questions
    │   ├── QuestionResults.js #Results of the questions
    │   ├── QuestionList.js #A question into the list
    │   ├── QuestionLists.js #List of questions
    │   ├── ResultBox.js #Content results of a question
    │   ├── UserCardRank.js #Card in the leaders board
    │   ├── UserControl.js #Logout of a user
    │   ├── UserOption.js #Mark the answer for the authed user
    │   └── UsersRank.js #Leaders list
    ├── Middleware
    │   ├── index.js
    │   └── logger.js
    ├── reducers # Reducers fot Redux
    │   ├── authedUser.js
    │   ├── index.js
    │   ├── questions.js
    │   └── users.js
    ├── utils
    │   ├── _DATA.js #data to initialize the app
    │   ├── api.js #Apis to connect with DATA
    │   └── helpers.js #Generic funtions
    │  
    └──
```

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests. For details, check out [CONTRIBUTING.md](https://github.com/udacity/reactnd-project-would-you-rather-starter/blob/master/CONTRIBUTING.md).
