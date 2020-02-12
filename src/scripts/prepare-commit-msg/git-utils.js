const path = require('path')
const { execSync } = require('child_process')
const fs = require('fs')

const GIT_MESSAGE_PATH = path.join(
  __dirname,
  '../../../',
  '.git/COMMIT_EDITMSG'
)

const getBranchName = () =>
  execSync('git rev-parse --abbrev-ref HEAD').toString()

const getJiraInfoFromBranch = () => {
  const branchName = getBranchName()
  const result = /^(?<boardId>[A-Z]+)-(?<ticketId>\d+)/.exec(branchName)
  return (result && result.groups) || {}
}

const readGitCommitMessage = () =>
  fs.readFileSync(GIT_MESSAGE_PATH, 'utf8').trim()

const writeGitCommitMessage = ({ boardId, ticketId, gitmoji, message }) =>
  fs.writeFileSync(
    GIT_MESSAGE_PATH,
    `${boardId}-${ticketId} ${gitmoji} ${message}`
  )

module.exports = {
  getJiraInfoFromBranch,
  readGitCommitMessage,
  writeGitCommitMessage,
}
