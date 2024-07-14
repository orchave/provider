/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
  output: "export",
  images: {
    unoptimized: true
  }
};

export default config;
