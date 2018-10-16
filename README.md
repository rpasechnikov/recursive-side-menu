# Recursive Side Menu
## Overview
Basic recursive (multi-layer) side menu

## TODO
* May need to provide app id for each link view model, links will be handled differently depending on source. Why?:
* Different apps will have different pages, an internal page for app1, will be external to app2
* Routing will eithr happen internally for internal link or externally (page refresh) for external links
* Individual apps will need to understand how to route to their pages, when those are provided through url params
* ...this should result in a flexible navigation system
