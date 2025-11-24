// import styless from './style/index.module.css'
// import phone from '../../assets/images/phone.svg'

// export const Elementary = () => {
//     return (
//         <div className={styless.blockLeft}>
//             <h2>электромобильный <br/>
//              вилочный погрузчик <br />
//             <h2 className={styless.blue}>нового поколения SHANN</h2></h2>
//             <p >Оставьте заявку и получите консультацию специалиста</p>

//             <div className= {styless.twoButtom}>
//                 <button>

//                 </button>
//                 <button className= {styless.transParentBtn}>
//                     <img src = {phone} alt = "#"></img>
//                     перезвоним в течении дня для консультации
//                 </button>

//             </div>


//         </div>
//     )
// }
// components/Elementary/index.jsx
import styles from './style/index.module.css';
import phone from '../../assets/images/phone.svg';
import pogruzchik from '../../assets/images/pogruzchick.png'

export const Elementary = () => {
  return (
    <div className={styles.container}>
      <div className={styles.blockLeft}>
        <h2>электромобильный <br/>
        вилочный погрузчик <br />
        <span className={styles.blue}>нового поколения SHANN</span></h2>
        <p>Оставьте заявку и получите консультацию специалиста</p>

        <div className={styles.twoButton}>
          <button className={styles.primaryBtn}>
            Получить предложение
          </button>
          <button className={styles.transParentBtn}>
            <img src={phone} alt="телефон" />
            перезвоним в течении дня для консультации
          </button>
        </div>
      </div>
      <div className= {styles.blockRight}>
        <img src= {pogruzchik} alt='#'></img>

      </div>
    </div>
  );
};