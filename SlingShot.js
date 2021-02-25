class SlingShot {
    constructor(body1, pointB) {
        var options = {
            bodyA: body1,
            pointB: pointB,
            lenght: 10,
            stiffness: 0.04
        }

        this.sling = Constraint.create(options);
        this.pointB = pointB
        World.add(world, this.sling);

    }
    display() {
        if (this.sling.bodyA) {
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }

    }

    fly() {
        this.sling.bodyA = null;
    }
};


