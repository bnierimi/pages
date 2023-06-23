import Code from "@editorjs/code";
import Header from "@editorjs/header";
import Paragraph from "@editorjs/paragraph";
import List from "@editorjs/list";
// import NestedList from "@editorjs/nested-list";
// import ImageTool from "@editorjs/image";
// import CheckList from "@editorjs/checklist";
import Quote from "@editorjs/quote";
import SimpleImage from "@editorjs/simple-image";
import LinkTool from "@editorjs/link";
import editorjsCodeflask from '@calumk/editorjs-codeflask';
import editorjsNestedChecklist from '@calumk/editorjs-nested-checklist';

export const EDITOR_TOOLS = {
  code: editorjsCodeflask,
  rawCode: Code,
  header: Header,
  paragraph: Paragraph,
  list: List,
  quote: Quote,
  simpleImage: SimpleImage,
  linkTool: LinkTool,
  nestedchecklist: editorjsNestedChecklist,
};