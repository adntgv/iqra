const fs = require('fs');
const path = require('path');

const sourceFile = path.join(__dirname, '..', 'messages', 'en.json');
const targetLocales = ['ru', 'kk'];

function generateTranslations() {
  const sourceContent = JSON.parse(fs.readFileSync(sourceFile, 'utf8'));

  targetLocales.forEach(locale => {
    const targetFile = path.join(__dirname, '..', 'messages', `${locale}.json`);
    let targetContent = {};

    if (fs.existsSync(targetFile)) {
      targetContent = JSON.parse(fs.readFileSync(targetFile, 'utf8'));
    }

    const mergedContent = mergeTranslations(sourceContent, targetContent);
    fs.writeFileSync(targetFile, JSON.stringify(mergedContent, null, 2), 'utf8');
    console.log(`Generated translations for ${locale}`);
  });
}

function mergeTranslations(source, target, prefix = '') {
  const result = { ...target };

  for (const [key, value] of Object.entries(source)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'object' && value !== null) {
      result[key] = mergeTranslations(value, target[key] || {}, fullKey);
    } else if (!(key in result)) {
      result[key] = `[${fullKey}]`;
    }
  }

  return result;
}

generateTranslations();