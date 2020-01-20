/**
 * 批量修改文件数字编号的脚本
 * 在终端运行 `node j.js` 即可执行
 */

const { readFileSync, writeFileSync } = require('fs');
const { resolve } = require('path');

// 这里是文件路径，改不同的文件修改这里的文件名即可
const filepath = resolve(__dirname, 'source/_posts/成语辨析.md');
let text = readFileSync(filepath, { encoding: 'utf8' });

text = text.split(/\n/).map(n => {
    if (/^\d+\.[ ]/.test(n)) {
        return n.replace(/^(\d+)\.[ ]/, (a, b, c, d) => {
            // 数字判断
            if (b >239) {
                // 这里可能会+1也有可能是-1，根据需求
                return `${Number(b) + 1}. `;
            } else {
                return a;
            }
        });
    } else {
        return n;
    }
}).join('\n');

writeFileSync(filepath, text, { encoding: 'utf8' });