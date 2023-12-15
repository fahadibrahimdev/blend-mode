import { siteName } from "@/@core/constants/site-info";

export const heroSectionContent = {
    heading: 'Just Say “Blend Mode”!',
    subHeading: 'Order your fashion must-haves today ',
    text: 'Blend Mode is your one stop shop for all your apparel and design needs. The app gives you access to a network of designers and retailers who may stock or can customize your desired outfit as you please. ',
    image: '/images/hero-image.webp',
    alt: 'Hero Section Image'
}


export const brandFeaturesContent = {
    heading: 'Blend Mode Your Next FashionChoice',
    features: [
        {
            title: 'Voice Activated',
            description: 'Search and shop for items via voice activation.',
            icon: 'voice-1'
        },
        {
            title: 'Multiple Vendors',
            description: 'Choose products from an array of retail options including small businesses.',
            icon: 'vendor'
        },
        {
            title: 'Virtual Dressing Room',
            description: 'Use the virtual dressing room to test out designs before you buy them.',
            icon: 'dressing-table'
        },
        {
            title: 'Custom Orders',
            description: 'Users have the option to request tailored features.',
            icon: 'orders-bag'
        },
    ]
}

export const brandSelectionContent = {
    heading: 'Why Choose Blend Mode',
    descriptions: [
        'Blend Mode is the next big thing in online fashion and retail. The mobile application serves as an ecommerce marketplace, a hub for accurate news and information; and with the voice command option you don’t even have to lift a finger.',
        'Whether you are an artist looking for a particular outfit, have to manage a large scale project, or  simply looking to jazz up your wardrobe, Blend Mode connects you to multiple designers to narrow down your choice from.',
        'The app is designed to cater to all businesses, and is particularly dedicated to offering discounts and ad campaigns to emerging businesses and fashion startups.',
        'Want to get the best of this voice interactive app? Just say “Blend Mode”'
    ],
}

export const benefitsContent = {
    heading: 'Your One Stop Shop',
    text: 'Blend Mode is a comprehensive platform for not only a leading marketplace of the fashion industry but also a resourceful application for news on the latest happenings and facts regarding design and apparel.',
    benefits: [
        {
            title: 'Designer Bidding ',
            description: 'Designers can bid to win custom project requests. ',
            icon: 'designer'
        },
        {
            title: 'Lifestyle Section',
            description: 'Users can also search for and purchase home services via the app.',
            icon: 'life-style'
        },
        {
            title: 'Discounts',
            description: 'Blend Mode offers discounted ad pricing for small and local businesses.',
            icon: 'discount-setting'
        }
    ],
    image: '/images/benefits.webp',
    alt: 'Benefits Illustration'
}

export const faqsContent = {
    heading: 'Frequently Asked Questions',
    text: 'Want to know more about our services?',
    faqs: [
        {
            question: 'Is Blend Mode Compatible with Android or iOS?',
            answer: 'The answer will be here......',

        },
        {
            question: 'How do I get in touch with someone if there is something wrong with my profile?',
            answer: 'The answer will be here.........',

        },
        {
            question: 'How do I sign up?',
            answer: 'The answer will be here.........',
        }
    ]
}

export const CTOSectionContent = {
    heading: 'Download the Blend Mode App Today!',
    text: 'Download the app now'
}

const date = new Date()
export const footerContent = {
    supportCard: {
        heading: 'Help and Support',
        subHeading: 'User questions and feedback',
        text: 'Feel free to email us for any questions or feedback you would like to provide.'
    },
    socialIcons: [
        {
            icon: 'twitter1',
            link: '',
        },
        {
            icon: 'facebook1',
            link: '',
        },
        {
            icon: 'instagram1',
            link: '',
        }
    ],
    copyRightNotice: `© ${date.getFullYear()} ${siteName}. All Rights  Reserved`,
}

export const buttonsLabel = {
    CTOBtn: 'Pre Sign-up',
    whyUsBtn: `Why ${siteName}?`
}

export const menuNavLinks = [
    { label: 'Home', sectionId: 'home' },
    { label: 'Features', sectionId: 'features' },
    { label: 'Why Blend Mode?', sectionId: 'whyUs' }
]
