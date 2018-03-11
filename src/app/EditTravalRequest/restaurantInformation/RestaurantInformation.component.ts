import { Component } from "@angular/core";
import { BaseTaskMagicComponent } from "../../magic/src/ui/app.baseMagicComponent";
import { TaskMagicService } from "../../magic/src/services/task.magics.service";

@Component({
	selector: "mga-RestaurantInformation",
	providers: [TaskMagicService],
	styleUrls: ["./RestaurantInformation.component.css"],
	templateUrl: "./RestaurantInformation.component.html"
})
export class RestaurantInformation extends BaseTaskMagicComponent {}
