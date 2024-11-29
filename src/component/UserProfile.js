const UserProfile = ({ age, name, gmail, imageUrl, gender, hobbi }) => {
    return (
        <div className="card">
            <div className="profile">
                <img src={imageUrl} />
                <h1>Name :- {name}</h1>
                <h2>Age :- {age}</h2>
                <h3>Gmail :- {gmail}</h3>
                <h3>Gender :- {gender}</h3>
                <h3>Hobbi :- {hobbi}</h3>
            </div>
        </div>
    )
};

export default UserProfile;