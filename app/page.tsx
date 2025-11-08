import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import { cacheLife } from "next/cache";
import { events } from "@/lib/constants";

export default async function page() {
  'use cache';
  cacheLife('hours');

  // const response = await fetch(`${BASE_URL}/api/events`);
  // const { events } = await response.json();

  return (
    <section>
      <h1 className="text-center"> The Hub for Every Dev <br /> Event You Can&apos;t Miss </h1>
      <p className="text-center mt-5">Hackathon, Meetups, and Conferences, All in One Places</p>

      <ExploreBtn />

      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>

        <ul className="events">
          { events && events.length > 0 && events.map((event) => (
            <li key={event.title} className="list-none">
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
