/**
 * This script checks that the proper engine versions are installed
 */
const semver = require('semver');
const package = require('../package');
const engines = package.engines;

const version = engines.node;
if (!semver.satisfies(process.version, version)) {
  console.error(`Required node version ${version} not satisfied with current version ${process.version}.`);
  console.log(`Please note that this app won't work with Node version 12 as of 2019`);
  process.exit(1);
}
