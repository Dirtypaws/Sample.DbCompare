var Index = {};

Index.init = function() {
    $("#grd_diffs").kendoGrid({
        dataSource: Index._diffs,
        height: "565px",
        selectable: true,
        columns: [
            { title: "field1", field: "field1" },
            { title: "field2", field: "field2" },
            { title: "field3", field: "field3" },
            { title: "field4", field: "field4" }
            //{ title: "field5", template: "Concatenating field 1: #= field1 # and field 3: #= field3 #"}
        ],
        detailInit: function (e) {
            console.log(e);
            $("<div/>").appendTo(e.detailCell).kendoGrid({
                dataSource: e.data.diffs,
                selectable: true,
                columns: [
                    {field: "diff"}
                ]
            });
        }
    });
};

Index._diffs = new kendo.data.DataSource({
    transport: {
        read: {
            url: window._rootUrl + "Home/GetDifferences",
            dataType: "json",
            data: {
                field1: $("#txt_field1").val(),
                field2: $("#txt_field2").val()
            }
        }
    },
    schema: {
        model: {
            fields: {
                field1: { editable: false, type: "string" },
                field2: { editable: false, type: "string" },
                field3: { editable: false, type: "string" },
                field4: { editable: false, type: "string" },
                diffs: [
                    { diff: { editable: false, type: "string" } }
                ]
            }
        }
    }
});

