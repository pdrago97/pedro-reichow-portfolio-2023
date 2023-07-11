/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: process.env.NODE_ENV === 'production' ? '/{pedro-reichow-portfolio-2023}' : '',

}

module.exports = nextConfig
