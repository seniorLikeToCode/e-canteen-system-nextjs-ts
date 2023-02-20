const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  scope: '/app',
  sw: 'service-worker.js',
  skipWaiting: true,
  //...
})

module.exports = withPWA({
  // next.js config

  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'imgk.timesnownews.com',
  //       // port: '',
  //       // pathname: '/account123/**',
  //     },
  //   ],
  // },
})

// https://imgk.timesnownews.com/story/iStock-1222525485.jpg