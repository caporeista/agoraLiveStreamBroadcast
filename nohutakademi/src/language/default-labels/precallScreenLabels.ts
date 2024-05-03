import {ClientRoleType} from '../../../agora-rn-uikit';
import {I18nBaseType, I18nConditionalType} from '../i18nTypes';

export interface PrecallJoinBtnTextInterface {
  ready: boolean;
  role?: ClientRoleType;
  waitingRoom?: boolean;
}

export const permissionPopupHeading = `permissionPopupHeading`;
export const permissionPopupSubHeading = `permissionPopupSubHeading`;
export const permissionPopupDismissBtnText = `permissionPopupDismissBtnText`;
export const permissionPopupErrorToastHeading = `permissionPopupErrorToastHeading`;
export const permissionPopupErrorToastSubHeading = `permissionPopupErrorToastSubHeading`;

export const settingsPanelHeading = `settingsPanelHeading`;
export const settingsPanelMicrophoneLabel = 'settingsPanelMicrophoneLabel';
export const settingsPanelNoMicrophoneDetectedText =
  'settingsPanelNoMicrophoneDetectedText';
export const settingsPanelNoMicrophoneSelectedText =
  'settingsPanelNoMicrophoneSelectedText';
export const settingsPanelCameraLabel = 'settingsPanelCameraLabel';
export const settingsPanelNoCameraDetectedText =
  'settingsPanelNoCameraDetectedText';
export const settingsPanelNoCameraSelectedText =
  'settingsPanelNoCameraSelectedText';
export const settingsPanelSpeakerLabel = 'settingsPanelSpeakerLabel';
export const settingsPanelNoSpeakerDetectedText =
  'settingsPanelNoSpeakerDetectedText';
export const settingsPanelNoSpeakerSelectedText =
  'settingsPanelNoSpeakerSelectedText';
export const settingsPanelSystemDefaultSpeakerText =
  'settingsPanelSystemDefaultSpeakerText';
export const settingsPanelLiveStreamingAttendeeInfo =
  'settingsPanelLiveStreamingAttendeeInfo';
export const settingsPanelUpdatingText = 'settingsPanelUpdatingText';

export const settingsPanelLanguageLabel = 'settingsPanelLanguageLabel';

export const precallYouAreJoiningAsHeading = 'precallYouAreJoiningAsHeading';
export const precallNameInputPlaceholderText =
  'precallNameInputPlaceholderText';
export const precallJoinBtnText = 'precallJoinBtnText';
export const precallInputGettingName = 'precallInputGettingName';

export const vbPanelHeading = 'vbPanelHeading';
export const vbPanelInfo = 'vbPanelInfo';
export const vbPanelOptionNoneText = 'vbPanelOptionNoneText';
export const vbPanelOptionBlurText = 'vbPanelOptionBlurText';
export const vbPanelOptionCustomText = 'vbPanelOptionCustomText';

export interface I18nPrecallScreenLabelsInterface {
  [permissionPopupHeading]?: I18nBaseType;
  [permissionPopupSubHeading]?: I18nBaseType;
  [permissionPopupDismissBtnText]?: I18nBaseType;
  [permissionPopupErrorToastHeading]?: I18nBaseType;
  [permissionPopupErrorToastSubHeading]?: I18nBaseType;

  [settingsPanelHeading]?: I18nBaseType;

  [settingsPanelCameraLabel]?: I18nBaseType;
  [settingsPanelNoCameraDetectedText]?: I18nBaseType;
  [settingsPanelNoCameraSelectedText]?: I18nBaseType;

  [settingsPanelMicrophoneLabel]?: I18nBaseType;
  [settingsPanelNoMicrophoneDetectedText]?: I18nBaseType;
  [settingsPanelNoMicrophoneSelectedText]?: I18nBaseType;

  [settingsPanelSpeakerLabel]?: I18nBaseType;
  [settingsPanelNoSpeakerDetectedText]?: I18nBaseType;
  [settingsPanelNoSpeakerSelectedText]?: I18nBaseType;
  [settingsPanelSystemDefaultSpeakerText]?: I18nBaseType;

  [settingsPanelLiveStreamingAttendeeInfo]?: I18nBaseType;
  [settingsPanelUpdatingText]?: I18nBaseType;
  [settingsPanelLanguageLabel]?: I18nBaseType;

  [precallYouAreJoiningAsHeading]?: I18nBaseType;
  [precallNameInputPlaceholderText]?: I18nBaseType;
  [precallJoinBtnText]?: I18nBaseType<PrecallJoinBtnTextInterface>;

  [vbPanelHeading]?: I18nBaseType;
  [vbPanelInfo]?: I18nConditionalType;
  [vbPanelOptionNoneText]?: I18nBaseType;
  [vbPanelOptionBlurText]?: I18nBaseType;
  [vbPanelOptionCustomText]?: I18nBaseType;

  [precallInputGettingName]?: I18nBaseType;
}

export const PrecallScreenLabels: I18nPrecallScreenLabelsInterface = {
  //permission popup
  [permissionPopupHeading]: ({audioRoom}) =>
    audioRoom
      ? 'Mikrofona erişime izin ver'
      : 'Kamera ve mikrofona erişime izin ver',
  [permissionPopupSubHeading]: ({audioRoom}) =>
    audioRoom
      ? '"İzin Ver" seçeneğini seçin, böylece diğerleri sizi duyabilir'
      : '"İzin Ver" seçeneğini seçin, böylece diğerleri sizi görebilir ve duyabilir',
  [permissionPopupDismissBtnText]: 'Kapat',
  [permissionPopupErrorToastHeading]: ({audioRoom}) =>
    `Cihazınızda ${audioRoom ? 'mikrofon' : 'kamera'} bulunamıyor`,
  [permissionPopupErrorToastSubHeading]: audioRoom =>
    `Cihazınızda bir ${
      audioRoom ? 'mikrofon' : 'kamera'
    } olduğundan emin olmak için sistem ayarlarınızı kontrol edin. Yoksa bir tane takın ve tarayıcınızı yeniden başlatın`,

  [settingsPanelHeading]: 'Ayarlar',

  [settingsPanelCameraLabel]: 'Kamera',
  [settingsPanelNoCameraDetectedText]: 'Kamera Tespit Edilmedi',
  [settingsPanelNoCameraSelectedText]: 'Kamera Seçilmedi',

  [settingsPanelMicrophoneLabel]: 'Mikrofon',
  [settingsPanelNoMicrophoneDetectedText]: 'Mikrofon Tespit Edilmedi',
  [settingsPanelNoMicrophoneSelectedText]: 'Mikrofon Seçilmedi',

  [settingsPanelSpeakerLabel]: 'Hoparlör',
  [settingsPanelNoSpeakerDetectedText]: 'Hoparlör Tespit Edilmedi',
  [settingsPanelNoSpeakerSelectedText]: 'Hoparlör Seçilmedi',
  [settingsPanelSystemDefaultSpeakerText]: 'Sistem Varsayılan Hoparlör Aygıtı',

  [settingsPanelLiveStreamingAttendeeInfo]:
    'Katılımcıların cihazlara erişmek için el kaldırmaları gerekiyor.',
  [settingsPanelUpdatingText]: 'Güncelleniyor',

  [settingsPanelLanguageLabel]: 'Dil',

  [precallYouAreJoiningAsHeading]: 'Katılma Durumunuz',
  [precallNameInputPlaceholderText]: 'Adınızı Girin',
  [precallInputGettingName]: 'Ad alınıyor...',
  [precallJoinBtnText]: ({waitingRoom, ready, role}) => {
    if (waitingRoom) {
      return ready ? 'Katılmak için Sor' : `Onay bekleniyor...`;
    } else {
      return ready
        ? !role
          ? 'ODAYA KATIL'
          : `ODAYA ${
              role === ClientRoleType.ClientRoleBroadcaster
                ? 'YAYINCI'
                : 'İZLEYİCİ'
            } OLARAK KATIL`
        : `Yükleniyor...`;
    }
  },

  [vbPanelHeading]: 'Sanal Arka Plan',
  [vbPanelInfo]: (isCamOn: boolean) =>
    isCamOn
      ? 'Kamera şu anda kapalı. Seçilen arka plan kameranız açıldığında uygulanacak.'
      : 'Kameranız kapalı. Kameranız açıldığında uygulanmak üzere bir arka plan kaydedin.',
  [vbPanelOptionNoneText]: 'Yok',
  [vbPanelOptionBlurText]: 'Bulanık',
  [vbPanelOptionCustomText]: 'Özel',

};
