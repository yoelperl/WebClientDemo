import { Component } from "@angular/core";
import { BaseTaskMagicComponent } from "../../magic/src/ui/app.baseMagicComponent";
import { TaskMagicService } from "../../magic/src/services/task.magics.service";

@Component({
	selector: "mga-FlightInformation",
	providers: [TaskMagicService],
	styleUrls: ["./FlightInformation.component.css"],
	templateUrl: "./FlightInformation.component.html"
})
export class FlightInformation extends BaseTaskMagicComponent {}
