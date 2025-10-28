import {
    Envelope,
    PhoneCall,
    WhatsappLogo,
    TelegramLogo,
    MessengerLogo,
    LinkedinLogo,
    GithubLogo,
    FileText,
    YoutubeLogo,
    Calendar,
    XLogo,
} from '@phosphor-icons/react/dist/ssr';

import type {Config} from '@/types';
import image from '@/logo.jpg';

export const config: Config = {
    // Set your or company name
    title: 'Allyssxn',
    // Add a brief description to display below name
    bio: 'Tu streamer que desaparece por meses (de confianza 😉)',
    // Select a background style
    background: 'gradient',
    cardImage: image,
    // Set your Google Analytics id to enable
    // gaId: 'G-XXXXXXXXX',
    // Localise sharing text
    shareTitle: 'Share link',
    // Set icon links to contact you to display below the header
  //  headerLinks: [
 //       {
       //     title: 'Email',
      //      id: 'email',
     //       url: 'mailto:user@example.com',
    //        icon: Envelope,
   //     },
  //      {
  //          title: 'Call',
   //         id: 'phone',
    //        url: 'tel:+491234567890',
     //       icon: PhoneCall,
      //  },
     //   {
    //        title: 'Whatsapp',
   //         id: 'whatsapp',
  //          url: 'https://wa.me/491234567890',
 //           icon: WhatsappLogo,
//        },
 //       {
  //          title: 'Telegram',
   //         id: 'telegram',
    //        url: 'https://t.me/userName',
     //       icon: TelegramLogo,
      //  },
//        {
 //           title: 'Messenger',
  //          id: 'meta-messenger',
   //         url: 'http://m.me/PAGE-NAME?text=Hello%20and%20Welcome',
    //        icon: MessengerLogo,
     //   },
  //  ],
    // Set main links
    mainLinks: [
        {
            id: 'X',
            title: 'X',
            url: 'https://x.com/allyssxn_',
           // icon: FileText,
        },
        {
            id: 'bsky',
            title: 'Bluesky',
            url: 'https://bsky.app/profile/allyssxn.site',
           // icon: Calendar,
        },
        {
            id: 'twitch',
            title: 'Twitch',
            url: 'https://www.twitch.tv/allyssxn',
           // icon: GithubLogo,
        },
        {
            id: 'kick',
            title: 'Kick',
            url: 'https://kick.com/allyssxn',
           // icon: LinkedinLogo,
        },
        {
            id: 'youtube',
            title: 'Youtube channel',
            url: 'https://www.youtube.com/@allyssxnTV',
           // icon: YoutubeLogo,
        },
        {
            id: 'tiktok',
            title: 'Tik Tok',
            url: 'https://www.tiktok.com/@_allyssxn_',
           // icon: StackOverflowLogo,
        },
        {
            id: 'discord',
            title: 'Discord Server',
            url: 'https://discord.com/invite/txSaDda8Ak',
           // icon: DevToLogo,
        },
    ],
    vCard: {
        firstName: 'Patrick',
        lastName: 'Bateman',
        organization: 'Pierce & Pierce',
        title: 'Vice President',
        birthday: new Date(1961, 9, 23),
        workPhone: '+1 212 555 6342',
        email: 'patrick@psycho.us',
        Enable to display contact as a company
        isOrganization: false,
    },
};
