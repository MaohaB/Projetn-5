
const Situation = ({title, location, tags,}) => {
    return (
        <div className="Situation">
            <div className="appartementtitle">{title}</div>
            <div className="location">{location}</div>
            <div className="tags">
                {tags.map((tag) => (<span key={tag}>{tag}</span>)
                )}
            </div>
        </div>
    );
} ;

export default Situation; 