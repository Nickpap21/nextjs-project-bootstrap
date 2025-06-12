# Angular Padel Court Booking Frontend

This project is an Angular frontend application for a padel court booking platform. It includes user authentication, venue and court search, booking calendar and form, booking management, and booking details.

## Project Structure

- src/
  - app/
    - auth/
      - auth.service.ts          # Handles login, register, JWT storage, token refresh
      - auth.guard.ts            # Route guard for authenticated routes
      - login/
        - login.component.ts
        - login.component.html
        - login.component.css
      - register/
        - register.component.ts
        - register.component.html
        - register.component.css
    - venues/
      - venue.service.ts         # Fetch venues and courts
      - venue-search/
        - venue-search.component.ts
        - venue-search.component.html
        - venue-search.component.css
    - bookings/
      - booking.service.ts       # Booking API calls and state management
      - booking-calendar/
        - booking-calendar.component.ts
        - booking-calendar.component.html
        - booking-calendar.component.css
      - booking-form/
        - booking-form.component.ts
        - booking-form.component.html
        - booking-form.component.css
      - booking-details/
        - booking-details.component.ts
        - booking-details.component.html
        - booking-details.component.css
    - shared/
      - models/
        - user.model.ts
        - venue.model.ts
        - court.model.ts
        - booking.model.ts
      - interceptors/
        - jwt.interceptor.ts     # Attach JWT token to HTTP requests
      - services/
        - error-handler.service.ts
    - app-routing.module.ts
    - app.module.ts
  - assets/
  - environments/
    - environment.ts            # API base URL and environment config

## Features

- User authentication with JWT tokens, login and registration
- Venue and court search with filters by city, sport, date, and time
- Booking calendar view with week/month grid showing available slots
- Booking form with player/guest entry, payment method, and slot selection
- Booking details page/modal with full info and booking actions
- Service layer with typed API calls and error handling
- Tailwind CSS for modern, responsive, mobile-first UI
- Loading indicators, error feedback, and responsive navigation

## Next Steps

I will proceed to implement the example code for key components and services as per this structure and features.
