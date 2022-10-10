const path = require("path");

const getPaths = () => {
  const __workspace =
    process.env.WORKSPACE_ENV && process.env.WORKSPACE_ENV.length
      ? `../${process.env.WORKSPACE_ENV}`
      : "";

  return {
    src: path.join(__dirname, __workspace, "./src"),
    dist: path.join(__dirname, __workspace, "./dist"),
    assets: "assets",
  };
};

module.exports = getPaths;
