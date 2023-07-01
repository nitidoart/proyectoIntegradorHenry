import styles from './Card.module.css'

export default function Card({id, name, status, species, gender, origin, image, onClose}) {
  return (
  
    <div className={styles.container}>
  
      <div className={styles.front}>
        <img className={styles.img} src={image} alt='' />
        <h1>{name}</h1>
        <div> <button className={styles.myButtonFront} onClick={() =>onClose(id)}>X</button></div>
     </div>

     <div className={styles.back}>
       <h1 className={styles.texName}>{name}</h1>
       <h2 className={styles.texSpecies}>{species}</h2>
       <h2  className={styles.texGender}>{gender}</h2>
       <h2 className={styles.texStatus}>Status: {status}</h2>
       <h2 className={styles.texOrigen}>Origen: {origin}</h2>
       <div>
        <button className={styles.myButton} onClick={() =>onClose(id)}>X</button>
        </div>
     </div>

    </div>
  
  );
}
