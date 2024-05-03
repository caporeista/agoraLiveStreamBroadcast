import {I18nBaseType} from '../i18nTypes';

export const cancelText = 'cancelText';
export const loadingText = 'loadingText';
export const logoutText = 'logoutText';
export const authLogoutPopupHeading = 'authLogoutPopupHeading';
export const authLogoutPopupSubHeading = 'authLogoutPopupSubHeading';
export const authLogoutPopupPrimaryBtnText = 'authLogoutPopupPrimaryBtnText';
export const authLogInRequiredPopupHeading = 'authLogInRequiredPopupHeading';
export const authLogInRequiredPopupSubHeading =
  'authLogInRequiredPopupSubHeading';
export const authLogInRequiredPopupPrimaryBtnText =
  'authLogInRequiredPopupPrimaryBtnText';
export const authLogInRequiredPopupSecondaryBtnText =
  'authLogInRequiredPopupSecondaryBtnText';

export const authSessionTimeoutToastHeading = 'authSessionTimeoutToastHeading';
export const authErrorOnLoginToastHeading = 'authErrorOnLoginToastHeading';
export const authAuthenticationFailedText = 'authAuthenticationFailedText';
export const authAuthorizingApplicationText = 'authAuthorizingApplicationText';

export interface I18nCommonLabelsInterface {
  [cancelText]?: I18nBaseType;
  [loadingText]?: I18nBaseType;
  [logoutText]?: I18nBaseType;
  [authLogoutPopupHeading]?: I18nBaseType;
  [authLogoutPopupSubHeading]?: I18nBaseType;
  [authLogoutPopupPrimaryBtnText]?: I18nBaseType;

  [authLogInRequiredPopupHeading]?: I18nBaseType;
  [authLogInRequiredPopupSubHeading]?: I18nBaseType;
  [authLogInRequiredPopupPrimaryBtnText]?: I18nBaseType;
  [authLogInRequiredPopupSecondaryBtnText]?: I18nBaseType;

  [authSessionTimeoutToastHeading]?: I18nBaseType;
  [authErrorOnLoginToastHeading]?: I18nBaseType;
  [authAuthenticationFailedText]?: I18nBaseType;
  [authAuthorizingApplicationText]?: I18nBaseType;
}

export const CommonLabels: I18nCommonLabelsInterface = {
  [cancelText]: 'İPTAL',
  [loadingText]: 'Yükleniyor...',
  [logoutText]: 'Çıkış Yap',
  [authLogoutPopupHeading]: 'Çıkış Yap?',
  [authLogoutPopupSubHeading]: 'Eminmisin?',
  [authLogoutPopupPrimaryBtnText]: 'ONAYLA',

  [authLogInRequiredPopupHeading]: 'Giriş Yapmanız Gerekiyor',
  [authLogInRequiredPopupSubHeading]: 'Devam etmek için giriş yapmalısınız.',
  [authLogInRequiredPopupPrimaryBtnText]: 'GİRİŞ YAP',
  [authLogInRequiredPopupSecondaryBtnText]: 'KAPAT',

  [authSessionTimeoutToastHeading]: 'Oturum süreniz doldu. Lütfen tekrar giriş yapın.',
  [authErrorOnLoginToastHeading]: 'Giriş yapılırken bir hata oluştu. Lütfen tekrar deneyin',
  [authAuthenticationFailedText]: 'Kimlik doğrulama başarısız oldu. Lütfen tekrar deneyin.',
  [authAuthorizingApplicationText]: 'Uygulama yetkilendiriliyor...',
};
