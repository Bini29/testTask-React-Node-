CREATE TABLE tables (
    id serial PRIMARY KEY,
    name varchar(255),
    date varchar(255),
    amount varchar(255),
    distance varchar(255),
    created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    modified_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);

