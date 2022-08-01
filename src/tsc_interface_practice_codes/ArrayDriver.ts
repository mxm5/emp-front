import {CricketCoach} from "./CricketCoach";
import {GolfCoach} from "./golfCoach";
import {Coach} from "./Coach";

let cricketCoach = new CricketCoach();
let golfCoach = new GolfCoach();



let coachesArray : Coach[] = [];

coachesArray.push(cricketCoach);
coachesArray.push(golfCoach);

for (const coach of coachesArray) {
    console.log(coach.getWorkoutPlan());
}