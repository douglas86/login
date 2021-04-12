import Submit from './Submit';

const Inputs = () => {
    const { handleInputChange } = Submit();
    return (
        <div>
            <input
                type="text"
                placeholder="Username goes here"
                onChange={handleInputChange}
                name="uName"
                required
            />
            <br />
            <input
                type="password"
                placeholder="Password"
                onChange={handleInputChange}
                name="pName"
                required
            />
        </div>
    );
};

export default Inputs;
