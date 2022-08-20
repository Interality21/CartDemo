# Cart Demo

This is a demo client project for using the API and configuring the application to use the cart feature. 

## Configuring client application




## Creating Product and adding it to space.

1. Navigate to [Product Tab](https://interality.io/#/subadmin/products)
2. Click on the Create button.

![Interality Workflow - Step 2](https://user-images.githubusercontent.com/69627223/185727087-af3b1ac0-3fe6-422e-872d-af78359551c9.jpeg)

3. Fill in all the fields and hit submit to create your product. (Make sure to add uid (unique id) of your product that is same across your platform, it will be required to identify product at your application)

![Interality Workflow - Step 3 (1)](https://user-images.githubusercontent.com/69627223/185727193-66e5658a-2192-4be0-ac5d-d360d3be0752.jpeg)

4. Create new space from space tab -> Create
5. Click on the Products tab, all the created products would be available, here.
6. Now Drag-n-drop and Place the product.

![Interality Workflow - Step 7](https://user-images.githubusercontent.com/69627223/185727366-8d3e5f05-a753-4e0e-888c-fc721ef0b264.jpeg)

## User flow for adding product to cart and check out.

Users would be able to add to cart the product by clicking on `Add to Cart` on hovering over the product.

![Interality Workflow - Step 33](https://user-images.githubusercontent.com/69627223/185727424-a4f38626-1be4-4a12-80a9-015969e02bdc.jpeg)

On top-left cornor, there would be a cart icon from which users can checkout to the clients cart page. (Cart Page Endpoint is passed in during configuration of client application)

![Interality Workflow - Step 41 (1)](https://user-images.githubusercontent.com/69627223/185727688-af5a1a89-c5ad-41a8-b31b-1c8f8d173ed2.jpeg)

Finally the product/s will hit the clients cart and users can continue the payment from client application itself.

![Interality Workflow - Step 42 (1)](https://user-images.githubusercontent.com/69627223/185727722-d7f9ab2b-3997-4dff-9bb6-2f8408b02c5a.jpeg)



