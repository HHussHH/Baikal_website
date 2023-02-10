import "./giveHelpForm.scss"
import { useForm } from "react-hook-form";
import { AiOutlineCloseCircle } from "react-icons/ai"

const errorLink = "empty__input"
const GiveHelpForm = ({ setForm, formState }) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        setForm(!formState)
        document.body.classList.remove('modal-open');
    };

    console.log(watch("login")); // you can watch individual input by pass the name of the input

    return (
        <>
            <div className="giveHelpForm" onClick={() => { document.body.classList.remove('modal-open'); setForm(!formState) }}>
            </div >
            <form onSubmit={handleSubmit(onSubmit)} className="giveHelpForm__form">
                {<AiOutlineCloseCircle className="giveHelpForm__form-close" size={40}
                    onClick={() => { document.body.classList.remove('modal-open'); setForm(!formState) }} />}
                <div className="giveHelpForm__form-inner">
                    <h1 className="giveHelpForm__title">Форма пожертвований </h1>
                    <h3 className="giveHelpForm__input-title">Ваше имя</h3>
                    <input
                        {...register("login")}

                        className="giveHelpForm__input"
                        placeholder="Введите ваше имя" />
                    <h3 className="giveHelpForm__input-title">Почта</h3>
                    <input
                        {...register("email", { required: true })}
                        className={`giveHelpForm__input ${errors.email ? errorLink : ""}`}
                        placeholder="Введите вашу почту" />
                    <h3 className="giveHelpForm__input-title">Сумма пожертвования</h3>
                    <input
                        {...register("money")}
                        defaultValue={50}
                        type="number"
                        className="giveHelpForm__input"
                        placeholder="Укажите сумму поддержки" />

                    <button type="submit" className="giveHelpForm__btn" >Поддержать</button>
                </div>
            </form>
        </>
    );
}

export default GiveHelpForm