import * as assert from "assert";
import * as vscode from "vscode";
import * as path from "path";

const TEST_WORKSPACE_PATH = path.resolve(__dirname, "..", "..", "test");
const TEST_MD_FILE_PATH = path.resolve(TEST_WORKSPACE_PATH, "test.md");

export async function testCommand(
  text: string,
  command: string,
  expectedPosition: { char: number; line: number },
  expectedText: string
) {
  // Open Editor
  const { document, editor } = await openEditor();

  // Initialize
  await initializeWith(document, editor, text);

  // Execution
  await executeCommand(command);

  // Sleep
  await sleep(300);

  const newPosition = editor.selection.active;
  const actual = document.getText();

  // Assert
  assert.deepEqual(newPosition, {
    _character: expectedPosition.char,
    _line: expectedPosition.line,
  });
  assert.strictEqual(actual, expectedText);
}

async function openEditor() {
  const document = await vscode.workspace.openTextDocument(TEST_MD_FILE_PATH);
  const editor = await vscode.window.showTextDocument(document);
  return { document, editor };
}

async function initializeWith(
  document: vscode.TextDocument,
  editor: vscode.TextEditor,
  text: string
) {
  await editor.edit((editBuilder) => {
    const fullRange = new vscode.Range(
      new vscode.Position(0, 0),
      document.positionAt(document.getText().length)
    );
    editBuilder.delete(fullRange);
    editBuilder.insert(new vscode.Position(0, 0), text);
  });
}

async function executeCommand(command: string) {
  await vscode.commands.executeCommand(command);
}

function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
