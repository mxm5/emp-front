import {Coach} from "./Coach";

export class GolfCoach implements Coach {
    getWorkoutPlan(): string {
        return "get 100 shots in golf range";
    }

}