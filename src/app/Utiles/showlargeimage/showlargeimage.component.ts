import { Component } from "@angular/core";
import { BaseTaskMagicComponent } from "../../magic/src/ui/app.baseMagicComponent";
import { TaskMagicService } from "../../magic/src/services/task.magics.service";

@Component({
	selector: "mga-showlargeimage",
	providers: [TaskMagicService],
	styleUrls: ["./showlargeimage.component.css"],
	templateUrl: "./showlargeimage.component.html"
})
export class showlargeimage extends BaseTaskMagicComponent {}
