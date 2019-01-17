class: center, middle

# Getting Started with WebXR
## MIT Reality Virtually 2019

---

# Who are we?

## Datavized

- Immersive and Audio Web
- Brooklyn, NYC
- [datavized.com](https://datavized.com)
- [@datavized](https://twitter.com/datavized)

---

# Debra Anderson

.right-image[![Debra](../images/debra.png)]

## CSO, Datavized

- [@debraeanderson](https://twitter.com/debraeanderson)
- loves web, data and xr
- educator, Parsons School of Design
- meet up organizer (Immersive NYC, A-Frame, WebXR NYC)

---

# Brian Chirls

.right-image[![Brian](../images/brian.jpg)]

## CTO, Datavized

- [@bchirls](https://twitter.com/bchirls)
- Does code (web), media
- Likes (some) humans, chocolate, kung fu

---

# What is WebXR

- It’s a web page, it’s VR on the web

--
- ...and AR, coming soon
--
...ish?

??? Debra

---

# Why XR on the web?

- Largest platform, everyone has access

--
- Built on the open web, open ecosystem

--
- Accessibility: Easy to share in a URL

--
- No walled garden, anyone can host and publish content

--
- Existing community and web dev knowledge

--
- Failure resistance

???
Debra

Open web:
- No reliance on one company
- Support from all major browser vendors (except apple/safari, but cardboard polyfill)
- App stores delete apps for censorship or anti-competitive reasons
- Note that Unity just killed support for Improbable due to license disagreement

Failure resistance:
- support for all major VR headsets (except playstation)
- fallback to screen

---
# Tech Stack

- Existing web tech: HTML, CSS, JS

--
- WebGL for 3D graphics

--
- Web Audio API

--
- WebVR/WebXR API

--
- Polyfills

--
- JS libraries

???
Brian
- basic web tech:
  - basics of delivery
  - experience on-boarding
  - fallback
- WebGL
  - Comparable performance to native mobile VR (Gear VR, Oculus Go, Daydream, etc)
  - Performance scales up with GPU/CPU hardware
- Web Audio API
  - very powerful, basically anything you want to do with audio
  - built-in 3D spatialization
- Polyfill:
  - WebVR/WebXR Polyfill for Cardboard support
  - Marker-based AR, hardware support in progress

---
# Community

- Extension of web (HTTP, Javascript)
- [MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/API/WebVR_API)
- Stack Overflow
- GitHub issues
- Local meet-ups
- W3C

---
# Practical Tools

- 3D Assets: Blender, Poly, Sketchfab
- Libraries: three.js, A-Frame
- Hosting: GitHub, Glitch, etc.

---
# Getting started with A-Frame

- [A-Frame](https://aframe.io/) - an open-source Framework for building VR on the web
- HTML and Entity-Component System
- Easy to learn, documentation, useful components (environment, glTF, sound, link traversal)
- A-Frame Inspector, A-Frame Repository

---
# Glitch Set-Up

https://glitch.com/~aframe

??? Brian

---
# Coding with A-Frame

```HTML
<a-scene>
	<a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
	<a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
	<a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
	<a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
	<a-sky color="#ECECEC"></a-sky>
</a-scene>
```
[Live Demo](https://aframe.glitch.me/)

??? Brian

See more resources on A-Frame website
- Primitives
- Animations
- 3D Models
- Interactions (with controllers and gaze)

---
# WebXR Use Cases

- Real Estate / Architecture
- Data Visualization
- E-Commerce (Shopify)
- Social/Meetings (Mozilla Spokes, JanusVR, Altspace)
- Cinematic (Within)
- Health/Wellness (Composure,Prelude)

??? Debra

---
# Advanced Concepts

- Scaling Performance

--
- Screen-first experiences

--
- Accessibility


???
Brian
- Performance:
  - Mobile to Desktop
  - Frame rates
  - Network limitations
- Screen-first
  - headsets fail
  - sometimes not socially appropriate
- Accessibility
  - Enhance with Audio
  - readable text
  - different controller configurations
  - minimal physical movement

