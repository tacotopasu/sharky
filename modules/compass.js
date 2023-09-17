import Settings from "../settings";

register("renderOverlay", () => { // Compass HUD
    if(!Settings.compass) return;
	
	var width = Renderer.screen.getWidth();
	var height = Renderer.screen.getHeight();
	
	Renderer.drawString(Player.facing(), 5, height - Client.getMinecraft().field_71466_p.field_78288_b - 5); // fontRenderer.FONT_HEIGHT  
    Renderer.drawString(Player.getYaw(), 5, height - Client.getMinecraft().field_71466_p.field_78288_b * 2 - 7); // fontRenderer.FONT_HEIGHT     
});