const path = require('path')
const fs = require('fs')

const GIT_DIR = path.join(__dirname, '../../../', '.git')

const GIT_MESSAGE_PATH = path.join(GIT_DIR, 'COMMIT_EDITMSG')

const readGitCommitMessage = () =>
  fs.readFileSync(GIT_MESSAGE_PATH, 'utf8').trim()

const writeGitCommitMessage = ({ gitmoji, message }) =>
  fs.writeFileSync(GIT_MESSAGE_PATH, `${gitmoji} ${message}`)

const isRebasing = () => fs.existsSync(path.join(GIT_DIR, 'rebase-merge'))

module.exports = {
  readGitCommitMessage,
  writeGitCommitMessage,
  isRebasing,
}
