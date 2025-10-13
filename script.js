const product = [
    {
        id: 0,
        image: 'Assets/volt tester.jpg',
        title: 'Volt Tester',
        price: '200',
    },
    {
        id: 1,
        image: 'Assets/Dual connector.jpg',
        title: 'Dual Connector',
        price: '250',
    },
    {
        id: 2,
        image: 'Assets/inverter.jpg',
        title: 'Inverter',
        price: '300',
    },
    {
        id: 3,
        image: 'Assets/Adapter.jpg',
        title: 'Adapter',
        price: '350',
    },
    {
        id: 4,
        image: 'Assets/ev battery.jpg',
        title: 'Battery',
        price: '500',
    },
    {
        id: 5,
        image: 'Assets/ev lvl 2 charger.jpg',
        title: 'EV Charger',
        price: '550',
    },
    {
        id: 6,
        image: 'Assets/charging cable.jpg.jpg',
        title: 'EV Cable',
        price: '320',
    },
    {
        id: 7,
        image: 'Assets/digital-battery-tester.jpg',
        title: 'Digital Battery Tester',
        price: '300',
    },
    {
        id: 8,
        image: 'Assets/e-socket.jpg',
        title: 'E - Socket',
        price: '750',
    },
    {
        id: 9,
        image: 'Assets/ev charging dock.jpg',
        title: 'EV Charging Dock',
        price: '1000',
    },
    {
        id: 10,
        image: 'Assets/CDI Ignition.jpg',
        title: 'CDI Ignition',
        price: '325',
    },
    {
        id: 11,
        image: 'Assets/segway.jpg',
        title: 'Segway',
        price: '2000',
    },
    {
        id: 12,
        image: 'Assets/evscooter.jpg',
        title: 'EV Scooter',
        price: '4500',
    },
    {
        id: 13,
        image: 'Assets/ev motor bike.jpg',
        title: 'EV Motor Bike',
        price: '7500',
    },
];
const categories = [...new Set(product.map((item) => {
    return item
}))]
let i = 0;
document.getElementById('root').innerHTML = categories.map((item) =>
{
    var { image, title, price } = item;
    return (
        <div class='box'>
            <div class='img-box'>
                <img class ='images' src=${images}></img>
            </div>
        <div class = 'bottom'>
            <p>${title}</p>
            <h2>$ ${price}.00</h2>+
            "<button on click"= 'addtocart.html("+(i++)+")'> Add to cart</button>"
        </div>
        </div>
    )
})