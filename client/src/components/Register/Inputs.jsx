import Submit from './Submit';

const Inputs = () => {
    const { handleInputSubmit } = Submit();

    return (
        <div>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleInputSubmit}
                required
            />
            <br />
            <input
                type="text"
                placeholder="Second Name"
                onChange={handleInputSubmit}
                required
            />
            <br />
            <input
                type="text"
                placeholder="Username"
                onChange={handleInputSubmit}
                required
            />
            <br />
            <input
                type="password"
                placeholder="Password"
                onChange={handleInputSubmit}
                required
            />
            <br />
            <input
                type="password"
                placeholder="Re enter Password"
                onChange={handleInputSubmit}
                required
            />
        </div>
    );
};

export default Inputs;
