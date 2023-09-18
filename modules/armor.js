const helmet = Player.armor.getHelmet();
register("renderOverlay", () => {

    var width = Renderer.screen.getWidth();
	var height = Renderer.screen.getHeight();

    Renderer.drawString("Dear gentleman, i wish to inform you that on top of your cranium currently rests the mighty helemt called: " + helmet.getName(), 10, Client.getMinecraft().field_71466_p.field_78288_b + 40); // fontRenderer.FONT_HEIGHT
});

const chestplate = Player.armor.getChestplate();
register("renderOverlay", () => {

    var width = Renderer.screen.getWidth();
	var height = Renderer.screen.getHeight();

    Renderer.drawString("Dear gentleman, i wish to inform you that your mighty chest currently is protected by the worthy chestplate called: " + chestplate.getName(), 10, Client.getMinecraft().field_71466_p.field_78288_b + 60); // fontRenderer.FONT_HEIGHT
});

const leggings = Player.armor.getLeggings();
register("renderOverlay", () => {

    var width = Renderer.screen.getWidth();
	var height = Renderer.screen.getHeight();

    Renderer.drawString("Dear gentleman, i wish to inform you that your JUICY THIGHS are protected by the thigh highs: " + leggings.getName(), 10, Client.getMinecraft().field_71466_p.field_78288_b + 80); // fontRenderer.FONT_HEIGHT
});

const boots = Player.armor.getBoots();
register("renderOverlay", () => {

    var width = Renderer.screen.getWidth();
	var height = Renderer.screen.getHeight();

    Renderer.drawString("Dear gentleman, i wish to inform you that your feet are being kept warm and safe by the shoes: " + boots.getName(), 10, Client.getMinecraft().field_71466_p.field_78288_b + 101); // fontRenderer.FONT_HEIGHT
});

register("renderOverlay", () => {

    var width = Renderer.screen.getWidth();
	var height = Renderer.screen.getHeight();

    Renderer.drawString("you gotta do /ct load eevry time u change armor but idfk how to fix that shit i alr tried puttting this code in a loop  but it dont work cuz nah chat triggers is a niga for that ", 10, Client.getMinecraft().field_71466_p.field_78288_b + 281); // fontRenderer.FONT_HEIGHT
});

