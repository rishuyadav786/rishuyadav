export class Help {
    id:String
    name:String
    email:String
    password:String
    userType:string
    mobile:string
    gender:string
    address:string
    address2:string
    city:string
    state:string
    zip:string
    otp:Number
    isUserVerified:boolean
    randomNumber:Number
}

export class Items1{
    vin:String
    brand:String
    color:String
    year:Number
    buyerEmail:string
    sellerEmail:string
}
export class Items{
    id:string
    name:string
    shortDesc:string
    brand:string
    color:string
    displayType:string
    quanitity:string
    ram:string;
    price:string
    rom:string
    battery:string
    category:string
    subCategory:string
    screenLength:String
    camera:string
    wifi:string
    bluetooth:string
    warranty:string
    sensors:string
    year:Number
    buyerEmail:string
    sellerEmail:string
    images:string
    processor:string
    quantity:string
}
export class myItems{
    vin:String
    brand:String
    color:String
    year:Number
    userEmail:string
    sellerEmail:string
}
export class myCart{
   id:string
   buyerEmail:string
   sellerEmail:string
   productId:string
}
export class UserType{
    label:string
    value:string
}
export class Orders{
    id:string
    buyerEmail:string
    sellerEmail:string
    productId:string
    quantity:string
    orderStatus:string
    paymentType:string
    paymentStatus:String
    productOrderDate:Date
    deliveredDate:Date;
}
export class orderDetails{
    id:String
    name:String
    buyerEmail:String
    sellerEmail:string
    mobile:string
    address:string
    productId:string
    orderId:string
    quantity:string
    productName:string
    shortDesc:string
    brand:string
    color:string
    ram:string;
    price:string
    rom:string
    category:string
    subCategory:string
    screenLength:String
    camera:string
    orderStatus:string
    totalPrice:string
    images:string
    productOrderDate:Date;
    deliveredDate:Date;
}
export class Reviews{
    id:string
    buyerEmail:string
    sellerEmail:string
    productId:string
    comments:string
    ratings:Number
    name:String
    images:string
}