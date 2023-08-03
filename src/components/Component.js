import styles from './Component.module.css'

export const Component = ({ author, content, image, date }) => {
    return (
        <div className={styles.component}>
            <img className={styles.mainPhoto} src={author.photo.mainPhoto} alt="ava" />
            <div className={styles.main}>
                <div className={styles.header}>
                    <span className={styles.name}>{author.name}</span>
                    <span className={styles.nickDate}>{author.nickname}</span>
                    <span className={styles.nickDate}>{date}</span>
                </div>
                <p className={styles.content}>{content}</p>
                <img className={styles.money} src={image.money} alt="money" />
            </div>
            <div className={styles.footer}>
                <i className="fa-regular fa-comment"><span>482</span></i>
                <i className="fa-regular fa-share-from-square"><span>43</span></i>
                <i className="fa-regular fa-heart"><span>370</span></i>
                <i className="fa-regular fa-circle-down"></i>
            </div>
        </div>
    )
}