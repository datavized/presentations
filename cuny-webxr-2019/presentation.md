class: center, middle

# WebXR Storytelling with A-Frame
## Newmark Graduate School of Journalism at CUNY

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

# Hugh McGrory

.right-image[![Debra](../images/hugh.jpg)]

## CEO, Datavized

- [@mcgrory](https://twitter.com/mcgrory)
- creates tools, leads teams (TwoTone, Morph, Airfield, Geometric)
- Journalism360 Challenge grant winner
- previously ran film & animation studio in Ireland

---

# What is WebXR

- It’s a web page, it’s VR on the web
- ...and AR, coming soon...ish?

???
Debra

---

# Why XR on the web?

- Largest platform, everyone has access

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

---
# Tech Stack

- Existing web tech: HTML, CSS, JS

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

---
# Community

- Extension of web (HTTP, Javascript)
- [MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/API/WebVR_API)
- Stack Overflow
- GitHub issues
- Local meet-ups
- W3C

---

# WebVR & A-Frame Demos

- Take out your Cardboards!
- [Bear71](https://bear71vr.nfb.ca/)
- [DanceTonight](https://tonite.dance/)
- [Immersive2030](https://immersive2030.datavized.com/) 6th in Global WebXR Competition
- [There's Something in the Air](https://demo.datavized.com/somethingintheair/) UN Environment  
- [AP Nimrud's Riches](http://interactives.ap.org/2016/nimrud-destroyed/) 
- [How AP Made its firs WebVR Experience](https://medium.com/@njgriffiths/how-ap-made-its-first-webvr-experience-f3799d9f8c15)

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
[Live Demo](https://codesandbox.io/s/qv2rj02o6)
- Entity-Component Structure
- 3D Entities Using Primitives

???

Debra/Brian

See more resources on A-Frame website
- Primitives
- Animations
- 3D Models
- Interactions (with controllers and gaze)

---
# Code Workshop Set-Up

- [A-Frame Starter Template](https://codesandbox.io/s/qlwy02rxnq)
  - https://bit.ly/2YTq1F1
- [A-Frame Documentation](https://aframe.io/docs/0.9.0/introduction/)
  - https://aframe.io/docs/0.9.0/introduction/

???

Debra/Brian

---
# Code Workshop Complete Examples

- [Primitive Objects](https://codesandbox.io/s/qv2rj02o6)
- [GLTF Model](https://codesandbox.io/s/54ko33o26l)
- [360 Image](https://codesandbox.io/s/k5or3v0ll7)
- [360 Video](https://codesandbox.io/s/ymyro0kj69)
- [Animation](https://codesandbox.io/s/oj8w5x525)

???

Debra/Brian

---
# A-Frame Demos Using Glitch
To access all examples go to: [https://glitch.com/@debraeanderson](https://glitch.com/@debraeanderson)

- [Building a Basic Scence](https://glitch.com/~webvr-basicscene)
- [Custom Environment Componentl](https://glitch.com/~basic-scene-with-environment-component)
- [360 Image](https://glitch.com/~360image-demo)
- [360 Video](https://glitch.com/~360videosphere-demo), [360 Video - 2D Plane](https://glitch.com/~360video-demo)
- [Animation](https://glitch.com/~aframe-09)
- [Obj Model](https://glitch.com/~objmodel-demo), [Obj Model Animation](https://glitch.com/~animation-aframe)
- [Link Traversal](https://glitch.com/~goal5-genderequality)
- [Spatialized Audio](https://glitch.com/~mars-weather-report)
 

???
Debra/Brian

---

# A-Frame Demos Part 2  
Selection of Parsons WebXR Student Work / Rapid Prototyping

- [Primitives and Animation](https://glitch.com/~lava-page)
- [360 Image/Video](https://glitch.com/~donutprototype)
- [Particle Animation 1](https://tan-lizard.glitch.me), [2](https://glitch.com/~plastic-dietician)
- [Animation/Spatialized Sound 1](https://glitch.com/~b0x-sc3n3), [2](https://glitch.com/~week-3-vr-hw)
- [Link Traversal](https://glitch.com/~hw-march13)
- [Data Visualization 1](https://glitch.com/~great-walks), [2](https://glitch.com/~week8homework), [3](https://glitch.com/~donut-index), [4](https://glitch.com/~wvascene2), [5](https://glitch.com/~enviroment1), [6](https://glitch.com/~enviroment2) 
  

???

Debra

---

# Storytelling

- Scene by Scene
- Who Am I?
- Sound: Music, Narration, Effects
- Navigation: Gesture, Voice, Gaze

---
# Pro Tips

- Publishing Your A-Frame Project
- Building Components with - JavaScript
- 3D Model Making & Data Visualization Tools
- Augmented Reality (WebAR)
- Social VR

---
# Group Exercise

- A-Frame Brainstorm
- Project Ideas & Group Share

---

# What’s Next for WebXR and WebXR API?

- A-Frame Community / Slack / Meetup
- W3C Workshops
- Firefox Reality
- Supermedium 

---
# WebXR Use Cases

- Real Estate / Architecture (Matterport, IrisVR)
- Data Visualization (Geometric, Virtualitics)
- E-Commerce (Shopify)
- Social/Meetings (Mozilla Spokes, JanusVR, Altspace)
- Cinematic (Within)
- Health/Wellness (Composure)

???
Debra

---
# Advanced Concepts

- Scaling Performance

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

--
- Screen-first experiences

--
- Accessibility


---

class: center, middle

# Questions?

---
# Thank you

## Follow
- [@datavized](http://twitter.com/datavized)

## Work
- [datavized.com](http://datavized.com)

## Code
- [github.com/datavized](http://github.com/datavized)
