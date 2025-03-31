IF OBJECT_ID('Mail2FTP.dbo.Containers', 'U') IS NULL
BEGIN
    CREATE TABLE Mail2FTP.dbo.Containers (
        id INT IDENTITY(1,1) PRIMARY KEY, -- Уникальный идентификатор
        number BIGINT NOT NULL, -- Числовой тип для номера контейнера
        type NVARCHAR(255) NULL, -- Текстовый тип
        length FLOAT NOT NULL, -- Числовой тип (длина)
        width FLOAT NOT NULL, -- Числовой тип (ширина)
        height FLOAT NOT NULL, -- Числовой тип (высота)
        weight FLOAT NOT NULL, -- Числовой тип (вес)
        is_empty BIT NOT NULL, -- Тип бит (пустой/не пустой)
        delivery_date DATETIME NOT NULL -- Дата поступления
    );
END;

IF OBJECT_ID('Mail2FTP.dbo.Operations', 'U') IS NULL
BEGIN
    CREATE TABLE Mail2FTP.dbo.Operations (
        id INT IDENTITY(1,1) PRIMARY KEY, -- Автоинкрементный первичный ключ
        container_id INT NOT NULL, -- Внешний ключ на контейнеры
        start_date DATETIME NOT NULL, -- Дата начала операции
        end_date DATETIME NOT NULL, -- Дата окончания операции
        operation_type NVARCHAR(255) NOT NULL, -- Тип операции
        operator_name NVARCHAR(255) NOT NULL, -- ФИО оператора
        inspection_place NVARCHAR(255) NOT NULL, -- Место инспекции
        CONSTRAINT FK_Operations_Containers FOREIGN KEY (container_id) REFERENCES Mail2FTP.dbo.Containers(id) ON DELETE CASCADE
    );
END;
