import classes from './ContactInfo.module.scss'
const ContactInfo = () => {
    return (
        <div className={classes.contactInfoContent}>
            <h5 className={classes.contactMainAddress}>
                Dubai, <span style={{color:'#FCD54C'}}>UAE</span>
            </h5>
            <div className={classes.contactAddress}>
                269 King Str, 05th Floor, Utral Hosue Building,<br/>Dubai, VIC 3000, UAE.
            </div>
            <div className={classes.contactPhoneBlock}>
                <a href="tel:+9903449564050" className={classes.contactPhoneLink}>
                    +99 (0) 344 956 4050
                </a>
            </div>
            <div className={classes.contactEmailBlock}>
                <div className={classes.contactSubtitle}>
                    Email:
                </div>
                <div className={classes.contactEmailLinkBlock}>
                    <a href="mailto:info@sparch.co" className={classes.contactBlockText}>
                        info@sparch.co
                    </a>
                </div>
            </div>
            <div className={classes.contactHoursBlock}>
                <div className={classes.contactSubtitle}>
                    Work Hours:
                </div>
                <div className={classes.contactBlockText}>
                    Monday - Friday : 08h00 - 17h30
                </div>
            </div>
        </div>
    );
}
 
export default ContactInfo;