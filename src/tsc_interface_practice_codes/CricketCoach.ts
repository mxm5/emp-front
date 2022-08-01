import {Coach} from "./Coach";

export class CricketCoach implements Coach {
    getWorkoutPlan(): string {
        return " get 100 miles running";
    }

}