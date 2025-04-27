# Motivations for Marketing Track - part II

These are FrontEnd Dev Challenges from [GreatFrontEnd Projects](https://www.greatfrontend.com/projects?ref=challenges).

[Link to Part I Completed Challenges](https://github.com/evefonwu/marketing-track)

In this Part II, I want to focus on different layouts for the site.

How would I create a full site, even if just one page that's integrated?

First build:

Starting from an accessible, customizable form input field in a challenge layout

### Site Layout:

Adding an example site layout, figuring out project folder structure

The example site layout has a header, side nav, main, and footer.

### Project structure:

app/

- (challenge-pages)/ group routes sharing challenges layout
- (template)/ group routes sharing template layout
- (site)/ actual site will have its own layout
- layout.tsx is the root layout
- not-found.tsx is the global not found page
- page.tsx is the home page

components/

- elements/
- sections/

Element components can be imported into sections, sections can be imported into pages, and pages are nested in layouts.

### Newsletter Page:

Adding a newsletter subscription page - visual design implementation only, no subscription functionality. Newsletter section is imported into a page wrapped by (site) layout, showing a featured abstract image and a form for newsletter subscription.

components/

- sections/
  - NewsletterForm.tsx (a React client component)
  - NewsletterSection.tsx

### Application Deployment:

On Vercel hobby plan with limited number of repositories for deployment - so I'm going to remove this repo from deployment.

Have added docs/ screenshots for reference
