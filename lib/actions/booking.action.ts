'use server';

import Booking from "@/database/booking.model";
import connectDB from "../mongodb";

// Email validation regex (RFC 5322 simplified)
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const createBooking = async ({ eventId, slug, email }: { eventId: string; slug: string; email: string; }) => {
    try {
        // Validate inputs
        if (!eventId || typeof eventId !== 'string' || eventId.trim() === '') {
            return { success: false, error: 'invalid_event_id', message: 'Event ID is required' };
        }

        if (!slug || typeof slug !== 'string' || slug.trim() === '') {
            return { success: false, error: 'invalid_slug', message: 'Event slug is required' };
        }

        if (!email || typeof email !== 'string' || email.trim() === '') {
            return { success: false, error: 'invalid_email', message: 'Email is required' };
        }

        // Validate email format
        const trimmedEmail = email.trim().toLowerCase();
        if (!EMAIL_REGEX.test(trimmedEmail)) {
            return { success: false, error: 'invalid_email_format', message: 'Please provide a valid email address' };
        }

        // Connect to database
        await connectDB();

        // Check for duplicate booking
        const existingBooking = await Booking.findOne({ 
            eventId: eventId.trim(), 
            email: trimmedEmail 
        });

        if (existingBooking) {
            return { 
                success: false, 
                error: 'duplicate', 
                message: 'You have already booked this event' 
            };
        }

        // Create the booking
        await Booking.create({ 
            eventId: eventId.trim(), 
            slug: slug.trim().toLowerCase(), 
            email: trimmedEmail 
        });

        return { success: true, message: 'Booking created successfully' };
    } catch (e) {
        // Log full error details for debugging
        console.error('Create booking failed:', {
            error: e,
            message: e instanceof Error ? e.message : 'Unknown error',
            stack: e instanceof Error ? e.stack : undefined,
            eventId,
            slug,
            email
        });

        // Return informative error response
        if (e instanceof Error) {
            if (e.message.includes('MONGODB_URI') || e.message.includes('connect')) {
                return { 
                    success: false, 
                    error: 'database_connection', 
                    message: 'Database connection failed. Please try again later.' 
                };
            }

            if (e.message.includes('validation')) {
                return { 
                    success: false, 
                    error: 'validation_error', 
                    message: 'Invalid booking data' 
                };
            }

            return { 
                success: false, 
                error: 'creation_failed', 
                message: 'Failed to create booking. Please try again.' 
            };
        }

        return { 
            success: false, 
            error: 'unknown_error', 
            message: 'An unexpected error occurred' 
        };
    }
}
