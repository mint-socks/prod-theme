This is the theme for MintSocks.com!

Initial Setup:
1 Clone Repository
  $ git clone
2 Bundle Install Shopify_Theme Gem
  $ bundle
3 Configure as Shopify Theme file
  $ theme configure API_Key password store_url




Usage (When Making Changes):
1 Switch to Production Env
    $ rake prod
2 Check to ensure production
    $ rake env
3 Download latest production theme
    $ theme download
4 Switch to Dev Env
    $ rake dev
5 Check to ensure development
    $ rake env
6 Ensure that all changes will reflect in dev env
    $ theme watch (Ctrl+C to exit)
7 Make changes and view in dev env (Be sure to commit as often as possible)
8 Once satisfied with changes issue PR
9 Once PR is merged replace and approved push changes to production
    $ rake prod
    $ theme replace
    $ Y





============================

Skeleton theme
============

The Skeleton theme is a simplified Shopify theme, to be used as a "blank slate" starting point for theme designers.

<b>Features:</b>
- Almost no CSS or theme settings. Ready to be customized any way you want. 
- Commented code to teach you Liquid concepts in practice.


Designing a store for a client? Earn 20% revenue through our <a href="http://www.shopify.com/partners">Partner program<a/>.


Getting started
---------------------
1. <a href="https://github.com/Shopify/skeleton-theme/archive/master.zip">Download</a> the latest version
2. or clone the git repo: <code>git clone https://github.com/Shopify/skeleton-theme.git</code>


Basic structure
---------------
```
├── assets
│   └── Javascript, CSS, and theme images
├── config
│   └── custom Theme Settings
├── layout
│   ├── theme.liquid
│   └── optional alternate layouts
├── snippets
│   └── optional custom code snippets
├── templates
│   ├── 404.liquid
│   ├── article.liquid
│   ├── blog.liquid
│   ├── cart.liquid
│   ├── collection.liquid
│   ├── index.liquid
│   ├── page.liquid
│   ├── product.liquid
│   └── search.liquid
│   └── list-collections.liquid
```

Additional resources
---------------------
- <a href="http://meetup.shopify.com/">Free workshops</a>: Sign up for a free Shopify For Designers workshop in a city near you.
- <a href="http://docs.shopify.com/themes">Theme Documentation</a>: Learn more about Liquid and theme templates.
- <a href="http://apps.shopify.com/desktop-theme-editor">Desktop Theme Editor</a>: For Mac OS X users, we recommend our free app to sync theme files in development. 
- Need more help? Ask a question in our <a href="http://ecommerce.shopify.com/c/ecommerce-design"> Design Forums</a>.
