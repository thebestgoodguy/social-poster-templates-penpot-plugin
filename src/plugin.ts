/// <reference types="@penpot/plugin-types" />

type CreateTemplateMessage = {
    type: "create-template";
    payload: { width: number; height: number; name: string };
};

function isCreateTemplateMessage(msg: unknown): msg is CreateTemplateMessage {
    const m = msg as { type?: unknown; payload?: unknown };
    if (m?.type !== "create-template") return false;
    const p = m.payload as { width?: unknown; height?: unknown; name?: unknown };
    return typeof p?.width === "number" && typeof p?.height === "number" && typeof p?.name === "string";
}

penpot.ui.open("Social Posts Templates", "", {
    width: 320,
    height: 400,
});

penpot.ui.onMessage((message: unknown) => {
    if (isCreateTemplateMessage(message)) {
        const { width, height, name } = message.payload;

        const board = penpot.createBoard();
        board.name = name;
        board.resize(width, height);
        board.x = penpot.viewport.center.x;
        board.y = penpot.viewport.center.y;
    }
});
