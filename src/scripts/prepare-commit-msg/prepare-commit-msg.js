const inquirer = require('inquirer')
const chalk = require('chalk')
const fuzzy = require('fuzzy')
const getGitmojis = require('./gitmoji-utils')
const {
  getJiraInfoFromBranch,
  readGitCommitMessage,
  writeGitCommitMessage,
  isRebasing,
} = require('./git-utils')

inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'))

const prepareCommitMessage = () => {
  if (isRebasing()) return

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
      .prompt([
        {
          type: 'autocomplete',
          name: 'gitmoji',
          message: 'What is your commit purpose?',
          source: (answers, input = '') =>
            new Promise(resolve =>
              setTimeout(
                () =>
                  resolve(
                    fuzzy
                      .filter(
                        input,
                        gitmojis.map(({ description }) => description)
                      )
                      .map(({ original }) => {
                        const { emoji, description, code } = gitmojis.find(
                          ({ description }) => description === original
                        )
                        return {
                          name: `${emoji} - ${description}`,
                          value: code,
                        }
                      })
                  ),
                75
              )
            ),
        },
      ])
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
