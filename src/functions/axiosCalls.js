import axios from 'axios'
import { useState } from 'react'
export const axiosPost = () => {

}

export const axiosGet = (url) => {
  

    let dataReceived = ""
    let error = ""
    

    axios.get(url)
        .then(({ data }) => {
            
            dataReceived = data
           

        })
        .catch((err) => {
          
        })
    
    return [dataReceived, error]


}

export const axiosDelete = () => {

}
export const axiosPut = () => {

}
export const axiosPatch = () => {

}