import React, {useState, useEffect} from 'react'

type Props = {
    text: string;
}

export default function übung2({ }: Props) {
    {/*const colors = ["bg-green-200", "bg-gray-100"]*/}

    const [comments, setComment] = useState<Array<string>>([]);
    const [active, setActive] = useState<Boolean>(false);
    {/*const [color, setColor] = useState(colors[0])*/}

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
            .then(response => response.json())
            .then(data => {
                setComment(data);
                console.log(data);
            });
    }, []);

    {/*useEffect(() =>{
        console.log(active )
        setColor(colors[active ? 0 : 1])
    },[active]);*/}

    return (
        <div className={active ? 'bg-green-200' : 'bg-gray-100'}>
            <h1>Hallo</h1>
            <div>
                {comments.map((commentsArray : any) => (
                    <div>
                        <li key={commentsArray.id}>
                            {commentsArray.name}
                        </li>
                    </div>
                ))}
            </div>
            <button className='border ml-4 mt-4' onClick={() => setActive(!active)}>Click me</button>
        </div>
    )
}