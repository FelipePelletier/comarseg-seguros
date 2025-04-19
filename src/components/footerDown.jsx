import React from "react";

const footerDown = () => {
  return (
    <div id="footerDown" className={styles.footer}>
      <span className={styles.text}>Nro de inscripcion en SSN</span>
      <span className={styles.divider}>|</span>
      <span className={styles.text}>Atencion al asegurado</span>
      <span className={styles.divider}>|</span>
      <span className={styles.text}>Organismo de control</span>
      <span className={styles.divider}>|</span>
      <span className={styles.text}>SSN</span>
    </div>
  );
};

export default footerDown;
