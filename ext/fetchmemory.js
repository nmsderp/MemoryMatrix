/* generated l10n code */
Scratch.translate.setup({"de":{"_Fetch":"Internetquests"},"nb":{"_Fetch":"Hent"},"zh-cn":{"_Fetch":"请求API"}});
/* end generated l10n code */

(function (Scratch) {
  "use strict";

  class Fetch {
    getInfo() {
      return {
        id: "fetchmemory",
        name: Scratch.translate("Fetch Memory"),
        blocks: [
          {
            opcode: "getset",
            blockType: Scratch.BlockType.REPORTER,
            text: "GET SET [TEXT]",
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "data",
              }
            }
          },
          {
            opcode: "getset2",
            blockType: Scratch.BlockType.REPORTER,
            text: "GET SET [TEXT] (answers)",
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "data",
              }
            }
          }
        ]
      };
    }

    getset(args) {
      return Scratch.fetch("https://nmsderp.is-a.dev/MemoryMatrix/sets/" + args.TEXT + "/questions.json")
        .then((r) => r.text())
        .catch(() => "");
    }
    getset2(args) {
      return Scratch.fetch("https://nmsderp.is-a.dev/MemoryMatrix/sets/" + args.TEXT + "/answers.json")
        .then((r) => r.text())
        .catch(() => "");
    }
  }

  Scratch.extensions.register(new Fetch());
})(Scratch);
