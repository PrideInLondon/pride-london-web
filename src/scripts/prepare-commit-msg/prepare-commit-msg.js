const inquirer = require('inquirer')
const getGitmojis = require('./gitmoji-utils')
const {
  getJiraInfoFromBranch,
  readGitCommitMessage,
  writeGitCommitMessage,
} = require('./git-utils')

const JIRA_BOARD_IDS = ['WEBNEW', 'WEBREF']

const generateQuestions = ({ gitmojis, jiraInfo: { boardId, ticketId } }) => [
  {
    name: 'boardId',
    type: 'list',
    message: 'What is your Jira board ID?',
    choices: JIRA_BOARD_IDS,
    default: boardId,
  },
  {
    name: 'ticketId',
    type: 'input',
    message: 'What is your Jira ticket number?',
    validate: input => /^\d+$/.test(input) || 'Please enter a valid number',
    default: ticketId,
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

const prepareCommitMessage = () =>
  getGitmojis().then(gitmojis => {
    inquirer
      .prompt(
        generateQuestions({ gitmojis, jiraInfo: getJiraInfoFromBranch() })
      )
      .then(answers =>
        writeGitCommitMessage({ message: readGitCommitMessage(), ...answers })
      )
      .catch(err => {
        console.error(err)
        process.exit(1)
      })
  })

module.exports = prepareCommitMessage
