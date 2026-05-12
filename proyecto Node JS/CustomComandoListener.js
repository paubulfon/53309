import ComandosListener from "./generated/ComandosListener.js";

export class CustomComandosListener extends ComandosListener {

    enterStat(ctx) {
        console.log(`Se detectó una: ${ctx.constructor.name}`);
    }

}