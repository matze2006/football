import React, {useState, useEffect} from 'react'

type Props = {
    title : string;
}

export default function test({title}: Props) {
    const [users, setUsers] = useState<Array<string>>([])
    const [visible, setVisible] = useState<Boolean>(true)

    useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(data => {
                    setUsers(data);
                    console.log(data);
                });
        }, []);
  
    return (
    <div className={visible ? 'bg-blue-100' : 'bg-red-100'}>
        <h1>{title}</h1>
        <div>
            {users.map((usersArray : any) => (
                    <div>
                        <li key={usersArray.id}>
                            {usersArray.username}
                        </li>
                    </div>
                ))}
        </div>
        <button className='border ml-4 mt-4' onClick={() => setVisible(!visible)}>Toggle</button>
    </div>
  )
}