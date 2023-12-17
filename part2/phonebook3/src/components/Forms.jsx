const Forms = ({ handleSubmit, handleInputChange, handlePhoneInput }) => {
    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <p>name: <input onChange={handleInputChange} required/></p>
                <p>Phone: <input onChange={handlePhoneInput} required/></p>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default Forms;