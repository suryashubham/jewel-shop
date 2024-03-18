# Design Documentation

## Customer Portal

### Services

| Service Name          | Database Name        |
|-----------------------|----------------------|
| User service        | customers_db         |
| Inventory service     | inventory_db         |
| Auth service          | customers_db         |
| Search Service        | product_db           |
| Detail service        | product_db           |
| Order service         | order_db             |
| Payment Gateway       | payment_db           |


## Product DB

<center> Product table </center>
    
    | product_id | name       | description     | price | material | weight | image_url | category_id |
    |------------|------------|-----------------|-------|----------|--------|-----------|-------------|
    | 1          | [Product A] | [Description A] | $50   | [Material A] | [Weight A] | [Image URL A] | [category_id_A] |
    | 2          | [Product B] | [Description B] | $100  | [Material B] | [Weight B] | [Image URL B] | [category_id_B] |
    | 3          | [Product C] | [Description C] | $75   | [Material C] | [Weight C] | [Image URL C] | [category_id_C] |

<center> Category table </center>

    | category_id | name            |
    |-------------|-----------------|
    | 1           | [Category A]    |
    | 2           | [Category B]    |
    | 3           | [Category C]    |

## Inventory DB

<center> Inventory table </center>

    | inventory_id | product_id | quantity | location   | status      | last_updated        |
    |--------------|------------|----------|------------|-------------|---------------------|
    | 1            | 1          | 10       | [Location A] | [Status A]    | [Last Updated A]    |
    | 2            | 2          | 15       | [Location B] | [Status B]    | [Last Updated B]    |
    | 3            | 3          | 20       | [Location C] | [Status C]    | [Last Updated C]    |

## Customer DB

<center> Customers table </center>

    | customer_id | name         | email                    | phone           | address               |
    |-------------|--------------|--------------------------|-----------------|-----------------------|
    | 1           | [Customer A] | [customerA@example.com] | [123-456-7890]  | [Address A]           |
    | 2           | [Customer B] | [customerB@example.com] | [456-789-0123]  | [Address B]           |
    | 3           | [Customer C] | [customerC@example.com] | [789-012-3456]  | [Address C]           |


## Order DB

<center>Orders table</center>

    | order_id | customer_id | order_date         | total_price | status      |
    |----------|-------------|--------------------|-------------|-------------|
    | 1        | 1           | [Order Date A]     | $500        | [Status A]  |
    | 2        | 2           | [Order Date B]     | $750        | [Status B]  |
    | 3        | 3           | [Order Date C]     | $1000       | [Status C]  |

    
<center>Order Items table</center>

    | order_item_id | order_id | product_id | quantity | unit_price | subtotal |
    |---------------|----------|------------|----------|------------|----------|
    | 1             | 1        | 1          | 2        | $50        | $100     |
    | 2             | 1        | 2          | 1        | $100       | $100     |
    | 3             | 1        | 3          | 3        | $75        | $225     |




## Estimations v1.0

Users - 10000
Products - 1000000

Product details = 500 bytes 
total products db = 1000000 * 500 bytes ~ 1Gb

customer db = 10000*200 bytes = 2000000 bytes = 0.016Gb