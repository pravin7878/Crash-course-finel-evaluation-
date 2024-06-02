import { SimpleGrid } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
export default function Products() {
    const [products, setproducts] = useState(null)
    const [isLoading, setisLoading] = useState(false)
    const [isErr, setisErr] = useState(false)

    const getProduct = async () => {
        setisLoading(true)
        try {
            let res = await axios({
                method: "get",
                url: `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`
            })
            // console.log(res?.data?.data);
            setproducts(res?.data?.data);
            setisLoading(false)
        } catch (error) {
            setisErr(true)
            setisLoading(false)
            console.log(error);
        }
    }

    useEffect(() => {
        getProduct()
    }, [])
    return (
        <SimpleGrid columns={{sm:1,md:2,lg:3}} spacing={5}>
            {products?.map((product)=>{
                return <ProductCard {...product} key={product.id}/>
            })}
        </SimpleGrid>
    )
}
