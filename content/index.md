---
seo:
  title: Packages documentation
  description: Documentation for my packages, as well as for other libraries that
    contain my code
---

::u-page-hero
---
orientation: horizontal
---
  :::prose-pre{filename="Terminal"}
  ```bash
  composer r pepperfm/api-responder-for-laravel spatie/laravel-data
  ```
  :::

#title
Packages documentation

#description
Documentation for my packages, as well as for other libraries that contain my code and those that I simply like

#links
  :::u-button
  ---
  size: xl
  to: /api-responder-for-laravel
  trailing-icon: i-lucide-arrow-right
  ---
  Explore the Docs
  :::
::

::u-page-section
#title
Packages that will make your :br Laravel application better

#features
  :::u-page-card
  ---
  spotlight: true
  icon: Api
  target: _blank
  to: https://github.com/pepperfm/api-responder-for-laravel
  variant: subtle
  ---
  #title
  API responder
  
  #description
  Api responder for Laravel
  :::

  :::u-page-card
  ---
  external: true
  spotlight: true
  icon: i-heroicons:shield-check-16-solid
  target: _blank
  to: https://github.com/chrisreedio/socialment
  variant: subtle
  ---
  #title
  Socialment
  
  #description
  Socialite OAuth Support for Filament
  :::

  :::u-page-card
  ---
  external: true
  spotlight: true
  icon: i-heroicons:code-bracket-square-16-solid
  target: _blank
  to: https://spatie.be/docs/laravel-data
  variant: subtle
  ---
  #title
  Laravel Data
  
  #description
  Creation of rich data objects which can be used in various ways
  :::
::

::u-page-section
  :::u-page-c-t-a{title="Feature-Rich Admin Panels"}
    ::::u-page-grid{.lg:grid-cols-2}
      :::::u-page-card
      ---
      description: Admin panel for your Laravel projects
      icon: i-heroicons:moon-16-solid
      target: _blank
      title: Moonshine
      to: https://moonshine-laravel.com/
      variant: subtle
      ---
      :::::
    
      :::::u-page-card
      ---
      description: A collection of beautiful full-stack components
      icon: Filament
      target: _blank
      title: Filament
      to: https://filamentphp.com/
      variant: subtle
      ---
      :::::
    ::::
  :::
::
