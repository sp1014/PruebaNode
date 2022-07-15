# PruebaNode
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Query para oracle 
```
create  table  users(
     id        NUMBER (5)
     Nombres   VARCHAR(50),
     Apellidos  VARCHAR(50),
     Telefonos  VARCHAR(50),
     Direcciones  VARCHAR(50),
     Archivos VARCHAR(50)
);
  ALTER TABLE users
  ADD (
    CONSTRAINT users_pk PRIMARY KEY (id)
  );
  CREATE SEQUENCE users_sequence;
  CREATE OR REPLACE TRIGGER users_insert
  BEFORE INSERT ON users
  FOR EACH ROW
BEGIN
  SELECT users_sequence.nextval
  INTO :new.id
  FROM dual;
END;
```
