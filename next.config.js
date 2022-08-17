/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withInterceptStdout = require('next-intercept-stdout');

module.exports = withInterceptStdout(
  {
    // images: {
    //   domains: [],
    // },
  },

  (text) => (text.includes('Duplicate atom key') ? '' : text)
);
