# To refer React Learning 

# Parcel
- Development Build
- Local Server
- HMR = Hot Module Replacement(Automatically refreshes our page)
- File Watching Algorithm written in C++
- Faster Development eperience: Because of Caching 
- Image Optimization
- Minify and Compress all the files for us for production build = bundler
- Consistent Hashing
- Code splitting
- Differential Bundling - to support older browsers also
- Diagnostics of the app - Error Handling
- can also host on HTTPS
- Tree Shaking - remove unused code for me
- Different build for dev

# Food Ordering App

1. Header
 - Logo
 - NavItems
2. Body
 - Searh
 - RestaurantContainer
   - RestaurantCard
      - image
      - name of restaurant, rating, cuisine, delivery time
3. Footer
 - Copyright
 - Links
 - Address


Two types of Export and Import
- Default: export default Component/Variable;
import Component/Variable from "path";

- Named: export const Component/Variable;
import {Component/Variable} from "path";


...
# React Hooks
 (these are normal JS utiility functions pre built by facebook developers)
 - useState() - generate superpowerful react variables
  (whenever state variables udates react triggers a reconciliation cycle i.e, re renders the component)
 - useEffect()

