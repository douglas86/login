import Submit from './Submit';

const Button = () => {
    const { handleSubmit } = Submit();

    return (
        <div>
            <button type="submit" onClick={handleSubmit}>
                Submit
            </button>
        </div>
    );
};

export default Button;
