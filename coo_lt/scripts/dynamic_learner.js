const fs = require('fs');
const path = require('path');

// Path to your main skill file
const SKILL_FILE_PATH = path.join(__dirname, '../skill.md');

// Function to append new rules to the Dynamic Learning Log
function learnRule(newRuleText) {
    const timestamp = new Date().toISOString().split('T')[0];
    const appendText = `\n\n### Learned Rule (${timestamp})\n* ${newRuleText}`;

    fs.appendFile(SKILL_FILE_PATH, appendText, (err) => {
        if (err) {
            console.error('Error updating Memory:', err);
        } else {
            console.log(`[Success] New rule added to SupernautPrime: "${newRuleText}"`);
        }
    });
}

// Check for command line arguments (Simulation for !learn command)
const args = process.argv.slice(2);
if (args.length > 0) {
    const rule = args.join(' ');
    learnRule(rule);
}
