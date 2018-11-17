CREATE TABLE comments(
  id serial PRIMARY KEY,
  "user" character varying(50),
  "prodRating" smallint,
  "yesRating" smallint,
  "noRating" smallint,
  date timestamp with time zone,
  body text,
  verified boolean,
  recommend boolean,
  size smallint,
  width smallint,
  comfort smallint,
  quality smallint,
  response text,
  "prodId" smallint,
  header text
)

COPY comments("user","prodRating","yesRating","noRating",date,body,verified,recommend,size,width,comfort,quality,response,"prodId",header) FROM '/Users/merlin/SDC/matthew-module/data2.csv' DELIMITER ',' CSV HEADER


//////////////////////////
Mongo:

mongoimport -d sdc -c comments --type CSV --file /Users/merlin/SDC/matthew-module/data2.csv --headerline