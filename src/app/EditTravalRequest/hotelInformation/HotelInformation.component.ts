import { Component } from "@angular/core";
import { BaseTaskMagicComponent } from "../../magic/src/ui/app.baseMagicComponent";
import { TaskMagicService } from "../../magic/src/services/task.magics.service";

@Component({
	selector: "mga-HotelInformation",
	providers: [TaskMagicService],
	styleUrls: ["./HotelInformation.component.css"],
	templateUrl: "./HotelInformation.component.html"
})
export class HotelInformation extends BaseTaskMagicComponent {}
