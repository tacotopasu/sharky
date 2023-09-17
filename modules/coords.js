import Settings from "../settings";

register("renderOverlay", function(){
    if(!Settings.coords) return;
    Renderer.drawString(Math.round(Player.getX()) + "&7x &r" + Math.round(Player.getY()) + "&7y &r" + Math.round(Player.getZ()) + "&7z &r", 10, 10);
});