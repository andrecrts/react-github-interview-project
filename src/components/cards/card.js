import React from "react";
import Star from '../icons/star';
import "./card.scss";

function Card(props) {
    const { data, handleClick, starColor } = props;
    return (
        <div className="card-repositorie">
            <div className="card-header">
                <h3 className="name">{data.name}</h3>
                <button
                    className="add-fav"
                    onClick={e => handleClick(e, data)}
                >
                    <Star size="24px" color={starColor} />
                </button>
            </div>
            <div className="card-body">
                <h5 className="owner">User: {data.owner.login}</h5>
                <p className="description">
                    {data.description
                        ? data.description
                        : "No description available"}
                </p>

                <div>
                    <p>Open issues: {data.open_issues}</p>
                    <a className="link" href={data.url}>
                        {data.url}
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Card;
