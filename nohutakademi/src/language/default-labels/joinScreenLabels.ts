import {I18nBaseType} from '../i18nTypes';
import {room} from './createScreenLabels';

export const joinRoomHeading = `join${room}Heading`;
export const joinRoomInputLabel = `join${room}InputLabel`;
export const joinRoomInputPlaceHolderText = `join${room}InputPlaceHolderText`;
export const joinRoomBtnText = `join${room}BtnText`;
export const joinRoomCreateBtnText = `join${room}CreateBtnText`;

export const joinRoomErrorToastHeading = `join${room}ErrorToastHeading`;
export const joinRoomErrorToastSubHeading = `join${room}ErrorToastSubHeading`;

export interface I18nJoinScreenLabelsInterface {
  [joinRoomHeading]?: I18nBaseType;
  [joinRoomInputLabel]?: I18nBaseType;
  [joinRoomInputPlaceHolderText]?: I18nBaseType;
  [joinRoomBtnText]?: I18nBaseType;
  [joinRoomCreateBtnText]?: I18nBaseType;
  [joinRoomErrorToastHeading]?: I18nBaseType;
  [joinRoomErrorToastSubHeading]?: I18nBaseType;
}

export const JoinScreenLabels: I18nJoinScreenLabelsInterface = {
  [joinRoomHeading]: ({eventMode}) => {
    if (eventMode) {
      return 'Odaya Gir';
    } else {
      return 'Yayına Katıl';
    }
  },
  [joinRoomInputLabel]: ({eventMode}) => {
    if (eventMode) {
      return 'Yayın ID';
    } else {
      return 'Oda ID';
    }
  },
  [joinRoomInputPlaceHolderText]: ({eventMode}) => {
    if (eventMode) {
      return 'Yayın ID Giriniz';
    } else {
      return 'Oda ID Giriniz';
    }
  },
  [joinRoomBtnText]: ({eventMode}) => (eventMode ? 'Yayına Gir' : 'Odaya Gir'),
  [joinRoomCreateBtnText]: ({eventMode}) =>
    eventMode ? 'Yyaın Oluştur' : 'Oda Oluştur',
  [joinRoomErrorToastHeading]: ({eventMode}) =>
    `${eventMode ? 'Yayın' : 'Oda'} ID Geçersiz.`,
  [joinRoomErrorToastSubHeading]: ({eventMode}) =>
    `Lütfen Geçerli bir ${eventMode ? 'Yayın' : 'Oda'} ID si Giriniz`,
};
