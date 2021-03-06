# quizTakingApp
Quizzy is a quiz taking app built on hapi JS with postgreSQL

## Functionality

Quizzy is quiz taking app which fetches the questions from database and send it to user.
If questions are not available in Database, it automatically populates DB from Question Bank Server. More details on server and its responses can be found in docs folder

To access API documentations, start the server by script: npm start
got to documentations link: localhost:8080/documentation

## Objective
Create an application for taking a Quiz in both React and React Native

*************************************

            QUIZ TAKER APP

*************************************

Upload your question and answers on server

/dev api will fetch responses from server and update DB

First Screen- Login:
    User logs into account, for new user, new User is created in DB
    For old users, their old answers are loaded

Second Screen- Quiz:
    Classic quiz screen. Each question carries 1 points
    The submit button will be disabled unitil all questions are answered

Third Screen- Leaderboard
    Displays your score and top performers
    Your name is highlighted if you are in leaderboard
    User can retake the quiz from here

        ***

The design which I aimed for can be found in images folder
Expected server responses can be found in ServerResponses folder
If my servers are not running you can create your own AWS lambda functions, from lambdaFunction files

## App Details

### Screen 1: Username
1. Input username
2. Verify if username exists, if he doesn't create a new user else retrieve previous answer responses for the user

Screen on mobile app
![Mobile Home page](https://raw.githubusercontent.com/siddharth-lakhara/quizTakingApp/master/docs/images/login.jpg)

Screen on web app
![Mobile Home page](https://raw.githubusercontent.com/siddharth-lakhara/quizTakingApp/master/docs/images/phone_login.jpg)

### Screen 2: Quiz form
1. Retrieve all questions from db. If it is the first time that the app is being used get the questions from external api and store them in db along with their correct answers which are to be retrieved from second external api. Read from db to send back questions and answer options to FE
2. Display all questions with their answer options. The questions will be single choice
3. In case it is a returning user show his previous answers as selected by default, otherwise no answer should be selected for a new user
4. On selection of any answer choice store the user answer in the db
5. Submit button will only be enabled when all the questions have been answered
6. On click of submit, calculate the user score by giving a +1 for each correct answer, The score for the user needs to be maintained in the db.
7. Once the score is calculated show the leaderboard

Screen on mobile app
![Mobile Home page](https://raw.githubusercontent.com/siddharth-lakhara/quizTakingApp/master/docs/images/questions.jpg)

Screen on web app
![Mobile Home page](https://raw.githubusercontent.com/siddharth-lakhara/quizTakingApp/master/docs/images/questions_mobile.jpg)

### Screen 3: Leaderboard
1. Get top 5 users and their scores
2. Display in descending order
3. If your current user is in the top 5 show his name in the list, highlighted
4. Show user score separately also on top of the page as given in design

Screen on mobile app
![Mobile Home page](https://raw.githubusercontent.com/siddharth-lakhara/quizTakingApp/master/docs/images/leaderboard.jpg)

Screen on web app
![Mobile Home page](https://raw.githubusercontent.com/siddharth-lakhara/quizTakingApp/master/docs/images/leaderboard_mobile.jpg)
