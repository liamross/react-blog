import { PageName, isPageNameValid, titleFormatter } from './postUtils';

describe('Post Utilities', () => {
  test('isPageNameValid validates correctly', () => {
    expect(isPageNameValid(PageName.Fiction)).toBeTruthy();
    expect(isPageNameValid(PageName.NonFiction)).toBeTruthy();
    expect(isPageNameValid(PageName.Journalism)).toBeTruthy();
    expect(isPageNameValid('other-pagename')).toBeFalsy();
  });

  test('titleFormatter formats titles', () => {
    const values = [
      {
        in: '',
        out: '',
      },
      {
        in: {},
        out: '',
      },
      {
        in: null,
        out: '',
      },
      {
        in: 'Hey',
        out: 'hey',
      },
      {
        in: 'Hey  you',
        out: 'hey-you',
      },
      {
        in: 'Hey  you--there',
        out: 'hey-you-there',
      },
      {
        in: 'Hey\'s  you$--\\/th***er()e',
        out: 'heys-you-there',
      },
    ];

    values.forEach((value) => {
      expect(titleFormatter(value.in)).toBe(value.out);
    });
  });
});
