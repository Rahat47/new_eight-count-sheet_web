import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export const FOOTER_SOCIAL_LINKS = [
    {
        label: 'Facebook',
        href: 'https://www.facebook.com/8CountSheet/',
        color: '#1877F2',
        Icon: <FaFacebook />,
    },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/8countsheet/',
        color: '#E4405F',
        Icon: <FaInstagram />,
    },
    {
        label: 'Twitter',
        href: 'https://twitter.com/8CountSheet',
        color: '#1DA1F2',
        Icon: <FaTwitter />,
    },
    {
        label: 'YouTube',
        href: 'https://www.youtube.com/channel/UC-_X-_X-_X-_X-_X-_X-',
        color: '#FF0000',
        Icon: <FaYoutube />,
    },
    {
        label: 'Email',
        href: 'mailto:info@cheer-music-maker.com',
        color: '#000000',
        Icon: <FaEnvelope />,
    }
]