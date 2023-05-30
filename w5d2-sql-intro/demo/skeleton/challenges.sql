-- CHALLENGE #1:
-- Select my id
SELECT
    *
FROM
    ny_instructors
WHERE
    name = 'Amin';














-- CHALLENGE #2:
-- Select all of my possessions using my id
SELECT
    name
FROM
    possessions
WHERE
    owner_id = 1;









-- CHALLENGE #3:
-- Select the names of the SF instructors whose name starts with a M

SELECT
    *
FROM
    sf_instructors
WHERE
    name LIKE 'M%';































-- CHALLENGE #4:
-- Get the distinct names of possessions
SELECT
    DISTINCT name
FROM
    possessions;


























-- CHALLENGE #5:
-- Get the name & cost of the second most expensive possession 
-- whose name has at least two words
SELECT
    name, cost
FROM
    possessions
WHERE
    name LIKE '% %'
ORDER BY
    cost DESC
LIMIT
    1
OFFSET 1;





























-- CHALLENGE #6:
-- Get the names of NY Instructors who do not have a pod leader

SELECT
    pod_leader_id
FROM
    ny_instructors
WHERE
    pod_leader_id IS NULL;






















-- CHALLENGE #7:
-- Get average cost of all possessions
SELECT
    AVG(cost) AS avg_cost_of_all_possessions
FROM
    possessions;










-- CHALLENGE #8:
-- Get the total cost of all possessions
SELECT
    SUM(cost) AS sum_cost_of_all_possessions
FROM
    possessions;




-- CHALLENGE #9:
-- Count the total number of possessions

SELECT
    COUNT(*)
FROM
    possessions;










-- CHALLENGE #10:
-- Count the distinct types of possessions
SELECT
    COUNT(DISTINCT type) AS distinct_types
FROM
    possessions;























-- CHALLENGE #11:
-- Show each possession using GROUP BY

SELECT
    name
FROM
    possessions
GROUP BY
    name;
























-- CHALLENGE #12:
-- For each type of possession, show the type and number of items

SELECT 
    type, COUNT(name)
FROM
    possessions
GROUP BY 
    type;
































-- CHALLENGE #13:
-- For each type of possession with more than 5 items, show the type and number of each
SELECT 
    type, COUNT(name)
FROM
    possessions
GROUP BY 
    type
HAVING
    COUNT(*) > 5;






























-- CHALLENGE #14
-- Of the most common item, list the ones that cost over $1000
SELECT
     *
FROM
    possessions
WHERE name IN (
            SELECT
                name
            FROM
                possessions
            GROUP BY
                name
            ORDER BY
                COUNT(*) DESC
            LIMIT 1
) AND cost > 1000;


























-- CHALLENGE #15
-- How many types of possessions have a total cost over $200?

SELECT 
    COUNT(*) AS num_types
FROM (
    SELECT
        type
    FROM
        possessions
    GROUP BY
        type
    HAVING
        SUM(cost) > 200
) AS pricey_possessions;




























-- CHALLENGE #16
-- Who is the owner of the most expensive item?
SELECT
    name
FROM
    ny_instructors
WHERE id IN (
        SELECT 
            owner_id
        FROM
            possessions
        ORDER BY
            cost DESC
        LIMIT 1
);
