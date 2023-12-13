export const colors = {
  primary: '#2196F3',

  primaryPageColor: '#FFFFFF',
  secondaryPageColor: 'rgb(235, 235, 235)',

  previewBackgroundColor: '#212121',

  textPrimary: '#000',
  textSecondary: 'rgba(0, 0, 0, 0.38)',
  textSubtitle: 'rgba(0, 0, 0, 0.54)',
  get textActive() { return this.primary; },
  textNavigation: 'rgba(0, 0, 0, 0.54)',

  buttonColorHover: '#0B79D0',
  buttonFontColor: '#FFFFFF',

  statusSuccess: '#4CAF50',
  statusWarning: '#FF9800',
  statusError: '#F44336',

  iconHover: 'rgba(33, 150, 243, 0.04)',
  iconActive: 'rgba(33, 150, 243, 0.24)',

  get disabledControl() { return this.textSubtitle; },
  disabledButtonBG: 'rgba(0, 0, 0, 0.12)',
  disabledButtonText: 'rgba(0, 0, 0, 0.26)',

  dropDownItemHover: '#F5F5F5',
  get dragdropActive() { return this.dropDownItemHover; },
  get dragdropError() { return this.statusError; },

  inputBorderColor: 'rgba(224, 224, 224, 1)',
  get inputErrorMsg() { return this.statusError; },
  get inputErrorBorder() { return this.statusError; },

  dragdropBorder: 'rgba(0, 0, 0, 0.38)',

  placeholderColor: 'rgba(0, 0, 0, 0.54)',

  get dividerColor() { return this.inputBorderColor; },

  scrollBarColor: 'rgba(189, 189, 189, 1)'
};

export const margins = {
  general: '180px',
};

export const widths = {
  postColumn: '64.77%',
  publishedColumn: '27.85%',
  linkColumn: '7.38%',
};

export const padding = {
  button: '8px 22px',
};