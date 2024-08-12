{
    "swagger"
:
    "2.0", "info"
:
    {
        "description"
    :
        "Api Documentation", "version"
    :
        "1.0", "title"
    :
        "Api Documentation", "termsOfService"
    :
        "urn:tos", "contact"
    :
        {
        }
    ,
        "license"
    :
        {
            "name"
        :
            "Apache 2.0", "url"
        :
            "http://www.apache.org/licenses/LICENSE-2.0"
        }
    }
,
    "host"
:
    "185.244.172.108:8081", "basePath"
:
    "/", "tags"
:
    [{"name": "outlay-string-controller", "description": "Outlay String Controller"}], "paths"
:
    {
        "/v1/outlay-rows/entity/create"
    :
        {
            "post"
        :
            {
                "tags"
            :
                ["outlay-string-controller"], "summary"
            :
                "createEntity", "description"
            :
                "Создать сущность(1)", "operationId"
            :
                "createEntityUsingPOST", "consumes"
            :
                ["application/json"], "produces"
            :
                ["*/*"], "responses"
            :
                {
                    "200"
                :
                    {
                        "description"
                    :
                        "OK", "schema"
                    :
                        {
                            "$ref"
                        :
                            "#/definitions/EntityResponse"
                        }
                    }
                ,
                    "201"
                :
                    {
                        "description"
                    :
                        "Created"
                    }
                ,
                    "401"
                :
                    {
                        "description"
                    :
                        "Unauthorized"
                    }
                ,
                    "403"
                :
                    {
                        "description"
                    :
                        "Forbidden"
                    }
                ,
                    "404"
                :
                    {
                        "description"
                    :
                        "Not Found"
                    }
                }
            }
        }
    ,
        "/v1/outlay-rows/entity/{eID}/row/create"
    :
        {
            "post"
        :
            {
                "tags"
            :
                ["outlay-string-controller"], "summary"
            :
                "createRowInEntity", "description"
            :
                "Метод создания строки в сущности (3)", "operationId"
            :
                "createRowInEntityUsingPOST", "consumes"
            :
                ["application/json"], "produces"
            :
                ["*/*"], "parameters"
            :
                [{
                    "name": "eID",
                    "in": "path",
                    "description": "eID",
                    "required": true,
                    "type": "integer",
                    "format": "int64"
                }, {
                    "in": "body",
                    "name": "request",
                    "description": "request",
                    "required": true,
                    "schema": {"$ref": "#/definitions/OutlayRowRequest"}
                }], "responses"
            :
                {
                    "200"
                :
                    {
                        "description"
                    :
                        "OK", "schema"
                    :
                        {
                            "$ref"
                        :
                            "#/definitions/RecalculatedRows"
                        }
                    }
                ,
                    "201"
                :
                    {
                        "description"
                    :
                        "Created"
                    }
                ,
                    "401"
                :
                    {
                        "description"
                    :
                        "Unauthorized"
                    }
                ,
                    "403"
                :
                    {
                        "description"
                    :
                        "Forbidden"
                    }
                ,
                    "404"
                :
                    {
                        "description"
                    :
                        "Not Found"
                    }
                }
            }
        }
    ,
        "/v1/outlay-rows/entity/{eID}/row/list"
    :
        {
            "get"
        :
            {
                "tags"
            :
                ["outlay-string-controller"], "summary"
            :
                "getTreeRows", "description"
            :
                "Метод получения списка строк из сущности, возвращает строки в древовидном представлении(2)", "operationId"
            :
                "getTreeRowsUsingGET", "produces"
            :
                ["*/*"], "parameters"
            :
                [{
                    "name": "eID",
                    "in": "path",
                    "description": "eID",
                    "required": true,
                    "type": "integer",
                    "format": "int64"
                }], "responses"
            :
                {
                    "200"
                :
                    {
                        "description"
                    :
                        "OK", "schema"
                    :
                        {
                            "type"
                        :
                            "array", "items"
                        :
                            {
                                "$ref"
                            :
                                "#/definitions/TreeResponse"
                            }
                        }
                    }
                ,
                    "401"
                :
                    {
                        "description"
                    :
                        "Unauthorized"
                    }
                ,
                    "403"
                :
                    {
                        "description"
                    :
                        "Forbidden"
                    }
                ,
                    "404"
                :
                    {
                        "description"
                    :
                        "Not Found"
                    }
                }
            }
        }
    ,
        "/v1/outlay-rows/entity/{eID}/row/{rID}/delete"
    :
        {
            "delete"
        :
            {
                "tags"
            :
                ["outlay-string-controller"], "summary"
            :
                "deleteRow", "description"
            :
                "Метод удаления строки в сущности(5)", "operationId"
            :
                "deleteRowUsingDELETE", "produces"
            :
                ["*/*"], "parameters"
            :
                [{
                    "name": "eID",
                    "in": "path",
                    "description": "eID",
                    "required": true,
                    "type": "integer",
                    "format": "int64"
                }, {
                    "name": "rID",
                    "in": "path",
                    "description": "rID",
                    "required": true,
                    "type": "integer",
                    "format": "int64"
                }], "responses"
            :
                {
                    "200"
                :
                    {
                        "description"
                    :
                        "OK", "schema"
                    :
                        {
                            "$ref"
                        :
                            "#/definitions/RecalculatedRows"
                        }
                    }
                ,
                    "204"
                :
                    {
                        "description"
                    :
                        "No Content"
                    }
                ,
                    "401"
                :
                    {
                        "description"
                    :
                        "Unauthorized"
                    }
                ,
                    "403"
                :
                    {
                        "description"
                    :
                        "Forbidden"
                    }
                }
            }
        }
    ,
        "/v1/outlay-rows/entity/{eID}/row/{rID}/update"
    :
        {
            "post"
        :
            {
                "tags"
            :
                ["outlay-string-controller"], "summary"
            :
                "updateRow", "description"
            :
                "Метод редактирования строки в сущности(4)", "operationId"
            :
                "updateRowUsingPOST", "consumes"
            :
                ["application/json"], "produces"
            :
                ["*/*"], "parameters"
            :
                [{
                    "name": "eID",
                    "in": "path",
                    "description": "eID",
                    "required": true,
                    "type": "integer",
                    "format": "int64"
                }, {
                    "in": "body",
                    "name": "request",
                    "description": "request",
                    "required": true,
                    "schema": {"$ref": "#/definitions/OutlayRowUpdateRequest"}
                }, {
                    "name": "rID",
                    "in": "path",
                    "description": "rID",
                    "required": true,
                    "type": "integer",
                    "format": "int64"
                }], "responses"
            :
                {
                    "200"
                :
                    {
                        "description"
                    :
                        "OK", "schema"
                    :
                        {
                            "$ref"
                        :
                            "#/definitions/RecalculatedRows"
                        }
                    }
                ,
                    "201"
                :
                    {
                        "description"
                    :
                        "Created"
                    }
                ,
                    "401"
                :
                    {
                        "description"
                    :
                        "Unauthorized"
                    }
                ,
                    "403"
                :
                    {
                        "description"
                    :
                        "Forbidden"
                    }
                ,
                    "404"
                :
                    {
                        "description"
                    :
                        "Not Found"
                    }
                }
            }
        }
    }
,
    "definitions"
:
    {
        "EntityResponse"
    :
        {
            "type"
        :
            "object", "properties"
        :
            {
                "id"
            :
                {
                    "type"
                :
                    "integer", "format"
                :
                    "int64"
                }
            ,
                "rowName"
            :
                {
                    "type"
                :
                    "string"
                }
            }
        ,
            "title"
        :
            "EntityResponse"
        }
    ,
        "OutlayRowRequest"
    :
        {
            "type"
        :
            "object", "properties"
        :
            {
                "equipmentCosts"
            :
                {
                    "type"
                :
                    "integer", "format"
                :
                    "int64"
                }
            ,
                "estimatedProfit"
            :
                {
                    "type"
                :
                    "integer", "format"
                :
                    "int64"
                }
            ,
                "machineOperatorSalary"
            :
                {
                    "type"
                :
                    "integer", "format"
                :
                    "int64"
                }
            ,
                "mainCosts"
            :
                {
                    "type"
                :
                    "integer", "format"
                :
                    "int64"
                }
            ,
                "materials"
            :
                {
                    "type"
                :
                    "integer", "format"
                :
                    "int64"
                }
            ,
                "mimExploitation"
            :
                {
                    "type"
                :
                    "integer", "format"
                :
                    "int64"
                }
            ,
                "overheads"
            :
                {
                    "type"
                :
                    "integer", "format"
                :
                    "int64"
                }
            ,
                "parentId"
            :
                {
                    "type"
                :
                    "integer", "format"
                :
                    "int64"
                }
            ,
                "rowName"
            :
                {
                    "type"
                :
                    "string"
                }
            ,
                "salary"
            :
                {
                    "type"
                :
                    "integer", "format"
                :
                    "int64"
                }
            ,
                "supportCosts"
            :
                {
                    "type"
                :
                    "integer", "format"
                :
                    "int64"
                }
            }
        ,
            "title"
        :
            "OutlayRowRequest"
        }
    ,
        "OutlayRowUpdateRequest"
    :
        {
            "type"
        :
            "object", "properties"
        :
            {
                "equipmentCosts"
            :
                {
                    "type"
                :
                    "integer", "format"
                :
                    "int64"
                }
            ,
                "estimatedProfit"
            :
                {
                    "type"
                :
                    "integer", "format"
                :
                    "int64"
                }
            ,
                "machineOperatorSalary"
            :
                {
                    "type"
                :
                    "integer", "format"
                :
                    "int64"
                }
            ,
                "mainCosts"
            :
                {
                    "type"
                :
                    "integer", "format"
                :
                    "int64"
                }
            ,
                "materials"
            :
                {
                    "type"
                :
                    "integer", "format"
                :
                    "int64"
                }
            ,
                "mimExploitation"
            :
                {
                    "type"
                :
                    "integer", "format"
                :
                    "int64"
                }
            ,
                "overheads"
            :
                {
                    "type"
                :
                    "integer", "format"
                :
                    "int64"
                }
            ,
                "rowName"
            :
                {
                    "type"
                :
                    "string"
                }
            ,
                "salary"
            :
                {
                    "type"
                :
                    "integer", "format"
                :
                    "int64"
                }
            ,
                "supportCosts"
            :
                {
                    "type"
                :
                    "integer", "format"
                :
                    "int64"
                }
            }
        ,
            "title"
        :
            "OutlayRowUpdateRequest"
        }
    ,
        "RecalculatedRows"
    :
        {
            "type"
        :
            "object", "properties"
        :
            {
                "changed"
            :
                {
                    "type"
                :
                    "array", "items"
                :
                    {
                        "$ref"
                    :
                        "#/definitions/RowResponse"
                    }
                }
            ,
                "current"
            :
                {
                    "$ref"
                :
                    "#/definitions/RowResponse"
                }
            }
        ,
            "title"
        :
            "RecalculatedRows"
        }
    ,
        "RowResponse"
    :
        {
            "type"
        :
            "object", "properties"
        :
            {
                "equipmentCosts"
            :
                {
                    "type"
                :
                    "integer", "format"
                :
                    "int64"
                }
            ,
                "estimatedProfit"
            :
                {
                    "type"
                :
                    "integer", "format"
                :
                    "int64"
                }
            ,
                "id"
            :
                {
                    "type"
                :
                    "integer", "format"
                :
                    "int64"
                }
            ,
                "machineOperatorSalary"
            :
                {
                    "type"
                :
                    "integer", "format"
                :
                    "int64"
                }
            ,
                "mainCosts"
            :
                {
                    "type"
                :
                    "integer", "format"
                :
                    "int64"
                }
            ,
                "materials"
            :
                {
                    "type"
                :
                    "integer", "format"
                :
                    "int64"
                }
            ,
                "mimExploitation"
            :
                {
                    "type"
                :
                    "integer", "format"
                :
                    "int64"
                }
            ,
                "overheads"
            :
                {
                    "type"
                :
                    "integer", "format"
                :
                    "int64"
                }
            ,
                "rowName"
            :
                {
                    "type"
                :
                    "string"
                }
            ,
                "salary"
            :
                {
                    "type"
                :
                    "integer", "format"
                :
                    "int64"
                }
            ,
                "supportCosts"
            :
                {
                    "type"
                :
                    "integer", "format"
                :
                    "int64"
                }
            ,
                "total"
            :
                {
                    "type"
                :
                    "integer", "format"
                :
                    "int32"
                }
            }
        ,
            "title"
        :
            "RowResponse"
        }
    ,
        "TreeResponse"
    :
        {
            "type"
        :
            "object", "properties"
        :
            {
                "child"
            :
                {
                    "type"
                :
                    "array", "items"
                :
                    {
                        "$ref"
                    :
                        "#/definitions/TreeResponse"
                    }
                }
            ,
                "equipmentCosts"
            :
                {
                    "type"
                :
                    "integer", "format"
                :
                    "int64"
                }
            ,
                "estimatedProfit"
            :
                {
                    "type"
                :
                    "integer", "format"
                :
                    "int64"
                }
            ,
                "id"
            :
                {
                    "type"
                :
                    "integer", "format"
                :
                    "int64"
                }
            ,
                "machineOperatorSalary"
            :
                {
                    "type"
                :
                    "integer", "format"
                :
                    "int64"
                }
            ,
                "mainCosts"
            :
                {
                    "type"
                :
                    "integer", "format"
                :
                    "int64"
                }
            ,
                "materials"
            :
                {
                    "type"
                :
                    "integer", "format"
                :
                    "int64"
                }
            ,
                "mimExploitation"
            :
                {
                    "type"
                :
                    "integer", "format"
                :
                    "int64"
                }
            ,
                "overheads"
            :
                {
                    "type"
                :
                    "integer", "format"
                :
                    "int64"
                }
            ,
                "rowName"
            :
                {
                    "type"
                :
                    "string"
                }
            ,
                "salary"
            :
                {
                    "type"
                :
                    "integer", "format"
                :
                    "int64"
                }
            ,
                "supportCosts"
            :
                {
                    "type"
                :
                    "integer", "format"
                :
                    "int64"
                }
            ,
                "total"
            :
                {
                    "type"
                :
                    "integer", "format"
                :
                    "int32"
                }
            }
        ,
            "title"
        :
            "TreeResponse"
        }
    }
}
