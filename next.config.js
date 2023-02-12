// module.exports = {
//   reactStrictMode: true,
// };
// const withPWA = require("next-pwa");
// module.exports = withPWA({
//   pwa: {
//     dest: "public",
//     register: true,
//     disable: true,
//     skipWaiting: true,
//   },
// });

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: false,
  register: true,
  scope: '/app',
  sw: 'service-worker.js',
  skipWaiting: true,
  //...
})

module.exports = withPWA({
  // next.js config
})