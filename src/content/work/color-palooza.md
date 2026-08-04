---
title: "Color Palooza"
pubDate: 2026-04-15
description: "Exploring color as a construct"
url: "https://color-palooza.pages.dev/"
mux_id: "nKKn01W9ZpvRYN2yNu1lAi4XCFL501Ze5VVc8VifR9Hto"
tags: ["experiments"]
---

After finishing Recurse, my friend, [Iris](https://www.iris-fernandez.com?utm_source=brianagude.com), and I set out to pair on a project together, and landed on the shared interest of _color_.

We met once or twice a week over a few months, with a goal to deepen our understanding of historical color spaces and the multiple ways in which color itself can be interpreted.

We were both drawn to the work of [David Aerne](https://elastiq.ch?utm_source=brianagude.com), whose library [rybitten](https://github.com/meodai/RYBitten/tree/main?tab=readme-ov-file) encodes several historical RYB color spaces as 3D lookup tables. Different color theorists and painting traditions have defined the relationships between Red, Yellow, and Blue differently over time, and each version produces a distinct color cube when mapped against RGB.

For the purpose of this project, a color space is a system someone defines for organizing and relating colors to each other. RYB is one such system, but it isn't a single fixed standard. Different color theorists and painting traditions have each defined their own version of it, at different points in history, shaped by things like the range of pigments actually available to them at the time, or their own personal sense of how colors relate. Because each version comes from a different set of decisions, they don't agree with each other. One tradition's yellow might sit closer to orange. In another, that same yellow could land somewhere else entirely.

In React Three Fiber, we built a 3D grid where every point in the cube is colored according to the selected color space and mode. The three viewing modes let you compare RYB in its native space, RYB's eight landmark colors plotted inside the RGB cube (which makes the distortion visible), and standard RGB for reference.

When you switch models, the underlying color value doesn't actually change. What changes is which historical model is doing the translating. The same starting point gets pushed to a different spot in the cube depending on whose RYB you're using, which is exactly the distortion the RYB-in-RGB mode is built to show.

While Color Palooza is just a rough exploration, we’ve evolved our idea into something much bigger called [Paint Palooza](/work/paint-palooza), which aims to hone in more on the understanding of the connection and disconnection of color through actual mini projects visualized on a retro Windows desktop format.

Overall, this project has broadened my understanding of color outside the RGB spectrum, how color functions inside mathematical equations, and the difference between how artists have historically experienced and communicated color versus how computers visualize it.
