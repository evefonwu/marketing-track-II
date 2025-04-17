# Motivations for Marketing Track - part II

In this Part II, I want to focus on different layouts for the site.

How would I create a full site, even if just one page that's integrated?

First build:

Starting from an accessible, customizable [form input field](https://marketing-track-ii.vercel.app/input-field)

Adding an [example site layout](https://marketing-track-ii.vercel.app/example), figuring out project folder structure

The example site layout has a header, side nav, main, and footer.

Project structure:

app/

- (challenges-pages)/ group routes sharing challenges layout
- (template)/ group routes sharing template layout
- (site)/ actual site will have its own layout
- layout.tsx is the root layout
- not-found.tsx is the global not found page
- page.tsx is the home page

components/

- elements/
- sections/

Element components can be imported into sections, sections can be imported into pages, and pages are nested in layouts.
