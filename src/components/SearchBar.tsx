import { ChangeEvent, useRef } from "react"

export function SearchBar (): JSX.Element {

    const debounceRef = useRef<NodeJS.Timeout>()

    const onQueryChange = (event:ChangeEvent<HTMLInputElement>) => {
        if (debounceRef.current) clearTimeout(debounceRef.current)

        debounceRef.current = setTimeout(() => {
            //buscar
            console.log(event.target.value)
        }
        , 1000)
    }

  return (
    <div 
        style={{
            position: 'fixed',
            top: '20px',
            left: '20px',
            backgroundColor: 'white',
            zIndex: 1000,
            boxShadow: '0 5px 10px rgba(0,0,0,0.2)',
            width: '250px',
            padding: '5px',
            borderRadius: '5px'            
        }}
    >
        <input type='text' className="form-control" placeholder="Buscar lugar..." onChange={onQueryChange}/>
     </div>    
  )
}
