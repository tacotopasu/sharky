// Variables
var tag = "&3[&bSharkie&3] &r"

// Unobfuscated functions: https://github.com/Deadrik/TFC2/blob/master/custommappings/methods.csv
// Unobfuscated fields: https://github.com/KevyPorter/Minecraft-Forge-Utils/blob/master/fields.csv

// Modules State
var toggleSprintOn = false;

// Client Functions

function Echo(text){
    ChatLib.chat(`${tag}${text}`);
}

function ToggleModule(){

} // TODO


register("command", () => { // Hello World
    Echo("Hello World!");
}).setName("hello");

register("command", () => { // Niko ❤
    ChatLib.chat(ChatLib.getCenteredText("&d❤&r I &dlove &ryou niko! &d❤"));
}).setName("niko");


register('step', toggleSprintStep); // Toggle Sprint Step Function
var sprintOn = false;
function toggleSprintStep() {
    if (!toggleSprintOn) return;
    if (Player.getMotionX() == 0 && Player.getMotionZ() == 0) return;
    var keyBind = new KeyBind(Client.getMinecraft().field_71474_y.field_151444_V); // gameSettings.keyBindSprint
    // if (keyBind.isPressed() && !sprintOn) sprintOn = true;
    // if (keyBind.isPressed() && sprintOn) sprintOn = false;
    if (keyBind.isPressed()) sprintOn = !sprintOn;
    keyBind.setState(sprintOn);
}

register("renderOverlay", () => { // Toggle Sprint Indicator (HUD)
    if(!sprintOn || !toggleSprintOn) return;
	
	var width = Renderer.screen.getWidth();
	var height = Renderer.screen.getHeight();
	
	Renderer.drawString("&3[&bSprinting Toggled&3]", 5, height - Client.getMinecraft().field_71466_p.field_78288_b - 5); // fontRenderer.FONT_HEIGHT    
});

register('command', function() { // Toggle Sprint Module Command
    if (toggleSprintOn) {
        toggleSprintOn = false;
        Echo("&lToggle Sprint&r Disabled.");
    } else {
        toggleSprintOn = true;
        Echo("&lToggle Sprint&r Enabled.");
    }
}).setCommandName('togglesprint');

