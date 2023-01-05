import React from 'react'

function List ({people}){ 
    console.log(people)
    return (
        <>
           {people.map((person) =>{
             const { id, name, age, image }= person;
             console.log('id', id)
                return(
                    <article key={id} className='person'>
                        <img src={image} alt={name} />
                            <div>
                                <h4>{name}</h4>
                                <h5>{age} years</h5>
                            </div>
                    </article>
                )
            })}
        </>
    )
}

export default List;