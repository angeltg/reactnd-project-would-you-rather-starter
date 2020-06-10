export function formatQuestion(question, users) {
  const { id, author, optionOne, optionTwo } = question;
  const { name, avatarURL } = users[author];

  return {
    name,
    id,
    optionOne,
    optionTwo,
    avatar: avatarURL,
  };
}

export function getOneQuestionUnanswered(questions, authedUser, users) {
  const user = users[authedUser];
  let isQuestionAnswered = false;
  let questionsUnanswered = null;
  for (let i in questions) {
    isQuestionAnswered = false;
    for (let x in user.answers) {
      if (questions[i].id === x) {
        isQuestionAnswered = true;
      }
    }

    if (!isQuestionAnswered) {
      questionsUnanswered = questions[i];
      break;
    }
  }
  return questionsUnanswered;
}

export function isQuestionAnswered(questionId, users, authedUser) {
  const user = users[authedUser];
  for (let x in user.answers) {
    if (questionId === x) {
      return true;
    }
  }
  return false;
}

export function getRank(users) {
  let usersRank = [];
  let usersTotal = [];

  for (let i in users) {
    usersTotal.push({
      id: i,
      name: users[i].name,
      avatarURL: users[i].avatarURL,
      answersTotal: Object.keys(users[i].answers).length,
      questionsTotal: users[i].questions.length,
      total: users[i].questions.length + Object.keys(users[i].answers).length,
    });
  }

  usersRank = usersTotal.sort(function (a, b) {
    return b["total"] - a["total"];
  });
  return usersRank;
}

function formatedQuestionForList(question, users, id) {
  const author = users[question.author];
  return {
    id,
    name: author.name,
    avatarURL: author.avatarURL,
    optionOneText: question.optionOne.text,
    timestamp: question.timestamp,
  };
}

function sortQuestions(questions) {
  return questions.sort((a, b) => b.timestamp - a.timestamp);
}

export function formatQuestionList(questions, authedUser, users) {
  let answeredQuestions = [];
  let unansweredQuestions = [];
  if (authedUser) {
    for (let x in questions) {
      let finded = false;
      for (let i in authedUser.answers) {
        x === i && (finded = true);
      }

      finded
        ? answeredQuestions.push(
            formatedQuestionForList(questions[x], users, x)
          )
        : unansweredQuestions.push(
            formatedQuestionForList(questions[x], users, x)
          );
    }
  }

  unansweredQuestions = sortQuestions(unansweredQuestions);
  answeredQuestions = sortQuestions(answeredQuestions);

  return { unansweredQuestions, answeredQuestions };
}

export function percent(value, total) {
  return Math.round((value * 100) / total);
}
