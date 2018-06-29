import fs from 'fs';

export const hasCommentFlag = (row, flag) => {
  return row.replace(new RegExp(' ', 'g'), '').toLowerCase() === flag;
};

export const injectTextInFileAfterFlag = ({ filePath, flag, content, flagIndexOffset = 1 }) => {
  const fileRows = fs.readFileSync(filePath).toString().split('\n');

  for (let i = 0; i < fileRows.length; i++) {
    if (hasCommentFlag(fileRows[i], flag)) {
      fileRows.splice(i + flagIndexOffset, 0, content);
      break;
    }
  }

  fs.writeFileSync(filePath, fileRows.join('\n'));
};

export const injectTextInFileAtTheEnd = ({ filePath, content }) => {
  const fileRows = fs.readFileSync(filePath).toString().split('\n');

  fileRows.push(content);

  fs.writeFileSync(filePath, fileRows.join('\n'));
};
