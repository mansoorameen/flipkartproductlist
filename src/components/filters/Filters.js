import './styles.css'

export function Filters() {
    return(
        <div className="Filters">
            <div className="head">
                <p>Filters</p>
                <a>CLEAR ALL</a>
            </div>
            <div className="filtercategory">
            <button><i>X</i> Men</button>
            <button><i>X</i> men</button>
            </div>

        <div className="categories">
                 <p> Clothing and Accesor</p>
                        <p>Winter Wear</p>
                        <p>Topwear</p>
                        <p>Bottomwear</p>
                        <p>Raincoats</p>
                        <p>Clothing Accessories</p>
                        <a>Show 8 more</a>
        </div>
        <hr></hr>
        <p>PRICE</p>
        <div className="boxes">
        <input className="input" placeholder="Min" />
        <p className="to">to</p>
        <input className="input" placeholder="2500" />
        </div>
        </div>
    )
}