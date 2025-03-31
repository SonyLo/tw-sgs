SELECT '[' + STUFF((
    SELECT ',{"id":' + CAST(id AS NVARCHAR) +
           ',"number":' + CAST(number AS NVARCHAR) +
           ',"type":"' + ISNULL(type, '') + '"' +
           ',"length":' + CAST(length AS NVARCHAR) +
           ',"width":' + CAST(width AS NVARCHAR) +
           ',"height":' + CAST(height AS NVARCHAR) +
           ',"weight":' + CAST(weight AS NVARCHAR) +
           ',"is_empty":' + CAST(is_empty AS NVARCHAR) +
           ',"delivery_date":"' + CONVERT(NVARCHAR, delivery_date, 120) + '"}'
    FROM Mail2FTP.dbo.Containers
    FOR XML PATH(''), TYPE).value('.', 'NVARCHAR(MAX)'), 1, 1, '') + ']'

    
    SELECT '[' + STUFF((
    SELECT ',{"id":' + CAST(o.id AS NVARCHAR) +
           ',"container_id":' + CAST(o.container_id AS NVARCHAR) +
           ',"start_date":"' + CONVERT(NVARCHAR, o.start_date, 120) + '"' +
           ',"end_date":"' + CONVERT(NVARCHAR, o.end_date, 120) + '"' +
           ',"operation_type":"' + o.operation_type + '"' +
           ',"operator_name":"' + o.operator_name + '"' +
           ',"inspection_place":"' + o.inspection_place + '"}'
    FROM Mail2FTP.dbo.Operations o
    JOIN Mail2FTP.dbo.Containers c ON o.container_id = c.id
    WHERE c.is_empty = 0
    FOR XML PATH(''), TYPE).value('.', 'NVARCHAR(MAX)'), 1, 1, '') + ']';
