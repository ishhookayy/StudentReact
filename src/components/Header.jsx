import "./Header.css"
import styles from './Header.module.css'
function Header(){

    return (
      <>
        {/* <h1 style={{ color: "red", backgroundColor: "lightblue",padding: "2px" }}>
          Hello, Welcome to Styling
        </h1> */}
        <h1 className={styles.bigblue}>Hello, Welcome to Styling</h1>
        <p className={styles.bigblue}>Here we do Inline Styling</p>
      </>
    );

}

export default Header;