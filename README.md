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

![image](https://user-images.githubusercontent.com/69627223/185738348-3e433a16-d1ce-4887-a75e-429c3dfb6961.png)

## User flow for adding product to cart and check out.

Users would be able to add to cart the product by clicking on `Add to Cart` on hovering over the product.They will see the products details, click on `Add to Cart` and set quantity.
<br />
<img width="797" alt="image" src="https://user-images.githubusercontent.com/69627223/188439857-99b8632d-a12d-4555-9095-db356d2c337f.png">
<br />
<img width="797" alt="image" src="https://user-images.githubusercontent.com/69627223/188440338-7d28f579-1df3-4a31-a257-2579892675f5.png">


On top-left cornor, there would be a cart icon from which users can checkout to the clients cart page. (Cart Page Endpoint is passed in during configuration of client application)
<br />
<img width="797" alt="image" src="https://user-images.githubusercontent.com/69627223/188440748-87a8f1c3-7bb5-4db2-982f-9a8581956508.png">

Finally the user will be redirected to clients cart and product/s will be added to native client cart.

![Interality Workflow - Step 42 (1)](https://user-images.githubusercontent.com/69627223/185727722-d7f9ab2b-3997-4dff-9bb6-2f8408b02c5a.jpeg)



