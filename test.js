// A simple test to verify a visible window is opened with a title
var Application = require('spectron').Application
var assert = require('assert')

var app = new Application({
  path: './OutFlux-linux-x64/OutFlux'
})

app.start().then(function () {
  // Check if the window is visible
  return app.browserWindow.isVisible();
}).then(function (isVisible) {
  console.log('Browser Window is visible');
  // Verify the window is visible
  assert.equal(isVisible, true);
}).then(function () {
  // Get the window's title
  return app.client.getTitle()
}).then(function (title) {
  // Verify the window's title
  assert.equal(title, 'OutFlux')
}).then(function () {
  // Stop the application
  console.log("Test is Successful!");
  
  return app.stop()
}).catch(function (error) {
  // Log any failures
  console.error('Test failed: ', error.message)

  return error
})
