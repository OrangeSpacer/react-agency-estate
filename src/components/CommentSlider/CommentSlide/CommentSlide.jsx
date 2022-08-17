import classes from './CommentSlide.module.scss'
const CommentSlide = ({name,companyName,comment,imgPath}) => {
    return (
        <div className={classes.commentSlideBlock}>
            <img src={imgPath} alt="imgAvatar" className={classes.commentImg}/>
            <div className={classes.commentContent}>
                <div className={classes.commentName}>
                    {name}
                </div>
                <div className={classes.commentCompany}>
                    {companyName}
                </div>
                <div className={classes.comment}>
                    {comment}
                </div>
            </div>
        </div>
    );
}
 
export default CommentSlide;