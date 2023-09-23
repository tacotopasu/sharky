// If the player is shifting, the event doesn't register

register("clicked", (mouseX, mouseY, mouseButton, buttonState) => {
    var keyBind = new KeyBind(Client.getMinecraft().field_71474_y.field_151457_aa); // gameSettings.keyBindTogglePerspective
    if(buttonState && mouseButton == 3 && keyBind.keyCode == -97.0){
        Client.getMinecraft().field_71474_y.field_74320_O++;
        if(Client.getMinecraft().field_71474_y.field_74320_O > 2) Client.getMinecraft().field_71474_y.field_74320_O = 0;
    } else if(buttonState && mouseButton == 4 && keyBind.keyCode == -96.0){
        Client.getMinecraft().field_71474_y.field_74320_O++;
        if(Client.getMinecraft().field_71474_y.field_74320_O > 2) Client.getMinecraft().field_71474_y.field_74320_O = 0;
    }
})