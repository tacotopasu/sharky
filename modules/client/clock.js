import Settings from "../../settings";

register("renderOverlay", function(){
    if(!Settings.clock) return;
    var time = new Date();

    var hours = time.getHours();
    var minutes = time.getMinutes();
    var am_pm = "";
    if (hours >= 12 && Settings.clock12h) {
        if (hours > 12) hours -= 12;
        am_pm = "pm";
    } else if (hours == 0 && Settings.clock12h) {
        hr = 12;
        am_pm = "am";
    }

    if(!Settings.clock12h) am_pm = "";
    
    hours = hours < 10 ? "0" + hours : hours; 
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let currentTime = hours + ":" + minutes + am_pm;
    Renderer.drawString(currentTime, 10, 10);
});