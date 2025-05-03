const glob = require('fast-glob');
const fs = require('fs');
const { execSync } = require('child_process');

const files = glob.sync('*.md');

const jsonData = [];

for(let filePath of files) {
    const data = fs.readFileSync(filePath, 'utf-8');
    const titleMatch = data.match(/^#\s+(.*)/m);
    let title = 'No Title Found';
    if (titleMatch && titleMatch[1]) {
        title = titleMatch[1];
    }

    if (title.toLowerCase().includes('ramblings')) {
        continue;
    }

    const creationDate = execSync(`git log --diff-filter=A --format="%aI" -- ${filePath}`, { encoding: 'utf-8' }).trim();
    jsonData.push({ title, url: `https://raw.githubusercontent.com/Stuyk/ramblings/main/${filePath}`, creationDate });
}

jsonData.sort((a, b) => {
    const dateA = a.creationDate ? new Date(a.creationDate) : null;
    const dateB = b.creationDate ? new Date(b.creationDate) : null;

    if (dateA && dateB) {
        return  dateB.getTime() - dateA.getTime() // Sort in ascending order (oldest first)
    } else if (dateA) {
        return -1;
    } else if (dateB) {
        return 1; // Items without a valid date come after those with
    } else {
        return 0; // Both have no valid date, maintain original order
    }
});

fs.writeFileSync('files.json', JSON.stringify(jsonData));