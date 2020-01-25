const Enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')

window.matchMedia =
  window.matchMedia ||
  function() {
    return {
      matches: false,
      addListener: function() {},
      removeListener: function() {},
    }
  }

window.requestAnimationFrame =
  window.requestAnimationFrame ||
  function(callback) {
    setTimeout(callback, 0)
  }

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() })

// Gatsby overrides
global.___loader = {
  enqueue: jest.fn(),
}
