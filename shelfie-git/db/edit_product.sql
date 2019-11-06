UPDATE shelfie
SET product_name = $1
WHERE id = $2;

UPDATE shelfie
SET price = $1
WHERE id = $2;

SELECT * FROM shelfie;