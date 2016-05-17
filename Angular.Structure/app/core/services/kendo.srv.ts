module App.Core {

    export class KendoService {
        static $inject = ["$http"];

        constructor(private $http: ng.IHttpService) {

        }

        public getDefaultGridOptions(cols: Array<kendo.ui.GridColumn>): kendo.ui.GridOptions {
            return <kendo.ui.GridOptions>{
                pageable: {
                    pageSizes: [10, 25, 100],
                    numeric: false
                },
                scrollable: false,
                sortable: {
                    allowUnsort: true
                },
                columns: cols
            };
        }

        createDataSource(url: string, getCritera: () => Angular.Structure.Service.ViewModels.KendoPagedCriteria): kendo.data.DataSourceTransport {

            var defaultCritera = getCritera();

            var defaultPageSize = 25;
            if (defaultCritera.pageSize != undefined && defaultCritera.pageSize !== null) {
                defaultPageSize = defaultCritera.pageSize;
            }

            return <kendo.data.DataSourceTransport>{
                transport: {
                    read: (r: kendo.data.DataSourceTransportRead) => {

                        var critera = angular.extend({}, r.data, getCritera());

                        this.$http.post(url, critera).then(resp => {
                            r.success(resp.data, null, null);
                        }).catch(e => {
                            r.error(null, null, null);
                        });
                    }
                },
                schema: {
                    data: "data",
                    total: "total"
                },
                pageSize: defaultPageSize,
                serverPaging: true,
                serverSorting: true,
                sort: defaultCritera.sort
            }
        }

    }


    angular.module('app.core').service("app.core.kendoService", KendoService);

}