UPDATE shelfie
SET product_name = ${product_name}
WHERE id = ${id};

UPDATE shelfie
SET price = ${price}
WHERE id = ${id};

UPDATE shelfie
SET image_url = ${image_url}
WHERE id = ${id};

SELECT * FROM shelfie;