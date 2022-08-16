import Container from "../UI/Container/Container";
import classes from './Comment.module.scss'
const Comment = ({commentText,Author}) => {
    return (
        <Container>
            <div className={classes.commentText}>
                {commentText}
                <span className={classes.Author}>
                    {Author}
                </span>
            </div>
        </Container>
    );
}
 
export default Comment;