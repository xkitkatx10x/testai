/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configura Next.js per utilizzare la directory src
  reactStrictMode: true,
  swcMinify: true,
  // Specifica il percorso della directory pages
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  // Indica a Next.js che le pagine si trovano nella directory src
  distDir: 'dist',
  experimental: {
    appDir: false
  }
}

module.exports = nextConfig