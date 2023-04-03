import { devLog } from './dev';

export const initTelegramWebApp = (): boolean => {
  try {
    Telegram.WebApp.enableClosingConfirmation();
    Telegram.WebApp.expand();
    Telegram.WebApp.ready();

    const { colorScheme, themeParams } = Telegram.WebApp;

    devLog(
      'Telegram-Web-App SDK init with theme:',
      colorScheme,
      JSON.stringify(themeParams)
    );

    return true;
  } catch (error) {
    devLog('Telegram-Web-App SDK init error:', error);

    return false;
  }
};
