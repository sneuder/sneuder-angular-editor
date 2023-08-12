import SingleButtonIns from './instructions/single-button.interface'
import ModalButtonIns from './instructions/modal-button.interface'
// Type

export enum TextEditorGroupType {
  TextFormatting = 'TextFormatting',
  TextAlignment = 'TextAlignment',
  TextIndentation = 'TextIndentation',
  Lists = 'Lists',
  UndoRedo = 'Undo/Redo',
  Clipboard = 'Clipboard',
  Hyperlink = 'Hyperlink',
  ClearFormatting = 'ClearFormatting',
  InsertElements = 'InsertElements',
  Print = 'Print',
  UndoRedoHistory = 'Undo/Redo',
}

// SubTypes

export enum TextFormattingSubType {
  Bold = 'Bold',
  Italic = 'Italic',
  Underline = 'Underline',
  Strikethrough = 'Strikethrough',
  Subscript = 'Subscript',
  Superscript = 'Superscript',
  TextColor = 'TextColor',
  TextHighlighted = 'TextHighlighted',
  BackgroundColor = 'BackgroundColor',
  FontFamily = 'FontFamily',
  FontSize = 'FontSize',
  FontHeight = 'FontHeight',
}

export enum TextAlignmentSubType {
  LeftAlign = 'LeftAlign',
  CenterAlign = 'CenterAlign',
  RightAlign = 'RightAlign',
  Justify = 'Justify',
}

export enum ListsSubType {
  OrderedList = 'OrderedList',
  UnorderedList = 'UnorderedList',
}

// Interfaces

export type SubTypeGroup = TextFormattingSubType | TextAlignmentSubType | ListsSubType
export type EditorSettingsIns = (SingleButtonIns & ModalButtonIns)[]

// default settings
export interface SetUpSetting {
  editorSettings: {}
  toolBarButtons: EditorSettingsIns
}

// toolBarsSelected

export interface ToolBarButtonsSelected {
  [TextEditorGroupType.TextFormatting]: (keyof typeof TextFormattingSubType)[]
  [TextEditorGroupType.TextAlignment]: (keyof typeof TextAlignmentSubType)[]
  [TextEditorGroupType.Lists]: (keyof typeof ListsSubType)[]
}

export interface ToolBarButtonsSelectedOptional extends Partial<ToolBarButtonsSelected> {}

export interface SetUpInputDev {
  editorSettings: {}
  toolBarButtonsSelected: ToolBarButtonsSelected
}

export interface SetUpInputDevOptional {
  editorSettings?: {}
  toolBarButtonsSelected?: ToolBarButtonsSelectedOptional
}

//...

export interface SetUpWorkSpaceDev {
  toolBarButtons: {
    [TextEditorGroupType.TextFormatting]: EditorSettingsIns
    [TextEditorGroupType.TextAlignment]: EditorSettingsIns
    [TextEditorGroupType.Lists]: EditorSettingsIns
  }
}

export default SetUpSetting
