import style from './Loader.module.css'

const Loader = () => {
    return ( 
        <>
            <div className={style.loader} ></div>
            <span className={style.textLoader}  >Cargando productos...</span>
        </>
    )
}


export default Loader