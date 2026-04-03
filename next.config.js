/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_ACTIONS === "true";
const repoName = "hahahoho1889";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? `/${repoName}` : "",
  assetPrefix: isGithubPages ? `/${repoName}/` : "",
};

module.exports = nextConfig;
