# Happy Ghumakkads - Travel Website

A stunning static Angular website for Happy Ghumakkads travel agency, showcasing tour packages across India.

## Features

- **Responsive Design**: Works perfectly on all devices
- **Modern UI**: Beautiful animations and interactions using Bootstrap 5 and FontAwesome
- **Tour Packages**: Complete itineraries for Madhya Pradesh, North India, Jammu & Kashmir, and Leh-Ladakh
- **Contact Form**: Integrated with Formspree for easy inquiries
- **SEO Optimized**: Clean structure for search engines
- **Fast Loading**: Optimized for performance

## Development

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Building

To build the project for production:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. The production build is optimized for performance and speed.

## Vercel Deployment

This project is configured for Vercel deployment:

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Angular project
3. Build command: `ng build`
4. Output directory: `dist/happy-ghumakkads`

The `vercel.json` configuration handles static site deployment with proper routing.

## Formspree Integration

Update the contact form in `app.ts` to integrate with Formspree:

1. Create a free account at [Formspree](https://formspree.io/)
2. Create a new form and get your form ID
3. Update the `onContactFormSubmit` method to send data to your Formspree endpoint

## Project Structure

- `src/app/app.html` - Main website template
- `src/app/app.ts` - Component logic and interactions
- `src/styles.scss` - Global styles and CSS variables
- `src/app/app.scss` - Component-specific styles
- `vercel.json` - Vercel deployment configuration

## Technologies Used

- Angular 21.1.3 with SSR
- Bootstrap 5 for responsive UI
- FontAwesome for icons
- SCSS for styling
- Formspree for form handling
- Vercel for deployment

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
