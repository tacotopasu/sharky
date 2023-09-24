import Settings from "../../../settings";

var casts = 0

register("playerInteract", () => {
    casts++;
});

register("renderOverlay", () => {
    if(!Settings.castCounter) return;

    var width = Renderer.screen.getWidth();
	var height = Renderer.screen.getHeight();

    Renderer.drawString(Settings.castCounterText || "Casts:" + " " + casts / 2, 10, Client.getMinecraft().field_71466_p.field_78288_b + 30); // fontRenderer.FONT_HEIGHT
});

register("command", () => {
    casts = 0;
}).setName("resetcasts").setAliases("rf", "rfish", "resetfishing");
