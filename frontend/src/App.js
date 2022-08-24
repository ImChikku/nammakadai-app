import data from './data';
function App() {
  return (
    <div className="grid-container" >    
    <header className="row">
        <div>
            <a className="brand" href="index.html">Namma Kadai</a>
        </div>
        <div>
            <a href="cart.html">cart</a>
            <a href="sign-in.html">sign-up</a>
        </div>    
    </header>
    <main>
        <div className="row center">
          {
            data.products.map((product) =>
              <div key={product._id} className="card">
             <a href={`/product/${product._id}`}>
                 <img className="medium" 
                 src={product.image} 
                 alt={product.name}/>
             </a>
             <div className="card-body">
                 <a href={`/product/${product._id}`}>
                     <h2>{product.name}</h2>
                 </a>
                 <div className="rating">
                     <span><i className="fa fa-star"></i></span>
                     <span><i className="fa fa-star"></i></span>
                     <span><i className="fa fa-star"></i></span>
                     <span><i className="fa fa-star-half-o"></i></span>
                     <span><i className="fa fa-star-o"></i></span>
                 </div>   
                <div className="price">{product.price}</div>
             </div>
            </div>
          )
          }
        </div>
    </main>
    <footer className="row center">
        All Rights reserved
    </footer>
</div>
  );
}

export default App;
