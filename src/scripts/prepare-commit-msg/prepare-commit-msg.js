const inquirer = require('inquirer')
const fuzzy = require('fuzzy')
const getGitmojis = require('./gitmoji-utils')
const {
  readGitCommitMessage,
  writeGitCommitMessage,
  isRebasing,
} = require('./git-utils')

inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'))

const prepareCommitMessage = () => {
  if (isRebasing()) return

  getGitmojis().then((gitmojis) => {
    inquirer
      .prompt([
        {
          type: 'autocomplete',
          name: 'gitmoji',
          message: 'What is your commit purpose?',
          source: (answers, input = '') =>
            new Promise((resolve) =>
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
      .then((answers) =>
        writeGitCommitMessage({
          message: readGitCommitMessage(),
          ...answers,
        })
      )
      .catch((err) => {
        console.error(err)
        process.exit(1)
      })
  })
}

module.exports = prepareCommitMessage
