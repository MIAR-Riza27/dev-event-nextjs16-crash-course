export type EventItem = {
  image: string;
  title: string;
  slug: string;
  location: string;
  date: string;
  time: string;
};

export const events: EventItem[] = [
  {
    image: '/images/event1.png',
    title: 'Google DevFest 2025',
    slug: 'google-devfest-2025',
    location: 'San Francisco, CA',
    date: 'Nov 15-16, 2025',
    time: '09:00 AM - 6:00 PM',
  },
  {
    image: '/images/event2.png',
    title: 'HackMIT 2025',
    slug: 'hackmit-2025',
    location: 'Cambridge, MA',
    date: 'Dec 6-7, 2025',
    time: '10:00 AM - 8:00 PM',
  },
  {
    image: '/images/event3.png',
    title: 'JSConf EU',
    slug: 'jsconf-eu',
    location: 'Berlin, Germany',
    date: 'May 20-22, 2026',
    time: '09:30 AM - 5:30 PM',
  },
  {
    image: '/images/event4.png',
    title: 'PyCon US 2026',
    slug: 'pycon-us-2026',
    location: 'Salt Lake City, UT',
    date: 'Apr 15-19, 2026',
    time: '08:30 AM - 6:00 PM',
  },
  {
    image: '/images/event5.png',
    title: 'AWS Summit',
    slug: 'aws-summit',
    location: 'New York, NY',
    date: 'Jul 10, 2026',
    time: '09:00 AM - 5:00 PM',
  },
  {
    image: '/images/event6.png',
    title: 'React Rally',
    slug: 'react-rally',
    location: 'Salt Lake City, UT',
    date: 'Aug 21-22, 2026',
    time: '09:00 AM - 5:00 PM',
  },
  {
    image: '/images/event-full.png',
    title: 'Ethereum Devcon',
    slug: 'ethereum-devcon',
    location: 'Istanbul, Turkey',
    date: 'Sep 10-13, 2026',
    time: '10:00 AM - 6:00 PM',
  },
];
