import "./modules/calc";
import "./modules/clock";
import "./modules/compass";
import "./modules/coords";
import "./modules/helloNiko";
import "./modules/toggleSprint";
import "./modules/extras";
import "./modules/cropCounter";
import Settings from "./settings";

// Unobfuscated functions: https://github.com/Deadrik/TFC2/blob/master/custommappings/methods.csv
// Unobfuscated fields: https://github.com/KevyPorter/Minecraft-Forge-Utils/blob/master/fields.csv


register("command", () => Settings.openGUI()).setName("opengui");
