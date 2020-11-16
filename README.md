# cs1300-development

## Organization of your components

I have one main App Component which uses the following components to render:
  * SizeFilter (The component responsible for handling my filter my size functionality)
  * RegionFilter (The component responsible for handling my filter my Region functionality)
  * Sort (The component responsible for handling my sort by either price or alphabet functionality)
  * ItemList (the component that handles rendering all the items)
  * Cart (the component responsible for the cart of my website and rendering it)


I have a constants file that stores my enums and my item list.


I have 3 enums:
  * Regions
  * Sizes
  * SortTypes
## How data is passed down through your components

My state contains the following items:
  * Cart: This stores the items currently in the cart
  * Quantity: This maps an item name to the quantity of that item in my cart
  * Filter: This is an object that helps me determine what filters are currently on
  * SortMethod: This is a string that helps me determine what the sort method of my application is set to
  
  
## How user interactions can trigger changes in the state of components

  User adding/removing an item changes two things in the state:
    * The Quantity dictionary
    * The quantity of that item is incremented
    * The Cart
    * The Item is added to the cart
    * User clicking the sort/filter updates the Filter and SortMethod states
    * This causes a rerender of the item list.
