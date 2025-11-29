module.exports = {
  process() {
    return {
      code: `
        const React = require('react');
        function SvgrMock(props) {
          return React.createElement('span', props);
        }
        module.exports = SvgrMock;
        module.exports.default = SvgrMock;
        module.exports.ReactComponent = SvgrMock;
      `,
    };
  },
};
