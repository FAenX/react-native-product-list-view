import products from '../data'



export const filterData=(filter: string)=>{

    return products.filter((product)=>{
        const name = product.name.match(filter) 
        const desc = product.description.match(filter) 
        const type = product.description.match(filter)

        if(name !== null){
            return product
        }

        if(desc !== null){
            return product
        }
    })
    
}