import SingleButtonIns from './instructions/single-button.interface'

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

// enum TextIndentationSubType {
//   IncreaseIndent = 'Increase Indent',
//   DecreaseIndent = 'Decrease Indent',
// }

export enum ListsSubType {
  OrderedList = 'Ordered List',
  UnorderedList = 'Unordered List',
}

// enum InsertElementsSubType {
//   InsertImage = 'Insert Image',
//   InsertTable = 'Insert Table',
//   InsertHorizontalRule = 'Insert Horizontal Rule',
// }

export type SubTypeGroup = TextFormattingSubType | TextAlignmentSubType | ListsSubType
type EditorSettingsIns = SingleButtonIns[]

export interface SetUpSetting {
  editorSettings: {}
  toolBarButtons: EditorSettingsIns
}

export interface SetUpWorkSpaceDev {
  toolBarButtons?: {
    [TextEditorGroupType.TextFormatting]: EditorSettingsIns
    [TextEditorGroupType.TextAlignment]: EditorSettingsIns
    [TextEditorGroupType.Lists]: EditorSettingsIns
  }
  toolBarButtonsSelected?: {
    [TextEditorGroupType.TextFormatting]?: SubTypeGroup
    [TextEditorGroupType.TextAlignment]?: SubTypeGroup
    [TextEditorGroupType.Lists]?: SubTypeGroup
  }
}

export default SetUpSetting
