import {I18nBaseType, I18nConditionalType, I18nDynamicType} from '../i18nTypes';
import {room} from './createScreenLabels';

export interface deviceDetectionToastSubHeadingDataInterface {
  name: string;
  label: string;
}

export type sttSpokenLanguageToastHeadingDataType = 'Set' | 'Changed';
export interface sttSpokenLanguageToastSubHeadingDataInterface {
  action: sttSpokenLanguageToastHeadingDataType;
  newLanguage: string;
  oldLanguage: string;
  username: string;
}

export type whiteboardFileUploadToastDataType = 'File' | 'Image';
export interface publicChatToastSubHeadingDataInterface {
  count: number;
  from: string;
}
export interface privateChatToastHeadingDataInterface {
  count: number;
}

export interface publicAndPrivateChatToastSubHeadingDataInterface {
  publicChatCount: number;
  privateChatCount: number;
  from: string;
}
interface NetworkQualityStatusInterface {
  unknown?: 'Unknown';
  excellent?: 'Excellent';
  good?: 'Good';
  bad?: 'Bad';
  veryBad?: 'Very Bad';
  unpublished?: 'Unpublished';
  loading?: 'Loading';
}
export type NetworkQualities = keyof NetworkQualityStatusInterface;
export interface MeetingInviteInterface {
  isHost: boolean;
  isSeparateHostLink: boolean;
  meetingName?: string;
  pstn?: {
    number: string;
    pin: string;
  };
  url?: {
    host?: string;
    attendee?: string;
  };
  id?: {
    host?: string;
    attendee?: string;
  };
}

export enum I18nMuteType {
  audio = 'audio',
  video = 'video',
}

export interface I18nRequestConfirmation {
  name: string;
  type: I18nMuteType;
}
export interface I18nMuteConfirmation {
  name: string;
  type: I18nMuteType;
}

export enum I18nDeviceStatus {
  PERMISSION_DENIED = -1,
  OFF = 0,
  ON = 1,
}

export const toolbarItemPeopleText = 'toolbarItemPeopleText';
export const toolbarItemChatText = 'toolbarItemChatText';
export const toolbarItemSettingText = 'toolbarItemSettingText';

export const toolbarItemLayoutText = 'toolbarItemLayoutText';
export const toolbarItemLayoutOptionGridText =
  'toolbarItemLayoutOptionGridText';
export const toolbarItemLayoutOptionSidebarText =
  'toolbarItemLayoutOptionSidebarText';
export const toolbarItemInviteText = 'toolbarItemInviteText';

export const toolbarItemMicrophoneText = 'toolbarItemMicrophoneText';
export const toolbarItemMicrophoneTooltipText =
  'toolbarItemMicrophoneTooltipText';
export const toolbarItemCameraText = 'toolbarItemCameraText';
export const toolbarItemCameraTooltipText = 'toolbarItemCameraTooltipText';
export const toolbarItemSwitchCameraText = 'toolbarItemSwitchCameraText';
export const toolbarItemShareText = 'toolbarItemShareText';
export const toolbarItemRecordingText = 'toolbarItemRecordingText';
export const toolbarItemLeaveText = 'toolbarItemLeaveText';

export const toolbarItemMoreText = 'toolbarItemMoreText';
export const toolbarItemNoiseCancellationText =
  'toolbarItemNoiseCancellationText';
export const toolbarItemWhiteboardText = 'toolbarItemWhiteboardText';
export const toolbarItemCaptionText = 'toolbarItemCaptionText';
export const toolbarItemTranscriptText = 'toolbarItemTranscriptText';
export const toolbarItemVirtualBackgroundText =
  'toolbarItemVirtualBackgroundText';
export const toolbarItemViewRecordingText = 'toolbarItemViewRecordingText';

export const toolbarItemRaiseHandText = 'toolbarItemRaiseHandText';

export const inviteTileWelcomeText = 'inviteTileWelcomeText';
export const inviteTileNoElseJoinedYetText = 'inviteTileNoElseJoinedYetText';
export const inviteTileCopyInviteBtnText = 'inviteTileCopyInviteBtnText';

export const settingPanelNameCantbeChangedInfo =
  'settingPanelNameCantbeChangedInfo';
export const settingPanelNameInputLabel = 'settingPanelNameInputLabel';

export const invitePopupHeading = 'invitePopupHeading';
export const invitePopupPrimaryBtnText = 'invitePopupPrimaryBtnText';

export const PSTNUserLabel = 'pstnUserLabel';

export const vbPanelApplyBtnText = 'vbPanelApplyBtnText';
export const vbPanelAppliedBtnText = 'vbPanelAppliedBtnText';

export const videoTileNetworkQuailtyLabel = 'videoTileNetworkQuailtyLabel';

export const nativeScreensharePopupHeading = 'nativeScreensharePopupHeading';
export const nativeScreensharePopupSubHeading =
  'nativeScreensharePopupSubHeading';
export const nativeScreensharePopupPrimaryBtnText =
  'nativeScreensharePopupPrimaryBtnText';
export const nativeScreensharePopupIncludeDeviceAudioText =
  'nativeScreensharePopupIncludeDeviceAudioText';

export const nativeStopScreensharePopupHeading =
  'nativeStopScreensharePopupHeading';
export const nativeStopScreensharePopupSubHeading =
  'nativeStopScreensharePopupSubHeading';
export const nativeStopScreensharePopupPrimaryBtnText =
  'nativeStopScreensharePopupPrimaryBtnText';

export const recordingModalTitleIntn = 'recordingModalTitleIntn';
export const stopRecordingPopupHeading = 'stopRecordingPopupHeading';
export const stopRecordingPopupSubHeading = 'stopRecordingPopupSubHeading';
export const stopRecordingPopupPrimaryBtnText =
  'stopRecordingPopupPrimaryBtnText';

export const clearAllWhiteboardPopupHeading = 'clearAllWhiteboardPopupHeading';
export const clearAllWhiteboardPopupSubHeading =
  'clearAllWhiteboardPopupSubHeading';
export const clearAllWhiteboardPopupPrimaryBtnText =
  'clearAllWhiteboardPopupPrimaryBtnText';

export const leavePopupHeading = `leave${room}PopupHeading` as const;
export const leavePopupSubHeading = `leave${room}PopupSubHeading` as const;
export const leavePopupPrimaryBtnText =
  `leave${room}PopupPrimaryBtnText` as const;

export const removeUserFromRoomPopupHeading =
  `removeUserFrom${room}PopupHeading` as const;
export const removeUserFromRoomPopupSubHeading =
  `removeUserFrom${room}PopupSubHeading` as const;
export const removeUserFromRoomPopupPrimaryBtnText =
  `removeUserFrom${room}PopupPrimaryBtnText` as const;

export const removeScreenshareFromRoomPopupHeading =
  `removeScreenshareFrom${room}PopupHeading` as const;
export const removeScreenshareFromRoomPopupSubHeading =
  `removeScreenshareFrom${room}PopupSubHeading` as const;
export const removeScreenshareFromRoomPopupPrimaryBtnText =
  `removeScreenshareFrom${room}PopupPrimaryBtnText` as const;

export const stt = 'stt';

export const sttChangeLanguagePopupHeading =
  `${stt}ChangeSpokenLanguagePopupHeading` as const;
export const sttChangeLanguagePopupSubHeading =
  `${stt}ChangeSpokenLanguagePopupSubHeading` as const;
export const sttChangeLanguagePopupDropdownError =
  `${stt}ChangeSpokenLanguagePopupDropdownError` as const;
export const sttChangeLanguagePopupDropdownInfo =
  `${stt}ChangeSpokenLanguagePopupDropdownInfo` as const;
export const sttChangeLanguagePopupPrimaryBtnText =
  `${stt}ChangeSpokenLanguagePopupPrimaryBtnText` as const;

export const sttChangeSpokenLanguageText =
  `${stt}ChangeSpokenLanguageText` as const;
export const sttSettingSpokenLanguageText =
  `${stt}SettingSpokenLanguageText` as const;
export const sttTranscriptPanelHeaderText =
  `${stt}TranscriptPanelHeaderText` as const;
export const sttDownloadBtnText = `${stt}DownloadBtnText` as const;
export const sttDownloadTranscriptBtnText =
  `${stt}DownloadTranscriptBtnText` as const;
export const sttLanguageChangeInProgress =
  `${stt}LanguageChangeInProgress` as const;

export const chatPanelGroupTabText = 'chatPanelGroupTabText';
export const chatPanelPrivateTabText = 'chatPanelPrivateTabText';

export const groupChatWelcomeContent = 'groupChatWelcomeContent';

export const peoplePanelHeaderText = 'peoplePanelHeaderText';

export const groupChatInputPlaceHolderText = 'groupChatInputPlaceHolderText';
export const privateChatInputPlaceHolderText =
  'privateChatInputPlaceHolderText';

export const peoplePanelTurnoffAllCameraBtnText =
  'peoplePanelTurnoffAllCameraBtnText';
export const peoplePanelMuteAllMicBtnText = 'peoplePanelMuteAllMicBtnText';

export const peoplePanelHostSectionHeaderText =
  'peoplePanelHostSectionHeaderText';
export const peoplePanelAudienceSectionHeaderText =
  'peoplePanelAudienceSectionHeaderText';

export const peoplePanelInThisMeetingLabel = 'peoplePanelInThisMeetingLabel';
export const peoplePanelNoHostJoinedContent = 'peoplePanelNoHostJoinedContent';
export const peoplePanelNoUsersJoinedContent =
  'peoplePanelNoUsersJoinedContent';
export const peoplePanelNoAudienceJoinedContent =
  'peoplePanelNoAudienceJoinedContent';

export const moreBtnViewWhiteboard = 'moreBtnViewWhiteboard';
export const moreBtnViewInLarge = 'moreBtnViewInLarge';
export const moreBtnRemoveFromLarge = 'moreBtnRemoveFromLarge';
export const moreBtnPinToTop = 'moreBtnPinToTop';
export const moreBtnRemoveFromTop = 'moreBtnRemoveFromTop';
export const moreBtnMessagePrivately = 'moreBtnMessagePrivately';

export const moreBtnAudio = 'moreBtnAudio';
export const moreBtnVideo = 'moreBtnVideo';

export const moreBtnAddAsPresenter = 'moreBtnAddAsPresenter';
export const moreBtnRemoveAsPresenter = 'moreBtnRemoveAsPresenter';

export const moreBtnRemoveFromRoom = 'moreBtnRemoveFromRoom';
export const moreBtnChangeName = 'moreBtnChangeName';
export const moreBtnStopScreenShare = 'moreBtnStopScreenShare';
export const moreBtnRemoveScreenShare = 'moreBtnRemoveScreenShare';

export const muteAllConfirmationPopoverContent =
  'muteAllConfirmationPopoverContent';
export const muteAllConfirmationPopoverPrimaryBtnText =
  'muteAllConfirmationPopoverPrimaryBtnText';

export const muteConfirmationPopoverContent = 'muteConfirmationPopoverContent';
export const muteConfirmationPopoverPrimaryBtnText =
  'muteConfirmationPopoverPrimaryBtnText';

export const requestConfirmationPopoverContent =
  'requestConfirmationPopoverContent';
export const requestConfirmationPopoverPrimaryBtnText =
  'requestConfirmationPopoverPrimaryBtnText';

export const peoplePanelWantToJoinText = 'peoplePanelWantToJoinText';
export const peoplePanelWaitingText = 'peoplePanelWaitingText';

export const livestreamingAttendeeRaiseHandInfoHeading =
  'livestreamingAttendeeRaiseHandInfoHeading';
export const livestreamingAttendeeRaiseHandInfoSubHeading =
  'livestreamingAttendeeRaiseHandInfoSubHeading';

export const livestreamingAttendeeChatWithOthersInfoHeading =
  'livestreamingAttendeeChatWithOthersInfoHeading';
export const livestreamingAttendeeChatWithOthersInfoSubHeading =
  'livestreamingAttendeeChatWithOthersInfoSubHeading';

export const livestreamingAttendeePresentYourScreenInfoHeading =
  'livestreamingAttendeePresentYourScreenInfoHeading';
export const livestreamingAttendeePresentYourScreenInfoSubHeading =
  'livestreamingAttendeePresentYourScreenInfoSubHeading';

export const livestreamingAttendeeJoinWithActivitiesInfoHeading =
  'livestreamingAttendeeJoinWithActivitiesInfoHeading';
export const livestreamingAttendeeJoinWithActivitiesInfoSubHeading =
  'livestreamingAttendeeJoinWithActivitiesInfoSubHeading';

export const livestreamingAttendeeInviteOthersText =
  'livestreamingAttendeeInviteOthersText';

export const livestreamingAttendeeWhatYouCanDoText =
  'livestreamingAttendeeWhatYouCanDoText';

export const livestreamingAttendeeWaitingForHostToJoinText =
  'livestreamingAttendeeWaitingForHostToJoinText';

export const publicChatToastHeading = 'publicChatToastHeading';

export const multiplePublicChatToastHeading = 'multiplePublicChatToastHeading';
export const multiplePublicChatToastSubHeading =
  'multiplePublicChatToastSubHeading';

export const privateChatToastHeading = 'privateChatToastHeading';
export const multiplePrivateChatToastHeading =
  'multiplePrivateChatToastHeading';

export const multiplePublicAndPrivateChatToastHeading =
  'multiplePublicAndPrivateChatToastHeading';
export const multiplePublicAndPrivateChatToastSubHeading =
  'multiplePublicAndPrivateChatToastSubHeading';

export const livestreamToastApprovalBtnText = 'livestreamToastApprovalBtnText';
export const livestreamToastDenyBtnText = 'livestreamToastDenyBtnText';

export const livestreamRaiseHandRequestToastHeading =
  'livestreamRaiseHandRequestToastHeading';

export const livestreamRaiseHandRequestToastSubHeading =
  'livestreamRaiseHandRequestToastSubHeading';

export const livestreamRaiseHandRequestReceivedToastHeading =
  'livestreamRaiseHandRequestReceivedToastHeading';

export const livestreamRaiseHandRequestReceivedToastSubHeading =
  'livestreamRaiseHandRequestReceivedToastSubHeading';

export const livestreamRaiseHandRequestAcceptedToastHeading =
  'livestreamRaiseHandRequestAcceptedToastHeading';
export const livestreamRaiseHandRequestAcceptedToastSubHeading =
  'livestreamRaiseHandRequestAcceptedToastSubHeading';

export const livestreamRaiseHandRequestRejectedToastHeading =
  'livestreamRaiseHandRequestRejectedToastHeading';

export const livestreamRaiseHandRequestRecallToastHeading =
  'livestreamRaiseHandRequestRecallToastHeading';

export const livestreamRaiseHandRequestRecallLocalToastHeading =
  'livestreamRaiseHandRequestRecallLocalToastHeading';

export const livestreamRaiseHandApprovedRequestRecallToastHeading =
  'livestreamRaiseHandApprovedRequestRecallToastHeading';

export const livestreamPromoteAsCoHostToastHeading =
  'livestreamPromoteAsCoHostToastHeading';

export const livestreamRequestAlreadyProcessed =
  'livestreamRequestAlreadyProcessed';

export const videoRoomUserFallbackText =
  `video${room}UserFallbackText` as const;

export const peoplePanelMeText = 'peoplePanelMeText';
export const peoplePanelPresenterText = 'peoplePanelPresenterText';

export const userRemovedFromTheRoomToastHeading =
  `userRemovedFromThe${room}ToastHeading` as const;

export const vbPanelImageUploadErrorToastHeading =
  'vbPanelImageUploadErrorToastHeading';
export const vbPanelImageUploadErrorToastSubHeading =
  'vbPanelImageUploadErrorToastSubHeading';
export const vbPanelImageTypeErrorToastHeading =
  'vbPanelImageTypeErrorToastHeading';
export const vbPanelImageTypeErrorToastSubHeading =
  'vbPanelImageTypeErrorToastSubHeading';
export const vbPanelImageSizeLimitErrorToastHeading =
  'vbPanelImageSizeLimitErrorToastHeading';
export const vbPanelImageSizeLimitErrorToastSubHeading =
  'vbPanelImageSizeLimitErrorToastSubHeading';

export const whiteboardToolboxWidthLabel = 'whiteboardToolboxWidthLabel';
export const whiteboardToolboxPxLabel = 'whiteboardToolboxPxLabel';
export const whiteboardInitializingText = 'whiteboardInitializingText';
export const whiteboardExportErrorToastHeading =
  'whiteboardExportErrorToastHeading';
export const whiteboardExportInfoToastHeading =
  'whiteboardExportInfoToastHeading';
export const whiteboardExportSuccessToastHeading =
  'whiteboardExportSuccessToastHeading';
export const whiteboardWidgetViewOnlyText = 'whiteboardWidgetViewOnlyText';
export const whiteboardWidgetExportToCloudText =
  'whiteboardWidgetExportToCloudText';
export const whiteboardWidgetZoomInText = 'whiteboardWidgetZoomInText';
export const whiteboardWidgetZoomOutText = 'whiteboardWidgetZoomOutText';
export const whiteboardWidgetFitToScreenText =
  'whiteboardWidgetFitToScreenText';
export const whiteboardWidgetUndoText = 'whiteboardWidgetUndoText';
export const whiteboardWidgetRedoText = 'whiteboardWidgetRedoText';

export const whiteboardFileUploadErrorToastHeading =
  'whiteboardFileUploadErrorToastHeading';
export const whiteboardFileUploadInfoToastHeading =
  'whiteboardFileUploadInfoToastHeading';
export const whiteboardFileUploadTypeErrorToastHeading =
  'whiteboardFileUploadTypeErrorToastHeading';
export const whiteboardFileUploadTypeErrorToastSubHeading =
  'whiteboardFileUploadTypeErrorToastSubHeading';

export const whiteboardToolboxSelectText = 'whiteboardToolboxSelectText';
export const whiteboardToolboxTextFormatting =
  'whiteboardToolboxTextFormatting';
export const whiteboardToolboxMoveText = 'whiteboardToolboxMoveText';
export const whiteboardToolboxLaserText = 'whiteboardToolboxLaserText';
export const whiteboardToolboxEraseText = 'whiteboardToolboxEraseText';
export const whiteboardToolboxUploadText = 'whiteboardToolboxUploadText';
export const whiteboardToolboxClearAllText = 'whiteboardToolboxClearAllText';

export const whiteboardNativeInfoToastHeading =
  'whiteboardNativeInfoToastHeading';

export const sttSpokenLanguageToastHeading = `${stt}SpokenLanguageToastHeading`;
export const sttSpokenLanguageToastSubHeading = `${stt}SpokenLanguageToastSubHeading`;

export const deviceDetectionToastHeading = 'deviceDetectionToastHeading';
export const deviceDetectionToastSubHeading = 'deviceDetectionToastSubHeading';
export const deviceDetectionPrimaryBtnText = 'deviceDetectionPrimaryBtnText';
export const deviceDetectionSecondaryBtnText =
  'deviceDetectionSecondaryBtnText';
export const deviceDetectionCheckboxText = 'deviceDetectionCheckboxText';

export const hostMutedUserToastHeading = 'hostMutedUserToastHeading';
export const hostRequestedUserToastHeading = 'hostRequestedUserToastHeading';
export const hostRequestedUserToastPrimaryBtnText =
  'hostRequestedUserToastPrimaryBtnText';
export const hostRequestedUserToastSecondaryBtnText =
  'hostRequestedUserToastSecondaryBtnText';

export const hostRemovedUserToastHeading = 'hostRemovedUserToastHeading';

export const waitingRoomApprovalRequiredToastHeading =
  'waitingRoomApprovalRequiredToastHeading';
export const waitingRoomApprovalRequiredToastSubHeading =
  'waitingRoomApprovalRequiredToastSubHeading';
export const waitingRoomApprovalRequiredPrimaryBtnText =
  'waitingRoomApprovalRequiredPrimaryBtnText';
export const waitingRoomApprovalRequiredSecondaryBtnText =
  'waitingRoomApprovalRequiredSecondaryBtnText';

export const waitingRoomApprovalRejectionToastHeading =
  'waitingRoomApprovalRejectionToastHeading';
export const waitingRoomApprovalRejectionToastSubHeading =
  'waitingRoomApprovalRejectionToastSubHeading';

export const videoRoomRecordingText = `video${room}RecordingText` as const;
export const videoRoomGoToActiveSpeakerText =
  `video${room}GoToActiveSpeakerText` as const;
export const videoRoomScreenshareText = `video${room}ScreenshareText` as const;
export const videoRoomStartingCallText =
  `video${room}StartingCallText` as const;
export const videoRoomScreenshareOverlayText =
  `video${room}ScreenshareOverlayText` as const;
export const videoRoomScreenshareStopSharingBtnText =
  `video${room}ScreenshareStopSharingBtnText` as const;

export const chatPanelUserOfflineText = 'chatPanelUserOfflineText';
export const chatPanelUnreadMessageText = 'chatPanelUnreadMessageText';

export const livestreamingMicrophoneTooltipText =
  'livestreamingMicrophoneTooltipText';
export const livestreamingCameraTooltipText = 'livestreamingCameraTooltipText';
export const livestreamingShareTooltipText = 'livestreamingShareTooltipText';

export const peoplePanelWaitingRoomRequestApprovalBtnTxt =
  'peoplePanelWaitingRoomRequestApprovalBtnTxt';
export const peoplePanelWaitingRoomRequestDenyBtnTxt =
  'peoplePanelWaitingRoomRequestDenyBtnTxt';

export const videoRoomScreenShareErrorToastHeading =
  `video${room}ScreenShareErrorToastHeading` as const;
export const videoRoomScreenShareErrorToastSubHeading =
  `video${room}ScreenShareErrorToastSubHeading` as const;

export const videoRoomRecordingToastHeading =
  `video${room}RecordingToastHeading` as const;
export const videoRoomRecordingToastSubHeading =
  `video${room}RecordingToastSubHeading` as const;
export const videoRoomRecordingStartErrorToastHeading =
  'videoRoomRecordingStartErrorToastHeading';
export const videoRoomRecordingStopErrorToastHeading =
  'videoRoomRecordingStopErrorToastHeading';
export const videoRoomRecordingErrorToastSubHeading =
  'videoRoomRecordingErrorToastSubHeading';

export const peoplePanelUserNotFoundLabel = 'peoplePanelUserNotFoundLabel';
export const peoplePanelStreamingRequestSectionHeader =
  'peoplePanelStreamingRequestSectionHeader';
export const peoplePanelLivestreamingApprovalBtnText =
  'peoplePanelLivestreamingApprovalBtnText';
export const peoplePanelLivestreamingDenyBtnText =
  'peoplePanelLivestreamingDenyBtnText';

export const sttTranscriptPanelSearchText =
  `${stt}TranscriptPanelSearchText` as const;
export const sttTranscriptPanelNoSearchResultsFoundText =
  `${stt}TranscriptPanelNoSearchResultsFoundText` as const;
export const sttTranscriptPanelViewLatestText =
  `${stt}TranscriptPanelViewLatestText` as const;

export const videoRoomPeopleCountTooltipHostText =
  `video${room}PeopleCountTooltipHostText` as const;
export const videoRoomPeopleCountTooltipAttendeeText =
  `video${room}PeopleCountTooltipAttendeeText` as const;

export interface I18nVideoCallScreenLabelsInterface {
  [toolbarItemPeopleText]?: I18nBaseType;
  [toolbarItemChatText]?: I18nBaseType;
  [toolbarItemSettingText]?: I18nBaseType;

  [toolbarItemLayoutText]?: I18nBaseType;
  [toolbarItemInviteText]?: I18nBaseType;

  [toolbarItemMicrophoneText]?: I18nBaseType<I18nDeviceStatus>;
  [toolbarItemMicrophoneTooltipText]?: I18nBaseType<I18nDeviceStatus>;
  [toolbarItemCameraText]?: I18nBaseType<I18nDeviceStatus>;
  [toolbarItemCameraTooltipText]?: I18nBaseType<I18nDeviceStatus>;
  [toolbarItemSwitchCameraText]?: I18nBaseType;

  [toolbarItemShareText]?: I18nConditionalType;
  [toolbarItemRecordingText]?: I18nConditionalType;
  [toolbarItemLeaveText]?: I18nBaseType;

  [toolbarItemMoreText]?: I18nBaseType;

  [toolbarItemNoiseCancellationText]?: I18nBaseType;
  [toolbarItemWhiteboardText]?: I18nConditionalType;
  [toolbarItemCaptionText]?: I18nConditionalType;
  [toolbarItemTranscriptText]?: I18nConditionalType;
  [toolbarItemVirtualBackgroundText]?: I18nBaseType;
  [toolbarItemViewRecordingText]?: I18nConditionalType;

  [toolbarItemRaiseHandText]?: I18nConditionalType;

  [inviteTileWelcomeText]?: I18nBaseType;
  [inviteTileNoElseJoinedYetText]?: I18nBaseType;
  [inviteTileCopyInviteBtnText]?: I18nBaseType;

  [settingPanelNameCantbeChangedInfo]?: I18nBaseType;
  [settingPanelNameInputLabel]?: I18nBaseType;

  [invitePopupHeading]?: I18nBaseType;
  [invitePopupPrimaryBtnText]?: I18nBaseType;

  [PSTNUserLabel]?: I18nBaseType; //

  [vbPanelApplyBtnText]?: I18nBaseType;
  [vbPanelAppliedBtnText]?: I18nBaseType;

  [videoTileNetworkQuailtyLabel]?: I18nBaseType<NetworkQualities>; //

  [toolbarItemLayoutOptionGridText]?: I18nBaseType;
  [toolbarItemLayoutOptionSidebarText]?: I18nBaseType;

  [nativeScreensharePopupHeading]?: I18nBaseType;
  [nativeScreensharePopupSubHeading]?: I18nConditionalType;
  [nativeScreensharePopupPrimaryBtnText]?: I18nBaseType;
  [nativeScreensharePopupIncludeDeviceAudioText]?: I18nBaseType;

  [nativeStopScreensharePopupHeading]?: I18nBaseType;
  [nativeStopScreensharePopupSubHeading]?: I18nBaseType;
  [nativeStopScreensharePopupPrimaryBtnText]?: I18nBaseType;

  [recordingModalTitleIntn]?: I18nBaseType;
  [stopRecordingPopupHeading]?: I18nBaseType;
  [stopRecordingPopupSubHeading]?: I18nBaseType;
  [stopRecordingPopupPrimaryBtnText]?: I18nBaseType;

  [clearAllWhiteboardPopupHeading]?: I18nBaseType;
  [clearAllWhiteboardPopupSubHeading]?: I18nBaseType;
  [clearAllWhiteboardPopupPrimaryBtnText]?: I18nBaseType;

  [leavePopupHeading]?: I18nBaseType;
  [leavePopupSubHeading]?: I18nConditionalType;
  [leavePopupPrimaryBtnText]?: I18nBaseType;

  [removeUserFromRoomPopupHeading]?: I18nDynamicType;
  [removeUserFromRoomPopupSubHeading]?: I18nDynamicType;
  [removeUserFromRoomPopupPrimaryBtnText]?: I18nBaseType;

  [removeScreenshareFromRoomPopupHeading]?: I18nBaseType;
  [removeScreenshareFromRoomPopupSubHeading]?: I18nDynamicType;
  [removeScreenshareFromRoomPopupPrimaryBtnText]?: I18nBaseType;

  [sttChangeLanguagePopupHeading]?: I18nConditionalType;
  [sttChangeLanguagePopupSubHeading]?: I18nBaseType;
  [sttChangeLanguagePopupDropdownError]?: I18nBaseType;
  [sttChangeLanguagePopupDropdownInfo]?: I18nBaseType;
  [sttChangeLanguagePopupPrimaryBtnText]?: I18nBaseType;

  [sttChangeSpokenLanguageText]?: I18nBaseType;
  [sttSettingSpokenLanguageText]?: I18nBaseType;
  [sttTranscriptPanelHeaderText]?: I18nBaseType;
  [sttDownloadBtnText]?: I18nBaseType;
  [sttDownloadTranscriptBtnText]?: I18nBaseType;
  [sttLanguageChangeInProgress]?: I18nBaseType;

  [peoplePanelHeaderText]?: I18nBaseType;

  [chatPanelGroupTabText]?: I18nBaseType;
  [chatPanelPrivateTabText]?: I18nBaseType;

  [groupChatWelcomeContent]?: I18nConditionalType;

  [groupChatInputPlaceHolderText]?: I18nBaseType;
  [privateChatInputPlaceHolderText]?: I18nBaseType;

  [peoplePanelTurnoffAllCameraBtnText]?: I18nBaseType;
  [peoplePanelMuteAllMicBtnText]?: I18nBaseType;

  [peoplePanelHostSectionHeaderText]?: I18nBaseType;
  [peoplePanelAudienceSectionHeaderText]?: I18nBaseType;
  [peoplePanelInThisMeetingLabel]?: I18nBaseType;
  [peoplePanelNoHostJoinedContent]?: I18nBaseType;
  [peoplePanelNoUsersJoinedContent]?: I18nBaseType;
  [peoplePanelNoAudienceJoinedContent]?: I18nBaseType;

  [moreBtnViewWhiteboard]?: I18nBaseType;
  [moreBtnViewInLarge]?: I18nBaseType;
  [moreBtnRemoveFromLarge]?: I18nBaseType;
  [moreBtnPinToTop]?: I18nBaseType;
  [moreBtnRemoveFromTop]?: I18nBaseType;
  [moreBtnMessagePrivately]?: I18nBaseType;
  [moreBtnAudio]?: I18nConditionalType;
  [moreBtnVideo]?: I18nConditionalType;
  [moreBtnAddAsPresenter]?: I18nBaseType;
  [moreBtnRemoveAsPresenter]?: I18nBaseType;
  [moreBtnRemoveFromRoom]?: I18nBaseType;
  [moreBtnChangeName]?: I18nBaseType;
  [moreBtnStopScreenShare]?: I18nBaseType;
  [moreBtnRemoveScreenShare]?: I18nBaseType;

  [muteAllConfirmationPopoverContent]?: I18nBaseType<I18nMuteType>;
  [muteAllConfirmationPopoverPrimaryBtnText]?: I18nBaseType;

  [requestConfirmationPopoverContent]?: I18nBaseType<I18nRequestConfirmation>;
  [requestConfirmationPopoverPrimaryBtnText]?: I18nBaseType;

  [muteConfirmationPopoverContent]?: I18nBaseType<I18nMuteConfirmation>;
  [muteConfirmationPopoverPrimaryBtnText]?: I18nBaseType;

  [peoplePanelWantToJoinText]?: I18nBaseType;
  [peoplePanelWaitingText]?: I18nBaseType;

  [livestreamingAttendeeRaiseHandInfoHeading]?: I18nBaseType;
  [livestreamingAttendeeRaiseHandInfoSubHeading]?: I18nBaseType;
  [livestreamingAttendeeChatWithOthersInfoHeading]?: I18nBaseType;
  [livestreamingAttendeeChatWithOthersInfoSubHeading]?: I18nBaseType;
  [livestreamingAttendeePresentYourScreenInfoHeading]?: I18nBaseType;
  [livestreamingAttendeePresentYourScreenInfoSubHeading]?: I18nBaseType;
  [livestreamingAttendeeJoinWithActivitiesInfoHeading]?: I18nBaseType;
  [livestreamingAttendeeJoinWithActivitiesInfoSubHeading]?: I18nBaseType;

  [livestreamingAttendeeWaitingForHostToJoinText]?: I18nBaseType;
  [livestreamingAttendeeWhatYouCanDoText]?: I18nBaseType;
  [livestreamingAttendeeInviteOthersText]?: I18nBaseType;

  [publicChatToastHeading]?: I18nBaseType;
  [multiplePublicChatToastHeading]?: I18nBaseType;
  [multiplePublicChatToastSubHeading]?: I18nBaseType<publicChatToastSubHeadingDataInterface>;

  [privateChatToastHeading]?: I18nBaseType;
  [multiplePrivateChatToastHeading]?: I18nBaseType<privateChatToastHeadingDataInterface>;

  [multiplePublicAndPrivateChatToastHeading]?: I18nBaseType;
  [multiplePublicAndPrivateChatToastSubHeading]?: I18nBaseType<publicAndPrivateChatToastSubHeadingDataInterface>;

  [livestreamToastApprovalBtnText]?: I18nBaseType;
  [livestreamToastDenyBtnText]?: I18nBaseType;

  [livestreamRaiseHandRequestToastHeading]?: I18nBaseType;
  [livestreamRaiseHandRequestToastSubHeading]?: I18nBaseType;

  [livestreamRaiseHandRequestReceivedToastHeading]?: I18nBaseType;
  [livestreamRaiseHandRequestReceivedToastSubHeading]?: I18nBaseType;

  [livestreamRaiseHandRequestAcceptedToastHeading]?: I18nBaseType;
  [livestreamRaiseHandRequestAcceptedToastSubHeading]?: I18nBaseType;

  [livestreamRaiseHandRequestRejectedToastHeading]?: I18nBaseType;

  [livestreamRaiseHandRequestRecallToastHeading]?: I18nBaseType;

  [livestreamRaiseHandRequestRecallLocalToastHeading]?: I18nBaseType;

  [livestreamRaiseHandApprovedRequestRecallToastHeading]?: I18nBaseType;

  [livestreamPromoteAsCoHostToastHeading]?: I18nBaseType;

  [livestreamRequestAlreadyProcessed]?: I18nBaseType;
  [videoRoomUserFallbackText]?: I18nBaseType;

  [peoplePanelMeText]?: I18nBaseType;
  [peoplePanelPresenterText]?: I18nBaseType;
  [userRemovedFromTheRoomToastHeading]?: I18nDynamicType;

  [vbPanelImageUploadErrorToastHeading]?: I18nBaseType;
  [vbPanelImageUploadErrorToastSubHeading]?: I18nBaseType;
  [vbPanelImageSizeLimitErrorToastHeading]?: I18nBaseType;
  [vbPanelImageSizeLimitErrorToastSubHeading]?: I18nBaseType;
  [vbPanelImageTypeErrorToastHeading]?: I18nBaseType;
  [vbPanelImageTypeErrorToastSubHeading]?: I18nBaseType;

  [whiteboardToolboxWidthLabel]?: I18nBaseType;
  [whiteboardToolboxPxLabel]?: I18nBaseType;

  [whiteboardInitializingText]?: I18nBaseType;

  [whiteboardWidgetViewOnlyText]?: I18nBaseType;
  [whiteboardWidgetZoomInText]?: I18nBaseType;
  [whiteboardWidgetZoomOutText]?: I18nBaseType;
  [whiteboardWidgetFitToScreenText]?: I18nBaseType;
  [whiteboardWidgetRedoText]?: I18nBaseType;
  [whiteboardWidgetUndoText]?: I18nBaseType;
  [whiteboardWidgetExportToCloudText]?: I18nBaseType;

  [whiteboardExportErrorToastHeading]?: I18nBaseType;
  [whiteboardExportInfoToastHeading]?: I18nBaseType;
  [whiteboardExportSuccessToastHeading]?: I18nBaseType;

  [whiteboardToolboxSelectText]?: I18nBaseType;
  [whiteboardToolboxTextFormatting]?: I18nBaseType;
  [whiteboardToolboxMoveText]?: I18nBaseType;
  [whiteboardToolboxLaserText]?: I18nBaseType;
  [whiteboardToolboxEraseText]?: I18nBaseType;
  [whiteboardToolboxUploadText]?: I18nBaseType;
  [whiteboardToolboxClearAllText]?: I18nBaseType;

  [whiteboardFileUploadErrorToastHeading]?: I18nBaseType<whiteboardFileUploadToastDataType>;
  [whiteboardFileUploadInfoToastHeading]?: I18nBaseType<whiteboardFileUploadToastDataType>;
  [whiteboardFileUploadTypeErrorToastHeading]?: I18nBaseType<whiteboardFileUploadToastDataType>;
  [whiteboardFileUploadTypeErrorToastSubHeading]?: I18nBaseType<whiteboardFileUploadToastDataType>;
  [whiteboardNativeInfoToastHeading]?: I18nBaseType;

  [sttSpokenLanguageToastHeading]?: I18nBaseType<sttSpokenLanguageToastHeadingDataType>;
  [sttSpokenLanguageToastSubHeading]?: I18nBaseType<sttSpokenLanguageToastSubHeadingDataInterface>;

  [deviceDetectionToastHeading]?: I18nDynamicType;
  [deviceDetectionToastSubHeading]?: I18nBaseType<deviceDetectionToastSubHeadingDataInterface>;
  [deviceDetectionPrimaryBtnText]?: I18nBaseType;
  [deviceDetectionSecondaryBtnText]?: I18nBaseType;
  [deviceDetectionCheckboxText]?: I18nBaseType;

  [hostMutedUserToastHeading]?: I18nBaseType<I18nMuteType>;

  [hostRequestedUserToastHeading]?: I18nBaseType<I18nMuteType>;
  [hostRequestedUserToastPrimaryBtnText]?: I18nBaseType<I18nMuteType>;
  [hostRequestedUserToastSecondaryBtnText]?: I18nBaseType<I18nMuteType>;
  [hostRemovedUserToastHeading]?: I18nBaseType;
  [waitingRoomApprovalRequiredToastHeading]?: I18nBaseType;
  [waitingRoomApprovalRequiredToastSubHeading]?: I18nDynamicType;
  [waitingRoomApprovalRequiredPrimaryBtnText]?: I18nBaseType;
  [waitingRoomApprovalRequiredSecondaryBtnText]?: I18nBaseType;

  [waitingRoomApprovalRejectionToastHeading]?: I18nBaseType;
  [waitingRoomApprovalRejectionToastSubHeading]?: I18nBaseType;

  [videoRoomRecordingText]?: I18nBaseType;
  [videoRoomGoToActiveSpeakerText]?: I18nBaseType;
  [videoRoomScreenshareText]?: I18nDynamicType;
  [videoRoomStartingCallText]?: I18nBaseType;

  [videoRoomScreenshareOverlayText]?: I18nBaseType;
  [videoRoomScreenshareStopSharingBtnText]?: I18nBaseType;

  [chatPanelUserOfflineText]?: I18nBaseType;
  [chatPanelUnreadMessageText]?: I18nBaseType;

  [livestreamingMicrophoneTooltipText]?: I18nConditionalType;
  [livestreamingCameraTooltipText]?: I18nConditionalType;
  [livestreamingShareTooltipText]?: I18nConditionalType;

  [peoplePanelWaitingRoomRequestApprovalBtnTxt]?: I18nBaseType;
  [peoplePanelWaitingRoomRequestDenyBtnTxt]?: I18nBaseType;

  [videoRoomScreenShareErrorToastHeading]?: I18nBaseType;
  [videoRoomScreenShareErrorToastSubHeading]?: I18nBaseType;
  [videoRoomRecordingToastHeading]?: I18nConditionalType;
  [videoRoomRecordingToastSubHeading]?: I18nDynamicType;
  [videoRoomRecordingStartErrorToastHeading]?: I18nBaseType;
  [videoRoomRecordingStopErrorToastHeading]?: I18nBaseType;
  [videoRoomRecordingErrorToastSubHeading]?: I18nBaseType;

  [peoplePanelUserNotFoundLabel]?: I18nBaseType;
  [peoplePanelStreamingRequestSectionHeader]?: I18nBaseType;
  [peoplePanelLivestreamingApprovalBtnText]?: I18nBaseType;
  [peoplePanelLivestreamingDenyBtnText]?: I18nBaseType;
  [sttTranscriptPanelSearchText]?: I18nBaseType;
  [sttTranscriptPanelNoSearchResultsFoundText]?: I18nBaseType;
  [sttTranscriptPanelViewLatestText]?: I18nBaseType;

  [videoRoomPeopleCountTooltipHostText]?: I18nBaseType;
  [videoRoomPeopleCountTooltipAttendeeText]?: I18nBaseType;
}

export const VideoCallScreenLabels: I18nVideoCallScreenLabelsInterface = {
  [toolbarItemPeopleText]: 'Katılımcılar',
  [toolbarItemChatText]: 'Sohbet',
  [toolbarItemSettingText]: 'Ayarlar',
  [toolbarItemLayoutText]: 'Düzen',
  [toolbarItemInviteText]: 'Paylaş',

  [toolbarItemMicrophoneText]: deviceStatus => {
    switch (deviceStatus) {
      case I18nDeviceStatus.ON:
        return 'Mikrofon Açık';
      case I18nDeviceStatus.OFF:
        return 'Mikrofon Kapalı';
      case I18nDeviceStatus.PERMISSION_DENIED:
        return 'Mikrofon';
      default:
        return 'Mikrofon';
    }
  },
  [toolbarItemMicrophoneTooltipText]: deviceStatus => {
    switch (deviceStatus) {
      case I18nDeviceStatus.ON:
        return 'Mikrofonu Kapat';
      case I18nDeviceStatus.OFF:
        return 'Mikrofonu Aç';
      case I18nDeviceStatus.PERMISSION_DENIED:
        return 'İzin Ver';
      default:
        return 'Mikrofon';
    }
  },
  [toolbarItemCameraText]: deviceStatus => {
    switch (deviceStatus) {
      case I18nDeviceStatus.ON:
        return 'Kamera Açık';
      case I18nDeviceStatus.OFF:
        return 'Kamera Kapalı';
      case I18nDeviceStatus.PERMISSION_DENIED:
        return 'Kamera';
      default:
        return 'Kamera';
    }
  },
  [toolbarItemCameraTooltipText]: deviceStatus => {
    switch (deviceStatus) {
      case I18nDeviceStatus.ON:
        return 'Kamerayı Kapat';
      case I18nDeviceStatus.OFF:
        return 'Kamerayı Aç';
      case I18nDeviceStatus.PERMISSION_DENIED:
        return 'İzin Ver';
      default:
        return 'Video';
    }
  },
  [toolbarItemShareText]: active => (active ? 'Paylaşımı Durdur' : 'Paylaş'),
  [toolbarItemRecordingText]: active => (active ? 'Kaydı Durdur' : 'Kaydet'),
  [toolbarItemLeaveText]: 'Yayını Sonlandır',
  [toolbarItemMoreText]: 'Daha Fazla',

  [toolbarItemNoiseCancellationText]: 'Gürültü Engelleme',
[toolbarItemVirtualBackgroundText]: 'Sanal Arka Plan',
[toolbarItemWhiteboardText]: active =>
  active ? 'Beyaz Tahtayı Gizle' : 'Beyaz Tahtayı Göster',
[toolbarItemCaptionText]: active =>
  active ? 'Altyazıyı Gizle' : 'Altyazıyı Göster',
[toolbarItemTranscriptText]: active =>
  active ? 'Transkripti Gizle' : 'Transkripti Göster',
[toolbarItemViewRecordingText]: 'Kayıtları Görüntüle',

[toolbarItemRaiseHandText]: active => (active ? 'Eli İndir' : 'El Kaldır'),
[toolbarItemSwitchCameraText]: 'Kamerayı Değiştir',

[inviteTileWelcomeText]: 'Hoş Geldiniz',
[inviteTileNoElseJoinedYetText]: 'Henüz başka kimse katılmadı',
[inviteTileCopyInviteBtnText]: 'DAVETİYELERİ KOPYALA',

[settingPanelNameCantbeChangedInfo]: `Beyaz tahta aktifken ad değiştirilemez`,
[settingPanelNameInputLabel]: 'Adınız',

[invitePopupHeading]: 'Başkalarını bu odaya davet et',
[invitePopupPrimaryBtnText]: 'DAVETİYELERİ KOPYALA',

[PSTNUserLabel]: 'PSTN Kullanıcısı',
[videoTileNetworkQuailtyLabel]: (quality: NetworkQualities) => {
  switch (quality) {
    case 'unknown':
      return 'Desteklenmeyen Ağ';
    case 'excellent':
      return 'Mükemmel Ağ';
    case 'good':
      return 'İyi Ağ';
    case 'bad':
      return 'Kötü Ağ';
    case 'veryBad':
      return 'Çok Kötü Ağ';
    case 'unpublished':
      return 'Yayınlanmamış Ağ';
    case 'loading':
      return 'Ağ Yükleniyor';
    default:
      return 'Yükleniyor';
  }
},

[vbPanelAppliedBtnText]: 'Uygulandı',
[vbPanelApplyBtnText]: 'Uygula',
[toolbarItemLayoutOptionGridText]: 'Izgara',
[toolbarItemLayoutOptionSidebarText]: 'Kenar Çubuğu',

[nativeScreensharePopupHeading]: 'Ekran Paylaşımı',
[nativeScreensharePopupSubHeading]: camActive =>
  camActive
    ? 'NOT: Optimize edilmiş performans için kamera ve tüm gelen videolar kapatılacak, devam etmek istiyor musunuz?'
    : 'NOT: Optimize edilmiş performans için tüm gelen videolar kapatılacak, devam etmek istiyor musunuz?',
[nativeScreensharePopupPrimaryBtnText]: 'DEVAM ET',
[nativeScreensharePopupIncludeDeviceAudioText]: 'Cihaz sesini dahil et',

[nativeStopScreensharePopupHeading]: 'Ekran Paylaşımını Durdur?',
[nativeStopScreensharePopupSubHeading]:
  'Kamerayı açmak için ekran paylaşımını durdurmanız gerekiyor',
[nativeStopScreensharePopupPrimaryBtnText]: 'PAYLAŞIMI DURDUR VE KAMERAYI AÇ',

[recordingModalTitleIntn]: 'Kayıtlar',
[stopRecordingPopupHeading]: 'Kaydı Durdur?',
[stopRecordingPopupSubHeading]:
  'Kaydı durdurmak istediğinizden emin misiniz? Bu işlemi geri alamazsınız.',
[stopRecordingPopupPrimaryBtnText]: 'KAYDI SONLANDIR',

[clearAllWhiteboardPopupHeading]: 'Beyaz Tahtayı Temizle?',
[clearAllWhiteboardPopupSubHeading]:
  'Beyaz tahtayı temizlemek istediğinizden emin misiniz?',
[clearAllWhiteboardPopupPrimaryBtnText]: 'HEPSİNİ TEMİZLE',

[leavePopupHeading]: 'Odayı Terk Et?',
[leavePopupSubHeading]: transcriptDownloadAvailable =>
  transcriptDownloadAvailable
    ? 'Ayrılmak istediğinizden emin misiniz? Transkriptlerinizi henüz indirmediniz.'
    : 'Bu toplantıdan ayrılmak istediğinizden emin misiniz?',
[leavePopupPrimaryBtnText]: 'AYRIL',

[removeUserFromRoomPopupHeading]: name => `${name} Silinsin mi?`,
[removeUserFromRoomPopupSubHeading]: name =>
  `Silindikten sonra, ${name} daha sonra tekrar odaya katılabilir.`,
[removeUserFromRoomPopupPrimaryBtnText]: 'SİL',

[removeScreenshareFromRoomPopupHeading]: 'Ekran Paylaşımını Kaldır?',
[removeScreenshareFromRoomPopupSubHeading]: name =>
  `Kaldırıldıktan sonra, ${name} daha sonra ekran paylaşımı yapabilir.`,
[removeScreenshareFromRoomPopupPrimaryBtnText]: 'KALDIR',

[sttChangeLanguagePopupHeading]: isFirstTimeOpened =>
  isFirstTimeOpened ? 'Konuşma Dilini Ayarla' : 'Konuşma Dilini Değiştir',
[sttChangeLanguagePopupSubHeading]:
  'Bu toplantıda herkes tarafından konuşulan diller nedir?',
[sttChangeLanguagePopupPrimaryBtnText]: 'ONAYLA',
[sttChangeLanguagePopupDropdownInfo]:
  'En fazla iki dil seçebilirsiniz',
[sttChangeLanguagePopupDropdownError]:
  'Devam etmek için en az bir dil seçin',
[sttChangeSpokenLanguageText]: 'Konuşma Dilini Değiştir',

[sttTranscriptPanelHeaderText]: 'Toplantı Transkripti',
[sttDownloadBtnText]: 'İndir',
[sttDownloadTranscriptBtnText]: 'Transkripti İndir',
[sttSettingSpokenLanguageText]: 'Konuşma Dilini Ayarla',
[sttLanguageChangeInProgress]: 'Dil değişimi devam ediyor...',

[peoplePanelHeaderText]: 'Katılımcılar',

[chatPanelGroupTabText]: 'Grup',
[chatPanelPrivateTabText]: 'Özel',

[groupChatWelcomeContent]: noMessage =>
  noMessage
    ? 'Sohbete Hoş Geldiniz!\nGörüşme sona erdiğinde tüm mesajlar silinir.'
    : 'Görüşme sona erdiğinde tüm mesajlar silinir.',

[groupChatInputPlaceHolderText]: name => `${name} olarak halka açık sohbet edin...`,
[privateChatInputPlaceHolderText]: name => `${name} ile özel mesaj...`,

[peoplePanelTurnoffAllCameraBtnText]: 'Tüm kameraları kapat',
[peoplePanelMuteAllMicBtnText]: 'Tüm mikrofonları sessize al',

[peoplePanelHostSectionHeaderText]: 'EV SAHİBİ',
[peoplePanelAudienceSectionHeaderText]: 'DİNLEYİCİLER',
[peoplePanelInThisMeetingLabel]: 'BU TOPLANTIDA',
[peoplePanelNoHostJoinedContent]: 'Henüz ev sahibi katılmadı.',
[peoplePanelNoAudienceJoinedContent]: 'Henüz dinleyici katılmadı.',
[peoplePanelNoUsersJoinedContent]: 'Henüz kullanıcı katılmadı.',

[moreBtnViewWhiteboard]: 'Beyaz Tahtayı Görüntüle',
[moreBtnRemoveFromLarge]: 'Büyükten Kaldır',
[moreBtnViewInLarge]: 'Büyük Görüntüle',
[moreBtnPinToTop]: 'Üste Sabitle',
[moreBtnRemoveFromTop]: 'Üstten Kaldır',
[moreBtnMessagePrivately]: 'Özel Mesaj At',
[moreBtnAudio]: audio => (audio ? 'Sesi Kapat' : 'Sesi İste'),
[moreBtnVideo]: video => (video ? 'Videoyu Kapat' : 'Videoyu İste'),
[moreBtnAddAsPresenter]: 'Sunumcu Olarak Ekle',
[moreBtnRemoveAsPresenter]: 'Sunumcu Olarak Kaldır',
[moreBtnRemoveFromRoom]: 'Odanın Dışına Çıkar',
[moreBtnChangeName]: 'Adı Değiştir',
[moreBtnStopScreenShare]: 'Ekran Paylaşımını Durdur',
[moreBtnRemoveScreenShare]: 'Ekran Paylaşımını Kaldır',

[muteAllConfirmationPopoverContent]: (type: I18nMuteType) =>
  `Görüşmedeki herkesin ${type} özelliğini kapatmak ister misiniz?`,
[requestConfirmationPopoverContent]: ({
  name,
  type,
}: I18nRequestConfirmation) =>
  `${name} kişisinin ${
    type === I18nMuteType.audio ? 'mikrofonunu' : 'kamerasını'
  } açmasını iste?`,
[muteConfirmationPopoverContent]: ({name, type}: I18nMuteConfirmation) =>
  `${name}'in ${type} özelliğini görüşmedeki herkes için kapat? Sadece ${name} kendini açabilir.`,

[muteAllConfirmationPopoverPrimaryBtnText]: 'Hepsini Sessize Al',
[muteConfirmationPopoverPrimaryBtnText]: 'Sessize Al',
[requestConfirmationPopoverPrimaryBtnText]: 'İste',

[peoplePanelWantToJoinText]: 'KATILMAK İSTİYOR',
[peoplePanelWaitingText]: 'BEKLEMEDE',

[livestreamingAttendeeRaiseHandInfoHeading]: 'Elini Kaldır',
[livestreamingAttendeeRaiseHandInfoSubHeading]:
  'Herkesin bir şey söylemek istediğini bilsin',
[livestreamingAttendeeChatWithOthersInfoHeading]: 'Diğerleriyle Sohbet Et',
[livestreamingAttendeeChatWithOthersInfoSubHeading]:
  'Diğer katılımcılarla veya ev sahipleriyle mesajlaş',
[livestreamingAttendeePresentYourScreenInfoHeading]: 'Ekranını Sun',
[livestreamingAttendeePresentYourScreenInfoSubHeading]:
  'Ev sahibinin onayından sonra sunumcu ol',
[livestreamingAttendeeJoinWithActivitiesInfoHeading]: 'Etkinliklere Katıl',
[livestreamingAttendeeJoinWithActivitiesInfoSubHeading]:
  'Herkesle bir beyaz tahta üzerinde jam yap',

[livestreamingAttendeeInviteOthersText]: 'DİĞER KATILIMCILARI DAVET ET',
[livestreamingAttendeeWaitingForHostToJoinText]:
  'Ev sahibinin katılmasını bekliyor',
[livestreamingAttendeeWhatYouCanDoText]: 'Burada yapabileceğin şeyler:',

[publicChatToastHeading]: (name: string) =>
  `${name} halka açık sohbette yorum yaptı`,

[multiplePublicChatToastHeading]: 'Halka Açık Sohbette Yeni Yorumlar',
[multiplePublicChatToastSubHeading]: ({count, from}) =>
  `${from} tarafından ${count} yeni mesajın var`,

[privateChatToastHeading]: 'Özel bir mesaj aldınız',

[multiplePrivateChatToastHeading]: ({count}) =>
  `${count} özel mesaj aldınız`,

[multiplePublicAndPrivateChatToastHeading]:
  'Halka Açık & Özel Sohbette Yeni Yorumlar',
[multiplePublicAndPrivateChatToastSubHeading]: ({
  publicChatCount,
  privateChatCount,
  from,
}) =>
  `${from} tarafından ${publicChatCount} halka açık ve ${privateChatCount} özel sohbet mesajın var`,

[livestreamToastApprovalBtnText]: 'SUNUMCU OLARAK İZİN VER',
[livestreamToastDenyBtnText]: 'REDDET',

[livestreamRaiseHandRequestToastHeading]: 'Elini kaldırdın.',
[livestreamRaiseHandRequestToastSubHeading]:
  'Ev sahibinin onayını bekliyor',

[livestreamRaiseHandRequestReceivedToastHeading]: name =>
  `${name} sunumcu olmak için elini kaldırdı`,
[livestreamRaiseHandRequestReceivedToastSubHeading]:
  'Onaylandıktan sonra konuşabilir, video paylaşabilir ve bu görüşmede sunum yapabilir.',

[livestreamRaiseHandRequestAcceptedToastHeading]:
  'Ev sahibi isteğini onayladı.',
[livestreamRaiseHandRequestAcceptedToastSubHeading]:
  'Artık bir Sunumcusun',

[livestreamRaiseHandRequestRejectedToastHeading]:
  'İsteğin ev sahibi tarafından reddedildi',

[livestreamRaiseHandRequestRecallToastHeading]: name =>
  `${name} elini indirdi`,

[livestreamRaiseHandRequestRecallLocalToastHeading]:
  'Elini indirdin.',

[livestreamRaiseHandApprovedRequestRecallToastHeading]:
  'Ev sahibi yayın izinlerini iptal etti.',

[livestreamPromoteAsCoHostToastHeading]: 'Ev sahibi seni bir Sunumcu olarak terfi ettirdi',
[livestreamRequestAlreadyProcessed]: 'İstek zaten işleme alındı.',

[videoRoomUserFallbackText]: 'Kullanıcı',
[peoplePanelMeText]: 'Ben',
[peoplePanelPresenterText]: 'Sunumcu',

[userRemovedFromTheRoomToastHeading]: name =>
  `Sistem ${name} adlı kullanıcıyı bu görüşmeden 5 saniye sonra çıkaracak.`,

[vbPanelImageUploadErrorToastHeading]: 'Yükleme Başarısız',
[vbPanelImageUploadErrorToastSubHeading]:
  'Seçilen resim zaten yüklendi',
[vbPanelImageTypeErrorToastHeading]: 'Yükleme Başarısız',
[vbPanelImageTypeErrorToastSubHeading]: 'Lütfen bir JPG veya PNG dosyası seçin',
[vbPanelImageSizeLimitErrorToastHeading]: 'Yükleme Başarısız',
[vbPanelImageSizeLimitErrorToastSubHeading]:
  'Dosya boyutu 1MB den az olmalı.',

[whiteboardToolboxWidthLabel]: 'Genişlik',
[whiteboardToolboxPxLabel]: ' px',
[whiteboardInitializingText]: 'Beyaz tahta başlatılıyor',

[whiteboardWidgetViewOnlyText]: 'Sadece Görüntüle',
[whiteboardWidgetZoomInText]: 'Yakınlaştır',
[whiteboardWidgetZoomOutText]: 'Uzaklaştır',
[whiteboardWidgetFitToScreenText]: 'Ekrana Sığdır',
[whiteboardWidgetRedoText]: 'Yinele',
[whiteboardWidgetUndoText]: 'Geri Al',
[whiteboardWidgetExportToCloudText]: 'Buluta Aktar',

[whiteboardExportErrorToastHeading]: 'Beyaz tahtayı dışa aktarma başarısız oldu',
[whiteboardExportInfoToastHeading]:
  'Beyaz tahtanın ekran görüntüsü bağlantısını almak için birkaç saniye bekleyin',
[whiteboardExportSuccessToastHeading]:
  'Beyaz tahta bir resim olarak dışa aktarıldı. Bağlantı panonuza kopyalandı.',

[whiteboardToolboxSelectText]: 'Seç',
[whiteboardToolboxTextFormatting]: 'Metin',
[whiteboardToolboxMoveText]: 'Taşı',
[whiteboardToolboxLaserText]: 'Lazer',
[whiteboardToolboxEraseText]: 'Silgi',
[whiteboardToolboxUploadText]: 'Belge veya Resim Yükle',

[whiteboardToolboxClearAllText]: 'Hepsini Temizle',

[whiteboardFileUploadErrorToastHeading]: type =>
  `${type} yükleme sırasında hata, lütfen tekrar deneyin.`,
[whiteboardFileUploadInfoToastHeading]: type =>
  `${type} yüklemesi beyaz tahtada görünmesi için birkaç saniye sürecek`,
[whiteboardFileUploadTypeErrorToastHeading]: () => 'Desteklenmeyen dosya',
[whiteboardFileUploadTypeErrorToastSubHeading]: () =>
  'Lütfen pdf, doc, docx, ppt, pptx, png, jpg, jpeg dosya formatlarından birini seçin',

[sttSpokenLanguageToastHeading]: action => `Konuşma Dili ${action}`,
[sttSpokenLanguageToastSubHeading]: ({
  action,
  newLanguage,
  oldLanguage,
  username,
}) =>
  action === 'Set'
    ? `${username} konuşma dilini "${newLanguage}" olarak ayarladı`
    : `${username} konuşma dilini "${oldLanguage}"dan "${newLanguage}"a değiştirdi`,

[deviceDetectionToastHeading]: name => `Yeni ${name} algılandı`,
[deviceDetectionToastSubHeading]: ({name, label}) =>
  `Yeni ${name} adında ${label} algılandı. Değiştirmek ister misiniz?`,
[deviceDetectionPrimaryBtnText]: 'CİHAZI DEĞİŞTİR',
[deviceDetectionSecondaryBtnText]: 'YOKSAY',
[deviceDetectionCheckboxText]: 'Seçimimi hatırla',

[hostMutedUserToastHeading]: type =>
  type === 'audio'
    ? 'Ev sahibi sesini kapattı.'
    : 'Ev sahibi videoyu kapattı.',
[hostRequestedUserToastHeading]: type =>
  type === 'audio'
    ? 'Ev sahibi konuşmanı istedi'
    : 'Ev sahibi videoyu başlatmanı istedi.',
[hostRequestedUserToastPrimaryBtnText]: () => 'SESSİZİ AÇ',
[hostRequestedUserToastSecondaryBtnText]: () => 'SONRA',

[hostRemovedUserToastHeading]: 'Ev sahibi seni odadan çıkardı.',

[waitingRoomApprovalRequiredToastHeading]: 'Onay Gerekli',
[waitingRoomApprovalRequiredToastSubHeading]: username =>
  `${username} görüşmeye katılmak için onay bekliyor`,
[waitingRoomApprovalRequiredPrimaryBtnText]: 'Kabul Et',
[waitingRoomApprovalRequiredSecondaryBtnText]: 'Reddet',

[waitingRoomApprovalRejectionToastHeading]: 'Onay Gerekli',
[waitingRoomApprovalRejectionToastSubHeading]:
  'Toplantıya giriş izni ev sahibi tarafından reddedildi',

[videoRoomRecordingText]: 'Kayıt',
[videoRoomGoToActiveSpeakerText]: 'Aktif Konuşmacıya Git',
[videoRoomScreenshareText]: username => `${username}'in ekran paylaşımı`,
[videoRoomStartingCallText]: 'Görüşme başlatılıyor. Bir saniye.',

[videoRoomScreenshareOverlayText]: 'Ekranını paylaşıyorsun',
[videoRoomScreenshareStopSharingBtnText]: 'Paylaşımı Durdur',

[chatPanelUserOfflineText]: 'Kullanıcı çevrimdışı',
[chatPanelUnreadMessageText]: 'Okunmamış mesaj',

[livestreamingMicrophoneTooltipText]: isHandRaised =>
  isHandRaised
    ? 'Ev sahibi isteği onaylamak için bekleniyor'
    : 'Mikrofonu açmak için el kaldır',
[livestreamingCameraTooltipText]: isHandRaised =>
  isHandRaised
    ? 'Ev sahibi isteği onaylamak için bekleniyor'
    : 'Videoyu açmak için el kaldır',
[livestreamingShareTooltipText]: isHandRaised =>
  isHandRaised
    ? 'Ev sahibi isteği onaylamak için bekleniyor'
    : 'Sunum yapmak için el kaldır',

[peoplePanelWaitingRoomRequestApprovalBtnTxt]: 'Kabul Et',
[peoplePanelWaitingRoomRequestDenyBtnTxt]: 'Reddet',
[videoRoomScreenShareErrorToastHeading]: 'Ekran paylaşımı başlatılamadı',
[videoRoomScreenShareErrorToastSubHeading]: 'İzin reddedildi',

[videoRoomRecordingToastHeading]: active =>
  active ? 'Kayıt Başladı' : 'Kayıt Durduruldu',
[videoRoomRecordingToastSubHeading]: name =>
  `${name} tarafından bu oda kaydediliyor`,
[videoRoomRecordingStartErrorToastHeading]: 'Kayıt başlatılamadı',
[videoRoomRecordingStopErrorToastHeading]: 'Kayıt durdurulamadı',
[videoRoomRecordingErrorToastSubHeading]: 'İçsel bir hata oluştu.',

[peoplePanelUserNotFoundLabel]: 'Kullanıcı bulunamadı',
[peoplePanelStreamingRequestSectionHeader]: 'YAYIN İSTEĞİ',
[peoplePanelLivestreamingApprovalBtnText]: 'Onayla',
[peoplePanelLivestreamingDenyBtnText]: 'Reddet',

[sttTranscriptPanelSearchText]: 'Ara',
[sttTranscriptPanelNoSearchResultsFoundText]: 'Arama sonucu bulunamadı',
[sttTranscriptPanelViewLatestText]: 'En Yeniyi Görüntüle',

[videoRoomPeopleCountTooltipHostText]: 'Ev Sahibi',
[videoRoomPeopleCountTooltipAttendeeText]: ({eventMode}) =>
  eventMode ? 'Dinleyici' : 'Katılımcı',
[whiteboardNativeInfoToastHeading]:
  'Beyaz tahtada gezinmek için iki parmağınızı kullanın',

};
