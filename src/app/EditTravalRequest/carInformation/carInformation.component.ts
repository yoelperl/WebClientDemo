import { Component } from "@angular/core";
import { BaseTaskMagicComponent } from "../../magic/src/ui/app.baseMagicComponent";
import { TaskMagicService } from "../../magic/src/services/task.magics.service";

@Component({
	selector: "mga-carInformation",
	providers: [TaskMagicService],
	styleUrls: ["./carInformation.component.css"],
	templateUrl: "./carInformation.component.html"
})
export class carInformation extends BaseTaskMagicComponent {}
