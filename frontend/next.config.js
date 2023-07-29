/** @type {import('next').NextConfig} */
const nextConfig = {};

// next.config.js
module.exports = {
  onDemandEntries: {
    // Set the maxInactiveAge to 0 for disabling server-side caching
    maxInactiveAge: 0,
    // Set the pagesBufferLength to 1 for disabling client-side caching
    pagesBufferLength: 1,
  },
};
