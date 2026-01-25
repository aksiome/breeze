import fs from 'fs';
import octicons from '@primer/octicons';
import * as simpleIcons from 'simple-icons';

const outputPath = new URL(
  '../src/sphinx_breeze_theme/theme/breeze/static/icons.json',
  import.meta.url
);

function genSimpleIcons() {
  return Object.fromEntries(
    Object.entries(simpleIcons)
      .filter(([, icon]) => icon && typeof icon.path === "string")
      .map(([name, icon]) => [
        name.slice(2).toLowerCase(),
        { "24": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="${icon.path}"/></svg>` }
      ])
  );
}

function genOcticons() {
  return Object.fromEntries(
    Object.entries(octicons).map(([name, icon]) => {
      return [name, {
        "16": makeOcticonSvg(icon, 16),
        "24": makeOcticonSvg(icon, 24),
      }];
    })
  );
}

function makeOcticonSvg(icon, size) {
  const naturalHeights = Object.keys(icon.heights);
  const height = naturalHeights
    .map(h => parseInt(h, 10))
    .reduce((acc, h) => (h <= size ? h : acc), naturalHeights[0]);
  const { path } = icon.heights[height];
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${height} ${height}" fill="currentColor">${path}</svg>`;
}

const icons = {...genOcticons(), ...genSimpleIcons()};
fs.writeFileSync(outputPath, JSON.stringify(icons, null, 2));
