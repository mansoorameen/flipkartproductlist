import styles from './styles.css'


export function Header() {
    return(
        <div className="main">
            <div className="Header">
            Flipkart Plus
            <input type="search"
            placeholder="Search for ptoducts" />
            <button>Login</button>
            <p>More </p>
            <p>Cart</p>
        </div>
        <div className="menus">
            <p>Electronics</p>
            <p>TVs & Appliances</p>
            <p>Men</p>
            <p>Women</p>
            <p>Baby & Kids</p>
            <p>Home & Furniture</p>
            <p>Sports, Books & More</p>
            <p>Flights</p>
            <p>Offer Zone</p>
        </div>
        </div>
    )
}