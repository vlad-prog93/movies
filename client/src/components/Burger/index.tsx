// styles
import styles from './Burger.module.css'

interface BurgerPropsI {
  isActive: boolean,
  onClick: () => void
}

const Burger = ({ isActive, onClick }: BurgerPropsI) => {
  return (
    <button
      className={isActive
        ? `${styles.burger} ${styles.burger_active}`
        : `${styles.burger}`}
      onClick={onClick}
    >
      <span className={isActive
        ? `${styles.burger__item} ${styles.burger__item_one}`
        : `${styles.burger__item}`}></span>
      <span className={isActive
        ? `${styles.burger__item} ${styles.burger__item_two}`
        : `${styles.burger__item}`}></span>
      <span className={isActive
        ? `${styles.burger__item} ${styles.burger__item_three}`
        : `${styles.burger__item}`}></span>
    </button >
  )
}

export default Burger
