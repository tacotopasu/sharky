import "./modules/client/calc";
import "./modules/client/clock";
import "./modules/client/hud/compass";
import "./modules/client/hud/coords";
import "./modules/client/hud/cropCounter";
import "./modules/client/hud/castCounter";
import "./modules/client/hud/armor";
import "./modules/player/toggleSprint";
import "./modules/player/perspectiveFix";
import "./modules/misc/extras";
import Settings from "./settings";

// Minecraft functions and fields
// Unobfuscated functions: https://github.com/Deadrik/TFC2/blob/master/custommappings/methods.csv
// Unobfuscated fields:    https://github.com/KevyPorter/Minecraft-Forge-Utils/blob/master/fields.csv


register("command", () => Settings.openGUI()).setName("sharky");

