# 数据类型

[Datatypes In SQLite](https://sqlite.org/datatype3.html)

|Example Typenames From The  <br>CREATE TABLE Statement  <br>or CAST Expression|Resulting Affinity|Rule Used To Determine Affinity|
|---|---|---|
|INT  <br>INTEGER  <br>TINYINT  <br>SMALLINT  <br>MEDIUMINT  <br>BIGINT  <br>UNSIGNED BIG INT  <br>INT2  <br>INT8|INTEGER|1|
|CHARACTER(20)  <br>VARCHAR(255)  <br>VARYING CHARACTER(255)  <br>NCHAR(55)  <br>NATIVE CHARACTER(70)  <br>NVARCHAR(100)  <br>TEXT  <br>CLOB|TEXT|2|
|BLOB  <br>_no datatype specified_|BLOB|3|
|REAL  <br>DOUBLE  <br>DOUBLE PRECISION  <br>FLOAT|REAL|4|
|NUMERIC  <br>DECIMAL(10,5)  <br>BOOLEAN  <br>DATE  <br>DATETIME|NUMERIC|5|