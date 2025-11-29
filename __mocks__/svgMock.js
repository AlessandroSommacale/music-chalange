const React = require('react');
console.log('SVG Mock Loaded');
function SvgrMock(props) {
  return React.createElement('span', props);
}
module.exports = SvgrMock;
module.exports.default = SvgrMock;
module.exports.ReactComponent = SvgrMock;
