import { ComponentListBase } from "./ComponentListBase";
import { Component } from "@angular/core";

import { YourTravel } from "./Travel/Travel Main Form/YourTravel.component";

import { YourTravelRequests } from "./Travel/Travel Requests/YourTravelRequests.component";

import { EditTravelRequestEntries } from "./EditTravalRequest/EditTravelRequest/EditTravelRequestEntries.component";

import { FlightInformation } from "./EditTravalRequest/flightInformation/FlightInformation.component";

import { HotelInformation } from "./EditTravalRequest/hotelInformation/HotelInformation.component";

import { RestaurantInformation } from "./EditTravalRequest/restaurantInformation/RestaurantInformation.component";

import { carInformation } from "./EditTravalRequest/carInformation/carInformation.component";

import { showlargeimage } from "./Utiles/showlargeimage/showlargeimage.component";

export class ComponentsList extends ComponentListBase {
	static compHash: { [x: string]: any } = {
		YourTravel: YourTravel,

		YourTravelRequests: YourTravelRequests,

		EditTravelRequestEntries: EditTravelRequestEntries,

		FlightInformation: FlightInformation,

		HotelInformation: HotelInformation,

		RestaurantInformation: RestaurantInformation,

		carInformation: carInformation,

		showlargeimage: showlargeimage
	};

	static ComponentArray: any[] = [
		YourTravel,

		YourTravelRequests,

		EditTravelRequestEntries,

		FlightInformation,

		HotelInformation,

		RestaurantInformation,

		carInformation,

		showlargeimage
	];

	static getArray() {
		return this.ComponentArray;
	}

	public getComponents(name: string): Component {
		return ComponentsList.compHash[name];
	}

	public static getAllComponents() {
		return this.ComponentArray;
	}

	public getTitle(): string {
		return "WebClientDemo";
	}
}
