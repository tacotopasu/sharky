import Settings from "../../../settings";

// On World Load, mod stops working. Probably due to failing to get Item (Player.armor.getHelmet(), ...)

register("renderOverlay", () => {
    if(!Settings.armorLabels) return;

    var helmet = Player.armor.getHelmet();
    Renderer.drawString("" + helmet.getName(), 10, Client.getMinecraft().field_71466_p.field_78288_b + 40); // fontRenderer.FONT_HEIGHT
});


register("renderOverlay", () => {
    if(!Settings.armorLabels) return;

    var chestplate = Player.armor.getChestplate();
    Renderer.drawString(chestplate.getName(), 10, Client.getMinecraft().field_71466_p.field_78288_b + 60); // fontRenderer.FONT_HEIGHT
});


register("renderOverlay", () => {
    if(!Settings.armorLabels) return;

    var leggings = Player.armor.getLeggings();
    Renderer.drawString(leggings.getName(), 10, Client.getMinecraft().field_71466_p.field_78288_b + 80); // fontRenderer.FONT_HEIGHT
});


register("renderOverlay", () => {
    if(!Settings.armorLabels) return;


    var boots = Player.armor.getBoots() || Player.inventory.Item(298);
    Renderer.drawString(boots.getName(), 10, Client.getMinecraft().field_71466_p.field_78288_b + 101); // fontRenderer.FONT_HEIGHT
});

register("renderOverlay", () => {
    if(!Settings.armor) return;

    var helmet = Player.armor.getHelmet() || Player.inventory.Item(298);
    Renderer.drawString("test", 10, Client.getMinecraft().field_71466_p.field_78288_b + 40); // fontRenderer.FONT_HEIGHT
    helmet.draw(5, 200, 1.5, 1);
});

register("renderOverlay", () => {
    if(!Settings.armor) return;

    var chestplate = Player.armor.getChestplate() || Player.inventory.Item(298);
    chestplate.draw(5, 225, 1.5, 1);
});

register("renderOverlay", () => {
    if(!Settings.armor) return;

    var leggings = Player.armor.getLeggings() || Player.inventory.Item(298);
    leggings.draw(5, 250, 1.5, 1);
});

register("renderOverlay", () => {
    if(!Settings.armor) return;

    var boots = Player.armor.getBoots() || Player.inventory.Item(298);
    boots.draw(5, 275, 1.5, 1);
});
