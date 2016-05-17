
 
 

 

/// <reference path="Enums.ts" />

declare module Angular.Structure.Service.ViewModels {
	interface KendoPagedCriteria {
		page?: number;
		pageSize?: number;
		skip?: number;
		sort?: Angular.Structure.Service.ViewModels.KendoPagedOrderBy[];
		take?: number;
	}
	interface KendoPagedOrderBy {
		dir?: string;
		field?: string;
	}
	interface KendoPagedResults<T> {
		data: T[];
		total: number;
	}
	interface StudentCriteria extends Angular.Structure.Service.ViewModels.KendoPagedCriteria {
		firstName: string;
		lastName: string;
		studentCode: string;
	}
	interface StudentDetailItem {
		email: string;
		firstName: string;
		gender: string;
		lastName: string;
		status: string;
		studentCode: string;
		studentId: number;
	}
	interface StudentListItem {
		firstName: string;
		lastName: string;
		studentCode: string;
		studentId: number;
	}
}


