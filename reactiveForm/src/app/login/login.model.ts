export class ILogin{
    constructor(
        public email:string,
        public password:string
    ){}
}
export class LoginRes{
    constructor(
        public auth:string,
        public token:string
    ){}
}

export interface userRes{
        _id:string,
        name:string,
        email:string,
        phone:string,
        role:string,
        __v:number
}

// export class userRes{
//     constructor(
//         public _d:string,
//         public name:string,
//         public email:string,
//         public phone:string,
//         public role:string,
//         public __v:number
//     ){}
// }


// "_id": "66185f9cca27ca12bc92f092",
//     "name": "aboje gabriel",
//     "email": "abojejunior@gmail.com",
//     "phone": "0802 291 1266",
//     "password": "$2a$08$eXa9lDTMScQ8idkcAGcmGuVzeVMQUUxtpBa5.7sp/TVQj8WpdLOr.",
//     "role": "User",
//     "__v": 0