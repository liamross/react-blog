export const PageName = {
  Fiction: 'fiction',
  NonFiction: 'non-fiction',
  Journalism: 'journalism',
};

export const isPageNameValid = pageName => pageName
    && typeof pageName === 'string'
    && (
      pageName === PageName.Fiction
      || pageName === PageName.NonFiction
      || pageName === PageName.Journalism
    );

export const titleFormatter = (title) => {
  if (title && typeof title === 'string') {
    return title
      .toLowerCase()
      .replace(/[^a-zA-Z\- ]/g, '')
      .replace(/ /g, '-')
      .replace(/-+/g, '-');
  }
  return '';
};
