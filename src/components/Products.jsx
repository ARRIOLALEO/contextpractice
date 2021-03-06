import { useContext } from "react"
import { GeneralContext } from "../context/Context"

import Product from "./Product"
import { Grid } from "@mui/material"

function Products(){

    const { all } = useContext(GeneralContext)

    return(
    <><h1>Products</h1>
    <Grid container>
    { all.map((pr)=>{
        return(<Grid item xs={6}><Product data={pr} key={pr.id}/></Grid>)
    })}
    </Grid>
    </>)
}

export default Products