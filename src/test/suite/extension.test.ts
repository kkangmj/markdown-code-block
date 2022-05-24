import * as assert from "assert";
import * as vscode from "vscode";
import { Position } from "vscode";
import * as path from "path";

export const TEST_WORKSPACE_PATH = path.resolve(__dirname, "..", "..", "test");
export const TEST_MD_FILE_PATH = path.resolve(TEST_WORKSPACE_PATH, "test.md");

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

suite("Generating Code Block", () => {
  test("Empty line code block.", async () => {
    const document = await vscode.workspace.openTextDocument(TEST_MD_FILE_PATH);
    const editor = await vscode.window.showTextDocument(document);

    // Initialize Editor
    await editor.edit((editBuilder) => {
      const fullRange = new vscode.Range(
        new vscode.Position(0, 0),
        document.positionAt(document.getText().length)
      );
      editBuilder.delete(fullRange);
    });

    const position = editor.selection.active;

    // Exectue Command
    await vscode.commands.executeCommand(
      "markdown.extension.codeBlock.emptyLine"
    );

    await sleep(300);

    const newPosition = editor.selection.active;

    // Assert
    assert.strictEqual(position.line, newPosition.line - 1);

    const actual = document.getText().replace(/\r\n/g, "");
    assert.strictEqual(actual, `\`\`\`\`\`\``);
  });
});
