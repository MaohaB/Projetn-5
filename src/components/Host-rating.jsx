
const Host = ({host, firstname, lastname, rating, picture, title}) => {
    return (
        <div className="hebergeur">
          <div className="owner">
           <div className="owner-picture"><img src={picture} /></div>
                <div className="owner-name"><span>{firstname}</span><span>{lastname}</span></div>
            </div>
             <div className="stars">
                {[1,2,3,4,5].map((index) => (
                    <span key={index} className={rating > index ? "fullstars" : ""}><i className="fa-solid fa-star"></i></span>
                ))}
                </div>
        </div>
    );
} ;

export default Host; 