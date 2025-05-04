const glob = require('fast-glob');
const fs = require('fs');
const { execSync } = require('child_process');

const files = glob.sync('*.md');
const repoUrl = 'https://github.com/Stuyk/ramblings'; // Explicitly define the repository URL

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

    try {
        // Use git log on the remote repository to find the first commit involving the file
        const creationDate = execSync(`git log --follow --diff-filter=A --format="%aI" -- ${filePath}`, {
            cwd: '.', // Make sure we are in the cloned repository's directory
            encoding: 'utf-8'
        }).trim().split('\n').pop(); // Get the last (oldest) commit date
        jsonData.push({ title, url: `${repoUrl}/blob/main/${filePath}`, creationDate });
    } catch (error) {
        console.error(`Error getting creation date for ${filePath}: ${error}`);
        jsonData.push({ title, url: `${repoUrl}/blob/main/${filePath}`, creationDate: null }); // Or some other default
    }
}

jsonData.sort((a, b) => {
    const dateA = a.creationDate ? new Date(a.creationDate) : null;
    const dateB = b.creationDate ? new Date(b.creationDate) : null;

    if (dateA && dateB) {
        return new Date(dateB).getTime() - new Date(dateA).getTime(); // Sort in descending order (newest first)
    } else if (dateA) {
        return -1;
    } else if (dateB) {
        return 1;
    } else {
        return 0;
    }
});

fs.writeFileSync('files.json', JSON.stringify(jsonData, null, 2));