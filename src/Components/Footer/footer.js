import './footer.css'

export default function Foooter() {
    return (
        <footer className='footer'>
                <a
                    href='https://www.linkedin.com/in/josh-barnes-developer/'
                    rel='noopener noreferrer'
                    target='_blank'>
                    <img src='https://img.icons8.com/fluent/48/000000/linkedin.png' alt='linkedin icon' className='footer__icon' />
                </a>
                <a
                    href='mailto:jbarnes439@gmail.com?subject=Loved%20your%20portfolio!'
                    className='email-link'>
                    Email: jbarnes439@gmail.com
                </a>
                <a
                    href='https://github.com/jbarnes439'
                    rel='noopener noreferrer'
                    target='_blank'>
                    <img src='https://img.icons8.com/fluent/48/000000/github.png' alt='github icon' className='footer__icon' />
                </a>
        </footer>
    )
}