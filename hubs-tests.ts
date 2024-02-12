import {
    App,
    SystemOrderE,
    registerAddon,
  } from "hubs";
  
function onReady(app: App, config?: JSON) {
    console.log("Test Add-on ready called");
}

function chatCommand(app: App, args: string[]) {
    console.log("Test Add-on chat called");
}

function testSystem(app: App) {
    console.log("Test Add-on system called");
}
  
registerAddon("hubs-test-addon", {
    name: "Hubs Test Add-on",
    description: "This add-on shows the basic structure of a Hubs add-on",
    onReady,
    chatCommand: { id: "test_addon", command: chatCommand },
    system: { system: testSystem, order: SystemOrderE.PostPhysics }
});