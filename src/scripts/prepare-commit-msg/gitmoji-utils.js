const fs = require('fs')
const path = require('path')
const fetch = require('node-fetch')

const GITMOJIS_URL =
  'https://raw.githubusercontent.com/carloscuesta/gitmoji/master/src/data/gitmojis.json'

const CACHE_DIR = path.join(__dirname, '../../../', '.commit-msg')

const CACHE_PATH = path.join(CACHE_DIR, 'gitmojis.json')

const isCacheAvailable = () => fs.existsSync(CACHE_PATH)

const getGitmojis = () =>
  isCacheAvailable() ? getGitmojisFromCache() : getGitmojisFromRemote()

const createGitmojisCache = (gitmojis) => {
  if (!fs.existsSync(path.dirname(CACHE_PATH)))
    fs.mkdirSync(path.dirname(CACHE_PATH))

  fs.writeFileSync(CACHE_PATH, JSON.stringify(gitmojis))

  return gitmojis
}

const getGitmojisFromCache = () =>
  Promise.resolve(JSON.parse(fs.readFileSync(CACHE_PATH)))

const getGitmojisFromRemote = () =>
  fetch(GITMOJIS_URL)
    .then((response) => response.json())
    .then(({ gitmojis }) => createGitmojisCache(gitmojis))
    .catch((error) => console.error(error))

module.exports = getGitmojis
