const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')
const getGitmojis = require('./gitmoji-utils')

const JIRA_BOARD_IDS = ['WEBNEW', 'WEBREF']

const generateQuestions = gitmojis => [
  {
    name: 'boardId',
    type: 'list',
    message: 'What is your Jira board ID?',
    choices: JIRA_BOARD_IDS,
  },
  {
    name: 'ticketId',
    type: 'input',
    message: 'What is your Jira ticket number?',
    validate: input => /^\d+$/.test(input) || 'Please enter a valid number',
  },
  {
    name: 'gitmoji',
    type: 'list',
    message: 'What is your commit purpose?',
    choices: gitmojis.map(({ emoji, description, code }) => ({
      name: `${emoji} - ${description}`,
      value: code,
    })),
  },
]

const GIT_MESSAGE_PATH = path.join(
  __dirname,
  '../../../',
  '.git/COMMIT_EDITMSG'
)

const readGitCommitMessage = () =>
  fs.readFileSync(GIT_MESSAGE_PATH, 'utf8').trim()

const writeGitCommitMessage = ({ boardId, ticketId, gitmoji, message }) =>
  fs.writeFileSync(
    GIT_MESSAGE_PATH,
    `${boardId}-${ticketId} ${gitmoji} ${message}`
  )

const prepareCommitMessage = () =>
  getGitmojis().then(gitmojis => {
    inquirer
      .prompt(generateQuestions(gitmojis))
      .then(answers =>
        writeGitCommitMessage({ message: readGitCommitMessage(), ...answers })
      )
      .catch(err => {
        console.error(err)
        process.exit(1)
      })
  })

module.exports = prepareCommitMessage
