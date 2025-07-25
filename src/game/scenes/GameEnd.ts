import { colors, toHexString } from "@/tools";
import { Scene } from "phaser";

export class GameEnd extends Scene {

  constructor() {
    super("GameEnd")
  }

  create(data: { backgroundColorName: string, winner: boolean, winnerPlayerName?: string }) {
    this.cameras.main.setBackgroundColor(toHexString(colors[data.backgroundColorName]));
    const screenWidth = this.scale.width;
    const screenHeight = this.scale.height;

    const message = data.winnerPlayerName ? `${data.winnerPlayerName} won!` : data.winner ? "Congratulations, You Won!" : "You Lost!"
    const text = this.add.text(0, 0, message, {
      color: "#ffff",
      fontStyle: "bold",
      fontSize: "60px",
    });
    text.setX(screenWidth / 2 - text.width / 2);
    text.setY(screenHeight / 2 - text.height / 2 - 100);

    const restartText = this.add.text(0, 0, "Click anywhere on the screen to restart", {
      color: toHexString(colors["dark-" + data.backgroundColorName]),
      fontStyle: "bold",
      fontSize: "30px",
    });
    restartText.setX(screenWidth / 2 - restartText.width / 2);
    restartText.setY(screenHeight / 2 - restartText.height / 2 - 40);

    this.input.on ("pointerup", () => {
      this.scene.start("Menu")
    })
  }
}