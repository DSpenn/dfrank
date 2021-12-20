import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { QUERY_CHARACTERS } from '../utils/queries';

function CharactersList() { 
  const { loading, error, data } = useQuery(QUERY_CHARACTERS);
  const characters = data?.characters || [];


  const displayCharacters = () => {
    if(loading){
      return(<div>Loading ...</div>)
      
    }if (error) {
      return <div>encountered an error: {error}</div>;
    }else {
      return characters.map(Character => {
        return <Link key={Character._id} to={`/character/${Character._id}`}> 
          <li>{Character.name}</li></Link>
    })
    }
  }

    return (
        <div>
              <ul>{
                displayCharacters()
                }</ul>
        </div>
    )
}

export default CharactersList
