import SingleButtonIns from './instructions/single-button.interface'

// Type

export enum TextEditorGroupType {
  TextFormatting = 'TextFormatting',
  TextAlignment = 'TextAlignment',
  TextIndentation = 'TextIndentation',
  Lists = 'Lists',
  UndoRedo = 'Undo/Redo',
  Clipboard = 'Clipboard',
  Hyperlink = 'Hyperlink',
  ClearFormatting = 'Clear Formatting',
  InsertElements = 'Insert Elements',
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
  TextColor = 'Text Color',
  BackgroundColor = 'Background Color',
  FontFamily = 'Font Family',
  FontSize = 'Font Size',
}

export enum TextAlignmentSubType {
  LeftAlign = 'Left Align',
  CenterAlign = 'Center Align',
  RightAlign = 'Right Align',
  Justify = 'Justify',
}

export enum ListsSubType {
  OrderedList = 'Ordered List',
  UnorderedList = 'Unordered List',
}

// Interfaces

export type SubTypeGroup = TextFormattingSubType | TextAlignmentSubType | ListsSubType
type EditorSettingsIns = SingleButtonIns[]

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
