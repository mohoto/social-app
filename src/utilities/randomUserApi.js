import {useState} from 'react'

const RandomuserApi = () => {

    const [data, setData] = useState()

    const getUser = async () => {

        await fetch('https://randomuser.me/api/?results=100')
            .then(response => response.json())
            .then(data => {
                
                setData(data);
            })
    }

};

export default RandomuserApi;