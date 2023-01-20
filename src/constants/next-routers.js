import contactIcon from "/public/images/icons/contact.svg?sprite"
import employmentIcon from '/public/images/icons/employment.svg?sprite'
import educationIcon from '/public/images/icons/education.svg?sprite'
import skillsIcon from '/public/images/icons/skills.svg?sprite'
import socialIcon from '/public/images/icons/social.svg?sprite'
import hobbiesIcon from '/public/images/icons/hobies.svg?sprite'
import activityIcon from '/public/images/icons/activities.svg?sprite'
import coursesIcon from '/public/images/icons/courses.svg?sprite'
import internshipIcon from '/public/images/icons/intership.svg?sprite'
import languagesIcon from '/public/images/icons/languages.svg?sprite'
import referencesIcon from '/public/images/icons/references.svg?sprite'
import certificationsIcon from '/public/images/icons/certifications.svg?sprite'

export const routerLinksAsideMenu = [
    {
        name: 'Contact',
        link: '/resume-builder',
        icon: contactIcon
    },
    {
        name: 'Employment',
        link: '/resume-builder/employment',
        icon: employmentIcon
    },
    {
        name: 'Education',
        link: '/resume-builder/education',
        icon: educationIcon
    },
    {
        name: 'Skills',
        link: '/resume-builder/skills',
        icon: skillsIcon
    },
    {
        name: 'Social Links',
        link: '/resume-builder/socials',
        icon: socialIcon
    },
    {
        name: 'Hobbies',
        link: '/resume-builder/hobies',
        icon: hobbiesIcon
    },
    {
        name: 'Extra-curricular activities',
        link: '/resume-builder/activity',
        icon: activityIcon
    },
    {
        name: 'Courses',
        link: '/resume-builder/course',
        icon: coursesIcon
    },
    {
        name: 'Internship',
        link: '/resume-builder/intership',
        icon: internshipIcon
    },
    {
        name: 'Languages',
        link: '/resume-builder/languages',
        icon: languagesIcon
    },
    {
        name: 'References',
        link: '/resume-builder/reference',
        icon: referencesIcon
    },
    {
        name: 'Certifications',
        link: '/resume-builder/certificaties',
        icon: certificationsIcon
    }
];

export const routersPages = {
    'register': 'register',
    'login': 'login',
    'forgot': 'forgot-password',
    'checEmail': 'check-your-email',
    'newPassword': 'new-password',
    'resumeBuilder': 'resume-builder',
}