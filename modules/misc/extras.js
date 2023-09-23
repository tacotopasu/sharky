// Hypixel Party Stuff

register("command", () => { // Invites tako the cutie pie
    ChatLib.command("w grazzz ♡ I love you! ♡");
    ChatLib.command("p grazzz");
}).setName("tac");

register("command", () => { // Invites niko the cutie patootie
    ChatLib.command("w NicFr ♡ I love you! ♡");
    ChatLib.command("p NicFr");
}).setName("nic");

register("command", () => { // Leaves party (resets party invites)
    ChatLib.command("p leave");
}).setName("res");

// Extras 

register("command", () => { // Niko ❤
    ChatLib.chat(ChatLib.getCenteredText("&d❤&r I &dlove &ryou niko! &d❤"));
}).setName("niko");