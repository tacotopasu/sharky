// If the player is shifting, the event doesn't register

var keyBind = new KeyBind(Client.getMinecraft().field_71474_y.field_151457_aa); // gameSettings.keyBindTogglePerspective
register("clicked", (mouseX, mouseY, mouseButton, buttonState) => {
    // if (Keyboard.isKeyDown(Keyboard.KEY_LSHIFT)) ChatLib.chat("shift click");
    
    if(buttonState && mouseButton == 3 && keyBind.keyCode == -97.0){
        Client.getMinecraft().field_71474_y.field_74320_O++;
        if(Client.getMinecraft().field_71474_y.field_74320_O > 2) Client.getMinecraft().field_71474_y.field_74320_O = 0;
    } else if(buttonState && mouseButton == 4 && keyBind.keyCode == -96.0){
        Client.getMinecraft().field_71474_y.field_74320_O++;
        if(Client.getMinecraft().field_71474_y.field_74320_O > 2) Client.getMinecraft().field_71474_y.field_74320_O = 0;
    }
})

// register("clicked", (mouseX, mouseY, button, buttonState) => {
//     if (Keyboard.isKeyDown(Keyboard.KEY_LSHIFT)) return;
//     if(buttonState) ChatLib.chat("test");
// })

// register("clicked", (mouseX, mouseY, button, isButtonDown) => {
//     ChatLib.chat(`Click? ${button}`)
//     if (Keyboard.isKeyDown(Keyboard.KEY_LSHIFT)) ChatLib.chat(`Shift Click? ${button}`);
// })