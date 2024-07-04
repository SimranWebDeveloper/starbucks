interface sizeType {
    size:string,
    capacity:string,
    calories:string
  }
  export interface dataType {
      id: number,
      name: string,
      img: string,
      category: string,
      subcategory: string,
      type: string,
      sizes: sizeType[],
      
  }
  export interface propsdataType {
    coffee:dataType[]
  }

  // add to card
  export interface dataType_card {
    id: number,
    name: string,
    img: string,
    category: string,
    subcategory: string,
    type: string,
    sizes: sizeType[],
    count:number 
}