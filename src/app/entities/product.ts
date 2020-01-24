export class Product {
   title: String;	
   id:String;
   thumbnail:String;
   price:number;
   address={
      state_name:String,
      city_name:String
   };
   available_quantity:number;
}