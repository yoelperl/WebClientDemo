import { Component } from "@angular/core";
import { BaseTaskMagicComponent } from "../../magic/src/ui/app.baseMagicComponent";
import { TaskMagicService } from "../../magic/src/services/task.magics.service";

@Component({
	selector: "mga-YourTravelRequests",
	providers: [TaskMagicService],
	styleUrls: ["./YourTravelRequests.component.css"],
	templateUrl: "./YourTravelRequests.component.html"
})
export class YourTravelRequests extends BaseTaskMagicComponent {}
