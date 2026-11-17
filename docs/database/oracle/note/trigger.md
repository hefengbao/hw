# 触发器

## ID 自增

`trigger` 搭配 `sequence` 实现 ID 自增。

### 定义 sequence

``` sql
CREATE SEQUENCE SEQ_ID_INCREMENT --SEQ_表名
      INCREMENT BY 1    -- 每次递增1
      START WITH 1     -- 从1开始
      NOMAXVALUE       -- 没有最大值
      MINVALUE 1       -- 最小值为1
      NOCYCLE;         -- 不循环
```

### 定义 trigger

``` sql
create or replace trigger trigger_id_auto_increment -- 自定义名称，和表名有相关性，避免重复？
  before insert
  on table_name -- 表名 
  for each row
declare
  NEXT_ID NUMBER;
begin
  SELECT SEQ_PY_DENGJIS_ID_INCREMENT.NEXTVAL INTO NEXT_ID FROM DUAL;
   :NEW.ID := NEXT_ID; --:NEW表示新插入的那条记录
end trigger_id_auto_increment;
```

## 示例

```SQL
create sequence FAILED_JOBS_ID_SEQ
  minvalue 1
  maxvalue 9999999999999999999999999999
  start with 1
  increment by 1
  cache 20;


create or replace trigger failed_jobs_id_trg
  before insert on FAILED_JOBS
  for each row
begin
  if :new.ID is null then
    select failed_jobs_id_seq.nextval into :new.ID from dual;
  end if;
end;
```