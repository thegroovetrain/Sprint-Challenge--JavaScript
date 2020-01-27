// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker2 {
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }
    volume() {
        return this.length * this.width * this.height;
    }
    surfaceArea = function() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

const cuboid2 = new CuboidMaker2(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

// this really doesn't make sense. Here are three implementations that are all valid solutions but completely defeat the reason for extending a class. Way to go, test writer.

// Here is the best solution, but its not what you are looking for, because I'm not rewriting the methods. I don't have to though. You should have did cubes first. It would have made more sense.
class CubeMaker1 extends CuboidMaker2 {
    constructor(size) {
        super(size, size, size);
    }
}

const cube1 = new CubeMaker1(5);
console.log(cube1.volume()); // 125
console.log(cube1.surfaceArea()); // 150

// Here is another "good solution" but i could have written it without extending CuboidMaker2. This should have been the base class if you wanted this to be an actual challenge that made sense.
class CubeMaker2 {
    constructor(side) {
        this.side = side;
    }
    volume() {
        return Math.pow(this.side, 3);
    }
    surfaceArea() {
        return 2 * (Math.pow(this.side,2) + Math.pow(this.side,2) + Math.pow(this.side, 2));
    }
}

const cube2 = new CubeMaker2(5);
console.log(cube2.volume()); // 125
console.log(cube2.surfaceArea()); // 150

// Here is an absolute ass solution. Its absolute ass because it is the same as the first solution but needlessly rewrites the methods.
class CubeMaker3 extends CuboidMaker2 {
    constructor(size) {
        super(size, size, size);
    }
    volume() {
        return Math.pow(this.length, 3);
    }
    surfaceArea() {
        return 2 * (2*this.length + 2*this.length + 2*this.length);
    }
}

const cube3 = new CubeMaker3(5);
console.log(cube3.volume()); // 125
console.log(cube3.surfaceArea()); // 150