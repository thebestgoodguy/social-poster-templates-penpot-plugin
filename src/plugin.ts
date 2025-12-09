/// <reference types="@penpot/plugin-types" />

type CreateTemplateMessage = {
    type: "create-template";
    payload: { width: number; height: number; name: string };
};

type PluginMessage = CreateTemplateMessage | { type: string; payload?: unknown };

penpot.ui.open("Social Posts Templates", "", {
    width: 320,
    height: 400,
});

penpot.ui.onMessage((message: unknown) => {
    const msg = message as PluginMessage;
    if (msg.type === "create-template") {
        const { width, height, name } = msg.payload;

        const board = penpot.createBoard();
        board.name = name;
        board.resize(width, height);
        board.x = penpot.viewport.center.x;
        board.y = penpot.viewport.center.y;
    }
});
