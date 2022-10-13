

const DatePicker = ({htmlFor, label, name, changeValue}) => {


    const handleChange = e => {
        const { name, value } = e.target;
        const age = new Date() - new Date(value);
        const result= Math.floor(age/1000/60/60/24/365);

        if(htmlFor === "date-of-birth"){

            if(result > 18 && result < 70){
                changeValue(prevState => ( {
                    ...prevState,
                    [name]: value
                }));
            }else{
                changeValue(prevState => ( {
                    ...prevState,
                    [name]: ""
                }));
            } 

        }else{
            if(new Date(value) <= new Date()){
                changeValue(prevState => ( {
                    ...prevState,
                    [name]: value
                }));
            }else{
                changeValue(prevState => ( {
                    ...prevState,
                    [name]: ""
                }));
            }
        }
    };

    return (
        <div className='create__form__group'>

            <label htmlFor={htmlFor} >{label}</label>
            <input type="date" name={name} id={htmlFor} onChange={handleChange} />
            <span className='error'></span>
        </div>
    );
};

export default DatePicker;