import { useState, useEffect } from 'react';
import { onTapData } from '../../assets/data/beer.data'

const OnTap = () => {
    const [onTap, setOnTap] = useState([])

    useEffect(() => {
      const getOnTap = async () => {
        // const onTapToSet = await getOnTapDocs()
        const onTapToSet = onTapData
        setOnTap(onTapToSet)
      }
      getOnTap()
    },[])
  
    return (
      <div className="App">
        <ul>
          { onTap.map(beer => (
            <li>
              <h2>{beer.name}</h2>
              <h3>{beer.producer}</h3>
              <h3>{`${beer.style} | ${beer.abv} | ${beer.ibu}`}</h3>
              <p>{beer.description}</p>
            </li>
          )) }
        </ul>
      </div>
    );
}

export default OnTap