# Cart Demo

This is a demo client project for using the API and configuring the application to use the cart feature. 

## Configuring client application

Generate and copy Client Secret Key from [Profile Page](https://interality.io/#/subadmin/profile)

<img width="750" alt="image" src="https://user-images.githubusercontent.com/69627223/185732384-50c3cc20-8a2e-4c18-b2a6-6f9bbacccc50.png">

Ref: [Cart.js](/src/Components/Cart.js)

On the clients Cart Page, accept a query parameter `cartId`. Which will be used to fetch products from the redirect user.
Users will be redirected to this application with `cartId` as parameter.
Get the `cartId` value from the parameter query and use the API to fetch the products information. Client would than handle the products to add to products to their native carts.

API Endpoint: `https://interality-api.herokuapp.com/api/cart/productsFromCartId`
Add a `Authorization` Header and value is the Client Secret API Key copied in the preivous step.

Example
```
  const cartId = qs.get('cartId');
 
  const fetchProductsInfoFromCartId = async(cartId) => {
    
    return await fetch(`https://interality-api.herokuapp.com/api/cart/productsFromCartId?cartId=${cartId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': clientId
      }
    })
      .then(response => {
        console.log(response)

        return response.json()
      })
  }
    
 ```
Response will be list of product objects, field will be same as entered during product creation from admin panel.
Use uid (unique id) that you will pass during product creation for mapping created products with your database products.

Finally, Enter your Cart Endpoint from Manage Profile in [Profile Tab](https://interality.io/#/subadmin/profile). User will be redirect here with cartId query parameter, when they click checkout. Here, you will fetch products and add to your native cart. 

<img width="955" alt="image" src="https://user-images.githubusercontent.com/69627223/185737564-394c6952-8ad6-4273-965d-fce9c051f1b7.png">

 

## Creating Product and adding it to space.

1. Navigate to [Product Tab](https://interality.io/#/subadmin/products)
2. Click on the Create button.

![Interality Workflow - Step 2](https://user-images.githubusercontent.com/69627223/185727087-af3b1ac0-3fe6-422e-872d-af78359551c9.jpeg)

3. Fill in all the fields and hit submit to create your product. 
Make sure to add uid (unique id) of your product that is same across your platform, it will be required to identify product at your application.

![Interality Workflow - Step 3 (1)](https://user-images.githubusercontent.com/69627223/185727193-66e5658a-2192-4be0-ac5d-d360d3be0752.jpeg)

4. Create new space from space tab -> Create
5. Click on the Products tab, all the created products would be available, here.
6. Now Drag-n-drop and Place the product.

<img width="1278" alt="image" src="https://user-images.githubusercontent.com/69627223/188830425-128960b8-256f-4a01-82f2-dade74ac8a34.png">


## User flow for adding product to cart and check out.

Users would be able to add to cart the product by clicking on `Add to Cart` on hovering over the product.They will see the products details, click on `Add to Cart` and set quantity.
<br /><br />

![image](https://user-images.githubusercontent.com/69627223/188832464-4a3d05e7-b861-445e-91ef-a4254bfa0914.png)

<br />
<img width="1279" alt="image" src="https://user-images.githubusercontent.com/69627223/188833335-52588d5b-9f63-4752-af97-48f1f792287e.png">

<br />

On top-left cornor, there would be a cart icon from which users can checkout to the clients cart page. (Cart Page Endpoint is passed in during configuration of client application)
<br />

<img width="1279" alt="image" src="https://user-images.githubusercontent.com/69627223/188833412-2183cec6-1865-4839-abd4-d5187b30b89e.png">

Finally the user will be redirected to clients cart and product/s will be added to native client cart.

<img width="1277" alt="image" src="https://user-images.githubusercontent.com/69627223/188833493-de4a2db4-49a4-4cda-aa02-669bdb95168e.png">


