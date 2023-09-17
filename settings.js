import { @Vigilant, @TextProperty, @ColorProperty, @ButtonProperty, @SwitchProperty, Color } from './imports/Vigilance';

const prefix_text = "&3[&bSharky&3] &r";


@Vigilant("Sharky")
class Settings {
    @SwitchProperty({
        name: "Clock",
        description: "",
        category: "HUD",
        subcategory: "Miscellaneous"
    })
    clock = false;

    @SwitchProperty({
        name: "Clock 12h System",
        description: "",
        category: "HUD",
        subcategory: "Miscellaneous"
    })
    clock12h = true;

    @SwitchProperty({
        name: "Crop Counter",
        description: "",
        category: "HUD",
        subcategory: "Farming"
    })
    cropCounter = false;

    @TextProperty({
        name: "Crop Counter Label",
        description: "",
        category: "HUD",
        subcategory: "Farming",
        placeholder: "Crops Broken:"
    })
    cropCounterText = "";

    @SwitchProperty({
        name: "Compass",
        description: "",
        category: "HUD",
        subcategory: "Player"
    })
    compass = false;

    @SwitchProperty({
        name: "Coordinates",
        description: "",
        category: "HUD",
        subcategory: "Player"
    })
    coords = false;

    @SwitchProperty({
        name: "Toggle Sprint",
        description: "",
        category: "Modules",
        subcategory: "Player"
    })
    toggleSprint = false;

    constructor() {
        this.initialize(this);
        this.setCategoryDescription("General", "Sharky Settings");
        this.setSubcategoryDescription("General", "Modules", "Module settings and configurations");
        this.setCategoryDescription("HUD", "Overlays and HUD Add-Ons");
    }
}

export let prefix = prefix_text;
export default new Settings();