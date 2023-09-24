import Settings from "../../settings";

register('step', toggleSprintStep);
var sprintOn = false;
var keyBind = new KeyBind(Client.getMinecraft().field_71474_y.field_151444_V); // gameSettings.keyBindSprint
function toggleSprintStep() {
    if (!Settings.toggleSprint) return;
    if (Player.getMotionX() == 0 && Player.getMotionZ() == 0) return;
    if (keyBind.isPressed()) sprintOn = !sprintOn;
    keyBind.setState(sprintOn);
}

register("renderOverlay", () => {
    if(!sprintOn || !Settings.toggleSprint) return;
	
	var width = Renderer.screen.getWidth();
	var height = Renderer.screen.getHeight();
	
	Renderer.drawString("&3[&rSprinting Toggled&3]", 5, height - Client.getMinecraft().field_71466_p.field_78288_b - 5); // fontRenderer.FONT_HEIGHT    
});