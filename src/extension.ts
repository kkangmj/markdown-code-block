"use strict";

import { commands, window, Selection } from "vscode";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    commands.registerCommand(
      "markdown.extension.codeBlock.emptyLine",
      emptyLineCodeBlock
    ),
    commands.registerCommand(
      "markdown.extension.codeBlock.empty",
      emptyCodeBlock
    ),
    commands.registerCommand(
      "markdown.extension.codeBlock.python",
      pythonCodeBlock
    ),
    commands.registerCommand(
      "markdown.extension.codeBlock.javascript",
      jsCodeBlock
    ),
    commands.registerCommand(
      "markdown.extension.codeBlock.java",
      javaCodeBlock
    ),
    commands.registerCommand("markdown.extension.codeBlock.c", cCodeBlock),
    commands.registerCommand(
      "markdown.extension.codeBlock.c++",
      cPlusCodeBlock
    ),
    commands.registerCommand("markdown.extension.codeBlock.c#", cHashCodeBlock),
    commands.registerCommand("markdown.extension.codeBlock.r", rCodeBlock),
    commands.registerCommand(
      "markdown.extension.codeBlock.ruby",
      rubyCodeBlock
    ),
    commands.registerCommand(
      "markdown.extension.codeBlock.kotlin",
      kotlinCodeBlock
    ),
    commands.registerCommand(
      "markdown.extension.codeBlock.swift",
      swiftCodeBlock
    ),
    commands.registerCommand("markdown.extension.codeBlock.sql", sqlCodeBlock),
    commands.registerCommand(
      "markdown.extension.codeBlock.postgreSQL",
      postgreSQLCodeBlock
    ),
    commands.registerCommand(
      "markdown.extension.codeBlock.bash",
      bashCodeBlock
    ),
    commands.registerCommand(
      "markdown.extension.codeBlock.powershell",
      powershellCodeBlock
    ),
    commands.registerCommand(
      "markdown.extension.codeBlock.gradle",
      gradleCodeBlock
    ),
    commands.registerCommand(
      "markdown.extension.codeBlock.yaml",
      yamlCodeBlock
    ),
    commands.registerCommand("markdown.extension.codeBlock.xml", xmlCodeBlock)
  );
}

function emptyLineCodeBlock() {
  return codeBlock(fenceWithEmptyLine, newPositionWithEmptyLine);
}

function emptyCodeBlock() {
  return codeBlock(fenceWithoutLine, newPositionWithoutLine);
}

function pythonCodeBlock() {
  return codeBlock(fenceWithEmptyLine, newPositionWithEmptyLine, "python");
}

function jsCodeBlock() {
  return codeBlock(fenceWithEmptyLine, newPositionWithEmptyLine, "js");
}

function javaCodeBlock() {
  return codeBlock(fenceWithEmptyLine, newPositionWithEmptyLine, "java");
}

function cCodeBlock() {
  return codeBlock(fenceWithEmptyLine, newPositionWithEmptyLine, "c");
}

function cPlusCodeBlock() {
  return codeBlock(fenceWithEmptyLine, newPositionWithEmptyLine, "c++");
}

function cHashCodeBlock() {
  return codeBlock(fenceWithEmptyLine, newPositionWithEmptyLine, "csharp");
}

function rCodeBlock() {
  return codeBlock(fenceWithEmptyLine, newPositionWithEmptyLine, "r");
}

function rubyCodeBlock() {
  return codeBlock(fenceWithEmptyLine, newPositionWithEmptyLine, "ruby");
}

function kotlinCodeBlock() {
  return codeBlock(fenceWithEmptyLine, newPositionWithEmptyLine, "kotlin");
}

function swiftCodeBlock() {
  return codeBlock(fenceWithEmptyLine, newPositionWithEmptyLine, "swift");
}

function sqlCodeBlock() {
  return codeBlock(fenceWithEmptyLine, newPositionWithEmptyLine, "sql");
}

function postgreSQLCodeBlock() {
  return codeBlock(fenceWithEmptyLine, newPositionWithEmptyLine, "pgsql");
}

function bashCodeBlock() {
  return codeBlock(fenceWithEmptyLine, newPositionWithEmptyLine, "bash");
}

function powershellCodeBlock() {
  return codeBlock(fenceWithEmptyLine, newPositionWithEmptyLine, "ps");
}

function gradleCodeBlock() {
  return codeBlock(fenceWithEmptyLine, newPositionWithEmptyLine, "gradle");
}

function yamlCodeBlock() {
  return codeBlock(fenceWithEmptyLine, newPositionWithEmptyLine, "yml");
}

function xmlCodeBlock() {
  return codeBlock(fenceWithEmptyLine, newPositionWithEmptyLine, "xml");
}

function codeBlock(fenceOfCodeBlock, newPositionOfCodeBlock, lang = "") {
  const editor = window.activeTextEditor;
  if (!editor.selection.isEmpty) {
    return;
  }
  const positionOfCursor = editor.selection.active;
  const charPosition = positionOfCursor.character;
  const indentation = " ".repeat(charPosition);

  editor
    .edit((editBuilder) => {
      editBuilder.insert(positionOfCursor, fenceOfCodeBlock(lang, indentation));
    })
    .then(() => {
      let newCursor = editor.selection.active;
      let newPosition = newPositionOfCodeBlock(newCursor);
      editor.selection = new Selection(newPosition, newPosition);
    });
}

function fenceWithEmptyLine(lang = "", indentation) {
  return `\`\`\`${lang}\n${indentation}\n${indentation}\`\`\``;
}

function fenceWithoutLine(lang = "", indentation) {
  return `\`\`\`${lang}\n${indentation}\`\`\``;
}

function newPositionWithEmptyLine(newCursor) {
  return newCursor.with(newCursor.line - 1, newCursor.character);
}

function newPositionWithoutLine(newCursor) {
  return newCursor.with(newCursor.line - 1, newCursor.character + 3);
}

export function deactivate() {}
