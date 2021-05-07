export const CHANGE_LANG = 'CHANGE_LANG';

export const language = lang => {
  return {
    type: CHANGE_LANG,
    langtype: lang,
  };
};
