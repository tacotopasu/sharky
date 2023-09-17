import Settings from "../settings";

var crops = 0

register("BlockBreak", () => {
    crops++;
});

register("renderOverlay", () => {
    if(!Settings.cropCounter) return;

    var width = Renderer.screen.getWidth();
	var height = Renderer.screen.getHeight();

    Renderer.drawString(Settings.cropCounterText + " " + crops, 10, Client.getMinecraft().field_71466_p.field_78288_b + 15); // fontRenderer.FONT_HEIGHT
});

register("command", () => {
    crops = 0;
}).setName("resetcrops").setAliases("rc", "rcrops", "resetcrops");