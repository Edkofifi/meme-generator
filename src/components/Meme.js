import React from 'react' 
import memesData from '../memesData'
import memeData from '../memesData'


export default function Meme(){
    /* THIS IS USING A LOCAL DATA
    const [meme, setMeme] = React.useState({
        topText: " ",
        bottomText: " ",
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    })

    const [allMemes, setAllMemes] = React.useState(memesData)
    let url
    function getMemeImage(){
        const allMemes = memeData.data.memes
        const randomNumber = Math.floor(Math.random()*allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme =>({
            ...prevMeme, 
            randomImage: url
        }))
    }
   
    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))

    }
    */
    
    // USING API CALLS
    const [meme, setMeme] = React.useState({
        topText: " ",
        bottomText: " ",
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect( () => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))

    }, [])

    console.log(allMemes)

    let url
    function getMemeImage(){
        const randomNumber = Math.floor(Math.random()*allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme =>({
            ...prevMeme, 
            randomImage: url
        }))
    }
   
    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))

    }
    return (
        <main>
            <p>{url}</p>
            <div className='form'>
                <input 
                placeholder='Top Text' 
                type="text" 
                className='form--input'
                name="topText"
                value={meme.topText}
                onChange={handleChange}
                />

                <input 
                placeholder='Bottom Text' 
                type="text" 
                className='form--input'
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
                />

                <button 
                className='form--button'
                onClick={getMemeImage}
                >
                    Get a new meme image
                </button>
            </div>
            <div>
            <img src={meme.randomImage} className="meme--image"/>
            <h2 className='meme--text top'>{meme.topText}</h2>
            <h2 className='meme--text bottom'>{meme.bottomText}</h2>
            </div>
        </main>
    )
}