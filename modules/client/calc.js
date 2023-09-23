import { prefix } from "../../settings";

register("command", (arg) => {
    ChatLib.chat(`${prefix}Result: ${eval(arg.replace(/[^-()\d/*+.]/g, ''))}`);
}).setName("calc");