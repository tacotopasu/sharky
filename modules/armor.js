var helmet = Player.armor.getHelmet();
register("renderOverlay", () => {

    var width = Renderer.screen.getWidth();
	var height = Renderer.screen.getHeight();
    var helmet = Player.armor.getHelmet();
    Renderer.drawString("" + helmet.getName(), 10, Client.getMinecraft().field_71466_p.field_78288_b + 40); // fontRenderer.FONT_HEIGHT
});

var chestplate = Player.armor.getChestplate();
register("renderOverlay", () => {

    var width = Renderer.screen.getWidth();
	var height = Renderer.screen.getHeight();
    var chestplate = Player.armor.getChestplate();
    Renderer.drawString("" + chestplate.getName(), 10, Client.getMinecraft().field_71466_p.field_78288_b + 60); // fontRenderer.FONT_HEIGHT
});

var leggings = Player.armor.getLeggings();
register("renderOverlay", () => {

    var width = Renderer.screen.getWidth();
	var height = Renderer.screen.getHeight();
    var leggings = Player.armor.getLeggings();
    Renderer.drawString("" + leggings.getName(), 10, Client.getMinecraft().field_71466_p.field_78288_b + 80); // fontRenderer.FONT_HEIGHT
});

var boots = Player.armor.getBoots();
register("renderOverlay", () => {

    var width = Renderer.screen.getWidth();
	var height = Renderer.screen.getHeight();
    var boots = Player.armor.getBoots();
    Renderer.drawString("" + boots.getName(), 10, Client.getMinecraft().field_71466_p.field_78288_b + 101); // fontRenderer.FONT_HEIGHT
});

register("renderOverlay", () => {

    var width = Renderer.screen.getWidth();
	var height = Renderer.screen.getHeight();
    var helmet = Player.armor.getHelmet();
    helmet.draw(5, 200, 1.5, 1); // fontRenderer.FONT_HEIGHT
});

register("renderOverlay", () => {

    var width = Renderer.screen.getWidth();
	var height = Renderer.screen.getHeight();
    var chestplate = Player.armor.getChestplate();
    chestplate.draw(5, 225, 1.5, 1); // fontRenderer.FONT_HEIGHT
});

register("renderOverlay", () => {

    var width = Renderer.screen.getWidth();
	var height = Renderer.screen.getHeight();
    var leggings = Player.armor.getLeggings();
    leggings.draw(5, 250, 1.5, 1); // fontRenderer.FONT_HEIGHT
});

register("renderOverlay", () => {

    var width = Renderer.screen.getWidth();
	var height = Renderer.screen.getHeight();
    var boots = Player.armor.getBoots();
    boots.draw(5, 275, 1.5, 1); // fontRenderer.FONT_HEIGHT
});
