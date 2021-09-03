class Snake {
    constructor() {
        this.locationX = 185;
        this.locationY = 185;
        this.color = "#ff0000";
    }

    display() {
        fill(this.color);
        square(this.locationX, this.locationY, 30);
    }
}