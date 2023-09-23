import { @Vigilant, @TextProperty, @ColorProperty, @ButtonProperty, @SwitchProperty, Color } from './imports/Vigilance';

const prefix_text = "&3[&bSharky&3] &r";


@Vigilant("Sharky")
class Settings {
    // Clock
    @SwitchProperty({
        name: "Clock",
        description: "",
        category: "Client",
        subcategory: "HUD"
    })
    clock = false;

    @SwitchProperty({
        name: "Clock 12h System",
        description: "",
        category: "Client",
        subcategory: "HUD"
    })
    clock12h = true;

    // Crop Counter
    @SwitchProperty({
        name: "Crop Counter",
        description: "",
        category: "Client",
        subcategory: "HUD"
    })
    cropCounter = false;

    @TextProperty({
        name: "Crop Counter Label",
        description: "",
        category: "Client",
        subcategory: "HUD",
        placeholder: ""
    })
    cropCounterText = "Crops Broken:";

    // Cast Counter
    @SwitchProperty({
        name: "Cast Counter",
        description: "",
        category: "Client",
        subcategory: "HUD"
    })
    castCounter = false;

    @TextProperty({
        name: "Cast Counter Label",
        description: "",
        category: "Client",
        subcategory: "HUD",
        placeholder: ""
    })
    castCounterText = "Crops Broken:";

    // Compass
    @SwitchProperty({
        name: "Compass",
        description: "",
        category: "Client",
        subcategory: "HUD"
    })
    compass = false;

    // Coordinates
    @SwitchProperty({
        name: "Coordinates",
        description: "",
        category: "Client",
        subcategory: "HUD"
    })
    coords = false;

    // Toggle Sprint
    @SwitchProperty({
        name: "Toggle Sprint",
        description: "",
        category: "Player",
        subcategory: ""
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