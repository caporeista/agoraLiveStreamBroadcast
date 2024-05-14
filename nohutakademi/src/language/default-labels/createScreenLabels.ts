import {I18nBaseType, I18nDynamicType} from '../i18nTypes';

export const room = 'Room';
export const createRoomHeading = `create${room}Heading`;
export const createRoomInputLabel = `create${room}InputLabel`;
export const createRoomInputPlaceholderText = `create${room}InputPlaceholderText`;
export const createRoomMakeEveryOneCoHost = `create${room}MakeEveryOneCoHost`;
export const createRoomMakeEveryOneCoHostTooltipText = `create${room}MakeEveryOneCoHostTooltipText`;

export const createRoomAllowPhoneNumberJoining = `create${room}AllowPhoneNumberJoining`;
export const createRoomAllowPhoneNumberJoiningTooltipText = `create${room}AllowPhoneNumberJoiningTooltipText`;

export const createRoomBtnText = `create${room}BtnText`;
export const createRoomJoinWithID = `create${room}JoinWithID`;

export const createRoomSuccessToastHeading = `create${room}SuccessToastHeading`;
export const createRoomSuccessToastSubHeading = `create${room}SuccessToastSubHeading`;

export const createRoomErrorToastHeading = `create${room}ErrorToastHeading`;
export const createRoomErrorToastSubHeading = `create${room}ErrorToastSubHeading`;
// [screen/[sidepanel/chat/setting/vb]] [room or action] [where is placed/label/text/heading/subheading/tooltiptext/content]
//label for buttons
//heading/subheading for toast
//text inside button text
//text outside button called label
//btn use chatPanel
//chatPanelInputPlaceHolder
//settingPanelHeading

export interface I18nCreateScreenLabelsInterface {
  [createRoomHeading]?: I18nBaseType;
  [createRoomInputLabel]?: I18nBaseType;
  [createRoomInputPlaceholderText]?: I18nBaseType;
  [createRoomMakeEveryOneCoHost]?: I18nBaseType; //
  [createRoomMakeEveryOneCoHostTooltipText]?: I18nBaseType; //
  [createRoomAllowPhoneNumberJoining]?: I18nBaseType; //
  [createRoomAllowPhoneNumberJoiningTooltipText]?: I18nBaseType; //
  [createRoomBtnText]?: I18nBaseType;
  [createRoomJoinWithID]?: I18nBaseType; //
  [createRoomSuccessToastHeading]?: I18nDynamicType; //
  [createRoomSuccessToastSubHeading]?: I18nBaseType; //
  [createRoomErrorToastHeading]?: I18nBaseType; //
  [createRoomErrorToastSubHeading]?: I18nBaseType; //
}
export const CreateScreenLabels: I18nCreateScreenLabelsInterface = {
  [createRoomHeading]: ({eventMode, audioRoom}) => {
    if (audioRoom) {
      if (eventMode) {
        return 'Sesli Yayın Oluştur';
      } else {
        return 'Sesli Sohbet Oluştur';
      }
    } else {
      if (eventMode) {
        return 'Yayın Oluştur';
      } else {
        return 'Oda Oluştur';
      }
    }
  },
  [createRoomInputLabel]: ({eventMode, audioRoom}) => {
    if (audioRoom) {
      if (eventMode) {
        return 'Sesli Yayın Adı';
      } else {
        return 'Sesli Sohbet Adı';
      }
    } else {
      if (eventMode) {
        return 'Yayın Adı';
      } else {
        return 'Oda Adı';
      }
    }
  },
  [createRoomInputPlaceholderText]: 'Yıllık Galaksi Toplantısı',
  [createRoomMakeEveryOneCoHost]: 'Herkesi Eş-Yönetici Yap',
  [createRoomMakeEveryOneCoHostTooltipText]:
    'Açık olduğunda herkese bu odanın kontrolünü verir',
  [createRoomAllowPhoneNumberJoining]: 'Telefon numarasıyla katılmaya izin ver',
  [createRoomAllowPhoneNumberJoiningTooltipText]:
    'Katılımcılar bir numara çevirerek PSTN üzerinden katılabilir',
  [createRoomBtnText]: ({eventMode, audioRoom}) => {
    if (audioRoom) {
      if (eventMode) {
        return 'SES YAYINI OLUŞTUR';
      } else {
        return 'SES SOHBETİ OLUŞTUR';
      }
    } else {
      if (eventMode) {
        return 'YAYIN OLUŞTUR';
      } else {
        return 'ODA OLUŞTUR';
      }
    }
  },
  [createRoomJoinWithID]: 'Oda ID ile Katıl',
  [createRoomSuccessToastHeading]: (meetingName: string) =>
    `${meetingName} oluşturuldu`,
  [createRoomSuccessToastSubHeading]: 'Yeni odanız şimdi canlı',
};
