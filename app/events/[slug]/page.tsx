import BookEvent from "@/components/BookEvent";
import EventCard from "@/components/EventCard";
import { IEvent } from "@/database";
import { getSimilarEventsBySlug } from "@/lib/actions/event.actions";
import { cacheLife } from "next/cache";
import Image from "next/image";
import { notFound } from "next/navigation";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const EventDetailItem = ({ icon, alt, label}: {icon: string, alt: string, label: string}) => (
  <div className="flex-row-gap-2 items-center">
    <Image src={ icon } alt={ alt } width={ 17 } height={ 17 } />
    <p>{ label }</p>
  </div>
)

const EventAgenda = ({ agendaItems }: { agendaItems: string[] }) => (
  <div className="agenda">
    <h2>Agenda</h2>
    <ul>
      { agendaItems.map((item) => (
        <li key={ item }>{ item }</li>
      ))}
    </ul>
  </div>
)

const EventTags = ({ tags }: { tags: string[] }) => (
  <div className="flex flex-row gap-1.5 flex-wrap">
    { tags.map((tag) => (
      <div className="pill" key={ tag }>{ tag }</div>
    ))}
  </div>
)

export default async function EventDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  'use cache'
  cacheLife('hours');
  const { slug } = await params;

  const request = await fetch(`${ BASE_URL }/api/events/${ slug }`);
  
  // Parse JSON with error handling
  let responseJson: { event?: unknown } | null = null;
  try {
    responseJson = await request.json();
  } catch (error) {
    console.error('Failed to parse JSON response:', error);
    return notFound();
  }
  
  if (!responseJson || typeof responseJson !== 'object' || !responseJson.event) {
    return notFound();
  }
  
  const event = responseJson.event as Record<string, unknown>;
  const description = event.description as string;
  const image = event.image as string;
  const overview = event.overview as string;
  const date = event.date as string;
  const time = event.time as string;
  const location = event.location as string;
  const mode = event.mode as string;
  const agenda = event.agenda as string[];
  const audience = event.audience as string;
  const tags = event.tags as string[];
  const organizer = event.organizer as string;
  const _id = event._id as string;
  const eventSlug = event.slug as string;

  if (!description) return notFound();

  const bookings = 10;

  const similarEvents = await getSimilarEventsBySlug(slug);

  return (
    <section id="event">
      <div className="header">
        <h1>Event Description</h1>
        <p>{ description }</p>
      </div>

      <div className="details">
        {/* Left Side - Event Content */ }
        <div className="content">
          <Image src={ image } alt="Event Banner" width={ 800 } height={ 800 } className="banner" />
          
          <section className="flex-col-gap-2">
            <h2>Overview</h2>
            <p>{ overview }</p>
          </section>

          <section className="flex-col-gap-2">
            <h2>Event Details</h2>

            <EventDetailItem icon="/icons/calendar.svg" alt="calendar" label={date} />
            <EventDetailItem icon="/icons/clock.svg" alt="clock" label={time} />
            <EventDetailItem icon="/icons/pin.svg" alt="pin" label={location} />
            <EventDetailItem icon="/icons/mode.svg" alt="mode" label={mode} />
            <EventDetailItem icon="/icons/audience.svg" alt="audience" label={audience} />
          </section>

          <EventAgenda agendaItems={ agenda } />
          
          <section className="flex-col-gap-2">
            <h2>About the Organizer</h2>
            <p>{ organizer }</p>
          </section>

          <EventTags tags={ tags } />

        </div>

        {/* Right Side - Booking Form */ }
        <aside className="booking">
          <div className="signup-card">
            <h2>Book Your Spot</h2>
            { bookings > 0 ? (
              <p className="text-sm">
                Join {bookings} people who have already booked their spot!
              </p>
            ) : (
                <p className="text-sm">Be the first to book your spot!</p>
            ) }
            
              <BookEvent eventId={_id} slug={eventSlug} />
          </div>
        </aside>
      </div>
      <div className="flex w-full flex-col gap-4 pt-20">
        <h2>Similar Events</h2>
        <div className="events">
          { ((similarEvents as unknown) as IEvent[]).length > 0 && ((similarEvents as unknown) as IEvent[]).map((similarEvent) => (
            <EventCard key={similarEvent.title} {...similarEvent} />
          ))}
        </div>
      </div>
    </section>
  );
}
