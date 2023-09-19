

const User = ({user}) => {
    const {name, email, phone}= user;

    const userStyle={
        border:'2px solid yellow',
        padding :'5px',
        borderRadius:'20px'
    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <h2>email: {email}</h2>
            <h2>phone:{phone}</h2>
            
        </div>
    );
};

export default User;