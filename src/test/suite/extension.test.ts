import { testCommand } from "../suite/util";

const listItem = "- item\r\n  ";
const emptyLineText = `\`\`\`\r\n\r\n\`\`\``;

suite("Generating Code Block", () => {
  test("Generate empty line code block.", async () => {
    return testCommand(
      "",
      "markdown.extension.codeBlock.emptyLine",
      { char: 0, line: 1 },
      `\`\`\`\r\n\r\n\`\`\``
    );
  });

  test("Generate empty line code block with indentation.", async () => {
    return testCommand(
      listItem,
      "markdown.extension.codeBlock.emptyLine",
      { char: 2, line: 2 },
      `${listItem}\`\`\`\r\n  \r\n  \`\`\``
    );
  });

  test("Generate empty code block.", async () => {
    return testCommand(
      "",
      "markdown.extension.codeBlock.empty",
      { char: 3, line: 0 },
      `\`\`\`\r\n\`\`\``
    );
  });

  test("Generate empty code block with indentation.", async () => {
    return testCommand(
      listItem,
      "markdown.extension.codeBlock.empty",
      { char: 5, line: 1 },
      `${listItem}\`\`\`\r\n  \`\`\``
    );
  });

  test("Generate python code block.", async () => {
    return testCommand(
      "",
      "markdown.extension.codeBlock.python",
      { char: 0, line: 1 },
      `\`\`\`python\r\n\r\n\`\`\``
    );
  });

  test("Generate python code block with indentation.", async () => {
    return testCommand(
      listItem,
      "markdown.extension.codeBlock.python",
      { char: 2, line: 2 },
      `${listItem}\`\`\`python\r\n  \r\n  \`\`\``
    );
  });

  test("Generate javascript code block.", async () => {
    return testCommand(
      "",
      "markdown.extension.codeBlock.javascript",
      { char: 0, line: 1 },
      `\`\`\`js\r\n\r\n\`\`\``
    );
  });

  test("Generate javascript code block with indentation.", async () => {
    return testCommand(
      listItem,
      "markdown.extension.codeBlock.javascript",
      { char: 2, line: 2 },
      `${listItem}\`\`\`js\r\n  \r\n  \`\`\``
    );
  });

  test("Generate java code block.", async () => {
    return testCommand(
      "",
      "markdown.extension.codeBlock.java",
      { char: 0, line: 1 },
      `\`\`\`java\r\n\r\n\`\`\``
    );
  });

  test("Generate java code block with indentation.", async () => {
    return testCommand(
      listItem,
      "markdown.extension.codeBlock.java",
      { char: 2, line: 2 },
      `${listItem}\`\`\`java\r\n  \r\n  \`\`\``
    );
  });

  test("Generate c code block.", async () => {
    return testCommand(
      "",
      "markdown.extension.codeBlock.c",
      { char: 0, line: 1 },
      `\`\`\`c\r\n\r\n\`\`\``
    );
  });

  test("Generate c code block with indentation.", async () => {
    return testCommand(
      listItem,
      "markdown.extension.codeBlock.c",
      { char: 2, line: 2 },
      `${listItem}\`\`\`c\r\n  \r\n  \`\`\``
    );
  });

  test("Generate c++ code block.", async () => {
    return testCommand(
      "",
      "markdown.extension.codeBlock.c++",
      { char: 0, line: 1 },
      `\`\`\`c++\r\n\r\n\`\`\``
    );
  });

  test("Generate c++ code block with indentation.", async () => {
    return testCommand(
      listItem,
      "markdown.extension.codeBlock.c++",
      { char: 2, line: 2 },
      `${listItem}\`\`\`c++\r\n  \r\n  \`\`\``
    );
  });

  test("Generate c# code block.", async () => {
    return testCommand(
      "",
      "markdown.extension.codeBlock.c#",
      { char: 0, line: 1 },
      `\`\`\`csharp\r\n\r\n\`\`\``
    );
  });

  test("Generate c# code block with indentation.", async () => {
    return testCommand(
      listItem,
      "markdown.extension.codeBlock.c#",
      { char: 2, line: 2 },
      `${listItem}\`\`\`csharp\r\n  \r\n  \`\`\``
    );
  });

  test("Generate r code block.", async () => {
    return testCommand(
      "",
      "markdown.extension.codeBlock.r",
      { char: 0, line: 1 },
      `\`\`\`r\r\n\r\n\`\`\``
    );
  });

  test("Generate r code block with indentation.", async () => {
    return testCommand(
      listItem,
      "markdown.extension.codeBlock.r",
      { char: 2, line: 2 },
      `${listItem}\`\`\`r\r\n  \r\n  \`\`\``
    );
  });

  test("Generate ruby code block.", async () => {
    return testCommand(
      "",
      "markdown.extension.codeBlock.ruby",
      { char: 0, line: 1 },
      `\`\`\`ruby\r\n\r\n\`\`\``
    );
  });

  test("Generate ruby code block with indentation.", async () => {
    return testCommand(
      listItem,
      "markdown.extension.codeBlock.ruby",
      { char: 2, line: 2 },
      `${listItem}\`\`\`ruby\r\n  \r\n  \`\`\``
    );
  });

  test("Generate kotlin code block.", async () => {
    return testCommand(
      "",
      "markdown.extension.codeBlock.kotlin",
      { char: 0, line: 1 },
      `\`\`\`kotlin\r\n\r\n\`\`\``
    );
  });

  test("Generate kotlin code block with indentation.", async () => {
    return testCommand(
      listItem,
      "markdown.extension.codeBlock.kotlin",
      { char: 2, line: 2 },
      `${listItem}\`\`\`kotlin\r\n  \r\n  \`\`\``
    );
  });

  test("Generate swift code block.", async () => {
    return testCommand(
      "",
      "markdown.extension.codeBlock.swift",
      { char: 0, line: 1 },
      `\`\`\`swift\r\n\r\n\`\`\``
    );
  });

  test("Generate swift code block with indentation.", async () => {
    return testCommand(
      listItem,
      "markdown.extension.codeBlock.swift",
      { char: 2, line: 2 },
      `${listItem}\`\`\`swift\r\n  \r\n  \`\`\``
    );
  });

  test("Generate sql code block.", async () => {
    return testCommand(
      "",
      "markdown.extension.codeBlock.sql",
      { char: 0, line: 1 },
      `\`\`\`sql\r\n\r\n\`\`\``
    );
  });

  test("Generate sql code block with indentation.", async () => {
    return testCommand(
      listItem,
      "markdown.extension.codeBlock.sql",
      { char: 2, line: 2 },
      `${listItem}\`\`\`sql\r\n  \r\n  \`\`\``
    );
  });

  test("Generate postgreSQL code block.", async () => {
    return testCommand(
      "",
      "markdown.extension.codeBlock.postgreSQL",
      { char: 0, line: 1 },
      `\`\`\`pgsql\r\n\r\n\`\`\``
    );
  });

  test("Generate postgreSQL code block with indentation.", async () => {
    return testCommand(
      listItem,
      "markdown.extension.codeBlock.postgreSQL",
      { char: 2, line: 2 },
      `${listItem}\`\`\`pgsql\r\n  \r\n  \`\`\``
    );
  });

  test("Generate bash code block.", async () => {
    return testCommand(
      "",
      "markdown.extension.codeBlock.bash",
      { char: 0, line: 1 },
      `\`\`\`bash\r\n\r\n\`\`\``
    );
  });

  test("Generate bash code block with indentation.", async () => {
    return testCommand(
      listItem,
      "markdown.extension.codeBlock.bash",
      { char: 2, line: 2 },
      `${listItem}\`\`\`bash\r\n  \r\n  \`\`\``
    );
  });

  test("Generate powershell code block.", async () => {
    return testCommand(
      "",
      "markdown.extension.codeBlock.powershell",
      { char: 0, line: 1 },
      `\`\`\`ps\r\n\r\n\`\`\``
    );
  });

  test("Generate powershell code block with indentation.", async () => {
    return testCommand(
      listItem,
      "markdown.extension.codeBlock.powershell",
      { char: 2, line: 2 },
      `${listItem}\`\`\`ps\r\n  \r\n  \`\`\``
    );
  });

  test("Generate gradle code block.", async () => {
    return testCommand(
      "",
      "markdown.extension.codeBlock.gradle",
      { char: 0, line: 1 },
      `\`\`\`gradle\r\n\r\n\`\`\``
    );
  });

  test("Generate gradle code block with indentation.", async () => {
    return testCommand(
      listItem,
      "markdown.extension.codeBlock.gradle",
      { char: 2, line: 2 },
      `${listItem}\`\`\`gradle\r\n  \r\n  \`\`\``
    );
  });

  test("Generate yaml code block.", async () => {
    return testCommand(
      "",
      "markdown.extension.codeBlock.yaml",
      { char: 0, line: 1 },
      `\`\`\`yml\r\n\r\n\`\`\``
    );
  });

  test("Generate yaml code block with indentation.", async () => {
    return testCommand(
      listItem,
      "markdown.extension.codeBlock.yaml",
      { char: 2, line: 2 },
      `${listItem}\`\`\`yml\r\n  \r\n  \`\`\``
    );
  });

  test("Generate xml code block.", async () => {
    return testCommand(
      "",
      "markdown.extension.codeBlock.xml",
      { char: 0, line: 1 },
      `\`\`\`xml\r\n\r\n\`\`\``
    );
  });

  test("Generate xml code block with indentation.", async () => {
    return testCommand(
      listItem,
      "markdown.extension.codeBlock.xml",
      { char: 2, line: 2 },
      `${listItem}\`\`\`xml\r\n  \r\n  \`\`\``
    );
  });
});
