
import { useState } from 'react'; 
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrids';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState([ 'Shaman King' ]);

    const onAddCategory = (newCategory) => {

        if ( categories.includes(newCategory) ) return;

        setCategories([...categories, newCategory])
        // console.log(newCategory);        
        // categories.push(newCategory)
        // setCategories( (data) => [ newCategory, ...data] );
    }

    console.log('Add Cat.: ', categories);
    

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory
             
             onNewCategory={ (event) => onAddCategory(event) }
            //  setCategories={ setCategories }
            
            />
            {/* Boton */}
            {/* Listado de Gif */}

            {/* <button onClick={ onAddCategory } > Agregar </button> */}

            
                { 
                    categories.map( ( category ) => (
                        
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />
                        
                        // <div key={ category } >
                        //     <h2>{ category }</h2>
                        //     <li>{ category }</li>     
                        // </div>
                    ))
                }
                {/* Gif Item */}

        </>
    )
}