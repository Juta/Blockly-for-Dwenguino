var MSG = {
  title: "DwenguinoBlockly",
  blocks: "Blocks",
  linkTooltip: "Save and link to blocks.",
  runTooltip: "Run the program defined by the blocks in the workspace.",
  loadBlocksFileTooltip: "Load a blocks file you saved before",
  saveBlocksFileTooltip: "Save the blocks to a local file",
  toggleSimulator: "Toggle simulator view.",
  badCode: "Program error:\n%1",
  timeout: "Maximum execution iterations exceeded.",
  trashTooltip: "Discard all blocks.",
  catLogic: "Logic",
  catLoops: "Loops",
  catMath: "Math",
  catText: "Text",
  catLists: "Lists",
  catColour: "Colour",
  catArduino: "Arduino",
  catVariables: "Variables",
  catFunctions: "Functions",
  catDwenguino: "Dwenguino",
  catBoardIO: "IO",
  listVariable: "list",
  textVariable: "text",
  httpRequestError: "There was a problem with the request.",
  linkAlert: "Share your blocks with this link:\n\n%1",
  hashError: "Sorry, '%1' doesn't correspond with any saved program.",
  xmlError: "Could not load your saved file. Perhaps it was created with a different version of Blockly?",
  badXml: "Error parsing XML:\n%1\n\nSelect 'OK' to abandon your changes or 'Cancel' to further edit the XML.",
  pressed: "PRESSED",
  setup: "setup",
  loop: "loop",
  dwenguino_main_program_structure: "The code in the setup block is executed once at the start of the program. The code in the loop is repeated until the program stops.",
  catDwenguino: "Dwenguino",
  delay_help: "Wait a specified amount of miliseconds (1 milisecond = 1000 seconds)",
  delay: "delay",
  clearLCD: "Clear LCD",
  dwenguinoLCD: "Dwenguino LCD %1 %2 %3 Write text: %4 On row: %5 Starting from column: %6",
  pin: "pin",
  toneOnPin: "Play tone on ",
  frequency: "with frequency",
  noToneOnPin: "Stop tone on",
  toneOnPinTooltip: "Play tone with specific frequency on specified pin",
  noToneOnPinTooltip: "Stop tone on pin",
  trig: "trig pin number",
  echo: "echo pin number",
  sonarTooltip: "This sensor reads the distance from a sonar sensor",
  miliseconds: "ms",
  digitalRead: "Read digital value from",
  digitalWriteToPin: "Write on",
  digitalWriteValue: "digital value",
  digitalWriteTooltip: "Write high or low value to a digital pin of the Dwenguino board",
  digitalReadTooltip: "Read a digital value (1/high or 0/low) from a specified pin",
  high: "HIGH",
  low: "LOW",
  highLowTooltip: "Represents a high (1) or low (0) value on a pin.",
  tutsIntroduction: "Introduction",
  tutsTheremin: "Theremin",
  tutsRobot: "Robot",
  simulator: "Simulator",
  setLedState: "Turn %1 %2",
  setLedStateTooltip: "Turn an LED on the Dwenguino board on or off",
  ledPinsTooltip: "Pic a led you want to control",
  dwenguinoOn: "ON",
  dwenguinoOff: 'OFF',
  dwenguinoOnOffTooltip: "Select a value to turn an LED ON or OFF",
  dwenguinoServoBlock: "Servo motor %1 %2 %3 channel # %4 angle %5",
  dwenguinoServoBlockTooltip: "Set one of the servo's connected to the Dwenguino to a specified angle between 0 and 180 degrees",
  dwenguinoDCMotorBlock: "DC Motor %1 %2 %3 channel %4 speed %5",
  dwenguinoDCMotorBlockTooltip: "Set the speed of one of the two dwenguino motors. Speed = value between -255 (full speed backwards) and 255 (full speed forwards)",
  dwenguinoAnalogWrite: "Write to %1 analog value %2",
  dwenguinoAnalogWriteTooltip: "Write an analog value between 0 and 255 to the specified pin",
  dwenguinoAnalogRead: "Read analog value from %1",
  dwenguinoAnalogWriteTooltip: "Read a value beteween 0 and 255 from the specified pin",
  digitalReadSwitch: "Read switch %1",
  digitalReadSwitchTooltip: "Read value from one of the dwenguino switches",
  north: "North",
  east:"East",
  south: "South",
  west: "West",
  center: "Center",
  ledsReg: "LEDS",
  dwenguinoLedsRegTooltip: "You can turn leds 0 to 7 on using a binary number. For example 0b00001111 will turn leds 0 to 3 on and the rest off",

};


MSG.simulator = {
  start: "Start",
  stop: "Stop",
  pause: "Pause",
  step: "1 Step",
  speed: "Speed",
  speedVerySlow: "40 times as slow",
  speedSlow: "20 times as slow",
  speedMedium: "10 times as slow",
  speedFast: "5 times as slow",
  speedVeryFast: "2 times as slow",
  speedRealTime: "Real-time",
  components: "Select components",
  servo: "Servo",
  motor: "Motor",
  scope: "Variables",
  alertDebug: "Stop the simulation before resuming to program",
  distance: "distance",
  scenario: "Scenario",
  scenario_default: "Normal board",
  scenario_moving: "Moving robot",
  scenario_wall: "Moving robot with wall"
};
MSG.tutorials = {
    introduction: {},
    theremin: {},
    robot: {}
};

MSG.tutorials.introduction = {
        step1Title: "Welcome to DwenguinoBlockly",
        step1Content: "In this tutorial you will learn the basics of our interface.",
        step2Title: "The Blockly code area",
        step2Content: "This is the blockly code area."
};
