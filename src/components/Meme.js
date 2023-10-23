import React from 'react' 
import memeData from '../memesData'


export default function Meme(){
    const [memeImage, setMemeImage] = React.useState("https://i.imgflip.com/30b1gx.jpg")

    let url
    function getMemeImage(){
        const memesArray = memeData.data.memes
        const randomNumber = Math.floor(Math.random()*memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }
   

    return (
        <main>
            <p>{url}</p>
            <div className='form'>
                <input 
                placeholder='Top Text' 
                type="text" 
                className='form--input'
                />

                <input 
                placeholder='Bottom Text' 
                type="text" 
                className='form--input'
                />

                <button 
                className='form--button'
                onClick={getMemeImage}
                >
                    Get a new meme image
                </button>
                <img src={memeImage} className="meme--image"/>
            </div>
        </main>
    )
}