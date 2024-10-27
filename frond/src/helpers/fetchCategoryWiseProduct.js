import SummaryApi from "../commun"

const fetchCategoryWiseProduct = async(category)=>{
    const response =  await fetch(SummaryApi.CategoryWiseProduct.url,{
        method:SummaryApi.CategoryWiseProduct.method,
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({
            category:category
        })
    })

    const dataResponse =  await response.json()

    return dataResponse
}


export default fetchCategoryWiseProduct