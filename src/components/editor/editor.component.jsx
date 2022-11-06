
import './editor.styles.css'

const Editor = () => {
    return (
        <form className='add-item'>
            <label>shortname</label>
            <input/>
            <label>Producer</label>
            <input/>
            <label>Name</label>
            <input/>
            <label>Style</label>
            <input/>
            <label>ABV</label>
            <input/>
            <label>IBU</label>
            <input/>
            <label>Description</label>
            <input/>
            <button type='submit'>ADD</button>
        </form>
    )
}

export default Editor
