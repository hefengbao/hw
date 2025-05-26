# Join

## 1.INNER JOIN（内连接）

![](https://hefengbao.github.io/assets/images/202409061459183.webp)

```sql
SELECT <select_list> 
FROM Table_A A
INNER JOIN Table_B B
ON A.Key = B.Key
```

## 2.LEFT JOIN（左连接）

![](https://hefengbao.github.io/assets/images/202409061500166.webp)

```sql
SELECT <select_list>
FROM Table_A A
LEFT JOIN Table_B B
ON A.Key = B.Key
```

## 3.RIGHT JOIN（右连接）

![](https://hefengbao.github.io/assets/images/202409061501772.webp)

```sql
SELECT <select_list>
FROM Table_A A
RIGHT JOIN Table_B B
ON A.Key = B.Key
```

## 4.OUTER JOIN（外连接）

![](https://hefengbao.github.io/assets/images/202409061502756.webp)

```sql
SELECT <select_list>
FROM Table_A A
FULL OUTER JOIN Table_B B
ON A.Key = B.Key
```

## 5.LEFT JOIN EXCLUDING INNER JOIN（左连接-内连接）

![](https://hefengbao.github.io/assets/images/202409061504131.webp)

```sql
SELECT <select_list> 
FROM Table_A A
LEFT JOIN Table_B B
ON A.Key = B.Key
WHERE B.Key IS NULL
```

## 6.RIGHT JOIN EXCLUDING INNER JOIN（右连接-内连接）

![](https://hefengbao.github.io/assets/images/202409061505179.webp)

```sql
SELECT <select_list>
FROM Table_A A
RIGHT JOIN Table_B B
ON A.Key = B.Key
WHERE A.Key IS NULL
```

## 7.OUTER JOIN EXCLUDING INNER JOIN（外连接-内连接）

![](https://hefengbao.github.io/assets/images/202409061505747.webp)

```sql
SELECT <select_list>
FROM Table_A A
FULL OUTER JOIN Table_B B
ON A.Key = B.Key
WHERE A.Key IS NULL OR B.Key IS NULL
```