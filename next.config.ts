const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/rand0wn.github.io/' : '',
  basePath: isProd ? '/rand0wn.github.io' : '',
  output: 'export'
};

export default nextConfig;