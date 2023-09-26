CREATE TABLE IF NOT EXISTS newmessages
(
    id          VARCHAR(60) DEFAULT RANDOM_UUID() PRIMARY KEY,
    title       VARCHAR(60) NOT NULL,
    description VARCHAR(60) NOT NULL
);
