

export interface Author{
    id:string
    name:string
    mission:string
    photo:{
        url:string
    }
    bio:string
    contato:{
        href:string
        id:string
        nome:string
    }[]
    temasAbordados:{
        id:string
        nome:string
    }[]
  
}