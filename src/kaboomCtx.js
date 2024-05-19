import kaboom from "kaboom";
import { scaleFactor } from "./constans";

export const k = kaboom({
    global: false,
    touchToMouse: true,
    canvas: document.getElementById("game"),
});