import { Component } from "@angular/core";
import { BaseTaskMagicComponent } from "../../magic/src/ui/app.baseMagicComponent";
import { TaskMagicService } from "../../magic/src/services/task.magics.service";

@Component({
	selector: "mga-EditTravelRequestEntries",
	providers: [TaskMagicService],
	styleUrls: ["./EditTravelRequestEntries.component.css"],
	templateUrl: "./EditTravelRequestEntries.component.html"
})
export class EditTravelRequestEntries extends BaseTaskMagicComponent {}
