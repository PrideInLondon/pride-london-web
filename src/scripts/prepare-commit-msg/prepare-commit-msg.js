const inquirer = require('inquirer')
const chalk = require('chalk')
const getGitmojis = require('./gitmoji-utils')
const {
  getJiraInfoFromBranch,
  readGitCommitMessage,
  writeGitCommitMessage,
} = require('./git-utils')

const generateQuestions = ({ gitmojis }) => [
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

const prepareCommitMessage = () => {
  const jiraInfo = getJiraInfoFromBranch()
  if (!jiraInfo.boardId || !jiraInfo.ticketId) {
    console.error(
      chalk.red('\nYou must be on a branch with name ') +
        chalk.yellow('JIRABOARD-JIRATICKET/description-of-ticket') +
        chalk.red(' to continue (e.g. ') +
        chalk.yellow('WEBREF-123/migrating-component-x-to-hooks') +
        chalk.red(')\n')
    )
    process.exit(1)
  }

  console.log(
    chalk.cyan(`\nTagging commit as ${jiraInfo.boardId}-${jiraInfo.ticketId}\n`)
  )

  getGitmojis().then(gitmojis => {
    inquirer
      .prompt(generateQuestions({ gitmojis }))
      .then(answers =>
        writeGitCommitMessage({
          message: readGitCommitMessage(),
          ...jiraInfo,
          ...answers,
        })
      )
      .catch(err => {
        console.error(err)
        process.exit(1)
      })
  })
}

module.exports = prepareCommitMessage
