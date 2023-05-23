import './Box.css';

function Box({width, height, color, remove}) {

    return (
        <div className="Box">
            <div 
                style={{width: width+'px', height: height+'px', backgroundColor: color}} 
            >
            </div>
            <button onClick={remove}>X</button>
        </div>
    )

}

export default Box