import { GifItem } from "./GIfItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );
    
    return (
      <>
          <h3>{ category }</h3>
          {
            isLoading && ( <h2  >Cargando.....</h2> )
          }
          console.log(category);
          
          <div className="card-grid" >
            {
                images.map( ( img ) => (

                    <GifItem  
                        key={ img.id }
                        { ...img }
                    />
                ))
            }

          </div>
          
      </>
    );
};
