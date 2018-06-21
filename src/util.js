export const hasCommentFlag = (row, flag) => {
  return row.replace(new RegExp(' ', 'g'), '').toLowerCase() === flag;
};