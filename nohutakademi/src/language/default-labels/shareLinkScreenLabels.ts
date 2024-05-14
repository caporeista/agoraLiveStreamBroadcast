import {I18nBaseType} from '../i18nTypes';
import {room} from './createScreenLabels';
import {MeetingInviteInterface} from './videoCallScreenLabels';

export const shareRoomAttendeeLinkLabel = `share${room}AttendeeLinkLabel`;
export const shareRoomAttendeeLinkSubText = `share${room}AttendeeLinkSubText`;
export const shareRoomHostLinkLabel = `share${room}HostLinkLabel`;
export const shareRoomHostLinkSubText = `share${room}HostLinkSubText`;
export const shareRoomPSTNLabel = `share${room}PSTNLabel`;
export const shareRoomPSTNNumberLabel = `share${room}PSTNNumberLabel`;
export const shareRoomPSTNPinLabel = `share${room}PSTNPinLabel`;
export const shareRoomPSTNSubText = `share${room}PSTNSubText`;
export const shareRoomCopyBtnText = `share${room}CopyBtnText`;
export const shareRoomCopyBtnTooltipText = `share${room}CopyBtnTooltipText`;
export const shareRoomStartBtnText = `share${room}StartBtnText`;
export const shareRoomCopyInviteToClipboardContent = `share${room}CopyInviteToClipboardContent`;
export interface I18nShareLinkScreenLabelsInterface {
  [shareRoomAttendeeLinkLabel]?: I18nBaseType;
  [shareRoomAttendeeLinkSubText]?: I18nBaseType;
  [shareRoomHostLinkLabel]?: I18nBaseType;
  [shareRoomHostLinkSubText]?: I18nBaseType;
  [shareRoomPSTNLabel]?: I18nBaseType;
  [shareRoomPSTNNumberLabel]?: I18nBaseType;
  [shareRoomPSTNPinLabel]?: I18nBaseType;
  [shareRoomPSTNSubText]?: I18nBaseType;
  [shareRoomCopyBtnText]?: I18nBaseType; // need to discuss
  [shareRoomCopyBtnTooltipText]?: I18nBaseType; // need to discuss
  [shareRoomStartBtnText]?: I18nBaseType;
  [shareRoomCopyInviteToClipboardContent]?: I18nBaseType<MeetingInviteInterface>; //
}

export const ShareLinkScreenLabels: I18nShareLinkScreenLabelsInterface = {
  [shareRoomAttendeeLinkLabel]: isWeb =>
    isWeb ? 'Katılımcı Bağlantısı' : 'Katılımcı ID',
  [shareRoomAttendeeLinkSubText]:
    'Davet etmek istediğiniz katılımcılarla bu bilgiyi paylaşın.',
  [shareRoomHostLinkLabel]: isWeb => (isWeb ? 'Ev Sahibi Bağlantısı' : 'Ev Sahibi ID'),
  [shareRoomHostLinkSubText]:
    'Davet etmek istediğiniz diğer eş-yöneticilerle bu bilgiyi paylaşın.',
  [shareRoomPSTNLabel]: 'PSTN',
  [shareRoomPSTNNumberLabel]: 'Numara',
  [shareRoomPSTNPinLabel]: 'Pin',
  [shareRoomPSTNSubText]: 'Telefondan arama yapmak için bu telefon numarasını ve pin kodunu paylaşın.',

  [shareRoomCopyBtnText]: 'Davetiyeyi panoya kopyala',
  [shareRoomCopyBtnTooltipText]: 'Panoya kopyalandı',
  [shareRoomStartBtnText]: ({eventMode}) =>
    eventMode ? 'Yayını Başlat (ev sahibi olarak)' : 'Odayı Başlat (ev sahibi olarak)',

  [shareRoomCopyInviteToClipboardContent]: ({
    meetingName,
    id,
    url,
    pstn,
    isHost,
    isSeparateHostLink,
  }) => {
    let inviteContent = '';
    if (url) {
      //for host
      if (isHost) {
        if (isSeparateHostLink) {
          //seperate link for host and attendee
          inviteContent += `Oda: ${meetingName}\n\nKatılımcı Bağlantısı:\n${url?.attendee}\n\nEv Sahibi Bağlantısı:\n${url?.host}`;
        } else {
          //single link for everyone
          inviteContent += `Oda: ${meetingName}\n\nToplantı Bağlantısı:\n${url?.host}`;
        }
      }
      //for attendee
      else {
        inviteContent += `Oda: ${meetingName}\n\nKatılımcı Bağlantısı:\n${url?.attendee}`;
      }
    } else {
      if (isHost) {
        if (isSeparateHostLink) {
          inviteContent += `Oda: ${meetingName}\n\nKatılımcı Oda ID:\n${id?.attendee}\n\nEv Sahibi Oda ID:\n${id?.host}`;
        } else {
          inviteContent += `Oda: ${meetingName}\n\nOda ID:\n${id?.host}`;
        }
      } else {
        //copy this label on videocall screen
        inviteContent += `Oda: ${meetingName}\n\nKatılımcı Oda ID:\n${id?.attendee}`;
      }
    }
    // Adding pstn data into meeting data if present
    if (pstn?.number && pstn?.pin) {
      inviteContent += `\n\nPSTN Numarası:\n${pstn.number}\n\nPSTN Pin:\n${pstn.pin}`;
    }
    return inviteContent;

  },
};
