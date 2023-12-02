const Forms = ({ handleSubmit, handleInputChange, handlePhoneInput }) => {
    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <p>name: <input onChange={handleInputChange} /></p>
                <p>Phone: <input onChange={handlePhoneInput} /></p>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default Forms;