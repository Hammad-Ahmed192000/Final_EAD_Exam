import React from 'react'
import { Button, Input } from 'antd'

function addingRecipe() {
  return (
    <div>
         <br />
    <br />
    <h3> 
      Recipe Management App
    </h3>
    <br />
    <br />

      <Input size="small" width="20" placeholder="Search for Recipe" / >
        <br />
        <br />


      <Button type="primary" ghost> Add Recipe </Button>


    <br />
    <br />
    <br />
    <Button type="primary" ghost> Update Recipe </Button>
    <br />
    <br />
    <br />
    <Button type="primary" ghost> Delete Recipe </Button>
    <br />
    <br />
    <br />
    <Button type="primary" ghost> Show All Recipes </Button>
    </div>
  )
}

export default addingRecipe